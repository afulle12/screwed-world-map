import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  X, 
  Globe, 
  Shuffle, 
  ListFilter, 
  Info, 
  SlidersHorizontal,
  ChevronDown,
  Sparkles,
  MapPin
} from 'lucide-react';
import { tierConfig, searchCountries } from '../data/countriesData';

export default function Header({
  allCountries,
  selectedTier,
  onSelectTier,
  searchQuery,
  onSearchChange,
  onSelectCountry,
  onJumpToRegion,
  onOpenDirectory,
  onOpenAbout,
  onRandomCountry
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const searchInputRef = useRef(null);
  const searchDropdownRef = useRef(null);
  const regionDropdownRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchDropdownRef.current && !searchDropdownRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (regionDropdownRef.current && !regionDropdownRef.current.contains(event.target)) {
        setIsRegionOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Pre-indexed high-speed search for dropdown (0.04ms)
  const filteredSearchCountries = searchQuery.trim() === '' 
    ? [] 
    : searchCountries(searchQuery).slice(0, 8);

  const tiers = [
    { id: 'all', label: 'All', count: allCountries.length, color: '#64748b' },
    { id: 'green', label: 'Green', icon: '🟢', count: tierConfig.green.count, color: tierConfig.green.color },
    { id: 'yellow', label: 'Yellow', icon: '🟡', count: tierConfig.yellow.count, color: tierConfig.yellow.color },
    { id: 'orange', label: 'Orange', icon: '🟠', count: tierConfig.orange.count, color: tierConfig.orange.color },
    { id: 'red', label: 'Red', icon: '🔴', count: tierConfig.red.count, color: tierConfig.red.color },
    { id: 'black', label: 'Black', icon: '⚫', count: tierConfig.black.count, color: '#ef4444' }
  ];

  const regions = [
    { label: 'World View', value: 'world' },
    { label: 'Europe', value: 'Europe' },
    { label: 'Asia', value: 'Asia' },
    { label: 'Americas', value: 'Americas' },
    { label: 'Africa', value: 'Africa' },
    { label: 'Middle East', value: 'Middle East' },
    { label: 'Oceania', value: 'Oceania' },
    { label: 'Small Islands & Microstates', value: 'microstates' }
  ];

  return (
    <header className="relative z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-2.5 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-2.5">
        
        {/* Top row: Branding, Search, and Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 via-amber-500 to-emerald-500 p-[1.5px] shadow-lg">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Globe className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-extrabold tracking-tight text-white flex items-center gap-1.5">
                  Every Country, Ranked By How Screwed It Is
                </h1>
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  OFFLINE 197/197
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Based on OBF's 10-year geopolitical outlook • Hover for headwinds & tailwinds
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md" ref={searchDropdownRef}>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                placeholder="Search 197 countries, tags (e.g. debt, lithium, aging, oil, chips)..."
                className="w-full pl-9 pr-8 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/80 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    onSearchChange('');
                    searchInputRef.current?.focus();
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Live Autocomplete Results */}
            {isSearchOpen && filteredSearchCountries.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-slate-900/98 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50">
                <div className="p-1.5 max-h-80 overflow-y-auto divide-y divide-slate-800/60">
                  {filteredSearchCountries.map((c) => (
                    <button
                      key={c.rank}
                      onClick={() => {
                        onSelectCountry(c);
                        setIsSearchOpen(false);
                      }}
                      className="w-full text-left p-2 rounded-lg hover:bg-slate-800/80 flex items-center justify-between transition group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-bold text-slate-400 group-hover:text-amber-300 w-8">
                          #{c.rank}
                        </span>
                        <div>
                          <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                            <span>{c.name}</span>
                            <span className="text-[10px] text-slate-400 font-normal">({c.region})</span>
                          </div>
                          <div className="text-[10px] text-slate-400 line-clamp-1">
                            {c.summary}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border ${
                          c.tier === 'green' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                          c.tier === 'yellow' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                          c.tier === 'orange' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' :
                          c.tier === 'red' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                          'bg-zinc-800 text-rose-400 border-rose-500/30'
                        }`}>
                          {tierConfig[c.tier].label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-1.5">
            {/* Region Dropdown */}
            <div className="relative" ref={regionDropdownRef}>
              <button
                onClick={() => setIsRegionOpen(!isRegionOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs text-slate-200 transition"
              >
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Jump to Region</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {isRegionOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-1 z-50">
                  {regions.map((r) => (
                    <button
                      key={r.value}
                      onClick={() => {
                        onJumpToRegion(r.value);
                        setIsRegionOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-white transition"
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Random Country */}
            <button
              onClick={onRandomCountry}
              title="Pick a random country to explore"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs text-slate-200 transition"
            >
              <Shuffle className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Random</span>
            </button>

            {/* Directory Button */}
            <button
              onClick={onOpenDirectory}
              title="View all 197 countries in table list"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs text-slate-200 transition"
            >
              <ListFilter className="w-3.5 h-3.5 text-emerald-400" />
              <span>Directory</span>
            </button>

            {/* About Modal */}
            <button
              onClick={onOpenAbout}
              title="Tier explanations & methodology"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white transition"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom row: Screwed-o-Meter bar & Tier Filter Pills */}
        <div className="flex items-center justify-between gap-3 pt-1 border-t border-slate-800/60 overflow-hidden">
          
          {/* Tier Pills - horizontally swipeable on mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-0.5 scrollbar-none">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline shrink-0">
              Filter:
            </span>
            {tiers.map((t) => {
              const active = selectedTier === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => onSelectTier(t.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition border touch-manipulation ${
                    active
                      ? 'bg-slate-200 text-slate-950 border-white shadow-md'
                      : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border-slate-800'
                  }`}
                >
                  {t.icon && <span>{t.icon}</span>}
                  <span>{t.label}</span>
                  <span className={`text-[10px] font-mono px-1 py-0.2 rounded ${
                    active ? 'bg-slate-400/40 text-slate-900' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {t.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Distribution Meter - visible on desktop/tablets */}
          <div className="hidden lg:flex items-center gap-2 max-w-xs xl:max-w-sm w-full shrink-0">
            <div className="flex flex-col w-full">
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-0.5">
                <span>Green 11%</span>
                <span>Yellow 50%</span>
                <span>Orange 16%</span>
                <span>Red 15%</span>
                <span>Black 8%</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden flex bg-slate-900 border border-slate-800">
                <div 
                  onClick={() => onSelectTier('green')}
                  title="Green: 22 countries (11.2%)" 
                  className="bg-emerald-500 hover:brightness-125 transition cursor-pointer"
                  style={{ width: `${(22/197)*100}%` }}
                />
                <div 
                  onClick={() => onSelectTier('yellow')}
                  title="Yellow: 99 countries (50.3%)" 
                  className="bg-amber-400 hover:brightness-125 transition cursor-pointer"
                  style={{ width: `${(99/197)*100}%` }}
                />
                <div 
                  onClick={() => onSelectTier('orange')}
                  title="Orange: 32 countries (16.2%)" 
                  className="bg-orange-500 hover:brightness-125 transition cursor-pointer"
                  style={{ width: `${(32/197)*100}%` }}
                />
                <div 
                  onClick={() => onSelectTier('red')}
                  title="Red: 29 countries (14.7%)" 
                  className="bg-rose-500 hover:brightness-125 transition cursor-pointer"
                  style={{ width: `${(29/197)*100}%` }}
                />
                <div 
                  onClick={() => onSelectTier('black')}
                  title="Black: 15 countries (7.6%)" 
                  className="bg-zinc-800 hover:brightness-150 transition cursor-pointer border-l border-rose-500/50"
                  style={{ width: `${(15/197)*100}%` }}
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
}
