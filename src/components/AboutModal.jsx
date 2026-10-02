import React from 'react';
import { X, ExternalLink, ShieldCheck, Globe2, BookOpen } from 'lucide-react';
import { tierConfig } from '../data/countriesData';

export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        role="dialog"
        aria-modal="true"
        aria-label="About the Geopolitical Outlook Map"
        className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 overflow-y-auto max-h-[90vh] text-slate-200 space-y-5"
      >
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-black text-white">
              About the 10-Year Geopolitical Outlook
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Methodology and definitions behind "Every Country, Ranked By How Screwed It Is"
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Origin & Concept */}
        <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
          <p>
            This interactive map is an offline visualization of the global analysis published by <strong>Oliver Franke (OBF)</strong>. It assesses the relative vulnerability and resilience of all <strong>197 nations</strong> over a 10-year horizon, balancing their economic tailwinds (sovereign savings, resource endowments, industrial capacity) against their headwinds (debt distress, climate shocks, demographic aging, and conflict).
          </p>
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
            <div>
              <div className="font-semibold text-white text-xs">Original Video: OBF (Oliver Franke)</div>
              <div className="text-[11px] text-slate-400">179k+ views • Sep 30, 2026</div>
            </div>
            <a
              href="https://www.youtube.com/watch?v=de1wR-L-Sp0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-medium text-xs transition"
            >
              <span>Watch Video</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Tier Methodology */}
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
            The Five Tiers Defined
          </h3>
          <div className="space-y-2">
            {Object.entries(tierConfig).map(([tierKey, config]) => (
              <div
                key={tierKey}
                className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-3"
              >
                <span className="text-lg mt-0.5">{config.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-xs text-white capitalize">
                      {tierKey} Tier: {config.label}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {config.count} countries ({Math.round((config.count / 197) * 100)}%)
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    {config.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why 197 Countries? */}
        <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs text-slate-300 space-y-2">
          <div className="font-bold text-white flex items-center gap-1.5">
            <Globe2 className="w-4 h-4 text-cyan-400" />
            <span>Why 197 Countries?</span>
          </div>
          <p className="leading-relaxed text-[11px]">
            The United Nations has 193 member states. Most standard international listings add its two permanent observer states: <strong>Palestine</strong> and the <strong>Holy See (Vatican City)</strong>, totaling 195. This ranking also includes <strong>Kosovo</strong> and <strong>Taiwan</strong>. While neither is currently a UN member, both operate their own independent governments, economies, borders, and vital industries (e.g. Taiwan's TSMC semiconductor monopoly), and omitting them would leave substantial holes in the global geopolitical map.
          </p>
        </div>

        {/* 100% Offline Promise */}
        <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs text-emerald-300 space-y-1.5">
          <div className="font-bold text-emerald-200 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Offline & Private (Zero API Keys)</span>
          </div>
          <p className="text-[11px] leading-relaxed text-emerald-300/90">
            This application is built with bundled Natural Earth 50m vector geometries and D3-geo projections. It makes zero remote tile requests to Google Maps or Mapbox, requires no API keys or external server dependencies, and will operate smoothly in isolated environments or completely disconnected from the internet.
          </p>
        </div>

        {/* Close Button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
