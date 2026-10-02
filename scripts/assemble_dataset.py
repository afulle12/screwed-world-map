# scripts/assemble_dataset.py
import json
import sys
import os

from data.green import green_countries
from data.yellow_part1 import yellow_part1
from data.yellow_part2 import yellow_part2
from data.orange import orange_countries
from data.red import red_countries
from data.black import black_countries

all_countries = (
    green_countries +
    yellow_part1 +
    yellow_part2 +
    orange_countries +
    red_countries +
    black_countries
)

print(f"Total countries loaded: {len(all_countries)}")

# Match against topojson
with open("src/data/world-50m.json") as f:
    topo = json.load(f)

geoms = topo["objects"]["countries"]["geometries"]
topo_names = set(g.get("properties", {}).get("name") for g in geoms if g.get("properties", {}).get("name"))

# Correction mapping for exact topojson names
corrections = {
    "Brunei": "Brunei",
    "South Korea": "South Korea",
    "North Korea": "North Korea",
    "Tanzania": "Tanzania",
    "Cabo Verde": "Cabo Verde",
    "Laos": "Laos",
    "Russia": "Russia",
    "Syria": "Syria",
    "United States": "United States of America",
    "DR Congo": "Dem. Rep. Congo",
    "Democratic Republic of the Congo": "Dem. Rep. Congo",
    "Republic of the Congo": "Congo",
    "Central African Republic": "Central African Rep.",
    "Bosnia & Herzegovina": "Bosnia and Herz.",
    "Equatorial Guinea": "Eq. Guinea",
    "Eswatini": "eSwatini",
    "South Sudan": "S. Sudan",
    "St Kitts & Nevis": "St. Kitts and Nevis",
    "Saint Kitts and Nevis": "St. Kitts and Nevis",
    "St Vincent & the Grenadines": "St. Vin. and Gren.",
    "Saint Vincent and the Grenadines": "St. Vin. and Gren.",
    "Antigua & Barbuda": "Antigua and Barb.",
    "São Tomé & Príncipe": "São Tomé and Principe",
    "Dominican Republic": "Dominican Rep.",
    "North Macedonia": "Macedonia",
    "Marshall Islands": "Marshall Is.",
    "Solomon Islands": "Solomon Is.",
    "Vatican City": "Vatican"
}

for c in all_countries:
    if c["name"] in corrections:
        c["topoName"] = corrections[c["name"]]
    if "youtubeUrl" not in c:
        c["youtubeUrl"] = f"https://www.youtube.com/watch?v=de1wR-L-Sp0&t={c['videoSeconds']}s"
    tags_str = " ".join(c.get("tags", []))
    c["_searchStr"] = f"{c['name']} {c['region']} {c['summary']} {tags_str}".lower()

matched = 0
unmatched = []
for c in all_countries:
    if c["topoName"] in topo_names:
        matched += 1
    else:
        unmatched.append((c["rank"], c["name"], c["topoName"], c["isMicrostate"]))

print(f"Matched directly with 50m TopoJSON polygons: {matched} / 197")
if unmatched:
    print(f"Unmatched geometries ({len(unmatched)}):", unmatched)

# Write to JSON
with open("src/data/countriesData.json", "w", encoding="utf-8") as f:
    json.dump(all_countries, f, indent=2, ensure_ascii=False)
print("Wrote src/data/countriesData.json")

tier_config = {
    "green": {
        "color": "#10b981",
        "label": "Probably Fine",
        "description": "The country has problems, but it can afford to deal with them.",
        "icon": "🟢",
        "count": len(green_countries)
    },
    "yellow": {
        "color": "#eab308",
        "label": "In Trouble, But With a Believable Way Out",
        "description": "Has significant headwinds, but realistic resources, policies, or industries to navigate them.",
        "icon": "🟡",
        "count": len(yellow_part1) + len(yellow_part2)
    },
    "orange": {
        "color": "#f97316",
        "label": "One Bad Year Away",
        "description": "A drought, an oil price spike, or a debt payment it can't make could tip it over.",
        "icon": "🟠",
        "count": len(orange_countries)
    },
    "red": {
        "color": "#ef4444",
        "label": "Screwed",
        "description": "Problems are growing much faster than the government or economy can fix them.",
        "icon": "🔴",
        "count": len(red_countries)
    },
    "black": {
        "color": "#18181b",
        "accentColor": "#ef4444",
        "label": "The Crisis Has Already Arrived",
        "description": "Active war, state collapse, or humanitarian catastrophe is currently occurring.",
        "icon": "⚫",
        "count": len(black_countries)
    }
}

js_content = f"""// src/data/countriesData.js
// Complete dataset of all 197 countries ranked by how screwed they are

export const tierConfig = {json.dumps(tier_config, indent=2, ensure_ascii=False)};

export const countriesData = {json.dumps(all_countries, indent=2, ensure_ascii=False)};

// Quick lookup map by country name or topoName
export const countryLookup = new Map();
countriesData.forEach(c => {{
  countryLookup.set(c.name.toLowerCase(), c);
  if (c.topoName) countryLookup.set(c.topoName.toLowerCase(), c);
  if (c.id) countryLookup.set(c.id.toLowerCase(), c);
}});

// High-performance search function using pre-indexed string
export function searchCountries(query) {{
  if (!query || !query.trim()) return countriesData;
  const q = query.toLowerCase().trim();
  return countriesData.filter(c => c._searchStr && c._searchStr.includes(q));
}}

export default countriesData;
"""

with open("src/data/countriesData.js", "w", encoding="utf-8") as f:
    f.write(js_content)
print("Wrote src/data/countriesData.js")
