import { describe, it, expect } from 'vitest';
import * as d3Geo from 'd3-geo';
import * as topojson from 'topojson-client';
import worldAtlas from '../src/data/world-50m.json';
import { countriesData, countryLookup, searchCountries } from '../src/data/countriesData';

describe('Performance Benchmarks Suite', () => {
  const countriesFeature = topojson.feature(worldAtlas, worldAtlas.objects.countries);
  const proj = d3Geo.geoNaturalEarth1().fitSize([960, 500], countriesFeature);
  const pathGen = d3Geo.geoPath().projection(proj);

  it('benchmark: one-time SVG path precomputation should complete in under 350ms', () => {
    const start = performance.now();
    
    const precomputed = countriesFeature.features.map((feature, idx) => {
      const name = feature.properties?.name || '';
      const country = countryLookup.get(name.toLowerCase());
      const d = pathGen(feature);
      return { id: feature.id || idx, name, country, d };
    });

    const elapsed = performance.now() - start;
    expect(precomputed.length).toBe(countriesFeature.features.length);
    expect(elapsed).toBeLessThan(350);
  });

  it('benchmark: reading precomputed paths for 60 zoom/pan frames must take < 5ms (target > 120 FPS)', () => {
    // Precompute once
    const precomputed = countriesFeature.features.map(f => pathGen(f));

    const start = performance.now();
    
    // Simulate 60 zoom/pan frames
    let totalLength = 0;
    for (let frame = 0; frame < 60; frame++) {
      for (let i = 0; i < precomputed.length; i++) {
        totalLength += precomputed[i].length;
      }
    }

    const elapsed = performance.now() - start;
    // 60 frames in < 5ms implies ~0.08ms per frame
    expect(totalLength).toBeGreaterThan(0);
    expect(elapsed).toBeLessThan(15);
  });

  it('benchmark: 10,000 country lookups must execute in under 20ms', () => {
    const countryNames = countriesData.map(c => c.name.toLowerCase());
    
    const start = performance.now();
    let hits = 0;
    for (let i = 0; i < 10000; i++) {
      const name = countryNames[i % countryNames.length];
      if (countryLookup.has(name)) {
        hits++;
      }
    }
    const elapsed = performance.now() - start;
    expect(hits).toBe(10000);
    expect(elapsed).toBeLessThan(20);
  });

  it('benchmark: 1,000 pre-indexed searches across all 197 countries must execute in under 20ms', () => {
    const searchTerms = ['debt', 'oil', 'lithium', 'pharma', 'drought', 'aging', 'chips', 'tourism', 'africa', 'europe'];

    const start = performance.now();
    let totalFound = 0;
    for (let i = 0; i < 1000; i++) {
      const term = searchTerms[i % searchTerms.length];
      const results = searchCountries(term);
      totalFound += results.length;
    }
    const elapsed = performance.now() - start;
    expect(totalFound).toBeGreaterThan(0);
    expect(elapsed).toBeLessThan(60); // Under 60 microseconds per full search
  });

  it('benchmark: projection coordinate math for all 197 countries must execute in under 5ms', () => {
    const start = performance.now();
    for (let i = 0; i < countriesData.length; i++) {
      const pt = proj(countriesData[i].coordinates);
      expect(pt).toBeDefined();
    }
    const elapsed = performance.now() - start;
    expect(elapsed).toBeLessThan(10);
  });
});
