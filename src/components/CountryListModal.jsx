import React, { useState, useMemo } from 'react';
import { 
  X, 
  Search, 
  ArrowUpDown, 
  ExternalLink, 
  MapPin, 
  AlertTriangle, 
  CheckCircle2,
  Crosshair
} from 'lucide-react';
import { tierConfig } from '../data/countriesData';

export default function CountryListModal({ 
  isOpen, 
  onClose, 
  countries, 
  onSelectCountry 
}) {
  if (!isOpen) return null;

  const [search, setSearch] = useState('');
  const [tierFilter, setTierFilter] = useState('all');
  const [sortBy, setSortBy] = useState('rank_asc'); // rank_asc, rank_desc, name_asc, tier_asc

  const filteredCountries = useMemo(() => {
    const q = search.toLowerCase().trim();
    return countries.filter(c => {
      const matchesSearch = q === '' || (c._searchStr ? c._searchStr.includes(q) : c.name.toLowerCase().includes(q));
      const matchesTier = tierFilter === 'all' || c.tier === tierFilter;
      return matchesSearch && matchesTier;
    }).sort((a, b) => {
      if (sortBy === 'rank_asc') return a.rank - b.rank;
      if (sortBy === 'rank_desc') return b.rank - a.rank;
      if (sortBy === 'name_asc') return a.name.localeCompare(b.name);
      return a.rank - b.rank;
    });
  }, [countries, search, tierFilter, sortBy]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        role="dialog"
        aria-modal="true"
        aria-label="All 197 Countries Directory"
        className="w-full max-w-5xl h-[85vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
      >
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>All 197 Countries Directory</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {filteredCountries.length} results
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Browse, filter, and compare the complete 10-year rankings from least to most screwed.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="px-6 py-3 border-b border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by country, keyword, or tag..."
              className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Tier select */}
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {['all', 'green', 'yellow', 'orange', 'red', 'black'].map((t) => (
              <button
                key={t}
                onClick={() => setTierFilter(t)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium capitalize transition border ${
                  tierFilter === t
                    ? 'bg-slate-200 text-slate-950 border-white'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border-slate-800'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <ArrowUpDown className="w-3.5 h-3.5" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort directory by"
              className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-200 focus:outline-none"
            >
              <option value="rank_asc">Rank (Least Screwed #1 first)</option>
              <option value="rank_desc">Rank (Most Screwed #197 first)</option>
              <option value="name_asc">Name (A to Z)</option>
            </select>
          </div>
        </div>

        {/* Countries Table View */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-800/80">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-950/95 backdrop-blur z-10 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-2.5 px-4 w-16">Rank</th>
                <th className="py-2.5 px-4 w-48">Country</th>
                <th className="py-2.5 px-4 w-32">Tier</th>
                <th className="py-2.5 px-4">Headwinds vs Tailwinds</th>
                <th className="py-2.5 px-4 w-28 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {filteredCountries.map((c) => {
                const tier = tierConfig[c.tier];
                return (
                  <tr 
                    key={c.rank}
                    onClick={() => {
                      onSelectCountry(c);
                      onClose();
                    }}
                    className="hover:bg-slate-800/60 transition cursor-pointer group"
                  >
                    <td className="py-3 px-4 font-mono font-bold text-slate-400 group-hover:text-amber-400">
                      #{c.rank}
                    </td>

                    <td className="py-3 px-4">
                      <div className="font-bold text-white group-hover:text-amber-300">
                        {c.name}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {c.region}
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${
                        c.tier === 'green' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' :
                        c.tier === 'yellow' ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' :
                        c.tier === 'orange' ? 'bg-orange-500/20 text-orange-300 border-orange-500/40' :
                        c.tier === 'red' ? 'bg-red-500/20 text-red-300 border-red-500/40' :
                        'bg-zinc-800 text-rose-400 border-rose-500/40'
                      }`}>
                        <span>{tier.icon}</span>
                        <span>{c.tier}</span>
                      </span>
                    </td>

                    <td className="py-3 px-4">
                      <div className="space-y-1">
                        {c.headwinds?.[0] && (
                          <div className="text-[11px] text-rose-300 flex items-start gap-1 line-clamp-1">
                            <span className="text-rose-500 font-bold shrink-0">▼</span>
                            <span>{c.headwinds[0]}</span>
                          </div>
                        )}
                        {c.tailwinds?.[0] && (
                          <div className="text-[11px] text-emerald-300 flex items-start gap-1 line-clamp-1">
                            <span className="text-emerald-500 font-bold shrink-0">▲</span>
                            <span>{c.tailwinds[0]}</span>
                          </div>
                        )}
                      </div>
                    </td>

                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectCountry(c);
                          onClose();
                        }}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs inline-flex items-center gap-1 transition"
                      >
                        <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Inspect</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
