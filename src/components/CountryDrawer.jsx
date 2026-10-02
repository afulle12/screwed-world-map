import React, { useEffect, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Layers, 
  Crosshair,
  Share2,
  Copy,
  Check
} from 'lucide-react';
import { tierConfig } from '../data/countriesData';

export default function CountryDrawer({ 
  country, 
  onClose, 
  onSelectCountry, 
  allCountries,
  onFocusCountry 
}) {
  if (!country) return null;

  const [copied, setCopied] = useState(false);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') navigateRank(-1);
      if (e.key === 'ArrowRight') navigateRank(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [country]);

  const tier = tierConfig[country.tier] || {
    color: '#94a3b8',
    label: country.tier,
    description: '',
    icon: '🏳️'
  };

  const currentIndex = allCountries.findIndex((c) => c.rank === country.rank);
  const prevCountry = currentIndex > 0 ? allCountries[currentIndex - 1] : null;
  const nextCountry = currentIndex < allCountries.length - 1 ? allCountries[currentIndex + 1] : null;

  const navigateRank = (direction) => {
    if (direction === -1 && prevCountry) onSelectCountry(prevCountry);
    if (direction === 1 && nextCountry) onSelectCountry(nextCountry);
  };

  const getTierGradient = () => {
    switch (country.tier) {
      case 'green':
        return 'from-emerald-500/20 via-slate-900/60 to-slate-900';
      case 'yellow':
        return 'from-amber-500/20 via-slate-900/60 to-slate-900';
      case 'orange':
        return 'from-orange-500/20 via-slate-900/60 to-slate-900';
      case 'red':
        return 'from-rose-500/20 via-slate-900/60 to-slate-900';
      case 'black':
        return 'from-zinc-800 via-rose-950/30 to-slate-900';
      default:
        return 'from-slate-800 to-slate-900';
    }
  };

  const getTierTextColor = () => {
    switch (country.tier) {
      case 'green': return 'text-emerald-400';
      case 'yellow': return 'text-amber-400';
      case 'orange': return 'text-orange-400';
      case 'red': return 'text-rose-400';
      case 'black': return 'text-red-500';
      default: return 'text-slate-300';
    }
  };

  return (
    <aside 
      aria-label="Country Dossier"
      className="fixed inset-x-0 bottom-0 md:inset-y-0 md:right-0 md:left-auto z-50 w-full md:max-w-lg max-h-[85vh] md:max-h-full bg-slate-900/98 backdrop-blur-xl border-t md:border-t-0 md:border-l border-slate-700/80 shadow-2xl flex flex-col rounded-t-2xl md:rounded-none transform transition-transform duration-300 ease-in-out text-slate-100"
    >
      {/* Mobile bottom sheet drag indicator */}
      <div className="w-10 h-1 bg-slate-700 rounded-full mx-auto mt-2 mb-1 md:hidden" />

      {/* Top Bar with Navigation & Close */}
      <div className="flex items-center justify-between px-4 md:px-5 py-2.5 md:py-3.5 border-b border-slate-800 bg-slate-950/70">
        <div className="flex items-center gap-1.5 md:gap-2">
          <button
            onClick={() => navigateRank(-1)}
            disabled={!prevCountry}
            title={prevCountry ? `Previous: #${prevCountry.rank} ${prevCountry.name}` : 'At #1'}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none transition text-slate-300 touch-manipulation"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono font-semibold text-slate-400">
            #{country.rank} of {allCountries.length}
          </span>
          <button
            onClick={() => navigateRank(1)}
            disabled={!nextCountry}
            title={nextCountry ? `Next: #${nextCountry.rank} ${nextCountry.name}` : 'At last'}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none transition text-slate-300 touch-manipulation"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onFocusCountry(country)}
            title="Focus and zoom map to country"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
            <span>Focus Map</span>
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Hero Header */}
        <div className={`p-5 rounded-2xl bg-gradient-to-b ${getTierGradient()} border border-slate-700/60 shadow-lg`}>
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs px-2 py-0.5 rounded-md bg-slate-900/80 text-white font-bold border border-slate-700">
                  RANK #{country.rank}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {country.region}
                </span>
              </div>
              <h2 className="text-2xl font-black tracking-tight text-white">
                {country.name}
              </h2>
            </div>

            <div className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 shadow-sm ${
              country.tier === 'green' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50' :
              country.tier === 'yellow' ? 'bg-amber-500/20 text-amber-300 border-amber-500/50' :
              country.tier === 'orange' ? 'bg-orange-500/20 text-orange-300 border-orange-500/50' :
              country.tier === 'red' ? 'bg-red-500/20 text-red-300 border-red-500/50' :
              'bg-zinc-900 text-rose-400 border-rose-500/50 ring-1 ring-rose-500/30'
            }`}>
              <span>{tier.icon}</span>
              <span>{tier.label}</span>
            </div>
          </div>

          <p className="text-sm text-slate-200 leading-relaxed font-normal mt-3">
            {country.summary}
          </p>

          {/* Rank Meter */}
          <div className="mt-4 pt-3 border-t border-slate-800/80">
            <div className="flex justify-between text-[11px] text-slate-400 font-mono mb-1">
              <span>Least Screwed (#1)</span>
              <span className={`font-bold ${getTierTextColor()}`}>Position: {Math.round((country.rank / 197) * 100)}%</span>
              <span>Most Screwed (#197)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden relative">
              <div 
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(country.rank / 197) * 100}%`,
                  backgroundColor: tier.color
                }}
              />
            </div>
          </div>
        </div>

        {/* Video Link Action */}
        <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-800/40 text-red-200 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-red-600/80 flex items-center justify-center text-white font-bold text-xs shadow">
                ▶
              </div>
              <div>
                <div className="text-xs font-semibold text-white">OBF Source Video Segment</div>
                <div className="text-[11px] text-red-300/80 font-mono">
                  Timestamp: {country.timestamp} ({country.videoSeconds}s)
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                if (country.youtubeUrl) {
                  navigator.clipboard?.writeText(country.youtubeUrl);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }
              }}
              title="Copy YouTube URL with timestamp"
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs flex items-center gap-1.5 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-red-950/60 text-[11px]">
            <span className="text-slate-400">External link:</span>
            <a
              href={country.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 font-medium underline flex items-center gap-1"
            >
              <span>Open in YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Headwinds & Tailwinds Breakdown */}
        <div className="space-y-4">
          {/* Headwinds */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-rose-950/80">
            <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider mb-2.5">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>Headwinds (The Challenges)</span>
            </div>
            <ul className="space-y-2">
              {country.headwinds?.map((hw, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>{hw}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tailwinds */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-emerald-950/80">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Tailwinds (The Advantages)</span>
            </div>
            <ul className="space-y-2">
              {country.tailwinds?.map((tw, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>{tw}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verbatim Transcript Excerpt */}
        {country.transcriptExcerpt && (
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 relative">
            <Quote className="w-6 h-6 text-slate-600 absolute top-3 right-3 opacity-40" />
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>Transcript Analysis</span>
              <span className="text-[10px] font-normal text-slate-400">(Oliver Franke, OBF)</span>
            </div>
            <p className="text-xs text-slate-300 italic leading-relaxed">
              "{country.transcriptExcerpt}"
            </p>
          </div>
        )}

        {/* Tags */}
        {country.tags && country.tags.length > 0 && (
          <div>
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Key Themes</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {country.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs bg-slate-800 text-slate-300 border border-slate-700/80 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Microstate info if applicable */}
        {country.isMicrostate && (
          <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-800/40 text-[11px] text-blue-300 flex items-start gap-2">
            <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span>
              <strong>Small Territory / Island:</strong> Easily accessible via the Search bar, Region jumper, or by zooming into its coordinates on the map.
            </span>
          </div>
        )}
      </div>

      {/* Footer Details */}
      <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span>Coords: {country.coordinates[1].toFixed(2)}°N, {country.coordinates[0].toFixed(2)}°E</span>
        <span>ID: {country.id}</span>
      </div>
    </aside>
  );
}
