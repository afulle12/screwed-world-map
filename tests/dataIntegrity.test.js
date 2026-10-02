import { describe, it, expect } from 'vitest';
import { countriesData, tierConfig, countryLookup } from '../src/data/countriesData';
import worldAtlas from '../src/data/world-50m.json';
import * as topojson from 'topojson-client';

describe('Data Integrity & Completeness Suite', () => {
  it('should have exactly 197 ranked countries', () => {
    expect(countriesData).toBeDefined();
    expect(countriesData.length).toBe(197);
  });

  it('should have continuous unique ranks from 1 to 197', () => {
    const ranks = countriesData.map(c => c.rank);
    const uniqueRanks = new Set(ranks);
    expect(uniqueRanks.size).toBe(197);
    expect(Math.min(...ranks)).toBe(1);
    expect(Math.max(...ranks)).toBe(197);

    // Verify no gaps
    const sorted = [...ranks].sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
      expect(sorted[i]).toBe(i + 1);
    }
  });

  it('should partition countries into exact video tier counts', () => {
    const tierCounts = countriesData.reduce((acc, c) => {
      acc[c.tier] = (acc[c.tier] || 0) + 1;
      return acc;
    }, {});

    expect(tierCounts.green).toBe(22);
    expect(tierCounts.yellow).toBe(99);
    expect(tierCounts.orange).toBe(32);
    expect(tierCounts.red).toBe(29);
    expect(tierCounts.black).toBe(15);
    expect(22 + 99 + 32 + 29 + 15).toBe(197);
  });

  it('should have valid tierConfig matching dataset counts', () => {
    expect(tierConfig.green.count).toBe(22);
    expect(tierConfig.yellow.count).toBe(99);
    expect(tierConfig.orange.count).toBe(32);
    expect(tierConfig.red.count).toBe(29);
    expect(tierConfig.black.count).toBe(15);
  });

  it('every country should have valid non-empty fields and metadata', () => {
    countriesData.forEach((c) => {
      expect(c.name).toBeTruthy();
      expect(typeof c.name).toBe('string');
      expect(['green', 'yellow', 'orange', 'red', 'black']).toContain(c.tier);
      expect(c.tierLabel).toBeTruthy();
      expect(c.region).toBeTruthy();
      expect(c.summary).toBeTruthy();
      expect(c.summary.length).toBeGreaterThan(10);
      expect(c.headwinds).toBeInstanceOf(Array);
      expect(c.headwinds.length).toBeGreaterThanOrEqual(1);
      expect(c.tailwinds).toBeInstanceOf(Array);
      expect(c.tailwinds.length).toBeGreaterThanOrEqual(1);
      expect(c.transcriptExcerpt).toBeTruthy();
      expect(c.timestamp).toMatch(/^\d+:\d{2}$/);
      expect(c.videoSeconds).toBeGreaterThanOrEqual(0);
      expect(c.youtubeUrl).toContain('youtube.com/watch');
      expect(c.youtubeUrl).toContain(`t=${c.videoSeconds}s`);
      expect(c.tags).toBeInstanceOf(Array);
      expect(c.tags.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('every country should have valid coordinates within globe bounds', () => {
    countriesData.forEach((c) => {
      expect(c.coordinates).toBeInstanceOf(Array);
      expect(c.coordinates.length).toBe(2);
      const [lon, lat] = c.coordinates;
      expect(typeof lon).toBe('number');
      expect(typeof lat).toBe('number');
      expect(lon).toBeGreaterThanOrEqual(-180);
      expect(lon).toBeLessThanOrEqual(180);
      expect(lat).toBeGreaterThanOrEqual(-90);
      expect(lat).toBeLessThanOrEqual(90);
    });
  });

  it('countryLookup should successfully resolve all 197 country names', () => {
    countriesData.forEach((c) => {
      const foundByName = countryLookup.get(c.name.toLowerCase());
      expect(foundByName).toBeDefined();
      expect(foundByName.rank).toBe(c.rank);

      if (c.topoName) {
        const foundByTopo = countryLookup.get(c.topoName.toLowerCase());
        expect(foundByTopo).toBeDefined();
        expect(foundByTopo.rank).toBe(c.rank);
      }
    });
  });

  it('should match 196 countries to 50m TopoJSON geometries (Tuvalu is microstate)', () => {
    const countriesFeature = topojson.feature(worldAtlas, worldAtlas.objects.countries);
    const topoNames = new Set(
      countriesFeature.features
        .map(f => f.properties?.name)
        .filter(Boolean)
    );

    let matched = 0;
    const unmatched = [];

    countriesData.forEach((c) => {
      if (topoNames.has(c.topoName) || topoNames.has(c.name)) {
        matched++;
      } else {
        unmatched.push(c.name);
      }
    });

    expect(matched).toBe(196);
    expect(unmatched).toEqual(['Tuvalu']);
  });
});
