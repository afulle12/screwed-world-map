# scripts/data_generator.py
# Full dataset builder for all 197 countries

import json

# Topojson name mapping dictionary
topo_map = {
    "USA": "United States of America",
    "United States": "United States of America",
    "UK": "United Kingdom",
    "UAE": "United Arab Emirates",
    "DR Congo": "Dem. Rep. Congo",
    "Republic of the Congo": "Congo",
    "Bosnia & Herzegovina": "Bosnia and Herz.",
    "North Korea": "Dem. Rep. Korea",
    "South Korea": "Republic of Korea",
    "Tanzania": "United Republic of Tanzania",
    "Côte d'Ivoire": "Côte d'Ivoire",
    "Dominican Republic": "Dominican Rep.",
    "Central African Republic": "Central African Rep.",
    "Equatorial Guinea": "Eq. Guinea",
    "Eswatini": "eSwatini",
    "South Sudan": "S. Sudan",
    "Laos": "Lao PDR",
    "Brunei": "Brunei Darussalam",
    "Bahamas": "Bahamas",
    "Gambia": "Gambia",
    "St Lucia": "Saint Lucia",
    "St Kitts & Nevis": "St. Kitts and Nevis",
    "St Vincent & the Grenadines": "St. Vin. and Gren.",
    "Antigua & Barbuda": "Antigua and Barb.",
    "Trinidad & Tobago": "Trinidad and Tobago",
    "Vatican City": "Vatican",
    "São Tomé & Príncipe": "São Tomé and Principe",
    "Cabo Verde": "Cape Verde",
    "Syria": "Syrian Arab Republic",
    "Iran": "Iran",
    "Vietnam": "Vietnam",
    "Moldova": "Moldova",
    "Russia": "Russian Federation",
    "North Macedonia": "Macedonia",
    "Marshall Islands": "Marshall Is.",
    "Solomon Islands": "Solomon Is.",
    "Timor-Leste": "Timor-Leste"
}

def get_topo(name):
    return topo_map.get(name, name)
