import React from 'react';
import { AlertTriangle, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { tierConfig } from '../data/countriesData';

export default function CountryTooltip({ country, position }) {
  if (!country || !position) return null;

  const tier = tierConfig[country.tier] || {
    color: '#94a3b8',
    label: country.tier,
    icon: '🏳️'
  };

  // Adjust tooltip positioning to stay within viewport
  const { x, y } = position;
  const tooltipWidth = 340;
  const tooltipHeight = 320;
  
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

  let left = x + 16;
  let top = y + 16;

  if (left + tooltipWidth > viewportWidth - 20) {
    left = x - tooltipWidth - 16;
  }
  if (top + tooltipHeight > viewportHeight - 20) {
    top = Math.max(20, y - tooltipHeight - 16);
  }

  // Tier color styling
  const getBadgeStyle = () => {
    switch (country.tier) {
      case 'green':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case 'yellow':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'orange':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/40';
      case 'red':
        return 'bg-red-500/20 text-red-400 border-red-500/40';
      case 'black':
        return 'bg-zinc-800 text-rose-400 border-rose-500/40 ring-1 ring-rose-500/20';
      default:
        return 'bg-slate-700 text-slate-300 border-slate-600';
    }
  };

  return (
    <div
      className="fixed z-50 pointer-events-none transition-transform duration-75 ease-out"
      style={{
        left: `${left}px`,
        top: `${top}px`,
        width: `${tooltipWidth}px`
      }}
    >
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/80 shadow-2xl rounded-xl p-4 text-slate-200">
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                #{country.rank}
              </span>
              <h3 className="text-base font-bold text-white tracking-tight">
                {country.name}
              </h3>
            </div>
            <span className="text-[11px] text-slate-400">{country.region}</span>
          </div>

          <div className={`px-2 py-0.5 rounded-full text-[11px] font-semibold border flex items-center gap-1 ${getBadgeStyle()}`}>
            <span>{tier.icon}</span>
            <span>{tier.label}</span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-xs text-slate-300 mb-3 leading-relaxed line-clamp-2">
          {country.summary}
        </p>

        {/* Headwinds */}
        {country.headwinds && country.headwinds.length > 0 && (
          <div className="mb-2.5">
            <div className="flex items-center gap-1 text-[11px] font-semibold text-rose-400 uppercase tracking-wider mb-1">
              <AlertTriangle className="w-3 h-3 text-rose-400" />
              <span>Key Headwinds</span>
            </div>
            <ul className="space-y-1">
              {country.headwinds.slice(0, 2).map((item, idx) => (
                <li key={idx} className="text-[11px] text-slate-300 flex items-start gap-1.5 leading-snug">
                  <span className="text-rose-500 font-bold mt-0.5">•</span>
                  <span className="line-clamp-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tailwinds */}
        {country.tailwinds && country.tailwinds.length > 0 && (
          <div className="mb-2.5">
            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Key Tailwinds</span>
            </div>
            <ul className="space-y-1">
              {country.tailwinds.slice(0, 2).map((item, idx) => (
                <li key={idx} className="text-[11px] text-slate-300 flex items-start gap-1.5 leading-snug">
                  <span className="text-emerald-500 font-bold mt-0.5">•</span>
                  <span className="line-clamp-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer info */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800">
          <span className="flex items-center gap-1 text-slate-400 font-mono">
            <Clock className="w-3 h-3 text-slate-400" />
            {country.timestamp} in video
          </span>
          <span className="text-slate-400 flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-amber-400" />
            Click for full dossier
          </span>
        </div>
      </div>
    </div>
  );
}
