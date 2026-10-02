import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const projectRoot = path.resolve(__dirname, '..');

describe('Security & Air-Gapped Offline Audit Suite', () => {
  const indexHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf-8');

  it('index.html must have strict Content Security Policy (CSP) blocking external network calls', () => {
    expect(indexHtml).toContain('http-equiv="Content-Security-Policy"');
    
    // Extract CSP content
    const cspMatch = indexHtml.match(/http-equiv="Content-Security-Policy"\s+content="([^"]+)"/i);
    expect(cspMatch).not.toBeNull();
    const csp = cspMatch[1];

    // Must restrict default-src to self
    expect(csp).toContain("default-src 'self'");

    // Must restrict connect-src to local only (self and localhost/127.0.0.1 for dev websocket)
    expect(csp).toMatch(/connect-src 'self'( ws:\/\/(localhost|127\.0\.0\.1):\*)*/);

    // Must not allow blanket domain wildcards in connect-src or default-src
    expect(csp).not.toMatch(/connect-src [^;]*(\s\*(?!\:)|https?:\/\/|\*\.)/);
    expect(csp).not.toContain('connect-src *');
    expect(csp).not.toContain('connect-src https:');
    expect(csp).not.toContain('connect-src http:');

    // Must disallow dangerous plugins and frames
    expect(csp).toContain("object-src 'none'");
    expect(csp).toContain("frame-src 'none'");
  });

  it('index.html must not contain external scripts, fonts, or CDNs', () => {
    // No Google Fonts
    expect(indexHtml).not.toContain('fonts.googleapis.com');
    expect(indexHtml).not.toContain('fonts.gstatic.com');

    // No external script tags
    const scriptTags = indexHtml.match(/<script[^>]+src=["'](https?:)?\/\/[^"']+["']/gi) || [];
    expect(scriptTags.length).toBe(0);

    // No external stylesheet tags
    const styleTags = indexHtml.match(/<link[^>]+rel=["']stylesheet["'][^>]+href=["'](https?:)?\/\/[^"']+["']/gi) || [];
    expect(styleTags.length).toBe(0);

    // No preconnect to remote domains
    const preconnectTags = indexHtml.match(/<link[^>]+rel=["']preconnect["'][^>]+href=["'](https?:)?\/\/[^"']+["']/gi) || [];
    expect(preconnectTags.length).toBe(0);
  });

  it('no telemetry, analytics, or trackers exist in source code', () => {
    const srcDir = path.join(projectRoot, 'src');
    const readAllFiles = (dir) => {
      let results = [];
      const list = fs.readdirSync(dir);
      list.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
          results = results.concat(readAllFiles(fullPath));
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.html')) {
          results.push(fullPath);
        }
      });
      return results;
    };

    const files = readAllFiles(srcDir);
    const trackingSignatures = [
      'google-analytics',
      'googletagmanager',
      'gtag(',
      'mixpanel',
      'segment.com',
      'sentry.io',
      'hotjar',
      'clarity.ms',
      'amplitude'
    ];

    files.forEach((file) => {
      const content = fs.readFileSync(file, 'utf-8').toLowerCase();
      trackingSignatures.forEach((signature) => {
        expect(content).not.toContain(signature);
      });
    });
  });

  it('source code does not initiate runtime network requests (fetch, XHR, sendBeacon, WebSocket)', () => {
    const srcDir = path.join(projectRoot, 'src');
    const readAllFiles = (dir) => {
      let results = [];
      const list = fs.readdirSync(dir);
      list.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
          results = results.concat(readAllFiles(fullPath));
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
          results.push(fullPath);
        }
      });
      return results;
    };

    const files = readAllFiles(srcDir);
    files.forEach((file) => {
      const content = fs.readFileSync(file, 'utf-8');
      
      // Check for fetch invocations
      expect(content).not.toMatch(/\bfetch\s*\(/);
      
      // Check for XMLHttpRequest
      expect(content).not.toMatch(/\bnew\s+XMLHttpRequest\s*\(/);
      
      // Check for navigator.sendBeacon
      expect(content).not.toMatch(/\bsendBeacon\s*\(/);
      
      // Check for EventSource
      expect(content).not.toMatch(/\bnew\s+EventSource\s*\(/);

      // Check for WebSocket creation
      expect(content).not.toMatch(/\bnew\s+WebSocket\s*\(/);
    });
  });

  it('all map vector geometries and metadata are bundled locally (offline-ready)', () => {
    const topojsonPath = path.join(projectRoot, 'src/data/world-50m.json');
    expect(fs.existsSync(topojsonPath)).toBe(true);
    const topoStats = fs.statSync(topojsonPath);
    expect(topoStats.size).toBeGreaterThan(500000); // 50m vector atlas is ~1MB

    const dataPath = path.join(projectRoot, 'src/data/countriesData.js');
    expect(fs.existsSync(dataPath)).toBe(true);
    const dataContent = fs.readFileSync(dataPath, 'utf-8');
    expect(dataContent).toContain('export const countriesData');
  });

  it('all external anchor links have rel="noopener noreferrer" to prevent context/referrer leakage', () => {
    const srcDir = path.join(projectRoot, 'src');
    const readAllFiles = (dir) => {
      let results = [];
      const list = fs.readdirSync(dir);
      list.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
          results = results.concat(readAllFiles(fullPath));
        } else if (file.endsWith('.jsx') || file.endsWith('.html')) {
          results.push(fullPath);
        }
      });
      return results;
    };

    const files = readAllFiles(srcDir);
    files.forEach((file) => {
      const content = fs.readFileSync(file, 'utf-8');
      const targetBlankMatches = content.match(/<a[^>]+target=["']_blank["'][^>]*>/gi) || [];
      targetBlankMatches.forEach((anchor) => {
        expect(anchor).toContain('rel="noopener noreferrer"');
      });
    });
  });
});
