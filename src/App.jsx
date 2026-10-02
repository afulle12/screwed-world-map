import React, { useState, useCallback } from 'react';
import { countriesData, tierConfig } from './data/countriesData';
import WorldMap from './components/WorldMap';
import Header from './components/Header';
import CountryTooltip from './components/CountryTooltip';
import CountryDrawer from './components/CountryDrawer';
import CountryListModal from './components/CountryListModal';
import AboutModal from './components/AboutModal';

// Region anchor points for camera navigation
const REGION_ANCHORS = {
  world: { coordinates: [0, 20], isMicrostate: false },
  Europe: { coordinates: [15, 52], isMicrostate: false },
  Asia: { coordinates: [95, 30], isMicrostate: false },
  Americas: { coordinates: [-80, 15], isMicrostate: false },
  Africa: { coordinates: [20, 2], isMicrostate: false },
  'Middle East': { coordinates: [45, 26], isMicrostate: false },
  Oceania: { coordinates: [145, -20], isMicrostate: false },
  microstates: { coordinates: [103.8, 1.35], isMicrostate: true } // Center on Singapore / Pacific
};

export default function App() {
  const [selectedTier, setSelectedTier] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [hoveredState, setHoveredState] = useState({ country: null, position: null });
  const [focusedCountry, setFocusedCountry] = useState(null);
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Handle country hover
  const handleHoverCountry = useCallback((country, position) => {
    setHoveredState({ country, position });
  }, []);

  // Handle country selection
  const handleSelectCountry = useCallback((country) => {
    setSelectedCountry(country);
    setFocusedCountry(country);
  }, []);

  // Focus map camera on country without necessarily opening drawer
  const handleFocusCountry = useCallback((country) => {
    setFocusedCountry({ ...country, _ts: Date.now() }); // Force effect re-trigger
  }, []);

  // Region jump handler
  const handleJumpToRegion = useCallback((regionKey) => {
    const anchor = REGION_ANCHORS[regionKey];
    if (anchor) {
      setFocusedCountry({
        name: regionKey,
        coordinates: anchor.coordinates,
        isMicrostate: anchor.isMicrostate,
        _ts: Date.now()
      });
    }
  }, []);

  // Random country selector
  const handleRandomCountry = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * countriesData.length);
    const country = countriesData[randomIndex];
    setSelectedCountry(country);
    setFocusedCountry({ ...country, _ts: Date.now() });
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col bg-[#090d16] text-slate-100 font-sans">
      
      {/* Top Header / Search / Filter Navigation */}
      <Header
        allCountries={countriesData}
        selectedTier={selectedTier}
        onSelectTier={setSelectedTier}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelectCountry={handleSelectCountry}
        onJumpToRegion={handleJumpToRegion}
        onOpenDirectory={() => setIsDirectoryOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onRandomCountry={handleRandomCountry}
      />

      {/* Main Interactive Vector Map Canvas */}
      <main className="relative flex-1 w-full h-full overflow-hidden">
        <WorldMap
          allCountries={countriesData}
          selectedTier={selectedTier}
          searchQuery={searchQuery}
          selectedCountry={selectedCountry}
          onSelectCountry={handleSelectCountry}
          onHoverCountry={handleHoverCountry}
          focusedCountry={focusedCountry}
        />

        {/* Floating Hover Tooltip */}
        <CountryTooltip
          country={hoveredState.country}
          position={hoveredState.position}
        />

        {/* Slide-out Country Dossier Drawer */}
        {selectedCountry && (
          <CountryDrawer
            country={selectedCountry}
            onClose={() => setSelectedCountry(null)}
            onSelectCountry={handleSelectCountry}
            allCountries={countriesData}
            onFocusCountry={handleFocusCountry}
          />
        )}
      </main>

      {/* All 197 Countries Directory Modal */}
      <CountryListModal
        isOpen={isDirectoryOpen}
        onClose={() => setIsDirectoryOpen(false)}
        countries={countriesData}
        onSelectCountry={handleSelectCountry}
      />

      {/* About & Methodology Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

    </div>
  );
}
