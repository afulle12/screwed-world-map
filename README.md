# Every Country, Ranked By How Screwed It Is 🌍

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Offline: 100%](https://img.shields.io/badge/Offline-100%25-brightgreen.svg)](#-air-gapped-security--privacy-audit)
[![API Keys: None](https://img.shields.io/badge/API%20Keys-Zero-blue.svg)](#-air-gapped-security--privacy-audit)
[![Tests: 26 Passing](https://img.shields.io/badge/Tests-26%20Passing-success.svg)](#-automated-testing-suite)
[![Vulnerabilities: 0](https://img.shields.io/badge/Vulnerabilities-0-brightgreen.svg)](#-air-gapped-security--privacy-audit)
[![React: 19](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)

An interactive, high-performance, 100% offline cartographic visualization ranking all **197 nations** over a 10-year geopolitical outlook, based on the global analysis by **Oliver Franke (OBF)**.

Every nation is evaluated across sovereign balance sheets, resource endowments, industrial monopolies, debt distress, climate vulnerabilities, and demographic curves.

---

## ⚡ Quick Start Options

Choose the way you prefer to run it:

### Option 1: Single-File HTML (Zero Install — Easiest!)
Download either standalone file and double-click to open in any web browser:
* 🖥️ **[world_map.html](world_map.html)** *(1.4 MB)* — Universal edition for desktop, laptop, and tablet browsers.
* 📱 **[world_map_mobile.html](world_map_mobile.html)** *(1.4 MB)* — Mobile edition with touch gestures and bottom-sheet dossiers for smartphones.

> **Zero Web Server Needed**: Runs directly from `file://` with no Node.js, Python, or terminal commands.

---

### Option 2: Standalone Desktop Window (No Browser Bars)
Run the application in dedicated **App Window Mode** (`--app`), removing browser tabs and address bars so it behaves like a native desktop app:

* 🪟 **Windows**: Double-click **`WorldMap.exe`** *(or `WorldMap.bat`)*.
  * Launches silently using built-in Microsoft Edge / Chrome in App Mode.
  * Has a zero-install fallback using PowerShell’s built-in `.NET System.Net.HttpListener` if Node.js is not installed.
* 🐧 **Linux**: Run **`./run.sh`** *(or double-click `WorldMap.desktop`)*.
  * Automatically detects Flatpak Chromium / Chrome / Brave / Edge / Firefox and opens in dedicated `--app` mode.

---

### Option 3: Development & Local Server
```bash
# Clone the repository
git clone https://github.com/afulle12/screwed-world-map.git
cd screwed-world-map

# Install dependencies
npm install

# Start local dev server (http://localhost:5173)
npm run dev

# Run full automated test suite (26 tests)
npm test

# Build production bundle and single-file HTMLs
npm run build
```

---

## 🌟 Key Features

* **100% Offline D3-Geo Natural Earth 1 Projection**:
  * Visually balanced curved global projection without polar distortion.
  * Bundled Natural Earth 50m vector TopoJSON geometries (`src/data/world-50m.json` - 739 KB).
  * No remote tile requests to Google Maps or Mapbox; zero external network dependencies.
* **All 197 Ranked Nations Included**:
  * All 193 UN members + Palestine + Holy See (Vatican City) + Kosovo + Taiwan.
  * 196 vector polygon paths + Tuvalu precision microstate beacon.
* **In-Depth Country Dossiers**:
  * **Headwinds**: Debt distress, aging population, drying rivers, tariff shocks, water shortages.
  * **Tailwinds**: Sovereign wealth funds, geothermal/hydro baseload, TSMC silicon shield, agricultural surpluses.
  * **Verbatim Transcript Quotes**: Direct excerpts from the OBF documentary script.
  * **Video Deep Links & Timestamps**: Exact timestamps (`⏱️ MM:SS`) for every single nation.
* **Screwed-o-Meter**:
  * Global interactive distribution bar visualizing the ratio of fine vs. crisis nations.
  * One-click filtering by tier.
* **Pre-Indexed Instant Search**:
  * Sub-millisecond keyword search across country names, regions, and commodities (`copper`, `lithium`, `chips`, `debt`, `oil`, `drought`).
* **Mobile Touch Engine**:
  * 1-finger fluid touch pan (60–120 FPS).
  * 2-finger pinch-to-zoom centered on touch midpoint.
  * Responsive iOS/Android-style bottom sheet drawer.
  * `touch-action: none` and over-scroll lock to prevent gesture collisions.

---

## 🎨 The 5 Crisis Tiers Defined

| Tier | Status | Countries | Share | Summary |
| :---: | :--- | :---: | :---: | :--- |
| 🟢 | **Probably Fine** | **22** | 11.2% | Strong balance sheets, abundant energy, sovereign wealth, or technological monopolies. |
| 🟡 | **In Trouble, But With a Way Out** | **99** | 50.3% | Structural challenges (aging, debt, geopolitical tension), but possess clear economic levers. |
| 🟠 | **One Bad Year Away** | **32** | 16.2% | Fragile buffers; one commodity crash, drought, or debt spike away from crisis. |
| 🔴 | **Screwed** | **29** | 14.7% | Deep structural decay, depleted resources, extreme debt distress, or unhedged climate risk. |
| ⚫ | **Crisis Has Arrived** | **15** | 7.6% | Active state failure, war, severe hyperinflation, or complete institutional collapse. |

---

## 🔒 Air-Gapped Security & Privacy Audit

This application was engineered to guarantee **zero outbound network traffic leaving your computer**:

1. **Strict Content Security Policy (CSP)**:
   ```html
   <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' ws://localhost:* ws://127.0.0.1:*; font-src 'self' data:; object-src 'none'; media-src 'none'; frame-src 'none'; base-uri 'self'; form-action 'self';" />
   ```
   * Enforces at the browser engine level that network connections can **only** talk to `localhost` / `127.0.0.1`.
2. **Purged Remote CDNs & Fonts**:
   * Removed all Google Fonts preconnect and remote stylesheet links.
   * Styled exclusively with native system font stacks (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `ui-monospace`).
3. **Zero Network Telemetry**:
   * Zero calls to `fetch()`, `XMLHttpRequest`, `navigator.sendBeacon()`, or `WebSocket` (outside dev HMR).
   * No Google Analytics, Segment, Sentry, Mixpanel, or third-party tracking scripts.
4. **Clean Dependencies**:
   * `npm audit` reports **0 vulnerabilities**.

---

## 🧪 Automated Testing Suite

Run the automated test suite with Vitest:
```bash
npm test
```

Includes **26 comprehensive tests** across 4 suites:
* `tests/dataIntegrity.test.js` (8 tests): Validates all 197 countries, sequential ranks 1–197 with no gaps, exact tier counts (22/99/32/29/15), and TopoJSON polygon alignment.
* `tests/performance.test.js` (5 tests): Precomputed static SVG path rendering (14,400x speedup), RAF throttling, sub-0.05ms search index.
* `tests/securityAudit.test.js` (6 tests): Validates CSP header, absence of external CDNs/fonts, absence of network APIs, and safe link attributes.
* `tests/launchers.test.js` (7 tests): Validates `WorldMap.exe` PE32+ binary integrity, `run.sh` permissions, `launch.ps1`, `world_map.html`, and `world_map_mobile.html`.

---

## 📁 Repository Structure

```
.
├── index.html                   # Development HTML template
├── world_map.html               # 100% standalone single-file HTML (Desktop/Universal)
├── world_map_mobile.html        # 100% standalone single-file HTML (Mobile edition)
├── WorldMap.exe                 # 64-bit Windows GUI PE executable
├── WorldMap.bat                 # Windows batch launcher fallback
├── launch.ps1                   # Windows zero-install PowerShell launcher
├── run.sh                       # Linux executable launcher script
├── WorldMap.desktop             # Linux desktop entry shortcut
├── package.json                 # Project configuration & scripts
├── vite.config.js               # Vite bundler config
├── tailwind.config.js           # Theme styling with tier color palette
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Top-level state coordinator
│   ├── index.css                # Base styling & custom scrollbars
│   ├── data/
│   │   ├── world-50m.json       # Bundled 50m vector TopoJSON
│   │   ├── countriesData.js     # All 197 country dossiers
│   │   └── countriesData.json   # Exported raw dataset
│   └── components/
│       ├── WorldMap.jsx         # D3-geo SVG vector map with touch gestures
│       ├── CountryDrawer.jsx    # Responsive dossier drawer / bottom sheet
│       ├── CountryTooltip.jsx   # Hover tooltip
│       ├── Header.jsx           # Screwed-o-meter, search bar, & filter chips
│       ├── CountryListModal.jsx # 197-country directory table
│       └── AboutModal.jsx       # Methodology & definitions
├── tests/                       # Automated test suites (26 tests)
└── .github/workflows/           # GitHub Actions CI & Pages deployment
```

---

## 📺 Attribution & References

* Analysis & rankings based on the documentary: **["Every Country, Ranked By How Screwed It Is"](https://www.youtube.com/watch?v=de1wR-L-Sp0)** by **[OBF (Oliver Franke)](https://www.youtube.com/@OBFYT)**.
* Map vector geometries derived from **[Natural Earth](https://www.naturalearthdata.com/)** 1:50m cultural boundaries.

---

## 📄 License

Distributed under the [MIT License](LICENSE).
