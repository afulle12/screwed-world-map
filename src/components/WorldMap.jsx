import React, { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import * as d3Geo from 'd3-geo';
import * as topojson from 'topojson-client';
import worldAtlas from '../data/world-50m.json';
import { tierConfig, countryLookup } from '../data/countriesData';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw
} from 'lucide-react';

const SVG_WIDTH = 960;
const SVG_HEIGHT = 500;

// Territory aliases to ensure 100% world visual completeness
const territoryAliases = {
  "greenland": "denmark",
  "puerto rico": "united states",
  "somaliland": "somalia",
  "new caledonia": "france",
  "french guiana": "france",
  "guam": "united states",
  "western sahara": "morocco"
};

export default function WorldMap({
  allCountries,
  selectedTier,
  searchQuery,
  selectedCountry,
  onSelectCountry,
  onHoverCountry,
  focusedCountry
}) {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  // Zoom and Pan state
  const [transform, setTransform] = useState({ x: 0, y: 0, k: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // RAF throttling for 60-120fps zoom & drag
  const animFrameRef = useRef(null);
  const pendingTransform = useRef(transform);

  const applyTransform = useCallback((newTransformOrUpdater) => {
    if (typeof newTransformOrUpdater === 'function') {
      pendingTransform.current = newTransformOrUpdater(pendingTransform.current);
    } else {
      pendingTransform.current = newTransformOrUpdater;
    }

    if (!animFrameRef.current) {
      animFrameRef.current = requestAnimationFrame(() => {
        setTransform(pendingTransform.current);
        animFrameRef.current = null;
      });
    }
  }, []);

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Generate GeoJSON and Projection ONCE
  const { geojson, graticule, pathGenerator, projection } = useMemo(() => {
    const countriesFeature = topojson.feature(worldAtlas, worldAtlas.objects.countries);
    const proj = d3Geo.geoNaturalEarth1()
      .fitSize([SVG_WIDTH, SVG_HEIGHT], countriesFeature);
    const path = d3Geo.geoPath().projection(proj);
    const grat = d3Geo.geoGraticule10();

    return {
      geojson: countriesFeature,
      graticule: path(grat),
      pathGenerator: path,
      projection: proj
    };
  }, []);

  // Helper to resolve a feature to country data
  const getCountryForFeature = useCallback((feature) => {
    const rawName = feature.properties?.name || '';
    const lower = rawName.toLowerCase();
    
    // Direct lookup
    if (countryLookup.has(lower)) {
      return countryLookup.get(lower);
    }
    
    // Territory alias lookup
    if (territoryAliases[lower] && countryLookup.has(territoryAliases[lower])) {
      return countryLookup.get(territoryAliases[lower]);
    }

    return null;
  }, []);

  // PRECOMPUTE ALL STATIC SVG PATHS ONCE - Never recalculate during zoom/pan!
  const precomputedFeatures = useMemo(() => {
    return geojson.features.map((feature, i) => {
      const country = getCountryForFeature(feature);
      const pathData = pathGenerator(feature);
      return {
        id: `${feature.id || 'feat'}-${i}`,
        country,
        pathData
      };
    }).filter(item => Boolean(item.pathData));
  }, [geojson, getCountryForFeature, pathGenerator]);

  // Tuvalu coordinate point (Tuvalu is the sole country in the 197 without an SVG polygon)
  const tuvalu = useMemo(() => {
    return allCountries.find(c => c.name === 'Tuvalu');
  }, [allCountries]);

  const tuvaluPoint = useMemo(() => {
    if (!tuvalu || !tuvalu.coordinates) return null;
    return projection(tuvalu.coordinates);
  }, [tuvalu, projection]);

  // Filter & match logic
  const isCountryVisible = useCallback((country) => {
    if (!country) return false;
    
    // Tier filter
    if (selectedTier !== 'all' && country.tier !== selectedTier) {
      return false;
    }

    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      return country._searchStr ? country._searchStr.includes(q) : country.name.toLowerCase().includes(q);
    }

    return true;
  }, [selectedTier, searchQuery]);

  // Color generator
  const getCountryFill = useCallback((country) => {
    if (!country) return '#1e293b'; // Unranked / neutral territory (slate-800)

    const matchesFilter = isCountryVisible(country);

    if (!matchesFilter) {
      return '#1e293b'; // Dimmed out
    }

    switch (country.tier) {
      case 'green':
        return '#10b981'; // emerald-500
      case 'yellow':
        return '#eab308'; // yellow-500
      case 'orange':
        return '#f97316'; // orange-500
      case 'red':
        return '#ef4444'; // red-500
      case 'black':
        return '#18181b'; // zinc-900 / dark charcoal
      default:
        return '#334155';
    }
  }, [isCountryVisible]);

  // Smooth focus on selected / requested country
  useEffect(() => {
    if (focusedCountry && focusedCountry.coordinates) {
      const [lon, lat] = focusedCountry.coordinates;
      const point = projection([lon, lat]);
      if (point) {
        const [targetX, targetY] = point;
        const targetScale = focusedCountry.isMicrostate ? 4.5 : 2.5;
        
        applyTransform({
          x: SVG_WIDTH / 2 - targetX * targetScale,
          y: SVG_HEIGHT / 2 - targetY * targetScale,
          k: targetScale
        });
      }
    }
  }, [focusedCountry, projection, applyTransform]);

  // Wheel zoom handler with RAF throttling
  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
    
    applyTransform((prev) => {
      const newK = Math.min(Math.max(prev.k * zoomFactor, 0.8), 12);
      
      const rect = svgRef.current ? svgRef.current.getBoundingClientRect() : { left: 0, top: 0 };
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const newX = mouseX - (mouseX - prev.x) * (newK / prev.k);
      const newY = mouseY - (mouseY - prev.y) * (newK / prev.k);

      return { x: newX, y: newY, k: newK };
    });
  };

  // Mouse pan handlers with RAF throttling
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only primary click
    setIsDragging(true);
    setDragStart({ x: e.clientX - pendingTransform.current.x, y: e.clientY - pendingTransform.current.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    applyTransform((prev) => ({
      ...prev,
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch gestures for mobile: 1-finger pan and 2-finger pinch-to-zoom
  const touchStateRef = useRef({
    mode: 'none', // 'pan' | 'pinch'
    startX: 0,
    startY: 0,
    initialDistance: 0,
    initialK: 1,
    midpoint: { x: 0, y: 0 },
    hasMoved: false
  });

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      const t = e.touches[0];
      touchStateRef.current = {
        mode: 'pan',
        startX: t.clientX - pendingTransform.current.x,
        startY: t.clientY - pendingTransform.current.y,
        initialDistance: 0,
        initialK: pendingTransform.current.k,
        midpoint: { x: t.clientX, y: t.clientY },
        hasMoved: false
      };
      setIsDragging(true);
    } else if (e.touches.length === 2) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      const midX = (t1.clientX + t2.clientX) / 2;
      const midY = (t1.clientY + t2.clientY) / 2;
      touchStateRef.current = {
        mode: 'pinch',
        startX: midX,
        startY: midY,
        initialDistance: dist,
        initialK: pendingTransform.current.k,
        midpoint: { x: midX, y: midY },
        hasMoved: true
      };
      setIsDragging(true);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && touchStateRef.current.mode === 'pan') {
      const t = e.touches[0];
      touchStateRef.current.hasMoved = true;
      applyTransform((prev) => ({
        ...prev,
        x: t.clientX - touchStateRef.current.startX,
        y: t.clientY - touchStateRef.current.startY
      }));
    } else if (e.touches.length === 2 && touchStateRef.current.mode === 'pinch') {
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      const rect = svgRef.current ? svgRef.current.getBoundingClientRect() : { left: 0, top: 0 };
      
      const midX = (t1.clientX + t2.clientX) / 2 - rect.left;
      const midY = (t1.clientY + t2.clientY) / 2 - rect.top;

      const scale = dist / Math.max(touchStateRef.current.initialDistance, 1);
      const newK = Math.min(Math.max(touchStateRef.current.initialK * scale, 0.8), 12);
      
      applyTransform((prev) => {
        const factor = newK / prev.k;
        const newX = midX - (midX - prev.x) * factor;
        const newY = midY - (midY - prev.y) * factor;
        return { x: newX, y: newY, k: newK };
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    touchStateRef.current.mode = 'none';
  };

  // Zoom control helpers
  const zoomIn = () => {
    applyTransform(prev => ({
      x: SVG_WIDTH / 2 - (SVG_WIDTH / 2 - prev.x) * 1.3,
      y: SVG_HEIGHT / 2 - (SVG_HEIGHT / 2 - prev.y) * 1.3,
      k: Math.min(prev.k * 1.3, 12)
    }));
  };

  const zoomOut = () => {
    applyTransform(prev => ({
      x: SVG_WIDTH / 2 - (SVG_WIDTH / 2 - prev.x) * 0.77,
      y: SVG_HEIGHT / 2 - (SVG_HEIGHT / 2 - prev.y) * 0.77,
      k: Math.max(prev.k * 0.77, 0.8)
    }));
  };

  const resetView = () => {
    applyTransform({ x: 0, y: 0, k: 1 });
  };

  return (
    <div 
      ref={containerRef}
      style={{ touchAction: 'none' }}
      className="relative w-full h-full overflow-hidden bg-[#090d16] select-none cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {/* Background Cartographic Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950/40 to-slate-950 opacity-60" />

      {/* Main SVG Vector Canvas */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        className="w-full h-full"
        style={{ touchAction: 'none' }}
      >
        <defs>
          <radialGradient id="oceanGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#090d16" stopOpacity="0.8" />
          </radialGradient>
        </defs>

        <rect width={SVG_WIDTH} height={SVG_HEIGHT} fill="url(#oceanGlow)" />

        {/* Dynamic Zoom & Pan Container promoted to GPU compositor layer */}
        <g 
          transform={`translate(${transform.x}, ${transform.y}) scale(${transform.k})`}
          style={{ willChange: 'transform' }}
        >
          
          {/* Subtle Graticule Grid */}
          <path
            d={graticule}
            fill="none"
            stroke="#1e293b"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="2,3"
            opacity="0.35"
            className="pointer-events-none"
          />

          {/* Precomputed Country Polygons - Zero runtime path calculations */}
          {precomputedFeatures.map(({ id, country, pathData }) => {
            const isSelected = selectedCountry && country && selectedCountry.rank === country.rank;
            const isVisible = isCountryVisible(country);
            const fill = getCountryFill(country);

            return (
              <path
                key={id}
                d={pathData}
                fill={fill}
                fillOpacity={isVisible ? (country?.tier === 'black' ? 0.95 : 0.85) : 0.25}
                stroke={
                  isSelected 
                    ? '#ffffff' 
                    : country?.tier === 'black' 
                      ? '#dc2626' 
                      : isVisible 
                        ? '#090d16' 
                        : '#1e293b'
                }
                strokeWidth={
                  isSelected 
                    ? 1.8 
                    : country?.tier === 'black' 
                      ? 0.8 
                      : 0.45
                }
                vectorEffect="non-scaling-stroke"
                className="country-path"
                onMouseEnter={(e) => {
                  if (country) {
                    onHoverCountry(country, { x: e.clientX, y: e.clientY });
                  }
                }}
                onMouseMove={(e) => {
                  if (country) {
                    onHoverCountry(country, { x: e.clientX, y: e.clientY });
                  }
                }}
                onMouseLeave={() => onHoverCountry(null, null)}
                onClick={(e) => {
                  e.stopPropagation();
                  if (country) {
                    onSelectCountry(country);
                  }
                }}
              />
            );
          })}

          {/* Tuvalu single crisp static point (only nation without SVG polygon) */}
          {tuvaluPoint && tuvalu && (
            <circle
              cx={tuvaluPoint[0]}
              cy={tuvaluPoint[1]}
              r="2.5"
              vectorEffect="non-scaling-stroke"
              fill={getCountryFill(tuvalu)}
              stroke={selectedCountry?.rank === tuvalu.rank ? '#ffffff' : '#090d16'}
              strokeWidth="0.8"
              opacity={isCountryVisible(tuvalu) ? 1 : 0.3}
              className="cursor-pointer hover:stroke-white transition"
              onMouseEnter={(e) => onHoverCountry(tuvalu, { x: e.clientX, y: e.clientY })}
              onMouseMove={(e) => onHoverCountry(tuvalu, { x: e.clientX, y: e.clientY })}
              onMouseLeave={() => onHoverCountry(null, null)}
              onClick={(e) => {
                e.stopPropagation();
                onSelectCountry(tuvalu);
              }}
            />
          )}

        </g>
      </svg>

      {/* Floating On-Screen Navigation & Map Controls */}
      <div className="absolute bottom-5 right-4 md:right-5 z-30 flex flex-col gap-1.5 bg-slate-900/90 backdrop-blur-md p-1.5 rounded-xl border border-slate-700/80 shadow-2xl">
        <button
          onClick={zoomIn}
          title="Zoom In (+)"
          className="p-2.5 md:p-2 rounded-lg hover:bg-slate-800 active:bg-slate-700 text-slate-300 hover:text-white transition touch-manipulation"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <button
          onClick={zoomOut}
          title="Zoom Out (-)"
          className="p-2.5 md:p-2 rounded-lg hover:bg-slate-800 active:bg-slate-700 text-slate-300 hover:text-white transition touch-manipulation"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        <div className="w-full h-px bg-slate-800 my-0.5" />

        <button
          onClick={resetView}
          title="Reset to Full World View"
          className="p-2.5 md:p-2 rounded-lg hover:bg-slate-800 active:bg-slate-700 text-slate-300 hover:text-white transition touch-manipulation"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Floating Map Legend */}
      <div className="absolute bottom-5 left-5 z-30 bg-slate-950/85 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-800 shadow-xl hidden md:flex items-center gap-4 text-xs font-medium text-slate-300">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm" />
          <span>Probably Fine</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" />
          <span>In Trouble (Way Out)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-orange-500 shadow-sm" />
          <span>1 Bad Year Away</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500 shadow-sm" />
          <span>Screwed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-zinc-900 border border-rose-500 shadow-sm" />
          <span>Crisis Arrived</span>
        </div>
      </div>

      {/* Zoom Level Indicator */}
      <div className="absolute top-3 right-5 z-20 text-[10px] font-mono text-slate-400 bg-slate-950/60 px-2 py-0.5 rounded border border-slate-800 pointer-events-none">
        Zoom: {Math.round(transform.k * 100)}%
      </div>
    </div>
  );
}
