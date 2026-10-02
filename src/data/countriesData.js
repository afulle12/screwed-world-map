// src/data/countriesData.js
// Complete dataset of all 197 countries ranked by how screwed they are

export const tierConfig = {
  "green": {
    "color": "#10b981",
    "label": "Probably Fine",
    "description": "The country has problems, but it can afford to deal with them.",
    "icon": "🟢",
    "count": 22
  },
  "yellow": {
    "color": "#eab308",
    "label": "In Trouble, But With a Believable Way Out",
    "description": "Has significant headwinds, but realistic resources, policies, or industries to navigate them.",
    "icon": "🟡",
    "count": 99
  },
  "orange": {
    "color": "#f97316",
    "label": "One Bad Year Away",
    "description": "A drought, an oil price spike, or a debt payment it can't make could tip it over.",
    "icon": "🟠",
    "count": 32
  },
  "red": {
    "color": "#ef4444",
    "label": "Screwed",
    "description": "Problems are growing much faster than the government or economy can fix them.",
    "icon": "🔴",
    "count": 29
  },
  "black": {
    "color": "#18181b",
    "accentColor": "#ef4444",
    "label": "The Crisis Has Already Arrived",
    "description": "Active war, state collapse, or humanitarian catastrophe is currently occurring.",
    "icon": "⚫",
    "count": 15
  }
};

export const countriesData = [
  {
    "rank": 1,
    "name": "Switzerland",
    "topoName": "Switzerland",
    "id": "CHE",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "0:32",
    "videoSeconds": 32,
    "region": "Europe",
    "coordinates": [
      8.2275,
      46.8182
    ],
    "isMicrostate": false,
    "summary": "Neutral, wealthy, running a federal budget surplus with high-value exporters and a state that can easily afford shock responses.",
    "headwinds": [
      "Trouble with global export demand would hurt high-cost manufacturing",
      "Very high cost of living puts pressure on non-specialized services",
      "Strong Swiss Franc creates persistent headwind for exporters"
    ],
    "tailwinds": [
      "Expecting a federal budget surplus with very low public debt",
      "Traditional diplomatic neutrality and supreme security",
      "High-value pharmaceutical, precision engineering, and private banking clusters",
      "Deep fiscal firepower to protect businesses in a downturn"
    ],
    "transcriptExcerpt": "Neutral, wealthy, and they are expecting a federal budget surplus this year, which I think mainly comes down to the $10 they charged me for a cup of coffee when I was there. It also has skilled workers, valuable companies, and a government that can afford to respond when things go wrong. Trouble with exports would hurt, but Switzerland has more ways to handle it than most. Green.",
    "tags": [
      "Budget Surplus",
      "Neutrality",
      "Pharma",
      "Banking"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=32s",
    "_searchStr": "switzerland europe neutral, wealthy, running a federal budget surplus with high-value exporters and a state that can easily afford shock responses. budget surplus neutrality pharma banking"
  },
  {
    "rank": 2,
    "name": "Singapore",
    "topoName": "Singapore",
    "id": "SGP",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "0:54",
    "videoSeconds": 54,
    "region": "Asia",
    "coordinates": [
      103.8198,
      1.3521
    ],
    "isMicrostate": true,
    "summary": "Engineered its way out of resource scarcity with rainwater capture, desalination, and water recycling, protected by massive sovereign reserves.",
    "headwinds": [
      "Extremely small physical footprint with zero native natural resources",
      "Historically imported water from Malaysia",
      "High exposure to global trade slowdowns and sea-level rise"
    ],
    "tailwinds": [
      "World leader in water security (NEWater recycling, desalination, deep tunnel sewer)",
      "Massive sovereign wealth funds (GIC & Temasek) with immense liquidity",
      "Premier global maritime trade, logistics, and financial hub",
      "Visionary, highly competent long-range governance"
    ],
    "transcriptExcerpt": "It's on very little land, has few natural resources, and it even imports water from Malaysia. But Singapore has spent decades making that fact less dangerous. It catches rain, removes salt from sea water, and recycles waste water into water clean enough to drink... substantial savings and a government capable of getting these things built.",
    "tags": [
      "Water Engineering",
      "Sovereign Wealth",
      "Trade Hub",
      "Finance"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=54s",
    "_searchStr": "singapore asia engineered its way out of resource scarcity with rainwater capture, desalination, and water recycling, protected by massive sovereign reserves. water engineering sovereign wealth trade hub finance"
  },
  {
    "rank": 3,
    "name": "Malaysia",
    "topoName": "Malaysia",
    "id": "MYS",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "1:27",
    "videoSeconds": 87,
    "region": "Asia",
    "coordinates": [
      101.9758,
      4.2105
    ],
    "isMicrostate": false,
    "summary": "Semiconductor manufacturing powerhouse with a well-diversified economy spanning electronics, palm oil, LNG, and strong domestic retail.",
    "headwinds": [
      "Fiscal deficits and ongoing public debt service",
      "Exposure to global chip inventory cycles and trade tariff friction",
      "Political coalition complexity"
    ],
    "tailwinds": [
      "Crucial linchpin in global semiconductor packaging, testing, and electronics supply chain",
      "Diversified export portfolio across electronics, commodities, and energy",
      "Resilient domestic consumer market cushioning export shocks",
      "Major beneficiary of 'China + 1' manufacturing relocation"
    ],
    "transcriptExcerpt": "Its neighbor Malaysia manufactures electronics, including important parts of the semiconductor supply chain. It also earns from other exports and businesses serving customers at home. Meaning if one industry struggles, the country has several to fall back on. Green as well.",
    "tags": [
      "Semiconductors",
      "Diversified Economy",
      "Manufacturing",
      "ASEAN"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=87s",
    "_searchStr": "malaysia asia semiconductor manufacturing powerhouse with a well-diversified economy spanning electronics, palm oil, lng, and strong domestic retail. semiconductors diversified economy manufacturing asean"
  },
  {
    "rank": 4,
    "name": "Netherlands",
    "topoName": "Netherlands",
    "id": "NLD",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "1:41",
    "videoSeconds": 101,
    "region": "Europe",
    "coordinates": [
      5.2913,
      52.1326
    ],
    "isMicrostate": false,
    "summary": "Mastered living below sea level through centuries of hydraulic engineering; home to ASML, the world's most critical chip machine monopoly.",
    "headwinds": [
      "26% of territory lies below sea level, demanding constant coastal upkeep",
      "Severe housing affordability crisis and congested urban infrastructure",
      "Nitrogen emission caps causing friction with powerful farming sector"
    ],
    "tailwinds": [
      "Centuries of unmatched flood defense and hydraulic engineering expertise",
      "Monopoly position in EUV semiconductor lithography via ASML",
      "Port of Rotterdam: Europe's primary logistics and industrial gateway",
      "High-tech agricultural export efficiency and sound public balance sheet"
    ],
    "transcriptExcerpt": "More expensive housing, crowded infrastructure, and about 26% of the country below sea level. Those would normally sound like red flags, but the Dutch have spent centuries treating them as fun engineering challenges that they of course have solved. They also have successful companies including ASML.",
    "tags": [
      "Water Engineering",
      "ASML",
      "Semiconductors",
      "Port Hub"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=101s",
    "_searchStr": "netherlands europe mastered living below sea level through centuries of hydraulic engineering; home to asml, the world's most critical chip machine monopoly. water engineering asml semiconductors port hub"
  },
  {
    "rank": 5,
    "name": "Denmark",
    "topoName": "Denmark",
    "id": "DNK",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "2:09",
    "videoSeconds": 129,
    "region": "Europe",
    "coordinates": [
      9.5018,
      56.2639
    ],
    "isMicrostate": false,
    "summary": "Strong Nordic public services and green energy leadership, overcoming single-company pharma dependency and securing Greenland defense.",
    "headwinds": [
      "Over-concentration in pharma (Novo Nordisk drove over half of GDP growth in 2024)",
      "High household debt-to-income ratio",
      "Vulnerabilities in Baltic maritime security"
    ],
    "tailwinds": [
      "Strong public institutions, high trust, and low sovereign debt",
      "Greenland-US-Denmark security pact finalized in Sept 2026 ending territorial standoff",
      "World-leading wind energy technology and maritime shipping (Maersk)",
      "Resilient diversified export base beyond pharma"
    ],
    "transcriptExcerpt": "Pharmaceuticals provided more than half our economic growth in 2024. Depending that much on one industry means its problems become everyone's problems. In 2025, Novo announced thousands of job cuts... Denmark still has strong public services and other successful exporters, and in September 2026, Denmark, Greenland, and the US signed a security deal.",
    "tags": [
      "Pharma",
      "Green Energy",
      "Nordic Model",
      "Arctic Security"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=129s",
    "_searchStr": "denmark europe strong nordic public services and green energy leadership, overcoming single-company pharma dependency and securing greenland defense. pharma green energy nordic model arctic security"
  },
  {
    "rank": 6,
    "name": "Norway",
    "topoName": "Norway",
    "id": "NOR",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "2:49",
    "videoSeconds": 169,
    "region": "Europe",
    "coordinates": [
      8.4689,
      60.472
    ],
    "isMicrostate": false,
    "summary": "Invested its North Sea oil profits abroad into a $1.6T sovereign wealth fund that owns 1.5% of the world's public companies.",
    "headwinds": [
      "Eventual global transition away from fossil fuel exports",
      "High domestic cost and wage structure reducing non-oil competitiveness",
      "Exposure of wealth fund to global equity market crashes"
    ],
    "tailwinds": [
      "Government Pension Fund Global holds >$1.6T, owning ~1.5% of world equities",
      "Strict fiscal rule caps government spending to fund's real returns, protecting capital",
      "Almost 100% domestic electricity generated from renewable hydropower",
      "Crucial supplier of natural gas to Europe replacing Russian flows"
    ],
    "transcriptExcerpt": "It found oil, sold it, and invested a huge amount of the money overseas. Its fund now owns roughly 1 and a half% of the world's listed shares. So, they're a strong green, too. And let's remember that fund because later we'll meet another oil country with a savings account and a very different ending to Norway's.",
    "tags": [
      "Sovereign Fund",
      "Oil & Gas",
      "Hydropower",
      "Fiscal Rule"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=169s",
    "_searchStr": "norway europe invested its north sea oil profits abroad into a $1.6t sovereign wealth fund that owns 1.5% of the world's public companies. sovereign fund oil & gas hydropower fiscal rule"
  },
  {
    "rank": 7,
    "name": "Sweden",
    "topoName": "Sweden",
    "id": "SWE",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "3:08",
    "videoSeconds": 188,
    "region": "Europe",
    "coordinates": [
      18.6435,
      60.1282
    ],
    "isMicrostate": false,
    "summary": "Engineering and industrial powerhouse; high household debt is offset by very low sovereign debt that allows countercyclical support.",
    "headwinds": [
      "Heavy household mortgage indebtedness makes consumers sensitive to interest rates",
      "Rising gang violence debates and integration strains",
      "Slowdown in residential construction during tight monetary cycles"
    ],
    "tailwinds": [
      "Global industrial champions (Ericsson, Volvo, Atlas Copco, Saab, Scania)",
      "Low sovereign public debt allowing aggressive stimulus during downturns",
      "NATO membership secures Baltic defence and strategic deterrence",
      "World pioneer in green steel, battery manufacturing, and tech startups"
    ],
    "transcriptExcerpt": "Its businesses sell machinery, telecoms, equipment, and plenty else the world needs... households have borrowed heavily, meaning higher interest rates could hurt them. But the government has relatively low debt and can help keep the economy moving through a downturn.",
    "tags": [
      "Industrial Giants",
      "Low Sovereign Debt",
      "NATO",
      "Tech"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=188s",
    "_searchStr": "sweden europe engineering and industrial powerhouse; high household debt is offset by very low sovereign debt that allows countercyclical support. industrial giants low sovereign debt nato tech"
  },
  {
    "rank": 8,
    "name": "Iceland",
    "topoName": "Iceland",
    "id": "ISL",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "3:34",
    "videoSeconds": 214,
    "region": "Europe",
    "coordinates": [
      -19.0208,
      64.9631
    ],
    "isMicrostate": false,
    "summary": "Virtually 100% powered and heated by domestic geothermal energy and hydropower, making basic heating and power immune to global shocks.",
    "headwinds": [
      "Volcanic eruptions on the Reykjanes peninsula damaging geothermal plants and roads",
      "Imports all fossil fuels for aviation, maritime fishing, and transport",
      "Vulnerable to sudden fluctuations in global international tourism"
    ],
    "tailwinds": [
      "Almost all electricity from hydro and geothermal; virtually all home heating geothermal",
      "Zero exposure to international gas or coal price shocks for heating and power",
      "Thriving sustainable seafood exports and green aluminum smelting",
      "High social cohesion and strong institutional trust"
    ],
    "transcriptExcerpt": "Geothermal energy and hydropower supply almost all its electricity while geothermal heat warms most homes. Cars, planes, and fishing boats still need imported fuel. Sure, but keeping the house warm doesn't. So, green.",
    "tags": [
      "Geothermal",
      "Hydropower",
      "Energy Security",
      "Fisheries"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=214s",
    "_searchStr": "iceland europe virtually 100% powered and heated by domestic geothermal energy and hydropower, making basic heating and power immune to global shocks. geothermal hydropower energy security fisheries"
  },
  {
    "rank": 9,
    "name": "Brunei",
    "topoName": "Brunei",
    "id": "BRN",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "3:49",
    "videoSeconds": 229,
    "region": "Asia",
    "coordinates": [
      114.7277,
      4.5353
    ],
    "isMicrostate": true,
    "summary": "Massive oil and gas reserves spread over a tiny population provide ample cushion to fund diversification across the 10-year horizon.",
    "headwinds": [
      "Depleting legacy oil and gas fields requiring capital-intensive enhanced recovery",
      "Long-term imperative to generate non-hydrocarbon export revenues",
      "Over-dependence on generous state employment and welfare subsidies"
    ],
    "tailwinds": [
      "Enormous sovereign savings relative to its small population (~450,000)",
      "Zero sovereign public debt and ample foreign reserve buffers",
      "Substantial capital to finance transition over the 10-year window",
      "Expanding downstream refinery and petrochemical complexes"
    ],
    "transcriptExcerpt": "It has oil and gas savings spread across a small population. Eventually, it needs more ways to earn. This is true, but for our 10-year window, it has substantial money to help build them. Green.",
    "tags": [
      "Oil Wealth",
      "Small Population",
      "Zero Debt",
      "Sovereign Savings"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=229s",
    "_searchStr": "brunei asia massive oil and gas reserves spread over a tiny population provide ample cushion to fund diversification across the 10-year horizon. oil wealth small population zero debt sovereign savings"
  },
  {
    "rank": 10,
    "name": "Australia",
    "topoName": "Australia",
    "id": "AUS",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "4:07",
    "videoSeconds": 247,
    "region": "Oceania",
    "coordinates": [
      133.7751,
      -25.2744
    ],
    "isMicrostate": false,
    "summary": "Commodity giant with abundant food, energy, lithium, and iron ore; low public debt affords capacity to withstand climate shocks.",
    "headwinds": [
      "Extreme climate hazards: recurring bushfires, catastrophic floods, and droughts",
      "Severe housing affordability crisis and elevated mortgage burdens",
      "High export concentration in Chinese demand cycles"
    ],
    "tailwinds": [
      "World's leading exporter of iron ore, lithium, critical minerals, and LNG",
      "Agricultural self-sufficiency with vast food export surpluses",
      "Low net government debt and triple-A sovereign credit allowing fiscal response",
      "Deep strategic security ties and defense investment (AUKUS)"
    ],
    "transcriptExcerpt": "Food, energy, minerals, and relatively low government debt. I have to give them green as well. Yes, I know about the housing market and the fires, floods, and droughts, but they have several profitable industries, and a government able to borrow money gives it ways to respond to these challenges.",
    "tags": [
      "Critical Minerals",
      "Agriculture",
      "Fiscal Capacity",
      "AUKUS"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=247s",
    "_searchStr": "australia oceania commodity giant with abundant food, energy, lithium, and iron ore; low public debt affords capacity to withstand climate shocks. critical minerals agriculture fiscal capacity aukus"
  },
  {
    "rank": 11,
    "name": "New Zealand",
    "topoName": "New Zealand",
    "id": "NZL",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "4:26",
    "videoSeconds": 266,
    "region": "Oceania",
    "coordinates": [
      174.886,
      -40.9006
    ],
    "isMicrostate": false,
    "summary": "Isolated agricultural haven with strong governance; trade costs and productivity lags are offset by borrowing headroom for upgrades.",
    "headwinds": [
      "Geographic remoteness makes international shipping and trade expensive",
      "Low business capital investment in equipment and tech dampening wage growth",
      "Aging transport and water infrastructure requiring heavy capital works"
    ],
    "tailwinds": [
      "World-beating dairy, meat, and horticultural export pricing power",
      "Pristine democratic institutions, low corruption, and high rule of law",
      "Sovereign debt headroom to borrow and fund overdue infrastructure",
      "Geographic insulation from major global war theaters"
    ],
    "transcriptExcerpt": "Being far from major markets makes trade expensive. Businesses have invested too little in equipment and technology to keep wages growing strongly. But the government can borrow to improve transport and other infrastructure and its public institutions generally work. A narrow green.",
    "tags": [
      "Dairy Exports",
      "Rule of Law",
      "Fiscal Capacity",
      "Remote Safety"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=266s",
    "_searchStr": "new zealand oceania isolated agricultural haven with strong governance; trade costs and productivity lags are offset by borrowing headroom for upgrades. dairy exports rule of law fiscal capacity remote safety"
  },
  {
    "rank": 12,
    "name": "Samoa",
    "topoName": "Samoa",
    "id": "WSM",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "4:42",
    "videoSeconds": 282,
    "region": "Oceania",
    "coordinates": [
      -172.1046,
      -13.759
    ],
    "isMicrostate": true,
    "summary": "Surprise Pacific green: low sovereign debt and substantial foreign exchange reserves buffer against disaster shocks.",
    "headwinds": [
      "Severe exposure to Pacific cyclones, king tides, and sea-level rise",
      "Small, isolated island economy reliant on tourism and foreign remittances",
      "Vulnerability to international food and fuel inflation"
    ],
    "tailwinds": [
      "Prudently low government debt compared to other island nations",
      "Substantial foreign currency reserves to guarantee essential imports after storms",
      "Deep diaspora support networks in NZ, Australia, and US",
      "Cohesive community governance and proactive disaster planning"
    ],
    "transcriptExcerpt": "Tourism, money sent home from Samoans abroad and a small economy exposed to disasters leaves it in the green, but it also has low government debt and substantial foreign currency reserves that helps it keep buying essentials if a disaster interrupts its income. It's a narrow green, but it is still green.",
    "tags": [
      "Pacific Island",
      "Low Debt",
      "Forex Reserves",
      "Remittances"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=282s",
    "_searchStr": "samoa oceania surprise pacific green: low sovereign debt and substantial foreign exchange reserves buffer against disaster shocks. pacific island low debt forex reserves remittances"
  },
  {
    "rank": 13,
    "name": "Chile",
    "topoName": "Chile",
    "id": "CHL",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "5:05",
    "videoSeconds": 305,
    "region": "Americas",
    "coordinates": [
      -71.543,
      -35.6751
    ],
    "isMicrostate": false,
    "summary": "Copper and lithium leader with Latin America's most credible independent financial and monetary institutions.",
    "headwinds": [
      "Chronic water stress in northern mining basins and Central Valley agriculture",
      "Social demands for expanded welfare, healthcare, and education",
      "Heavy dependence on international commodity price cycles"
    ],
    "tailwinds": [
      "World's #1 copper producer and massive lithium brine reserves for electrification",
      "Highly credible Central Bank and counter-cyclical sovereign wealth funds",
      "Enormous solar potential in the Atacama Desert driving green hydrogen projects",
      "Investment-grade sovereign rating with low borrowing spreads"
    ],
    "transcriptExcerpt": "Chile has copper to sell and credible financial institutions to help it through a downturn.",
    "tags": [
      "Copper",
      "Lithium",
      "Green Energy",
      "Institutions"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=305s",
    "_searchStr": "chile americas copper and lithium leader with latin america's most credible independent financial and monetary institutions. copper lithium green energy institutions"
  },
  {
    "rank": 14,
    "name": "Uruguay",
    "topoName": "Uruguay",
    "id": "URY",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "5:10",
    "videoSeconds": 310,
    "region": "Americas",
    "coordinates": [
      -55.7658,
      -32.5228
    ],
    "isMicrostate": false,
    "summary": "Stable, dependable democracy with almost 100% renewable electricity and highly manageable borrowing risks.",
    "headwinds": [
      "Vulnerability to severe droughts impacting beef farming and reservoir water supplies",
      "Relatively small internal market squeezed between Argentina and Brazil",
      "High domestic cost of living compared to neighboring peers"
    ],
    "tailwinds": [
      "Top democratic and institutional credibility in Latin America",
      "Renewable electricity revolution: 95%+ of power from wind, solar, hydro, and biomass",
      "Dependable government policies and low sovereign borrowing risk",
      "Growing software, tech services, and logistics export sector"
    ],
    "transcriptExcerpt": "Uruguay has a dependable government and manageable borrowing risks.",
    "tags": [
      "Renewable Grid",
      "Democracy",
      "Agriculture",
      "Tech Services"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=310s",
    "_searchStr": "uruguay americas stable, dependable democracy with almost 100% renewable electricity and highly manageable borrowing risks. renewable grid democracy agriculture tech services"
  },
  {
    "rank": 15,
    "name": "Paraguay",
    "topoName": "Paraguay",
    "id": "PRY",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "5:13",
    "videoSeconds": 313,
    "region": "Americas",
    "coordinates": [
      -58.4438,
      -23.4425
    ],
    "isMicrostate": false,
    "summary": "Hydroelectricity giant powered by Itaipu Dam with low debt and solid reserves, though vulnerable to river droughts.",
    "headwinds": [
      "Severe droughts along the Paraná River disrupt barge navigation and hydro generation",
      "High rate of informal employment",
      "Weak institutional transparency and border contraband challenges"
    ],
    "tailwinds": [
      "Massive clean electricity surplus from Itaipu and Yacyretá dams",
      "Solid foreign currency reserves and very low corporate tax rates attracting investment",
      "Low public debt relative to South American averages",
      "Booming agribusiness exports (soybeans, beef, grains)"
    ],
    "transcriptExcerpt": "Paraguay has built up reserves, though a drought could hit both farming and hydropower quite hard.",
    "tags": [
      "Hydropower Surplus",
      "Itaipu Dam",
      "Agribusiness",
      "Low Taxes"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=313s",
    "_searchStr": "paraguay americas hydroelectricity giant powered by itaipu dam with low debt and solid reserves, though vulnerable to river droughts. hydropower surplus itaipu dam agribusiness low taxes"
  },
  {
    "rank": 16,
    "name": "Costa Rica",
    "topoName": "Costa Rica",
    "id": "CRI",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "5:19",
    "videoSeconds": 319,
    "region": "Americas",
    "coordinates": [
      -83.7534,
      9.7489
    ],
    "isMicrostate": false,
    "summary": "Successfully moved up the value chain into high-tech medical device manufacturing and green energy, despite rising crime.",
    "headwinds": [
      "Rising drug trafficking violence and homicide rates threatening public security",
      "Fiscal consolidation challenges and infrastructure bottlenecks",
      "Strain on public pension and healthcare systems"
    ],
    "tailwinds": [
      "Premier regional hub for high-value medical device manufacturing and tech services",
      "Nearly 100% renewable power grid (geothermal, hydro, wind)",
      "Centuries-old stable demilitarized democracy with high human capital",
      "World-renowned eco-tourism brand generating foreign currency"
    ],
    "transcriptExcerpt": "Costa Rica has attracted more sophisticated manufacturing, giving it better paid work beyond tourism and agriculture. Rising violent crime is a threat to that progress. But still, I'm keeping it green like the other three.",
    "tags": [
      "Medical Devices",
      "Renewable Grid",
      "Eco-Tourism",
      "Democracy"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=319s",
    "_searchStr": "costa rica americas successfully moved up the value chain into high-tech medical device manufacturing and green energy, despite rising crime. medical devices renewable grid eco-tourism democracy"
  },
  {
    "rank": 17,
    "name": "Ireland",
    "topoName": "Ireland",
    "id": "IRL",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "5:31",
    "videoSeconds": 331,
    "region": "Europe",
    "coordinates": [
      -8.2439,
      53.4129
    ],
    "isMicrostate": false,
    "summary": "Corporate tax bonanza from global tech and pharma creates huge surpluses, though housing scarcity is a burning domestic crisis.",
    "headwinds": [
      "Generational housing crisis with severe shortage of affordable homes",
      "Extreme fiscal reliance on a small cluster of US tech & pharma multinationals",
      "Rising infrastructure bottlenecks in grid, water, and public transport"
    ],
    "tailwinds": [
      "Huge corporate tax receipts funding new sovereign Future Ireland wealth funds",
      "Sole native English-speaking nation fully within the EU single market",
      "Rapidly falling national debt-to-GNI ratio and strong fiscal buffers",
      "World-class European hub for software, cloud data centers, and biotech"
    ],
    "transcriptExcerpt": "Multinationals pay enormous amounts of tax that gives the government money to improve things. But if it hires more teachers with an unusually good year's tax receipts, it still owes those teachers a salary during an unusually bad year. For now, the finances are strong. Finding a house is still a problem, though.",
    "tags": [
      "Corporate Tax Windfall",
      "Multinationals",
      "EU Hub",
      "Housing Shortage"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=331s",
    "_searchStr": "ireland europe corporate tax bonanza from global tech and pharma creates huge surpluses, though housing scarcity is a burning domestic crisis. corporate tax windfall multinationals eu hub housing shortage"
  },
  {
    "rank": 18,
    "name": "Luxembourg",
    "topoName": "Luxembourg",
    "id": "LUX",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "5:50",
    "videoSeconds": 350,
    "region": "Europe",
    "coordinates": [
      6.1296,
      49.8153
    ],
    "isMicrostate": true,
    "summary": "Prosperous European investment fund hub with pristine public balance sheets and exceptional GDP per capita.",
    "headwinds": [
      "Prohibitive home prices pushing working population across borders into France/Germany/Belgium",
      "Vulnerability to tightening EU tax harmonisation and financial regulations",
      "Cross-border transit congestion"
    ],
    "tailwinds": [
      "Highest GDP per capita in the European Union",
      "Europe's leading domicile for cross-border investment and UCITS funds",
      "Minimal public debt and pristine AAA credit rating",
      "Free nationwide public transit and high state investment in innovation"
    ],
    "transcriptExcerpt": "Luxembourg, Andorra, and Monaco also get green. Wealth and sound public finances give them considerable protection even if finding an affordable home can be another matter.",
    "tags": [
      "Finance Capital",
      "Investment Funds",
      "High Wealth",
      "AAA Credit"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=350s",
    "_searchStr": "luxembourg europe prosperous european investment fund hub with pristine public balance sheets and exceptional gdp per capita. finance capital investment funds high wealth aaa credit"
  },
  {
    "rank": 19,
    "name": "Andorra",
    "topoName": "Andorra",
    "id": "AND",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "5:51",
    "videoSeconds": 351,
    "region": "Europe",
    "coordinates": [
      1.5218,
      42.5063
    ],
    "isMicrostate": true,
    "summary": "Pyrenean tax-efficient haven with sound public finances, high tourism income, and virtually no defense burden.",
    "headwinds": [
      "Climate change warming Pyrenean winters, threatening ski season revenues",
      "No commercial airport or rail network; reliant on road access through Spain and France",
      "EU association negotiations creating domestic regulatory friction"
    ],
    "tailwinds": [
      "Very low sovereign debt and sound fiscal management",
      "High-volume ski and duty-free shopping tourism",
      "Favorable tax regime attracting affluent digital residents and tech entrepreneurs",
      "Zero national defense expenditures required"
    ],
    "transcriptExcerpt": "Wealth and sound public finances give them considerable protection.",
    "tags": [
      "Microstate",
      "Ski Tourism",
      "Low Debt",
      "Tax Haven"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=351s",
    "_searchStr": "andorra europe pyrenean tax-efficient haven with sound public finances, high tourism income, and virtually no defense burden. microstate ski tourism low debt tax haven"
  },
  {
    "rank": 20,
    "name": "Monaco",
    "topoName": "Monaco",
    "id": "MCO",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "5:51",
    "videoSeconds": 351,
    "region": "Europe",
    "coordinates": [
      7.4246,
      43.7384
    ],
    "isMicrostate": true,
    "summary": "Ultra-rich enclave with zero public debt and massive constitutional reserves that insulate it from economic turbulence.",
    "headwinds": [
      "Severe physical land limits requiring expensive offshore land reclamation",
      "FATF grey-list scrutiny requiring tighter anti-money laundering compliance",
      "High dependency on ultra-high-net-worth tourism and foreign capital inflows"
    ],
    "tailwinds": [
      "Zero public debt with massive sovereign constitutional reserves",
      "Concentrated private wealth and high-liquidity private banking sector",
      "Immaculate public safety and strict rule of law",
      "Ever-increasing global demand for residency from billionaires"
    ],
    "transcriptExcerpt": "Monaco also gets green. Wealth and sound public finances give them considerable protection.",
    "tags": [
      "Ultra Wealth",
      "Zero Debt",
      "Private Banking",
      "Residency Hub"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=351s",
    "_searchStr": "monaco europe ultra-rich enclave with zero public debt and massive constitutional reserves that insulate it from economic turbulence. ultra wealth zero debt private banking residency hub"
  },
  {
    "rank": 21,
    "name": "Liechtenstein",
    "topoName": "Liechtenstein",
    "id": "LIE",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "5:59",
    "videoSeconds": 359,
    "region": "Europe",
    "coordinates": [
      9.5554,
      47.166
    ],
    "isMicrostate": true,
    "summary": "Virtually zero public debt and government financial assets that exceed its entire annual GDP.",
    "headwinds": [
      "Heavy dependence on cross-border commuters from Switzerland and Austria",
      "Vulnerability to broader European industrial supply shocks",
      "Micro-scale limits economic diversification scope"
    ],
    "tailwinds": [
      "State financial assets comfortably exceed 100% of annual GDP",
      "Virtually zero sovereign public debt",
      "Highly specialized precision engineering and industrial firms (e.g., Hilti)",
      "Trusted private wealth management and trust administration sector"
    ],
    "transcriptExcerpt": "Virtually no public debt and government financial assets comfortably larger than its entire annual economy. Green.",
    "tags": [
      "Zero Debt",
      "Net Financial Assets",
      "Precision Industry",
      "Trusts"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=359s",
    "_searchStr": "liechtenstein europe virtually zero public debt and government financial assets that exceed its entire annual gdp. zero debt net financial assets precision industry trusts"
  },
  {
    "rank": 22,
    "name": "Cyprus",
    "topoName": "Cyprus",
    "id": "CYP",
    "tier": "green",
    "tierLabel": "Probably Fine",
    "timestamp": "6:08",
    "videoSeconds": 368,
    "region": "Europe",
    "coordinates": [
      33.4299,
      35.1264
    ],
    "isMicrostate": false,
    "summary": "Last green on the list: solid economic expansion and sharp debt reduction buffer vulnerability to imported electricity fuel.",
    "headwinds": [
      "Frozen geopolitical division and Turkish troop presence in Northern Cyprus",
      "Heavy reliance on imported oil for electricity generation",
      "Proximity to Levant and Middle East conflicts"
    ],
    "tailwinds": [
      "Rapidly growing GDP and falling sovereign debt-to-GDP ratio",
      "Expanding tech cluster, maritime shipping registry, and professional services",
      "Significant offshore natural gas discoveries (Cronos, Aphrodite)",
      "Increased fiscal buffers to absorb international fuel price spikes"
    ],
    "transcriptExcerpt": "Cypress gets our last green. Its economy has been growing and government debt has come down. Imported fuel still makes electricity vulnerable to price spikes, but it has improved its ability to absorb that cost. So that's 22 greens who are all probably fine.",
    "tags": [
      "Debt Reduction",
      "Offshore Gas",
      "Shipping Hub",
      "Tech Relocation"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=368s",
    "_searchStr": "cyprus europe last green on the list: solid economic expansion and sharp debt reduction buffer vulnerability to imported electricity fuel. debt reduction offshore gas shipping hub tech relocation"
  },
  {
    "rank": 23,
    "name": "Botswana",
    "topoName": "Botswana",
    "id": "BWA",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "6:27",
    "videoSeconds": 387,
    "region": "Africa",
    "coordinates": [
      24.6849,
      -22.3285
    ],
    "isMicrostate": false,
    "summary": "Diamond revenue threatened by lab-grown factory gems, but possesses capable institutions and fiscal reserves to diversify in time.",
    "headwinds": [
      "Rapid global market penetration of synthetic lab-grown diamonds collapsing diamond revenues",
      "Heavy reliance on single commodity export for state revenue and foreign exchange",
      "High structural youth unemployment"
    ],
    "tailwinds": [
      "Long track record of prudent governance, anti-corruption, and institutional stability",
      "Substantial sovereign financial assets and foreign reserves",
      "Expanding tourism, solar energy, and beef exports",
      "Active government push to build non-mining industries"
    ],
    "transcriptExcerpt": "For decades, diamonds helped fund roads, schools, and a genuine improvement in living standards. Then we got much better at making diamonds in factories... Botswana still has capable institutions and resources to respond, but it needs other exports before too much of its savings disappear. I'm marking it yellow.",
    "tags": [
      "Diamonds",
      "Lab-Grown Tech",
      "Fiscal Savings",
      "Good Governance"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=387s",
    "_searchStr": "botswana africa diamond revenue threatened by lab-grown factory gems, but possesses capable institutions and fiscal reserves to diversify in time. diamonds lab-grown tech fiscal savings good governance"
  },
  {
    "rank": 24,
    "name": "Bhutan",
    "topoName": "Bhutan",
    "id": "BTN",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "6:54",
    "videoSeconds": 414,
    "region": "Asia",
    "coordinates": [
      90.4336,
      27.5142
    ],
    "isMicrostate": false,
    "summary": "Creative state-led hydropower Bitcoin mining, but servers don't employ youth; needs jobs to halt brain drain to Australia.",
    "headwinds": [
      "Bitcoin mining facilities require high capital and electricity but employ very few citizens",
      "Acute youth emigration and brain drain seeking service jobs abroad (especially Australia)",
      "Geographic isolation and high transit trade costs through India"
    ],
    "tailwinds": [
      "Pristine Himalayan rivers provide abundant, cheap renewable hydropower",
      "Pioneered sovereign Bitcoin treasury reserves directly from state hydro dams",
      "High environmental stability and carbon-negative footprint",
      "Development of the Gelephu Special Administrative Region to attract regional tech investment"
    ],
    "transcriptExcerpt": "Its state investment company uses hydro power to mine Bitcoin. It's pretty simple. Water flows downhill, computers do their thing, the government gets Bitcoin out the other end... The problem, however, is that a room full of mining computers doesn't employ a generation of young people. Bhutan is currently in need of more jobs that can persuade the young people to stay.",
    "tags": [
      "Hydropower",
      "Bitcoin",
      "Youth Emigration",
      "Himalayas"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=414s",
    "_searchStr": "bhutan asia creative state-led hydropower bitcoin mining, but servers don't employ youth; needs jobs to halt brain drain to australia. hydropower bitcoin youth emigration himalayas"
  },
  {
    "rank": 25,
    "name": "Germany",
    "topoName": "Germany",
    "id": "DEU",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "7:20",
    "videoSeconds": 440,
    "region": "Europe",
    "coordinates": [
      10.4515,
      51.1657
    ],
    "isMicrostate": false,
    "summary": "High energy costs and Chinese competition pinch industry while 25% of workers reach retirement age by 2035; engineering strength remains formidable.",
    "headwinds": [
      "Crippling industrial electricity/gas costs following poor energy choices and Russian gas cutoffs",
      "Chinese automakers and industrial equipment makers turned former customers into fierce competitors",
      "Massive demographic retirement wave: 25% of population projected age 67+ by 2035",
      "Overly rigid constitutional debt brake hampering infrastructure investment"
    ],
    "tailwinds": [
      "World-class engineering talent and legendary 'Mittelstand' precision manufacturers",
      "Enormous national wealth and low public debt relative to G7 peers",
      "Reformed fiscal flexibility enabling major defense and infrastructure modernisation",
      "Leading European tech, chemical, and green transition industrial base"
    ],
    "transcriptExcerpt": "Germany got rich by making things and selling them to the world. Now, energy costs more because of terrible decisions about power generation, making it really hard to stay competitive. On top of this, Chinese customers have become Chinese competitors. And their last major issue is that a large generation of workers is now retiring. By 2035, roughly a quarter of the population is projected to be 67 or older. Germany still has engineers, successful companies, and more room to invest.",
    "tags": [
      "Energy Shock",
      "Auto Industry",
      "Demographics",
      "Mittelstand"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=440s",
    "_searchStr": "germany europe high energy costs and chinese competition pinch industry while 25% of workers reach retirement age by 2035; engineering strength remains formidable. energy shock auto industry demographics mittelstand"
  },
  {
    "rank": 26,
    "name": "Japan",
    "topoName": "Japan",
    "id": "JPN",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "7:57",
    "videoSeconds": 477,
    "region": "Asia",
    "coordinates": [
      138.2529,
      36.2048
    ],
    "isMicrostate": false,
    "summary": "Deep aging and 260% public debt, but debt is owed in domestic yen to its own citizens and central bank, not dollars.",
    "headwinds": [
      "Rapidly shrinking population and rising elderly healthcare/pension costs",
      "World-highest government debt-to-GDP ratio (>260%)",
      "Yen depreciation increasing the cost of imported food and energy"
    ],
    "tailwinds": [
      "Sovereign debt is denominated exclusively in Japanese Yen, controlled by the Bank of Japan",
      "Immense net international investment position (world's top creditor nation)",
      "Global dominance in robotics, advanced materials, automotive, and electronics",
      "High social cohesion, public safety, and world-class infrastructure"
    ],
    "transcriptExcerpt": "Japan has been dealing with aging for years. Add to that an enormous government debt, and you might expect Japan to be much further down this list. But it also has valuable companies, accumulated wealth, and debts issued in yen. Its central bank can of course create yen, giving it ways to prevent a shortage of money from turning into a debt crisis... Still, that is a much better position than owing dollars you can't produce.",
    "tags": [
      "Yen Sovereignty",
      "Demographics",
      "Creditor Nation",
      "Robotics"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=477s",
    "_searchStr": "japan asia deep aging and 260% public debt, but debt is owed in domestic yen to its own citizens and central bank, not dollars. yen sovereignty demographics creditor nation robotics"
  },
  {
    "rank": 27,
    "name": "South Korea",
    "topoName": "South Korea",
    "id": "KOR",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "8:33",
    "videoSeconds": 513,
    "region": "Asia",
    "coordinates": [
      127.7669,
      35.9078
    ],
    "isMicrostate": false,
    "summary": "World's lowest birth rate (0.7) creates an acute labor squeeze, but global dominance in chips, ships, cars, and automation offers a route through.",
    "headwinds": [
      "Fertility rate of ~0.7 creates an unprecedented demographic collapse",
      "Impending shortages of young military recruits and manufacturing workforce",
      "Intense Chinese competition in display panels, EV batteries, and petrochemicals"
    ],
    "tailwinds": [
      "Global leadership in memory semiconductors (Samsung, SK Hynix), shipbuilding, and defense exports",
      "World's highest robot density in manufacturing, leading in factory automation",
      "Strong corporate cash reserves and cutting-edge R&D ecosystem",
      "High global soft power and cultural brand exports"
    ],
    "transcriptExcerpt": "South Korea shows how much harder the aging problem can get... Essentially, South Korea makes cars, ships, and chips. All things that the world wants. But years of very low birth rates mean fewer young people available to keep doing it. Employers need staff. The military needs recruits... Its industries give it the money to invest in automation.",
    "tags": [
      "Birth Rate 0.7",
      "Semiconductors",
      "Shipbuilding",
      "Automation"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=513s",
    "_searchStr": "south korea asia world's lowest birth rate (0.7) creates an acute labor squeeze, but global dominance in chips, ships, cars, and automation offers a route through. birth rate 0.7 semiconductors shipbuilding automation"
  },
  {
    "rank": 28,
    "name": "Austria",
    "topoName": "Austria",
    "id": "AUT",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "9:06",
    "videoSeconds": 546,
    "region": "Europe",
    "coordinates": [
      14.5501,
      47.5162
    ],
    "isMicrostate": false,
    "summary": "Heavy pension and retirement bills combined with sluggish growth force choices between borrowing, tax hikes, and spending reforms.",
    "headwinds": [
      "Rapidly rising pension expenditure and aging workforce",
      "Sluggish GDP growth tied to German industrial stagnation",
      "Historical energy dependence on Russian gas pipelines"
    ],
    "tailwinds": [
      "Wealthy, highly diversified economy with specialized machinery and metallurgy",
      "High share of clean alpine hydropower in domestic electricity mix",
      "Thriving international tourism and strategic central European logistics",
      "Strong social safety net and high quality of public infrastructure"
    ],
    "transcriptExcerpt": "Back in Europe, Austria faces the same retirement bill with weak growth to help pay for it. That means pressure for higher taxes, more borrowing or cuts elsewhere. Yellow.",
    "tags": [
      "Pensions",
      "Sluggish Growth",
      "Hydropower",
      "Machinery"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=546s",
    "_searchStr": "austria europe heavy pension and retirement bills combined with sluggish growth force choices between borrowing, tax hikes, and spending reforms. pensions sluggish growth hydropower machinery"
  },
  {
    "rank": 29,
    "name": "Czechia",
    "topoName": "Czechia",
    "id": "CZE",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "9:14",
    "videoSeconds": 554,
    "region": "Europe",
    "coordinates": [
      15.473,
      49.8175
    ],
    "isMicrostate": false,
    "summary": "Vibrant industrial workshop for German manufacturing; vulnerable to expensive power and slowdowns in automotive supply chains.",
    "headwinds": [
      "Tight integration with Germany's auto supply chain makes it vulnerable to German downturns",
      "Elevated industrial energy prices following decoupling from Russian supplies",
      "Shortage of skilled industrial labor"
    ],
    "tailwinds": [
      "Lowest unemployment rate in the European Union",
      "Strong engineering traditions, Skoda auto manufacturing, and defense production",
      "Prudent sovereign debt levels relative to Eurozone peers",
      "Independent monetary policy via Czech National Bank"
    ],
    "transcriptExcerpt": "Czechia and Slovakia are probably worrying just as much about Germany as Germany is, seeing as their factories help supply it. Czechia sells machinery, cars, and components. Expensive energy and fewer orders can hit them hard. Both yellow.",
    "tags": [
      "Automotive",
      "Supply Chain",
      "Low Unemployment",
      "Engineering"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=554s",
    "_searchStr": "czechia europe vibrant industrial workshop for german manufacturing; vulnerable to expensive power and slowdowns in automotive supply chains. automotive supply chain low unemployment engineering"
  },
  {
    "rank": 30,
    "name": "Slovakia",
    "topoName": "Slovakia",
    "id": "SVK",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "9:14",
    "videoSeconds": 554,
    "region": "Europe",
    "coordinates": [
      19.699,
      48.669
    ],
    "isMicrostate": false,
    "summary": "World leader in cars produced per capita; racing to retool factories for electric vehicle production while managing fiscal deficits.",
    "headwinds": [
      "Extreme economic concentration in car assembly: most cars per capita globally",
      "Challenging capital retooling required to shift plants from ICE to EV platforms",
      "Growing political friction with EU institutions and budget deficit pressures"
    ],
    "tailwinds": [
      "World-class modern automotive assembly infrastructure (VW, Stellantis, Kia, JLR, Volvo EV)",
      "High share of baseload nuclear power providing stable carbon-free electricity",
      "Euro currency membership protects against foreign exchange runs",
      "Competitive skilled labor costs in Central Europe"
    ],
    "transcriptExcerpt": "Slovakia makes more cars per person than any other country. But as buyers switch to electric models, its factories need the investment and skills to make them. Both yellow.",
    "tags": [
      "Car Capital",
      "EV Transition",
      "Nuclear Power",
      "Eurozone"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=554s",
    "_searchStr": "slovakia europe world leader in cars produced per capita; racing to retool factories for electric vehicle production while managing fiscal deficits. car capital ev transition nuclear power eurozone"
  },
  {
    "rank": 31,
    "name": "Hungary",
    "topoName": "Hungary",
    "id": "HUN",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "9:36",
    "videoSeconds": 576,
    "region": "Europe",
    "coordinates": [
      19.5033,
      47.1625
    ],
    "isMicrostate": false,
    "summary": "Attracted massive EV battery plant investments, but 2025 factory slowdown, high inflation, and deficits require business expansion.",
    "headwinds": [
      "Stagnant economic growth in 2025 with falling investment and high public spending deficits",
      "Persistent rule-of-law disputes freezing EU recovery funds",
      "Heavy legacy reliance on Russian oil and nuclear technology (Paks II)"
    ],
    "tailwinds": [
      "Secured massive Chinese and German EV battery mega-factories (CATL, BYD)",
      "Strategic transport corridor between Western Europe and the Balkans",
      "Low corporate tax rates attracting foreign direct investment",
      "Strong agricultural base and domestic food security"
    ],
    "transcriptExcerpt": "Hungary has attracted factories too, but investment fell in 2025 while the economy barely grew. The government has also been spending more than it collects. Borrowing can keep spending going for a while. Getting businesses to expand would give it a more lasting improvement, though.",
    "tags": [
      "Battery Hub",
      "Fiscal Deficits",
      "FDI",
      "EU Friction"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=576s",
    "_searchStr": "hungary europe attracted massive ev battery plant investments, but 2025 factory slowdown, high inflation, and deficits require business expansion. battery hub fiscal deficits fdi eu friction"
  },
  {
    "rank": 32,
    "name": "Poland",
    "topoName": "Poland",
    "id": "POL",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "9:51",
    "videoSeconds": 591,
    "region": "Europe",
    "coordinates": [
      19.1451,
      51.9194
    ],
    "isMicrostate": false,
    "summary": "Dynamic Central European growth tiger, but ballooning defense spending (~4-5% GDP), public services, and aging stretch the budget.",
    "headwinds": [
      "Massive defense spending (over 4% of GDP) places heavy demands on the state budget",
      "Aging demographic pyramid and long-term pension entitlement pressures",
      "Costly transition away from domestic coal power to nuclear and offshore wind"
    ],
    "tailwinds": [
      "Spectacular uninterrupted economic catch-up growth and rising real wages",
      "Premier destination for nearshored European manufacturing and IT services",
      "Unlocking billions in previously frozen EU development funds",
      "Strong national defense readiness and leading NATO eastern flank power"
    ],
    "transcriptExcerpt": "Poland has a stronger growth story. Wages are rising, investment is coming, and living standards have improved enormously, but defense, public services, and pensions all need funding. Getting richer helps you afford more, just not everything at once. Yellow.",
    "tags": [
      "Growth Tiger",
      "Defense Spending",
      "Nearshoring",
      "NATO Hub"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=591s",
    "_searchStr": "poland europe dynamic central european growth tiger, but ballooning defense spending (~4-5% gdp), public services, and aging stretch the budget. growth tiger defense spending nearshoring nato hub"
  },
  {
    "rank": 33,
    "name": "Slovenia",
    "topoName": "Slovenia",
    "id": "SVN",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "10:06",
    "videoSeconds": 606,
    "region": "Europe",
    "coordinates": [
      14.9955,
      46.1512
    ],
    "isMicrostate": false,
    "summary": "High-income manufacturing economy where factory expansion and care homes face acute labor shortages from population aging.",
    "headwinds": [
      "Workforce shrinkage due to aging population starving factories and care homes of staff",
      "Shortage of skilled industrial engineers and eldercare professionals",
      "Flood reconstruction costs from recent extreme weather disasters"
    ],
    "tailwinds": [
      "Highest GDP per capita in the former Eastern bloc with high living standards",
      "Advanced niche industrial exporters (pharma via Krka, automotive parts, green tech)",
      "Port of Koper provides vital maritime access for Central European trade",
      "Stable Eurozone membership and sound public debt trajectory"
    ],
    "transcriptExcerpt": "Slovenia's factories need skilled workers. Its care homes need staff, too. As the population ages, there are fewer people available for both. Training and immigration can help, but they need to happen fast enough. Yellow.",
    "tags": [
      "Labor Shortage",
      "Aging",
      "Pharma",
      "Port of Koper"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=606s",
    "_searchStr": "slovenia europe high-income manufacturing economy where factory expansion and care homes face acute labor shortages from population aging. labor shortage aging pharma port of koper"
  },
  {
    "rank": 34,
    "name": "China",
    "topoName": "China",
    "id": "CHN",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "10:20",
    "videoSeconds": 620,
    "region": "Asia",
    "coordinates": [
      104.1954,
      35.8617
    ],
    "isMicrostate": false,
    "summary": "Dominant global exporter in EVs, solar, and batteries, but battling a property crash, local government debt, and rapid population aging.",
    "headwinds": [
      "Severe real estate slump wiping out family household savings and stalling developer debt",
      "High local government debt built up from land sale collapses",
      "Demographic aging with workforce shrinking by millions every year",
      "Rising Western tariffs, trade restrictions, and advanced chip export bans"
    ],
    "tailwinds": [
      "Unmatched industrial manufacturing ecosystem, scale, and supply chain depth",
      "Global dominance in clean tech: electric vehicles, solar panels, and batteries",
      "Immense sovereign foreign currency reserves (> $3 trillion)",
      "Centralized state authority capable of directing colossal capital and industrial subsidies"
    ],
    "transcriptExcerpt": "Its manufacturers keep winning customers abroad while many people at home feel less financially secure. A big reason is housing. Families put their savings into homes. Developers borrowed to build more... But then the boom stalled. And when that happened, families lost wealth, developers struggled to repay loans, and local governments lost income... China also have fewer young workers replacing older ones. Yellow.",
    "tags": [
      "Property Crisis",
      "EV Dominance",
      "Demographics",
      "Manufacturing Scale"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=620s",
    "_searchStr": "china asia dominant global exporter in evs, solar, and batteries, but battling a property crash, local government debt, and rapid population aging. property crisis ev dominance demographics manufacturing scale"
  },
  {
    "rank": 35,
    "name": "Italy",
    "topoName": "Italy",
    "id": "ITA",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "11:31",
    "videoSeconds": 691,
    "region": "Europe",
    "coordinates": [
      12.5674,
      41.8719
    ],
    "isMicrostate": false,
    "summary": "Famous luxury and precision machinery exports coupled with huge private household wealth, weighed down by 137% debt and slow growth.",
    "headwinds": [
      "Crushing public debt burden (~137% of GDP) consuming tens of billions in interest",
      "Decades of sluggish labor productivity and GDP growth",
      "Rapid demographic contraction with severe fertility declines in the south"
    ],
    "tailwinds": [
      "Enormous private household wealth and low household debt levels",
      "Europe's second-largest manufacturing powerhouse (precision machinery, luxury, fashion, pharma)",
      "Major beneficiary of EU NextGen Recovery and Resilience funding",
      "World-renowned agricultural and high-margin cultural export brand"
    ],
    "transcriptExcerpt": "Italy has successful manufacturers and substantial private wealth. The government, however, has debt worth roughly 137% of the economy and very slow growth. I would say they probably need a new export blockbuster hit to go green, but I don't know what could top pasta. So, yellow.",
    "tags": [
      "High Debt 137%",
      "Private Wealth",
      "Machinery",
      "Demographics"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=691s",
    "_searchStr": "italy europe famous luxury and precision machinery exports coupled with huge private household wealth, weighed down by 137% debt and slow growth. high debt 137% private wealth machinery demographics"
  },
  {
    "rank": 36,
    "name": "Spain",
    "topoName": "Spain",
    "id": "ESP",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "11:49",
    "videoSeconds": 709,
    "region": "Europe",
    "coordinates": [
      -3.7492,
      40.4637
    ],
    "isMicrostate": false,
    "summary": "Strong growth powered by record tourism, solar energy, and immigration, but grappling with a severe urban housing shortage.",
    "headwinds": [
      "Acute urban housing supply crisis driving social unrest and high rents",
      "High youth unemployment relative to northern European peers",
      "Severe regional drought risks affecting agriculture in Andalusia and Catalonia"
    ],
    "tailwinds": [
      "Outperforming major Eurozone peers in GDP expansion",
      "Immigration inflows expanding the workforce to help fund aging pensions",
      "Massive renewable solar and wind deployment lowering power costs",
      "Global leader in international leisure and business tourism receipts"
    ],
    "transcriptExcerpt": "Spain has stronger growth, helped by tourism and immigration. More workers does help pay for an aging population, but they also need new homes, and construction hasn't kept up in the places people want to live.",
    "tags": [
      "Housing Shortage",
      "Tourism Boom",
      "Renewables",
      "Immigration"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=709s",
    "_searchStr": "spain europe strong growth powered by record tourism, solar energy, and immigration, but grappling with a severe urban housing shortage. housing shortage tourism boom renewables immigration"
  },
  {
    "rank": 37,
    "name": "Portugal",
    "topoName": "Portugal",
    "id": "PRT",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "12:02",
    "videoSeconds": 722,
    "region": "Europe",
    "coordinates": [
      -8.2245,
      39.3999
    ],
    "isMicrostate": false,
    "summary": "Remarkable fiscal turnaround bringing debt below 90%, but facing an acute housing affordability squeeze between local wages and foreign buyers.",
    "headwinds": [
      "Severe housing affordability crisis driven by foreign retirees, digital nomads, and tourism",
      "Relatively low domestic wages pushing young educated graduates to emigrate",
      "Underfunded public healthcare service (SNS) under strain"
    ],
    "tailwinds": [
      "Dramatically reduced public debt from 134% in 2020 to under 90% of GDP",
      "Consistently running government budget surpluses in recent years",
      "High renewable energy penetration (wind, hydro, solar) insulating from gas spikes",
      "Strong expansion in tech startups, shared service centers, and aerospace"
    ],
    "transcriptExcerpt": "Portugal has brought its government debt below 90% of the economy, down from 134% in 2020. That's a serious improvement. Housing is a less cheerful story, though. A home affordable to someone arriving with a foreign salary may be completely out of reach for the person serving them lunch. Portugal needs more homes and better paid work. Yellow.",
    "tags": [
      "Debt Drop <90%",
      "Housing Crunch",
      "Fiscal Surplus",
      "Renewables"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=722s",
    "_searchStr": "portugal europe remarkable fiscal turnaround bringing debt below 90%, but facing an acute housing affordability squeeze between local wages and foreign buyers. debt drop <90% housing crunch fiscal surplus renewables"
  },
  {
    "rank": 38,
    "name": "Greece",
    "topoName": "Greece",
    "id": "GRC",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "12:23",
    "videoSeconds": 743,
    "region": "Europe",
    "coordinates": [
      21.8243,
      39.0742
    ],
    "isMicrostate": false,
    "summary": "Impressive economic comeback regaining investment grade and cutting debt, although the overall debt mountain remains heavy.",
    "headwinds": [
      "Absolute public debt-to-GDP remains among the highest in Europe (~150%)",
      "Extreme summer heatwaves and wildfires damaging agricultural regions and tourism",
      "Low wage levels and lingering scars from the austerity decade"
    ],
    "tailwinds": [
      "Restored to investment-grade sovereign credit status with falling debt trajectory",
      "Surging foreign direct investment in logistics, data centers, and renewable energy",
      "World-leading merchant shipping fleet generating massive international earnings",
      "Record tourism seasons providing substantial fiscal revenue"
    ],
    "transcriptExcerpt": "Greece's debt is still enormous, but it has come down sharply relative to the economy. Employment and investment have improved. We all remember Greece doing really badly, but they are now a yellow.",
    "tags": [
      "Debt Comeback",
      "Merchant Shipping",
      "Investment Grade",
      "Tourism"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=743s",
    "_searchStr": "greece europe impressive economic comeback regaining investment grade and cutting debt, although the overall debt mountain remains heavy. debt comeback merchant shipping investment grade tourism"
  },
  {
    "rank": 39,
    "name": "Croatia",
    "topoName": "Croatia",
    "id": "HRV",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "12:35",
    "videoSeconds": 755,
    "region": "Europe",
    "coordinates": [
      15.2,
      45.1
    ],
    "isMicrostate": false,
    "summary": "Booming Adriatic tourism and Eurozone accession bring prosperity, but holiday rentals crowd out locals from housing.",
    "headwinds": [
      "Coastal homes converted into lucrative holiday rentals, making housing unaffordable for local residents",
      "Heavy economic reliance on seasonal summer coastal tourism (~20% of GDP)",
      "Ongoing emigration of young professionals to Western Europe"
    ],
    "tailwinds": [
      "Smooth entry into the Eurozone and Schengen Area boosting trade, FDI, and travel",
      "Strong highway and maritime infrastructure networks",
      "Low public debt compared to southern European peers",
      "High safety, quality of life, and growing tech cluster (Rimac Automobili)"
    ],
    "transcriptExcerpt": "Croatia earns a lot from tourism. That brings jobs and money, but coastal homes can become more profitable as holiday rentals than places for residents to live. And then there's the quality of the tourists... Croatia, you get yellow.",
    "tags": [
      "Tourism Overcrowding",
      "Housing Squeeze",
      "Eurozone",
      "Coastal Economy"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=755s",
    "_searchStr": "croatia europe booming adriatic tourism and eurozone accession bring prosperity, but holiday rentals crowd out locals from housing. tourism overcrowding housing squeeze eurozone coastal economy"
  },
  {
    "rank": 40,
    "name": "North Macedonia",
    "topoName": "Macedonia",
    "id": "MKD",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "13:19",
    "videoSeconds": 799,
    "region": "Europe",
    "coordinates": [
      21.7453,
      41.6086
    ],
    "isMicrostate": false,
    "summary": "Struggles with youth emigration and slow EU accession progress, but maintains stable automotive component manufacturing.",
    "headwinds": [
      "Massive emigration of skilled youth leaving behind an aging taxpayer base",
      "Stalled European Union accession talks and regional diplomatic friction",
      "Air pollution and reliance on legacy lignite coal plants"
    ],
    "tailwinds": [
      "Competitive tax-free technological industrial development zones attracting auto suppliers",
      "Low cost of doing business in southeastern Europe",
      "NATO membership guarantees territorial security and border integrity",
      "Remittances from large diaspora providing steady household support"
    ],
    "transcriptExcerpt": "North Macedonia and Bosnia and Herzegovina have the opposite problem of people traveling to them. You see, too many leave them for better work opportunities and stay away. That means fewer workers and taxpayers at home... So both yellow.",
    "tags": [
      "Brain Drain",
      "Emigration",
      "Auto Components",
      "NATO"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=799s",
    "_searchStr": "north macedonia europe struggles with youth emigration and slow eu accession progress, but maintains stable automotive component manufacturing. brain drain emigration auto components nato"
  },
  {
    "rank": 41,
    "name": "Bosnia & Herzegovina",
    "topoName": "Bosnia and Herz.",
    "id": "BIH",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "13:20",
    "videoSeconds": 800,
    "region": "Europe",
    "coordinates": [
      17.6791,
      43.9159
    ],
    "isMicrostate": false,
    "summary": "Paralyzing ethnic political division and youth brain drain hinder reform, but export manufacturing and EU candidate status provide hope.",
    "headwinds": [
      "Complex tripartite political deadlock and secessionist rhetoric stalling national governance",
      "One of the world's highest youth emigration rates draining human capital",
      "Underdeveloped transport corridors through mountainous terrain"
    ],
    "tailwinds": [
      "Granted European Union candidate status opening pre-accession funding",
      "Net exporter of renewable hydropower and mineral resources in the Western Balkans",
      "Competitive manufacturing cluster in wood processing, auto parts, and metallurgy",
      "Strong diaspora remitting substantial income"
    ],
    "transcriptExcerpt": "Bosnia's political divisions also make investment and reform harder. So both yellow.",
    "tags": [
      "Political Division",
      "Brain Drain",
      "Hydropower",
      "EU Candidate"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=800s",
    "_searchStr": "bosnia & herzegovina europe paralyzing ethnic political division and youth brain drain hinder reform, but export manufacturing and eu candidate status provide hope. political division brain drain hydropower eu candidate"
  },
  {
    "rank": 42,
    "name": "Bulgaria",
    "topoName": "Bulgaria",
    "id": "BGR",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "13:38",
    "videoSeconds": 818,
    "region": "Europe",
    "coordinates": [
      25.4858,
      42.7339
    ],
    "isMicrostate": false,
    "summary": "Rapid wage convergence and exceptionally low sovereign debt, but faces the world's fastest population shrinkage requiring automation.",
    "headwinds": [
      "One of the fastest shrinking populations globally due to low fertility and emigration",
      "Frequent parliamentary elections and political coalition instability",
      "Decarbonisation pressure on the Maritsa coal energy basin"
    ],
    "tailwinds": [
      "Extremely low sovereign public debt (<25% of GDP), among the lowest in the EU",
      "Fast-growing IT, automotive software, and outsourced services hub in Sofia",
      "Partial Schengen integration and preparations for Eurozone entry",
      "Strategic position on European logistics transit corridors"
    ],
    "transcriptExcerpt": "Bulgaria's wages are rising, but its workforce is aging. Companies need better machinery and training so fewer workers can produce more. Though government debt gives it some ability to fund those improvements, so yellow.",
    "tags": [
      "Population Decline",
      "Low Debt <25%",
      "Tech Hub",
      "Euro Accession"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=818s",
    "_searchStr": "bulgaria europe rapid wage convergence and exceptionally low sovereign debt, but faces the world's fastest population shrinkage requiring automation. population decline low debt <25% tech hub euro accession"
  },
  {
    "rank": 43,
    "name": "Romania",
    "topoName": "Romania",
    "id": "ROU",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "13:51",
    "videoSeconds": 831,
    "region": "Europe",
    "coordinates": [
      24.9668,
      45.9432
    ],
    "isMicrostate": false,
    "summary": "Tremendous economic catch-up growth and tech expansion, but excessive fiscal budget deficits demand tax hikes and spending restraint.",
    "headwinds": [
      "Large structural budget deficits exceeding EU fiscal targets requiring painful austerity",
      "Regional infrastructure disparities between western cities and eastern rural counties",
      "War in neighboring Ukraine causing Black Sea trade complications"
    ],
    "tailwinds": [
      "One of the EU's top-performing economies over the past two decades in GDP catch-up",
      "Black Sea offshore natural gas reserves (Neptun Deep) coming online to secure energy independence",
      "Thriving software development, fintech, and automotive manufacturing (Dacia)",
      "Massive inflows of EU cohesion funds accelerating highway construction"
    ],
    "transcriptExcerpt": "Romania has done a huge amount of catching up, but government spending ran far ahead of tax income. Closing that gap means tax increases and tighter spending, which leave households and businesses with less to spend themselves. Yellow.",
    "tags": [
      "Fast Catch-Up",
      "Budget Deficits",
      "Black Sea Gas",
      "IT Cluster"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=831s",
    "_searchStr": "romania europe tremendous economic catch-up growth and tech expansion, but excessive fiscal budget deficits demand tax hikes and spending restraint. fast catch-up budget deficits black sea gas it cluster"
  },
  {
    "rank": 44,
    "name": "Albania",
    "topoName": "Albania",
    "id": "ALB",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "14:03",
    "videoSeconds": 843,
    "region": "Europe",
    "coordinates": [
      20.1683,
      41.1533
    ],
    "isMicrostate": false,
    "summary": "Tourism is booming on the Riviera, but simultaneously seeing skilled workers leave; needs to turn seasonal hospitality into permanent careers.",
    "headwinds": [
      "Simultaneous influx of summer tourists and exodus of skilled youth seeking work in Western Europe",
      "High informality in coastal tourism and real estate development",
      "Governance and anti-corruption institutions still developing"
    ],
    "tailwinds": [
      "Explosive growth in Mediterranean tourism receipts and foreign visitor numbers",
      "Nearly 100% of domestic electricity produced from renewable hydropower",
      "Active progress in European Union accession negotiations and judicial reform",
      "Substantial remittances providing poverty reduction buffers"
    ],
    "transcriptExcerpt": "Albania combines two problems we've already seen. Tourists are arriving, skilled workers are leaving, but these are happening at once. More hotels, but the country also needs year-round careerbound tourism and construction. So, yellow.",
    "tags": [
      "Tourism Boom",
      "Youth Emigration",
      "Hydropower Grid",
      "EU Reforms"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=843s",
    "_searchStr": "albania europe tourism is booming on the riviera, but simultaneously seeing skilled workers leave; needs to turn seasonal hospitality into permanent careers. tourism boom youth emigration hydropower grid eu reforms"
  },
  {
    "rank": 45,
    "name": "India",
    "topoName": "India",
    "id": "IND",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "14:18",
    "videoSeconds": 858,
    "region": "Asia",
    "coordinates": [
      78.9629,
      20.5937
    ],
    "isMicrostate": false,
    "summary": "World's largest young population and digital services leader, but faces potential AI disruption to outsourced IT and a race to create 100M+ jobs.",
    "headwinds": [
      "AI threatens to automate entry-level software and business process outsourcing (BPO) jobs",
      "Massive challenge of generating tens of millions of formal manufacturing jobs for youth",
      "Severe climate vulnerabilities: lethal heatwaves, irregular monsoons, and urban air pollution",
      "Geopolitical border friction with China and Pakistan"
    ],
    "tailwinds": [
      "World's largest and fastest-growing major economy with unmatched demographic scale",
      "World-class digital public infrastructure (UPI, Aadhaar) driving financial inclusion",
      "Aggressive manufacturing incentives (PLI) capturing global supply chains (Apple, electronics)",
      "Vast English-speaking engineering and technical talent base"
    ],
    "transcriptExcerpt": "The world's largest population sounds like a fairly good thing to have. It can be... India already sells software and services to the rest of the world and new roads, ports, and factories are going up across the country. But the thing is, AI complicates things quite a lot... AI could take over some of the outsourced work India sells abroad. So all those people are only an advantage if enough of them find good jobs. Yellow.",
    "tags": [
      "Population Scale",
      "AI Disruption",
      "Digital Economy",
      "Manufacturing PLI"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=858s",
    "_searchStr": "india asia world's largest young population and digital services leader, but faces potential ai disruption to outsourced it and a race to create 100m+ jobs. population scale ai disruption digital economy manufacturing pli"
  },
  {
    "rank": 46,
    "name": "Nepal",
    "topoName": "Nepal",
    "id": "NPL",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "14:55",
    "videoSeconds": 895,
    "region": "Asia",
    "coordinates": [
      84.124,
      28.3949
    ],
    "isMicrostate": false,
    "summary": "Economy supported by overseas remittances, leaving households vulnerable to changes in foreign host-country labor rules.",
    "headwinds": [
      "Extreme economic dependence on remittances (~25-30% of GDP) from Gulf states and Malaysia",
      "High vulnerability of households to immigration and labor policy shifts abroad",
      "Severe seismic hazards, glacial lake outburst floods, and mountain landslides"
    ],
    "tailwinds": [
      "Massive Himalayan hydropower potential now exporting electricity to India and Bangladesh",
      "Growing ecotourism and mountaineering foreign exchange earnings",
      "Prudent external debt management compared to other South Asian peers",
      "Strategic transit balancing between giant neighbors China and India"
    ],
    "transcriptExcerpt": "Nepal's economy is held up by people going abroad to work and sending money home. That pays for food, education, and houses of the families of these people. It also leaves families dependent on jobs and immigration rules in other countries. Yellow.",
    "tags": [
      "Remittances",
      "Hydropower Export",
      "Himalayas",
      "Seismic Risk"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=895s",
    "_searchStr": "nepal asia economy supported by overseas remittances, leaving households vulnerable to changes in foreign host-country labor rules. remittances hydropower export himalayas seismic risk"
  },
  {
    "rank": 47,
    "name": "Côte d'Ivoire",
    "topoName": "Côte d'Ivoire",
    "id": "CIV",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "15:09",
    "videoSeconds": 909,
    "region": "Africa",
    "coordinates": [
      -5.5471,
      7.54
    ],
    "isMicrostate": false,
    "summary": "West Africa's economic engine growing rapidly through cocoa and port logistics, needing to translate national growth into household wages.",
    "headwinds": [
      "Fluctuations in global cocoa harvests due to climate volatility and swollen shoot virus",
      "Sahel terrorist violence threatening northern border security",
      "Translating strong macro GDP numbers into tangible formal household income"
    ],
    "tailwinds": [
      "Fastest growing economy in West Africa with major infrastructure modernization",
      "World's #1 cocoa producer actively building domestic processing plants",
      "Commercial offshore oil and gas discoveries (Baleine field) coming online",
      "Abidjan serves as the premier commercial and financial gateway to Francophone Africa"
    ],
    "transcriptExcerpt": "Côte d'Ivoire has grown strongly. The next step is creating more well-paid work beyond its successful exports. So, a good national growth figure becomes a better household income. Yellow.",
    "tags": [
      "West Africa Hub",
      "Cocoa Processing",
      "Offshore Oil",
      "Infrastructure"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=909s",
    "_searchStr": "côte d'ivoire africa west africa's economic engine growing rapidly through cocoa and port logistics, needing to translate national growth into household wages. west africa hub cocoa processing offshore oil infrastructure"
  },
  {
    "rank": 48,
    "name": "Ghana",
    "topoName": "Ghana",
    "id": "GHA",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "15:19",
    "videoSeconds": 919,
    "region": "Africa",
    "coordinates": [
      -1.0232,
      7.9465
    ],
    "isMicrostate": false,
    "summary": "Recovering steadily after comprehensive debt restructuring, giving its democracy a clear path to fiscal repair and renewed investment.",
    "headwinds": [
      "Strict post-debt-restructuring austerity curbs government spending",
      "Inflation and currency depreciation (Cedi) eroded household purchasing power",
      "Illegal artisanal gold mining (galamsey) causing severe river pollution"
    ],
    "tailwinds": [
      "Successfully concluded sovereign debt restructuring, opening multilateral lending",
      "Africa's leading gold producer alongside substantial cocoa and oil exports",
      "One of Africa's most resilient and mature multi-party constitutional democracies",
      "Attracting major tech corporate regional headquarters in Accra"
    ],
    "transcriptExcerpt": "Ghana has been recovering after restructuring its debt. That gave it a chance to repair its finances and get investment moving again. Both yellow.",
    "tags": [
      "Debt Restructuring",
      "Gold & Cocoa",
      "Democracy",
      "Economic Recovery"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=919s",
    "_searchStr": "ghana africa recovering steadily after comprehensive debt restructuring, giving its democracy a clear path to fiscal repair and renewed investment. debt restructuring gold & cocoa democracy economic recovery"
  },
  {
    "rank": 49,
    "name": "Tanzania",
    "topoName": "Tanzania",
    "id": "TZA",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "15:28",
    "videoSeconds": 928,
    "region": "Africa",
    "coordinates": [
      34.8888,
      -6.369
    ],
    "isMicrostate": false,
    "summary": "Young, fast-growing population and rich mining/tourism endowments; needs reliable grid power and transport to employ youth.",
    "headwinds": [
      "Grid power unreliability and infrastructure deficits slowing industrialisation",
      "Pressure to create millions of formal jobs for a very rapidly expanding youth population",
      "Bureaucratic and regulatory unpredictability for foreign investors"
    ],
    "tailwinds": [
      "Massive Julius Nyerere Hydropower Dam significantly boosting national power capacity",
      "Rich natural endowments in gold, nickel, rare earth minerals, and safari tourism (Serengeti)",
      "Strategic Indian Ocean port gateway (Dar es Salaam) serving six landlocked neighbors",
      "Long history of peaceful multi-ethnic coexistence and political stability"
    ],
    "transcriptExcerpt": "Tanzania has a growing young population, too. Mining and tourism bring in money, but you need a lot of it to reach businesses that can actually employ people entering the workforce. More reliable power and transport would help those businesses expand. Yellow.",
    "tags": [
      "Hydropower Dam",
      "Mining & Safari",
      "Port Gateway",
      "Youth Demographic"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=928s",
    "_searchStr": "tanzania africa young, fast-growing population and rich mining/tourism endowments; needs reliable grid power and transport to employ youth. hydropower dam mining & safari port gateway youth demographic"
  },
  {
    "rank": 50,
    "name": "South Africa",
    "topoName": "South Africa",
    "id": "ZAF",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "15:40",
    "videoSeconds": 940,
    "region": "Africa",
    "coordinates": [
      22.9375,
      -30.5595
    ],
    "isMicrostate": false,
    "summary": "Blackouts have eased, but broken freight rail, congested ports, and >30% unemployment require urgent structural reform.",
    "headwinds": [
      "Dysfunctional freight rail (Transnet) and congested ports forcing expensive road trucking",
      "Chronically high unemployment above 30%, with youth unemployment exceeding 50%",
      "High violent crime rates and severe economic inequality"
    ],
    "tailwinds": [
      "Significant turnaround in electricity generation ending chronic Eskom load-shedding",
      "New Government of National Unity (GNU) pursuing pragmatic pro-growth market reforms",
      "World's most sophisticated African financial markets, banking system, and independent judiciary",
      "Unmatched global reserves of platinum group metals (PGMs), manganese, and chrome"
    ],
    "transcriptExcerpt": "South Africa has businesses ready to hire. The hard part is getting their products to the customer. Take a mine. It has the minerals. Someone overseas wants to buy them. Now it just has to get them to the coast. The railway isn't moving enough freight... Now the blackouts have eased. That is real progress, but the railways, ports, and water supply still need fixing, and unemployment is still above 30%. Yellow.",
    "tags": [
      "Load-Shedding Eased",
      "Rail & Ports",
      "Unemployment >30%",
      "Critical Minerals"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=940s",
    "_searchStr": "south africa africa blackouts have eased, but broken freight rail, congested ports, and >30% unemployment require urgent structural reform. load-shedding eased rail & ports unemployment >30% critical minerals"
  },
  {
    "rank": 51,
    "name": "Eswatini",
    "topoName": "eSwatini",
    "id": "SWZ",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "16:19",
    "videoSeconds": 979,
    "region": "Africa",
    "coordinates": [
      31.4659,
      -26.5225
    ],
    "isMicrostate": true,
    "summary": "Economy tightly coupled to South Africa's logistics and SACU revenue; requires industrial diversification to absorb youth.",
    "headwinds": [
      "Heavy fiscal reliance on volatile SACU customs receipts tied to South Africa's economy",
      "Absolute monarchy facing pro-democracy unrest and civil society friction",
      "High burden of communicable diseases and high youth unemployment"
    ],
    "tailwinds": [
      "Integrated trade and financial ties with South Africa (currency pegged to the Rand)",
      "Competitive sugar, forestry, and beverage concentrate export manufacturing",
      "Modest sovereign debt levels compared to regional peers",
      "Expanding textile and light manufacturing export parks"
    ],
    "transcriptExcerpt": "Eswatini depends heavily on South Africa for trade and income, so those problems don't stop at the border. It also needs more jobs beyond a small number of industries. Yellow.",
    "tags": [
      "SACU Receipts",
      "South Africa Peg",
      "Sugar Exports",
      "Monarchy"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=979s",
    "_searchStr": "eswatini africa economy tightly coupled to south africa's logistics and sacu revenue; requires industrial diversification to absorb youth. sacu receipts south africa peg sugar exports monarchy"
  },
  {
    "rank": 52,
    "name": "Morocco",
    "topoName": "Morocco",
    "id": "MAR",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "16:40",
    "videoSeconds": 1000,
    "region": "Africa",
    "coordinates": [
      -7.0926,
      31.7917
    ],
    "isMicrostate": false,
    "summary": "Controls 70% of the world's phosphate fertilizer reserves and booming auto exports, but chronic multi-year drought threatens farms.",
    "headwinds": [
      "Consecutive years of severe drought exhausting agricultural reservoirs and displacing rural workers",
      "Western Sahara sovereignty dispute remains a diplomatic flashpoint with Algeria",
      "High energy import bills for domestic baseload power"
    ],
    "tailwinds": [
      "Controls roughly two-thirds of the world's phosphate reserves essential for global food production",
      "Africa's leading automotive manufacturing exporter (Renault, Stellantis plants)",
      "Massive investments in solar/wind megaprojects (Noor Ouarzazate) and seawater desalination",
      "Strategic Mediterranean maritime gateway via the automated Tanger Med mega-port"
    ],
    "transcriptExcerpt": "Morocco has something even more essential. An enormous share of the world's phosphate reserves. The US Geological Survey puts roughly 2/3 under Morocco, including disputed Western Sahara. Phosphorus goes into fertilizer. The world needs it to grow food. Unfortunately, Morocco also needs rain. Repeated drought hurts its own farms and pushes people to look for other work. Car manufacturing and tourism give it more ways to earn. Yellow.",
    "tags": [
      "Phosphate Monopoly",
      "Severe Drought",
      "Automotive Hub",
      "Desalination"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1000s",
    "_searchStr": "morocco africa controls 70% of the world's phosphate fertilizer reserves and booming auto exports, but chronic multi-year drought threatens farms. phosphate monopoly severe drought automotive hub desalination"
  },
  {
    "rank": 53,
    "name": "Zambia",
    "topoName": "Zambia",
    "id": "ZMB",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "17:10",
    "videoSeconds": 1030,
    "region": "Africa",
    "coordinates": [
      27.8493,
      -13.1339
    ],
    "isMicrostate": false,
    "summary": "Copper wealth needed for global green transition, but 85% hydropower reliance leaves mining vulnerable to severe regional drought.",
    "headwinds": [
      "80-85% reliance on hydropower: severe drought dramatically cuts mining and smelter power",
      "Long-term legacy debt overhang despite successful restructuring negotiations",
      "Transport bottlenecks moving bulk copper to distant Indian/Atlantic Ocean ports"
    ],
    "tailwinds": [
      "Tremendous high-grade copper and cobalt deposits essential for global electrification",
      "Successful milestone debt restructuring agreement under the G20 Common Framework",
      "Support from the US and EU for the Lobito Railway Corridor to Angola's Atlantic coast",
      "Stable democratic transitions and investor-friendly mining tax policies"
    ],
    "transcriptExcerpt": "Zambia has copper the world wants. Between 80 and 85% of its electricity comes from hydropower though, including the power its mines need. So when drought hits, copper production suffers, too. That restructuring has helped, but a valuable export still needs electricity. Yellow.",
    "tags": [
      "Copper Riches",
      "Hydropower Drought",
      "Lobito Corridor",
      "Debt Restructuring"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1030s",
    "_searchStr": "zambia africa copper wealth needed for global green transition, but 85% hydropower reliance leaves mining vulnerable to severe regional drought. copper riches hydropower drought lobito corridor debt restructuring"
  },
  {
    "rank": 54,
    "name": "Namibia",
    "topoName": "Namibia",
    "id": "NAM",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "17:25",
    "videoSeconds": 1045,
    "region": "Africa",
    "coordinates": [
      18.4904,
      -22.9576
    ],
    "isMicrostate": false,
    "summary": "Uranium, diamonds, and massive offshore oil discoveries, but turning resource finds into jobs in an arid land takes time.",
    "headwinds": [
      "Extreme water scarcity in an arid desert geography",
      "High structural unemployment and wealth inequality despite resource wealth",
      "Long lead times of 5-8 years before newly discovered offshore oil delivers state revenue"
    ],
    "tailwinds": [
      "World's second-largest producer of uranium with multiple new mine developments",
      "String of multi-billion-barrel offshore oil discoveries (TotalEnergies, Shell, Galp)",
      "World-class green hydrogen and solar energy project potential in the Namib Desert",
      "Stable constitutional democracy and pristine maritime fisheries"
    ],
    "transcriptExcerpt": "Namibia has uranium, diamonds, and a string of big oil discoveries off its coast. What it's short of is water and jobs. Turning these discoveries into an industry that employs people takes years. Yellow.",
    "tags": [
      "Uranium",
      "Offshore Oil Finds",
      "Water Scarcity",
      "Green Hydrogen"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1045s",
    "_searchStr": "namibia africa uranium, diamonds, and massive offshore oil discoveries, but turning resource finds into jobs in an arid land takes time. uranium offshore oil finds water scarcity green hydrogen"
  },
  {
    "rank": 55,
    "name": "Jordan",
    "topoName": "Jordan",
    "id": "JOR",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "17:36",
    "videoSeconds": 1056,
    "region": "Middle East",
    "coordinates": [
      36.2384,
      30.5852
    ],
    "isMicrostate": false,
    "summary": "Extreme water scarcity and high refugee populations in an unstable neighborhood, anchored by Western alliances and stability.",
    "headwinds": [
      "One of the world's most severe physical water deficits requiring costly Red Sea desalination",
      "Regional conflicts (Gaza/Lebanon/Syria) disrupt trade corridors and tourism",
      "High youth unemployment and elevated public debt levels"
    ],
    "tailwinds": [
      "Crucial geopolitical anchor of stability with ironclad US and Western defense backing",
      "Significant phosphate and potash fertilizer exports (Dead Sea minerals)",
      "Expanding solar energy capacity and skilled medical/IT workforce",
      "Disciplined IMF economic reform compliance maintaining investor confidence"
    ],
    "transcriptExcerpt": "Jordan has extreme water scarcity and limited money to deal with it. It also has to keep the trade and tourism going in a region where a war can undo a good year very quickly. Yellow.",
    "tags": [
      "Water Scarcity",
      "Regional Stability",
      "Western Ally",
      "Potash & Tourism"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1056s",
    "_searchStr": "jordan middle east extreme water scarcity and high refugee populations in an unstable neighborhood, anchored by western alliances and stability. water scarcity regional stability western ally potash & tourism"
  },
  {
    "rank": 56,
    "name": "Indonesia",
    "topoName": "Indonesia",
    "id": "IDN",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "17:54",
    "videoSeconds": 1074,
    "region": "Asia",
    "coordinates": [
      113.9213,
      -0.7893
    ],
    "isMicrostate": false,
    "summary": "Banned raw nickel exports to build domestic smelters; facing battery chemistry shifts toward LFP, but cushioned by a 280M consumer base.",
    "headwinds": [
      "Global EV battery chemistry shifting towards LFP (iron-phosphate), dampening nickel premium",
      "Environmental costs, coal-powered nickel smelters, and deforestation scrutiny",
      "Fiscal cost of massive social programs and capital relocation to Nusantara"
    ],
    "tailwinds": [
      "World's undisputed largest nickel reserves, successfully localized processing value chain",
      "Vast domestic consumer economy with 280 million citizens providing internal growth resilience",
      "Abundant mineral wealth spanning bauxite, copper, tin, and geothermal power",
      "Prudent statutory ceiling on sovereign budget deficits (max 3% GDP)"
    ],
    "transcriptExcerpt": "Indonesia decided it was tired of selling raw nickel and watching other countries get processing jobs. So, it banned exports of nickel ore... Processing plants brought investment. But nickel is used in stainless steel and some electric car batteries. And battery makers have started doing something deeply inconsiderate to Indonesia: making more batteries without nickel... Fortunately, Indonesia has a huge economy beyond mining with millions of customers at home. Yellow.",
    "tags": [
      "Nickel Smelting",
      "LFP Batteries",
      "Consumer Market",
      "Downstreaming"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1074s",
    "_searchStr": "indonesia asia banned raw nickel exports to build domestic smelters; facing battery chemistry shifts toward lfp, but cushioned by a 280m consumer base. nickel smelting lfp batteries consumer market downstreaming"
  },
  {
    "rank": 57,
    "name": "Vietnam",
    "topoName": "Vietnam",
    "id": "VNM",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "18:40",
    "videoSeconds": 1120,
    "region": "Asia",
    "coordinates": [
      108.2772,
      14.0583
    ],
    "isMicrostate": false,
    "summary": "Premier global factory floor capturing electronics supply chains, but vulnerable to US tariffs and aging before reaching high income.",
    "headwinds": [
      "Risk of punitive US and Western tariffs due to ballooning trade surpluses and transshipment scrutiny",
      "Demographic aging starting before achieving high-income nation status",
      "Infrastructure bottlenecks in grid electricity during scorching dry seasons"
    ],
    "tailwinds": [
      "Primary beneficiary of multinational supply chain diversification away from China",
      "World-leading electronics assembly hub for smartphones, chips, and consumer goods",
      "Dense network of free trade agreements (CPTPP, EVFTA, RCEP)",
      "Disciplined, pragmatic leadership maintaining neutral diplomatic balancing ('bamboo diplomacy')"
    ],
    "transcriptExcerpt": "Vietnam has become very good at making things for customers abroad. That brings factories and jobs. It also means a tariff announced in another capital can threaten someone's overtime in Vietnam. And Vietnam is aging before becoming wealthy. It needs to turn those factories into better paid work before a smaller workforce has to support more retirees. Yellow.",
    "tags": [
      "Factory Floor",
      "Tariff Vulnerability",
      "Aging Early",
      "Bamboo Diplomacy"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1120s",
    "_searchStr": "vietnam asia premier global factory floor capturing electronics supply chains, but vulnerable to us tariffs and aging before reaching high income. factory floor tariff vulnerability aging early bamboo diplomacy"
  },
  {
    "rank": 58,
    "name": "Thailand",
    "topoName": "Thailand",
    "id": "THA",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "19:01",
    "videoSeconds": 1141,
    "region": "Asia",
    "coordinates": [
      100.9925,
      15.87
    ],
    "isMicrostate": false,
    "summary": "Automotive 'Detroit of Asia' and global tourism giant; needs to upskill its workforce as population ages rapidly.",
    "headwinds": [
      "Rapidly aging population with birth rates plummeting towards East Asian lows",
      "Intense competition from Chinese EV imports displacing traditional Japanese ICE auto supply chains",
      "Elevated household debt-to-GDP levels curbing consumer spending"
    ],
    "tailwinds": [
      "Established manufacturing base as Southeast Asia's top automotive and electronics hub",
      "Attracting massive Chinese EV production investments (BYD, Great Wall, MG)",
      "World-class tourism destination welcoming over 35 million visitors annually",
      "Central geographic gateway across mainland Southeast Asia (Mekong corridor)"
    ],
    "transcriptExcerpt": "Thailand faces a similar race. Its car industry and tourism earn money, but an aging workforce needs better equipment and skills to keep income rising. Yellow.",
    "tags": [
      "Auto Hub",
      "Aging Population",
      "EV Competition",
      "Tourism"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1141s",
    "_searchStr": "thailand asia automotive 'detroit of asia' and global tourism giant; needs to upskill its workforce as population ages rapidly. auto hub aging population ev competition tourism"
  },
  {
    "rank": 59,
    "name": "Philippines",
    "topoName": "Philippines",
    "id": "PHL",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "19:10",
    "videoSeconds": 1150,
    "region": "Asia",
    "coordinates": [
      121.774,
      12.8797
    ],
    "isMicrostate": false,
    "summary": "Young, English-fluent population and booming BPO/remittance revenues, challenged by annual typhoon destruction and infrastructure gaps.",
    "headwinds": [
      "Acute exposure to catastrophic typhoons, flooding, and climate disruption (20+ storms/yr)",
      "Severe transport congestion and infrastructure bottlenecks in metropolitan Manila",
      "Geopolitical tensions with China over maritime sovereignty in the West Philippine Sea"
    ],
    "tailwinds": [
      "Young, growing English-proficient workforce driving massive BPO IT service exports",
      "Enormous, steady foreign remittance inflows ($38B+ annually) powering domestic consumption",
      "Ambitious 'Build-Better-More' infrastructure modernization upgrading rail, airports, and bridges",
      "Strengthened defense alliances with the US, Japan, and Australia"
    ],
    "transcriptExcerpt": "The Philippines has more young workers. It needs enough well-paid jobs for them as well, plus infrastructure that can survive repeated storms. Yellow.",
    "tags": [
      "Young Demographic",
      "BPO & IT",
      "Typhoon Damage",
      "Remittances"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1150s",
    "_searchStr": "philippines asia young, english-fluent population and booming bpo/remittance revenues, challenged by annual typhoon destruction and infrastructure gaps. young demographic bpo & it typhoon damage remittances"
  },
  {
    "rank": 60,
    "name": "Cambodia",
    "topoName": "Cambodia",
    "id": "KHM",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "19:19",
    "videoSeconds": 1159,
    "region": "Asia",
    "coordinates": [
      104.991,
      12.5657
    ],
    "isMicrostate": false,
    "summary": "Garment manufacturing and tourism drive growth, but high real estate debt and bad bank loans weigh on future lending.",
    "headwinds": [
      "Overhang of troubled real estate developments and non-performing loans in banking system",
      "Heavy economic and political dependency on Chinese investment and bilateral lending",
      "Vulnerability to export tariffs on garment and footwear shipments"
    ],
    "tailwinds": [
      "Cost-competitive garment, footwear, and bicycle manufacturing sector",
      "World-renowned tourism revenue generated by Angkor Wat archaeological complex",
      "Expanding infrastructure integration, including deep-sea port expansion at Sihanoukville",
      "Young labor demographic with rising vocational training"
    ],
    "transcriptExcerpt": "Cambodia has grown through exports, tourism, and construction. Weakness is property, and troubled loans can make banks less willing to finance the next business. Yellow.",
    "tags": [
      "Garment Exports",
      "Angkor Tourism",
      "Real Estate Debt",
      "Bank NPLs"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1159s",
    "_searchStr": "cambodia asia garment manufacturing and tourism drive growth, but high real estate debt and bad bank loans weigh on future lending. garment exports angkor tourism real estate debt bank npls"
  },
  {
    "rank": 61,
    "name": "Saudi Arabia",
    "topoName": "Saudi Arabia",
    "id": "SAU",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "19:30",
    "videoSeconds": 1170,
    "region": "Middle East",
    "coordinates": [
      45.0792,
      23.8859
    ],
    "isMicrostate": false,
    "summary": "Using oil wealth to fund Vision 2030 modernization, but extravagant mega-projects cost fortunes while regional shipping conflicts threaten transit.",
    "headwinds": [
      "Extremely costly Vision 2030 gigaprojects (NEOM, Red Sea) requiring scaling back or debt issuance",
      "Vulnerability of maritime energy shipping corridors to regional conflicts (Hormuz & Red Sea)",
      "Long-term transition away from oil demanding rapid non-oil revenue creation"
    ],
    "tailwinds": [
      "World's lowest extraction cost crude oil reserves with immense cash generation",
      "Public Investment Fund (PIF) deploying roughly $1 trillion in global and domestic assets",
      "Rapid domestic social modernization: female workforce participation doubled in 5 years",
      "Expanding domestic tourism, mining, logistics, and renewable solar installations"
    ],
    "transcriptExcerpt": "Saudi Arabia is using its oil income to build tourism factories, transport, and enormous construction projects, hoping they'll eventually support an economy less dependent on oil. This costs an enormous amount of money... and lower oil income makes it harder to fund all those plans at once... and conflict that disrupts shipping can damage the business paying for the transformation. Yellow.",
    "tags": [
      "Vision 2030",
      "Oil Wealth",
      "PIF Sovereign Fund",
      "Shipping Chokepoint"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1170s",
    "_searchStr": "saudi arabia middle east using oil wealth to fund vision 2030 modernization, but extravagant mega-projects cost fortunes while regional shipping conflicts threaten transit. vision 2030 oil wealth pif sovereign fund shipping chokepoint"
  },
  {
    "rank": 62,
    "name": "Guyana",
    "topoName": "Guyana",
    "id": "GUY",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "20:14",
    "videoSeconds": 1214,
    "region": "Americas",
    "coordinates": [
      -58.9302,
      4.8604
    ],
    "isMicrostate": false,
    "summary": "Staggering offshore oil boom makes it the world's fastest-growing economy per capita; challenge is avoiding Dutch disease and corruption.",
    "headwinds": [
      "Risk of Dutch Disease, inflation, and overheating from sudden massive capital inflows",
      "Severe geopolitical and territorial threats from neighboring Venezuela claiming Essequibo",
      "Shortage of skilled administrative, engineering, and healthcare personnel to manage growth"
    ],
    "tailwinds": [
      "Offshore Stabroek block holds >11 billion barrels of sweet light crude discovered by ExxonMobil",
      "Highest GDP growth rate in the world over recent years for a population of just 800,000",
      "Natural Resource Fund established to preserve oil windfalls for future generations",
      "Major investments in gas-to-energy power, highways, and deepwater ports"
    ],
    "transcriptExcerpt": "New oil production has made its economy grow at an incredible speed for a small population. That income could transform roads, hospitals, and schools. But the government has to manage the spending, get good value from construction, and avoid becoming dependent on oil prices staying high. Norway took decades to build its fund. Guyana now has the money to start building a much richer country. Yellow.",
    "tags": [
      "Oil Bonanza",
      "Essequibo Risk",
      "Fastest Growth",
      "Small Population"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1214s",
    "_searchStr": "guyana americas staggering offshore oil boom makes it the world's fastest-growing economy per capita; challenge is avoiding dutch disease and corruption. oil bonanza essequibo risk fastest growth small population"
  },
  {
    "rank": 63,
    "name": "Kuwait",
    "topoName": "Kuwait",
    "id": "KWT",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "20:41",
    "videoSeconds": 1241,
    "region": "Middle East",
    "coordinates": [
      47.4818,
      29.3117
    ],
    "isMicrostate": true,
    "summary": "The pioneer of sovereign wealth funds (since 1953) with immense financial buffers, though political deadlocks have slowed economic diversification.",
    "headwinds": [
      "Extreme fiscal dependence on oil sales (over 90% of government revenues)",
      "Parliamentary friction repeatedly delayed debt laws and non-oil taxation reforms",
      "Severe climate exposure to extreme summer desert temperatures exceeding 52°C"
    ],
    "tailwinds": [
      "Kuwait Investment Authority (KIA) manages >$800 billion in offshore sovereign assets",
      "Inception date 1953 predated Norway's fund by decades, building profound financial cushions",
      "Virtually zero net public debt and very low crude production cost",
      "Substantial domestic capital and high citizen purchasing power"
    ],
    "transcriptExcerpt": "Kuwait is actually the OG in oil revenue being used for investments and got there before Norway. So they have to get some credit for that. It has been building up investments abroad since 1953. That gives it money to draw on when oil income falls. Yellow.",
    "tags": [
      "Pioneer Fund",
      "KIA $800B",
      "Oil Dependence",
      "Fiscal Buffer"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1241s",
    "_searchStr": "kuwait middle east the pioneer of sovereign wealth funds (since 1953) with immense financial buffers, though political deadlocks have slowed economic diversification. pioneer fund kia $800b oil dependence fiscal buffer"
  },
  {
    "rank": 64,
    "name": "Qatar",
    "topoName": "Qatar",
    "id": "QAT",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "20:54",
    "videoSeconds": 1254,
    "region": "Middle East",
    "coordinates": [
      51.1839,
      25.3548
    ],
    "isMicrostate": true,
    "summary": "Global liquefied natural gas (LNG) export powerhouse with vast wealth, with exports passing through the vulnerable Strait of Hormuz.",
    "headwinds": [
      "100% of sea-borne LNG carrier traffic must navigate the narrow Strait of Hormuz",
      "Geopolitical risks in the Persian Gulf and volatile regional diplomatic tensions",
      "Over-reliance on foreign labor for virtually all private and construction sectors"
    ],
    "tailwinds": [
      "North Field mega-expansion cementing position as top low-cost LNG exporter to 2050",
      "Qatar Investment Authority (QIA) holds >$500 billion across global trophy assets and tech",
      "Exceptionally high GDP per capita with negligible sovereign borrowing risks",
      "Global diplomatic mediation role and premier aviation hub (Qatar Airways)"
    ],
    "transcriptExcerpt": "Qatar has gas that customers need with exports exposed to disruption around the Strait of Hormuz. Yellow.",
    "tags": [
      "LNG Superpower",
      "Strait of Hormuz",
      "QIA Fund",
      "High Wealth"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1254s",
    "_searchStr": "qatar middle east global liquefied natural gas (lng) export powerhouse with vast wealth, with exports passing through the vulnerable strait of hormuz. lng superpower strait of hormuz qia fund high wealth"
  },
  {
    "rank": 65,
    "name": "UAE",
    "topoName": "United Arab Emirates",
    "id": "ARE",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "21:01",
    "videoSeconds": 1261,
    "region": "Middle East",
    "coordinates": [
      53.8478,
      23.4241
    ],
    "isMicrostate": false,
    "summary": "Transformed into a premier global hub for finance, tourism, and aviation; vulnerable only if regional conflict threatens skies or sea lanes.",
    "headwinds": [
      "Regional military escalation could threaten aviation safety and foreign tourist confidence",
      "Intense regional economic competition from Saudi Arabia's Riyadh relocation drive",
      "Real estate market cyclicality in Dubai"
    ],
    "tailwinds": [
      "Highly diversified non-oil economy: global trade, aviation, private wealth, and logistics",
      "Massive sovereign reserves across ADIA, Mubadala, and ICD exceeding $1.5 trillion",
      "Fujairah crude pipeline bypasses the Strait of Hormuz directly to the Indian Ocean",
      "Magnet for global talent, international capital, and AI tech innovation"
    ],
    "transcriptExcerpt": "United Arab Emirates has built finance, tourism, logistics, and other businesses beyond oil. Those work best when people feel comfortable flying in and ships can get through. Yellow.",
    "tags": [
      "Global Hub",
      "Dubai / Abu Dhabi",
      "Sovereign Funds",
      "Hormuz Bypass"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1261s",
    "_searchStr": "uae middle east transformed into a premier global hub for finance, tourism, and aviation; vulnerable only if regional conflict threatens skies or sea lanes. global hub dubai / abu dhabi sovereign funds hormuz bypass"
  },
  {
    "rank": 66,
    "name": "Oman",
    "topoName": "Oman",
    "id": "OMN",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "21:11",
    "videoSeconds": 1271,
    "region": "Middle East",
    "coordinates": [
      55.9233,
      21.5126
    ],
    "isMicrostate": false,
    "summary": "Lowered public debt and boasts strategic Indian Ocean ports outside the Strait of Hormuz, but exposed to broader regional instability.",
    "headwinds": [
      "Maturing oil reserves require enhanced recovery techniques",
      "Regional war spillover risks affecting maritime trade routes and insurance rates",
      "Youth employment pressures in the domestic labor market"
    ],
    "tailwinds": [
      "Major deepwater ports (Duqm, Salalah) situated outside the vulnerable Strait of Hormuz",
      "Aggressive sovereign fiscal consolidation successfully slashing public debt ratios",
      "Major investments in green hydrogen and solar energy export infrastructure",
      "Longstanding reputation as a neutral diplomatic mediator in the Middle East"
    ],
    "transcriptExcerpt": "Oman has brought its debt down and has ports outside Hormuz. That improves its position, although a regional crisis still affects its customers and neighbors. Yellow.",
    "tags": [
      "Outside Hormuz",
      "Debt Reduction",
      "Green Hydrogen",
      "Neutral Diplomat"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1271s",
    "_searchStr": "oman middle east lowered public debt and boasts strategic indian ocean ports outside the strait of hormuz, but exposed to broader regional instability. outside hormuz debt reduction green hydrogen neutral diplomat"
  },
  {
    "rank": 67,
    "name": "Algeria",
    "topoName": "Algeria",
    "id": "DZA",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "21:21",
    "videoSeconds": 1281,
    "region": "Africa",
    "coordinates": [
      1.6596,
      28.0339
    ],
    "isMicrostate": false,
    "summary": "Oil and gas exports fund state spending and subsea pipelines to Europe, but employ only a tiny share of its youthful population.",
    "headwinds": [
      "Hydrocarbons generate ~90% of export earnings while employing very few people",
      "High public sector wage bill and extensive subsidy regime draining foreign exchange",
      "Diplomatic rupture and closed land borders with neighboring Morocco"
    ],
    "tailwinds": [
      "Direct subsea natural gas pipelines (TransMed, Medgaz) feeding Italy and Spain",
      "Virtually zero external foreign sovereign debt and solid foreign exchange reserves",
      "Vast solar energy generation potential across the Sahara desert",
      "Strong military deterrence and internal security apparatus"
    ],
    "transcriptExcerpt": "Algeria shows another limit of the oil and gas plan. The exports can pay for government spending while employing only a small share of the population with jobs. Yellow.",
    "tags": [
      "Gas Pipelines",
      "Europe Energy",
      "Zero External Debt",
      "Subsidy Burden"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1281s",
    "_searchStr": "algeria africa oil and gas exports fund state spending and subsea pipelines to europe, but employ only a tiny share of its youthful population. gas pipelines europe energy zero external debt subsidy burden"
  },
  {
    "rank": 68,
    "name": "Mauritania",
    "topoName": "Mauritania",
    "id": "MRT",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "21:31",
    "videoSeconds": 1291,
    "region": "Africa",
    "coordinates": [
      -10.9408,
      20.3069
    ],
    "isMicrostate": false,
    "summary": "Offshore natural gas, rich iron ore, and Atlantic fisheries expand revenue, but development depends on transparent resource governance.",
    "headwinds": [
      "Desertification and climate water scarcity impacting nomadic and pastoral communities",
      "Widespread poverty, historical social stratification, and weak educational infrastructure",
      "Sahel regional jihadist instability along the eastern border with Mali"
    ],
    "tailwinds": [
      "Grand Tortue Ahmeyim (GTA) offshore LNG project coming online to boost exports",
      "Extensive high-grade iron ore deposits and rich Atlantic fishing grounds",
      "Stable security track record avoiding the military coups seen in the central Sahel",
      "Major green hydrogen development agreements signed with European developers"
    ],
    "transcriptExcerpt": "Mauritania's gas gives it another source of income alongside fishing and mining. The gain depends on how much reaches the budget and what gets built. Yellow.",
    "tags": [
      "Offshore Gas",
      "Iron Ore",
      "Fisheries",
      "Green Hydrogen"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1291s",
    "_searchStr": "mauritania africa offshore natural gas, rich iron ore, and atlantic fisheries expand revenue, but development depends on transparent resource governance. offshore gas iron ore fisheries green hydrogen"
  },
  {
    "rank": 69,
    "name": "Trinidad & Tobago",
    "topoName": "Trinidad and Tobago",
    "id": "TTO",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "21:39",
    "videoSeconds": 1299,
    "region": "Americas",
    "coordinates": [
      -61.2225,
      10.6918
    ],
    "isMicrostate": true,
    "summary": "Long-established Caribbean energy and ammonia hub facing natural gas field decline; needs cross-border offshore gas to sustain output.",
    "headwinds": [
      "Declining domestic natural gas production causing underutilization of LNG and petrochemical plants",
      "Rising violent crime and gang-related homicides",
      "Heavy fiscal reliance on volatile global ammonia and methanol prices"
    ],
    "tailwinds": [
      "Dragon gas field agreement with Venezuela to import cross-border offshore gas",
      "Deep industrial base in world-scale LNG, methanol, and ammonia export processing",
      "Heritage and Stabilization Fund provides financial cushion during energy downturns",
      "Highest industrial manufacturing capability in the CARICOM region"
    ],
    "transcriptExcerpt": "Trinidad and Tobago has a long-established energy industry. Falling production means less money for public services, so it needs investment to get more out of its oil and gas fields. Yellow.",
    "tags": [
      "Petrochemicals",
      "Gas Depletion",
      "Dragon Field",
      "Heritage Fund"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1299s",
    "_searchStr": "trinidad & tobago americas long-established caribbean energy and ammonia hub facing natural gas field decline; needs cross-border offshore gas to sustain output. petrochemicals gas depletion dragon field heritage fund"
  },
  {
    "rank": 70,
    "name": "Brazil",
    "topoName": "Brazil",
    "id": "BRA",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "21:50",
    "videoSeconds": 1310,
    "region": "Americas",
    "coordinates": [
      -51.9253,
      -14.235
    ],
    "isMicrostate": false,
    "summary": "Food, oil, and mineral superpower with a massive home market, held back by high interest rates and drought risks to its 50% hydro grid.",
    "headwinds": [
      "Punishingly high domestic real interest rates making business borrowing and expansion very costly",
      "Severe droughts threaten both agricultural harvest logistics and the 50%+ hydropower electricity grid",
      "Heavy public debt interest service crowding out fiscal spending on roads and rail"
    ],
    "tailwinds": [
      "Global agricultural powerhouse: world's #1 exporter of soybeans, beef, sugar, and orange juice",
      "Enormous offshore pre-salt oil production making it a top global crude producer",
      "Major mineral wealth (Vale iron ore, niobium, rare earths)",
      "Diversified domestic manufacturing and aerospace champion (Embraer)"
    ],
    "transcriptExcerpt": "Brazil has food, oil, minerals, manufacturing, and a huge market at home. They have it all except cheap borrowing. High interest rates make it expensive for business to buy machinery or expand... Then there's the rain. Brazil gets roughly half its electricity from hydropower. That's great until a drought comes and it hurts the harvest and electricity generation at the same time. So, yellow.",
    "tags": [
      "Agri-Superpower",
      "Pre-Salt Oil",
      "High Interest Rates",
      "Hydropower Drought"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1310s",
    "_searchStr": "brazil americas food, oil, and mineral superpower with a massive home market, held back by high interest rates and drought risks to its 50% hydro grid. agri-superpower pre-salt oil high interest rates hydropower drought"
  },
  {
    "rank": 71,
    "name": "Peru",
    "topoName": "Peru",
    "id": "PER",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "22:21",
    "videoSeconds": 1341,
    "region": "Americas",
    "coordinates": [
      -75.0152,
      -9.19
    ],
    "isMicrostate": false,
    "summary": "World's second-largest copper producer with solid central bank reserves, but chronic political turnover deters long-term investment.",
    "headwinds": [
      "Chronic presidential turnover and congressional conflict undermining long-term policy certainty",
      "Community protests and road blockades periodically halting major mining corridors",
      "Rising extortion and organized crime affecting small and medium businesses"
    ],
    "tailwinds": [
      "World's #2 copper producer and major exporter of gold, zinc, and silver",
      "Autonomous, highly disciplined Central Reserve Bank maintaining currency stability and low inflation",
      "Opening of the Chinese-funded Chancay mega-port establishing direct Pacific shipping to Asia",
      "Low public debt and substantial sovereign foreign exchange reserves"
    ],
    "transcriptExcerpt": "Peru also has valuable minerals and savings to help manage a downturn. Political instability and crime make companies less willing to invest in what comes next. Yellow.",
    "tags": [
      "Copper Mining",
      "Political Churn",
      "Chancay Mega-Port",
      "Forex Reserves"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1341s",
    "_searchStr": "peru americas world's second-largest copper producer with solid central bank reserves, but chronic political turnover deters long-term investment. copper mining political churn chancay mega-port forex reserves"
  },
  {
    "rank": 72,
    "name": "Colombia",
    "topoName": "Colombia",
    "id": "COL",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "22:30",
    "videoSeconds": 1350,
    "region": "Americas",
    "coordinates": [
      -74.2973,
      4.5709
    ],
    "isMicrostate": false,
    "summary": "Vibrant services and coffee/flower exports, but security challenges from armed groups and fiscal constraints limit progress.",
    "headwinds": [
      "Policy halt on new oil and gas exploration contracts risking future fiscal deficits",
      "Ongoing security challenges from ELN guerrillas, dissident factions, and cocaine cartels in rural areas",
      "Fiscal deficit pressures and high public debt servicing costs"
    ],
    "tailwinds": [
      "Diversified export profile: coffee, cut flowers, bananas, nickel, and emeralds",
      "Growing technology startup ecosystem, digital services, and urban tourism in Medellín and Bogotá",
      "Longstanding independent central bank and commitment to macro stability",
      "Substantial offshore Caribbean deepwater gas discoveries by Petrobras"
    ],
    "transcriptExcerpt": "Colombia has businesses and exports beyond oil, but security problems and a difficult budget limit progress. Yellow.",
    "tags": [
      "Coffee & Services",
      "Oil Phaseout Debate",
      "Rural Security",
      "Macro Stability"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1350s",
    "_searchStr": "colombia americas vibrant services and coffee/flower exports, but security challenges from armed groups and fiscal constraints limit progress. coffee & services oil phaseout debate rural security macro stability"
  },
  {
    "rank": 73,
    "name": "Panama",
    "topoName": "Panama",
    "id": "PAN",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "22:36",
    "videoSeconds": 1356,
    "region": "Americas",
    "coordinates": [
      -80.7821,
      8.5379
    ],
    "isMicrostate": false,
    "summary": "Panama Canal prints money by connecting two oceans, but relies on fresh lake water that droughts restricted in 2023-2024.",
    "headwinds": [
      "The Panama Canal requires 52 million gallons of fresh lake water per ship transit; drought forced severe traffic cuts in 2023-24",
      "Cobre Panamá copper mine shutdown wiped out ~5% of GDP and led to sovereign credit downgrade",
      "Fiscal deficit pressures and social security pension insolvency deadlines"
    ],
    "tailwinds": [
      "World's most critical maritime shortcut with immense pricing power and toll revenues",
      "Premier regional hub for banking, corporate headquarters, and aviation (Copa Airlines)",
      "Advanced logistics parks and Colón Free Trade Zone",
      "Plans underway to construct the Río Indio reservoir to permanently secure canal water"
    ],
    "transcriptExcerpt": "Panama makes money by saving ships a very, very long journey around South America, which is an excellent business model, but there is just a strange requirement for operating this canal between these two oceans. And that is fresh water... When a drought lowered them in 2023 and 2024, Panama had to restrict ship traffic. Another drought could do that again within our 10-year time frame. A planned reservoir would increase the supply, but it still has to be built first. Yellow.",
    "tags": [
      "Canal Tolls",
      "Freshwater Drought",
      "Logistics Hub",
      "Reservoir Project"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1356s",
    "_searchStr": "panama americas panama canal prints money by connecting two oceans, but relies on fresh lake water that droughts restricted in 2023-2024. canal tolls freshwater drought logistics hub reservoir project"
  },
  {
    "rank": 74,
    "name": "United Kingdom",
    "topoName": "United Kingdom",
    "id": "GBR",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "23:12",
    "videoSeconds": 1392,
    "region": "Europe",
    "coordinates": [
      -3.436,
      55.3781
    ],
    "isMicrostate": false,
    "summary": "World-class finance, universities, and tech, paralyzed by a broken planning system blocking homes/rail and heavy aging healthcare costs.",
    "headwinds": [
      "Strict planning regulations (NIMBYism) make building homes, grid connections, and rail extraordinarily slow and expensive",
      "Stagnant labor productivity growth since the 2008 financial crisis",
      "Ballooning costs for the National Health Service (NHS), adult social care, and state pensions"
    ],
    "tailwinds": [
      "Global financial capital (City of London) and Europe's premier tech startup ecosystem",
      "World-leading higher education, aerospace, pharmaceuticals, and creative industries",
      "Borrowing in its own sovereign currency (Pound Sterling) with deep domestic institutional bond markets",
      "Government commitment to ambitious planning and grid connection reforms"
    ],
    "transcriptExcerpt": "Britain is an interesting one. It has a housing shortage. It also makes building homes extraordinarily difficult... Delayed railways, slow electricity connections, and too little investment in equipment all make it harder for businesses to expand... Meanwhile, more people are retiring. Healthcare and pensions cost more. The government needs more money just to keep providing the same things. Britain has successful businesses, skilled people, and money to invest. So, I'm putting it in yellow.",
    "tags": [
      "Planning Paralysis",
      "Housing Crisis",
      "City of London",
      "NHS & Pensions"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1392s",
    "_searchStr": "united kingdom europe world-class finance, universities, and tech, paralyzed by a broken planning system blocking homes/rail and heavy aging healthcare costs. planning paralysis housing crisis city of london nhs & pensions"
  },
  {
    "rank": 75,
    "name": "Canada",
    "topoName": "Canada",
    "id": "CAN",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "24:14",
    "videoSeconds": 1454,
    "region": "Americas",
    "coordinates": [
      -106.3468,
      56.1304
    ],
    "isMicrostate": false,
    "summary": "Vast land, oil, minerals, and food, crippled by an extreme housing affordability crisis and exposure to US trade tariff shifts.",
    "headwinds": [
      "Severe housing affordability crisis: young families priced out, rent consuming massive share of salaries",
      "Lagging business productivity investment and weak capital formation per worker",
      "Extreme export vulnerability to protectionist US tariffs and border policy swings (75%+ exports go to US)"
    ],
    "tailwinds": [
      "Superpower in natural resources: world's #3 oil reserves, clean hydropower, uranium, potash, and wheat",
      "Trans Mountain pipeline expansion unlocked Pacific crude exports to Asian markets",
      "Sound, highly capitalized banking system and low sovereign debt relative to G7 peers",
      "High levels of post-secondary education and immigration intake"
    ],
    "transcriptExcerpt": "Canada has an extraordinary amount of land along with oil, food, and minerals. Finding room for homes should be fairly straightforward, right? Well, very few houses are available at a price you can afford. Due to this, young people put off starting families... And then there's the US, Canada's biggest customer. Having such easy access is a huge advantage, but uncertainty over tariffs makes it hard for a company investing millions. Yellow.",
    "tags": [
      "Housing Crisis",
      "US Tariff Exposure",
      "Oil Sands",
      "Productivity Lag"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1454s",
    "_searchStr": "canada americas vast land, oil, minerals, and food, crippled by an extreme housing affordability crisis and exposure to us trade tariff shifts. housing crisis us tariff exposure oil sands productivity lag"
  },
  {
    "rank": 76,
    "name": "France",
    "topoName": "France",
    "id": "FRA",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "24:56",
    "videoSeconds": 1496,
    "region": "Europe",
    "coordinates": [
      2.2137,
      46.2276
    ],
    "isMicrostate": false,
    "summary": "Europe's nuclear energy exporter, hampered by persistent budget deficits, high debt (~112%), and a divided political landscape.",
    "headwinds": [
      "Persistent high budget deficits pushing sovereign debt above 112% of GDP",
      "Heavily fragmented parliament making fiscal consolidation and tax agreement politically explosive",
      "High government spending-to-GDP ratio with heavy welfare and pension costs"
    ],
    "tailwinds": [
      "World's premier civil nuclear fleet providing cheap, dispatchable, low-carbon baseload electricity and power exports",
      "Global luxury conglomerates (LVMH, Hermès), aerospace (Airbus), and defense champions (Dassault)",
      "Pristine high-speed rail, transport infrastructure, and agricultural self-sufficiency",
      "Leading European hub for artificial intelligence and quantum tech investments"
    ],
    "transcriptExcerpt": "France exports large amounts of electricity, including to Britain... Unfortunately, selling them electricity hasn't solved the government's budget. Repeated deficits add debt and interest takes money that could have paid for services. Raising taxes or cutting spending means getting a divided political system to agree on who loses out. Yellow.",
    "tags": [
      "Nuclear Power",
      "Budget Deficits",
      "Political Gridlock",
      "Luxury & Aerospace"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1496s",
    "_searchStr": "france europe europe's nuclear energy exporter, hampered by persistent budget deficits, high debt (~112%), and a divided political landscape. nuclear power budget deficits political gridlock luxury & aerospace"
  },
  {
    "rank": 77,
    "name": "Belgium",
    "topoName": "Belgium",
    "id": "BEL",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "25:20",
    "videoSeconds": 1520,
    "region": "Europe",
    "coordinates": [
      4.4699,
      50.5039
    ],
    "isMicrostate": false,
    "summary": "Prosperous heart of European logistics and institutions, facing mounting public debt interest and an aging pension bill.",
    "headwinds": [
      "Elevated public debt (>105% of GDP) with rising debt service costs",
      "Aging population driving up statutory pension and long-term healthcare expenditure",
      "Complex regional political division between Flanders and Wallonia complicating fiscal reform"
    ],
    "tailwinds": [
      "Host to the European Union and NATO headquarters, creating an unshakeable institutional anchor",
      "Port of Antwerp-Bruges: Europe's second-largest port and leading chemical cluster",
      "High household private wealth and strong export competitiveness in pharmaceuticals and logistics",
      "Central geographic logistics nexus of Western Europe"
    ],
    "transcriptExcerpt": "Belgium has a similar problem. An aging population needs more pensions and care while the government already spends more than it collects. Borrowing covers the gap today. Bigger debt then adds interest to tomorrow's expenses. Belgium is wealthy enough to change that course, but the longer it waits, the more painful the choices become. Yellow.",
    "tags": [
      "EU Capital",
      "Public Debt 105%",
      "Port of Antwerp",
      "Aging Costs"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1520s",
    "_searchStr": "belgium europe prosperous heart of european logistics and institutions, facing mounting public debt interest and an aging pension bill. eu capital public debt 105% port of antwerp aging costs"
  },
  {
    "rank": 78,
    "name": "San Marino",
    "topoName": "San Marino",
    "id": "SMR",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "25:39",
    "videoSeconds": 1539,
    "region": "Europe",
    "coordinates": [
      12.4578,
      43.9424
    ],
    "isMicrostate": true,
    "summary": "Picturesque micro-republic recovering from legacy banking sector bad debt; needs fiscal discipline to sustain public services.",
    "headwinds": [
      "Legacy public debt burden left by banking sector restructuring and state bailouts",
      "Total geographic encirclement by Italy creates dependency on Italian economic conditions",
      "Narrow domestic tax base requiring continuous external financial compliance"
    ],
    "tailwinds": [
      "Pristine UNESCO mountaintop tourism generating substantial visitor spending",
      "New EU association agreement enhancing internal market access",
      "Expanding manufacturing sector in cosmetics, electronics, and pharmaceuticals",
      "Zero energy defense obligations"
    ],
    "transcriptExcerpt": "San Marino still has public debt and problems left by its banking sector. Yellow.",
    "tags": [
      "Banking Debt",
      "Microstate",
      "Tourism",
      "EU Association"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1539s",
    "_searchStr": "san marino europe picturesque micro-republic recovering from legacy banking sector bad debt; needs fiscal discipline to sustain public services. banking debt microstate tourism eu association"
  },
  {
    "rank": 79,
    "name": "Malta",
    "topoName": "Malta",
    "id": "MLT",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "25:45",
    "videoSeconds": 1545,
    "region": "Europe",
    "coordinates": [
      14.3754,
      35.9375
    ],
    "isMicrostate": true,
    "summary": "Fast-growing iGaming, financial, and tourism hub, but experiencing acute infrastructure, traffic, and housing strain on a small island.",
    "headwinds": [
      "Extreme population density causing severe traffic gridlock and infrastructure strain",
      "Housing cost explosion pricing out local workers",
      "Heavy state subsidies for domestic energy and fuel straining the public purse"
    ],
    "tailwinds": [
      "Global capital of online gaming (iGaming) regulation and maritime ship registration",
      "Rapid economic growth outperforming most EU member states",
      "Strategic Mediterranean location with robust aviation and sea links",
      "Subsea electricity interconnector to Sicily ensuring power grid backup"
    ],
    "transcriptExcerpt": "Malta has grown quickly, but housing, roads, and public services have to keep up inside a very small space. Yellow.",
    "tags": [
      "iGaming Hub",
      "Infrastructure Strain",
      "High Density",
      "Maritime Flag"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1545s",
    "_searchStr": "malta europe fast-growing igaming, financial, and tourism hub, but experiencing acute infrastructure, traffic, and housing strain on a small island. igaming hub infrastructure strain high density maritime flag"
  },
  {
    "rank": 80,
    "name": "Vatican City",
    "topoName": "Vatican",
    "id": "VAT",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "25:52",
    "videoSeconds": 1552,
    "region": "Europe",
    "coordinates": [
      12.4534,
      41.9029
    ],
    "isMicrostate": true,
    "summary": "Operating deficits and unfunded pension commitments weigh on the Holy See, but backed by 1.3 billion worldwide followers and real estate.",
    "headwinds": [
      "Structural annual operating deficit in the Holy See's administrative budget",
      "Unfunded liabilities in the Vatican pension fund",
      "Decline in traditional Peter's Pence donations in key Western dioceses"
    ],
    "tailwinds": [
      "Unrivaled moral and spiritual influence over 1.3+ billion Catholic adherents worldwide",
      "Substantial global real estate investment portfolio and sovereign assets",
      "Incalculable cultural and artistic patrimony (Vatican Museums generate strong revenues)",
      "Immense global philanthropic fundraising potential"
    ],
    "transcriptExcerpt": "Even the Vatican has financial problems. The Holy See's ordinary income doesn't cover its running costs, and its pension commitments are another burden. Investment income can help close the gap, but it needs a more dependable solution. I'm giving it yellow because I have some confidence that an organization with more than a billion followers can improve its fundraising. Yellow.",
    "tags": [
      "Holy See",
      "Pension Deficits",
      "Fundraising",
      "Museums"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1552s",
    "_searchStr": "vatican city europe operating deficits and unfunded pension commitments weigh on the holy see, but backed by 1.3 billion worldwide followers and real estate. holy see pension deficits fundraising museums"
  },
  {
    "rank": 81,
    "name": "Montenegro",
    "topoName": "Montenegro",
    "id": "MNE",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "26:14",
    "videoSeconds": 1574,
    "region": "Europe",
    "coordinates": [
      19.3744,
      42.7087
    ],
    "isMicrostate": false,
    "summary": "Breathtaking Adriatic tourism drives revenue, but heavy highway debt and seasonal volatility expose public spending.",
    "headwinds": [
      "Heavy debt from Chinese-built mountain highway construction project",
      "Vulnerability to tourism demand dips, which account for ~25% of GDP",
      "Political fragmentation and coalition instability"
    ],
    "tailwinds": [
      "Front-runner in Western Balkan accession talks to join the European Union",
      "Already utilizes the Euro as its de facto legal tender, eliminating currency run risks",
      "Luxury nautical tourism boom (Porto Montenegro mega-yacht marina)",
      "Clean hydropower generation and subsea electricity cable link to Italy"
    ],
    "transcriptExcerpt": "Montenegro earns heavily from tourism, leaving public spending exposed when visitor income slows. Yellow.",
    "tags": [
      "Adriatic Tourism",
      "Highway Debt",
      "EU Frontrunner",
      "Euro User"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1574s",
    "_searchStr": "montenegro europe breathtaking adriatic tourism drives revenue, but heavy highway debt and seasonal volatility expose public spending. adriatic tourism highway debt eu frontrunner euro user"
  },
  {
    "rank": 82,
    "name": "Serbia",
    "topoName": "Serbia",
    "id": "SRB",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "26:17",
    "videoSeconds": 1577,
    "region": "Europe",
    "coordinates": [
      21.0059,
      44.0165
    ],
    "isMicrostate": false,
    "summary": "Regional Balkan manufacturing powerhouse navigating delicate neutrality; needs reliable energy investment to raise wages.",
    "headwinds": [
      "Balancing precarious foreign policy between European integration, Russia, and China",
      "Heavy domestic reliance on polluting lignite coal for baseload electricity",
      "Persistent geopolitical dispute over Kosovo"
    ],
    "tailwinds": [
      "Attracted massive foreign direct investment in auto manufacturing, electronics, and rubber",
      "Vast Jadar lithium deposit represents Europe's largest potential battery-grade supply",
      "Booming IT software outsourcing and digital service exports in Belgrade and Novi Sad",
      "Prudently managed public finances and stable sovereign debt ratio"
    ],
    "transcriptExcerpt": "Serbia needs reliable energy and more investment to raise wages. Yellow.",
    "tags": [
      "Balkan Hub",
      "Jadar Lithium",
      "Auto FDI",
      "Energy Transition"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1577s",
    "_searchStr": "serbia europe regional balkan manufacturing powerhouse navigating delicate neutrality; needs reliable energy investment to raise wages. balkan hub jadar lithium auto fdi energy transition"
  },
  {
    "rank": 83,
    "name": "Kosovo",
    "topoName": "Kosovo",
    "id": "KOS",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "26:22",
    "videoSeconds": 1582,
    "region": "Europe",
    "coordinates": [
      20.903,
      42.6026
    ],
    "isMicrostate": false,
    "summary": "Young population dependent on diaspora remittances; requires local job creation and resolution of northern ethnic friction.",
    "headwinds": [
      "High youth unemployment and reliance on remittances from diaspora in Germany/Switzerland",
      "Tense ethnic and security standoffs in Serb-majority northern municipalities",
      "Outdated lignite coal power plants causing severe winter air pollution"
    ],
    "tailwinds": [
      "Youngest population demographic in Europe, highly multilingual and tech-adaptable",
      "Security guaranteed by permanent NATO-led KFOR peacekeeping mission",
      "Visa-free travel to the Schengen Area unlocked, boosting commercial contacts",
      "Substantial reserves of lignite, zinc, lead, and nickel"
    ],
    "transcriptExcerpt": "Kosovo relies heavily on money sent home from abroad and needs more well-paid work at home. Yellow.",
    "tags": [
      "Young Demographic",
      "Remittances",
      "NATO Security",
      "Balkan Friction"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1582s",
    "_searchStr": "kosovo europe young population dependent on diaspora remittances; requires local job creation and resolution of northern ethnic friction. young demographic remittances nato security balkan friction"
  },
  {
    "rank": 84,
    "name": "Turkey",
    "topoName": "Turkey",
    "id": "TUR",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "26:28",
    "videoSeconds": 1588,
    "region": "Middle East",
    "coordinates": [
      35.2433,
      38.9637
    ],
    "isMicrostate": false,
    "summary": "Taming inflation through orthodox interest rates; faces massive earthquake rebuilding bills and strategic neighborhood risks.",
    "headwinds": [
      "Massive financial cost of rebuilding southeastern provinces devastated by the 2023 earthquakes",
      "Inflation recovery remains painful for middle-class household budgets",
      "Heavy exposure to Middle Eastern, Caucasian, and Black Sea security conflicts"
    ],
    "tailwinds": [
      "Return to orthodox monetary policy by the central bank rebuilding foreign currency reserves",
      "Major industrial manufacturing exporter of automobiles, home appliances, and machinery to Europe",
      "Booming indigenous defense industry (Baykar drones, aerospace, warships)",
      "Unmatched geographic transit bridge controlling the Bosphorus Strait"
    ],
    "transcriptExcerpt": "Turkey has been bringing inflation down after years of rapidly rising prices. Households and businesses need to believe it will stay down before they can plan comfortably again. It also has an enormous rebuilding task after devastating earthquakes and many more buildings need to be made safer. Yellow.",
    "tags": [
      "Inflation Fight",
      "Earthquake Rebuild",
      "Defense Drones",
      "Industrial Base"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1588s",
    "_searchStr": "turkey middle east taming inflation through orthodox interest rates; faces massive earthquake rebuilding bills and strategic neighborhood risks. inflation fight earthquake rebuild defense drones industrial base"
  },
  {
    "rank": 85,
    "name": "Argentina",
    "topoName": "Argentina",
    "id": "ARG",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "26:46",
    "videoSeconds": 1606,
    "region": "Americas",
    "coordinates": [
      -63.6167,
      -38.4161
    ],
    "isMicrostate": false,
    "summary": "Achieved shocking fiscal surpluses and plunging inflation under Milei; needs export dollars to service foreign debt without defaulting.",
    "headwinds": [
      "High poverty rates and severe purchasing power compression following fiscal shock therapy",
      "Owes billions in US dollar debt to private bondholders and the IMF while collecting taxes in pesos",
      "Depleted net central bank foreign currency reserves require sustained rebuilding"
    ],
    "tailwinds": [
      "Achieved monthly fiscal and primary budget surpluses after decades of chronic deficits",
      "Inflation plummeted from 25%/month to low single digits, stabilizing the macro economy",
      "Vaca Muerta mega shale formation turning the country into a net oil and gas exporter",
      "Agricultural powerhouse (soybeans, corn, wheat, lithium triangle in the north)"
    ],
    "transcriptExcerpt": "Argentina. I know some of you expected this to be much further down my list... but inflation has fallen sharply and public finances have improved. Households still need to recover, but the direction is encouraging. Remember Japan's advantage of borrowing in its own currency: Argentina collects taxes in pesos, while some of its lenders expect dollars... Expanding energy production helps. I believe in them, so yellow.",
    "tags": [
      "Fiscal Surplus",
      "Inflation Drop",
      "Vaca Muerta Shale",
      "Dollar Debt"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1606s",
    "_searchStr": "argentina americas achieved shocking fiscal surpluses and plunging inflation under milei; needs export dollars to service foreign debt without defaulting. fiscal surplus inflation drop vaca muerta shale dollar debt"
  },
  {
    "rank": 86,
    "name": "Seychelles",
    "topoName": "Seychelles",
    "id": "SYC",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "27:22",
    "videoSeconds": 1642,
    "region": "Africa",
    "coordinates": [
      55.492,
      -4.6796
    ],
    "isMicrostate": true,
    "summary": "High-end luxury Indian Ocean tourism haven, highly vulnerable to global aviation fuel spikes and ocean food security.",
    "headwinds": [
      "High dependency on long-haul commercial flights vulnerable to aviation fuel price spikes",
      "Almost all food, energy, and manufactured goods must be imported by sea",
      "Coral reef bleaching and sea-level rise threatening low-lying coastal tourism assets"
    ],
    "tailwinds": [
      "Pioneer in sovereign 'blue bonds' and innovative marine conservation debt-for-nature swaps",
      "Highest GDP per capita in Africa with strong social human development indicators",
      "Exclusive luxury tourism pricing power insulating revenues from mass budget slumps",
      "Productive sustainable tuna canning and fisheries export industry"
    ],
    "transcriptExcerpt": "The Seychelles gets yellow, too. People spend a fortune to visit, but running the place isn't cheap. The islands import much of what they need, including fuel, so disruption to flights can mean fewer tourists. This means they are quite dependent on oil prices. Yellow.",
    "tags": [
      "Luxury Tourism",
      "Import Vulnerability",
      "Blue Economy",
      "High Income"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1642s",
    "_searchStr": "seychelles africa high-end luxury indian ocean tourism haven, highly vulnerable to global aviation fuel spikes and ocean food security. luxury tourism import vulnerability blue economy high income"
  },
  {
    "rank": 87,
    "name": "Mauritius",
    "topoName": "Mauritius",
    "id": "MUS",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "27:36",
    "videoSeconds": 1656,
    "region": "Africa",
    "coordinates": [
      57.5522,
      -20.3484
    ],
    "isMicrostate": true,
    "summary": "Africa's leading international financial and offshore business center, managing rising pension and social welfare spending.",
    "headwinds": [
      "Rising public pension and welfare entitlements straining the national budget",
      "Vulnerability to extreme Indian Ocean cyclones and coastal beach erosion",
      "Shortage of skilled technical labor forcing reliance on foreign professionals"
    ],
    "tailwinds": [
      "Premier financial services, private equity, and offshore banking gateway for investment into Africa and India",
      "High political stability, strong rule of law, and mature multi-party democracy",
      "Diversified economy spanning financial services, textiles, sugar, and upscale tourism",
      "Chagos Islands sovereignty resolution providing legal certainty and strategic compensation"
    ],
    "transcriptExcerpt": "Mauritius has more ways to earn money, including manufacturing and financial services for international businesses, but pensions and public spending are adding pressure to its budget. Also, yellow.",
    "tags": [
      "Financial Gateway",
      "Pensions Pressure",
      "Rule of Law",
      "Offshore Hub"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1656s",
    "_searchStr": "mauritius africa africa's leading international financial and offshore business center, managing rising pension and social welfare spending. financial gateway pensions pressure rule of law offshore hub"
  },
  {
    "rank": 88,
    "name": "Kiribati",
    "topoName": "Kiribati",
    "id": "KIR",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "27:47",
    "videoSeconds": 1667,
    "region": "Oceania",
    "coordinates": [
      -157.363,
      1.8709
    ],
    "isMicrostate": true,
    "summary": "Low-lying atolls facing existential sea-level rise, but sustained by massive tuna fishing license revenues and sovereign reserves.",
    "headwinds": [
      "Average elevation of under 2 meters makes atolls existentially exposed to sea-level rise and saltwater intrusion",
      "Freshwater lenses regularly contaminated by king tide storm surges",
      "Extreme geographic isolation across millions of square kilometers of the central Pacific"
    ],
    "tailwinds": [
      "Controls one of the world's largest exclusive economic zones (EEZ) rich in tuna fisheries",
      "Revenue Equalization Reserve Fund (RERF) provides a substantial sovereign financial cushion",
      "Bilateral climate adaptation infrastructure funding from Australia, Japan, and the US",
      "Innovative migration with dignity training programs for citizens"
    ],
    "transcriptExcerpt": "Kiribati has fishing income and savings, but protecting low-lying islands and providing reliable services is expensive. Yellow.",
    "tags": [
      "Sea-Level Rise",
      "Tuna Fishing EEZ",
      "Sovereign Reserve",
      "Climate Threat"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1667s",
    "_searchStr": "kiribati oceania low-lying atolls facing existential sea-level rise, but sustained by massive tuna fishing license revenues and sovereign reserves. sea-level rise tuna fishing eez sovereign reserve climate threat"
  },
  {
    "rank": 89,
    "name": "Marshall Islands",
    "topoName": "Marshall Is.",
    "id": "MHL",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "27:53",
    "videoSeconds": 1673,
    "region": "Oceania",
    "coordinates": [
      171.1845,
      7.1315
    ],
    "isMicrostate": true,
    "summary": "Secured renewed US Compact funding guaranteeing essential aid, though finding engineers and medical workers is difficult.",
    "headwinds": [
      "Acute scarcity of domestic engineers, construction contractors, and medical staff to execute projects",
      "Low elevation atolls threatened by king tides, coastal erosion, and saltwater intrusion",
      "Legacy nuclear testing environmental and health impacts from the 1950s"
    ],
    "tailwinds": [
      "Secured renewed 20-year Compact of Free Association (COFA) with the United States providing guaranteed federal funding",
      "Citizens possess visa-free right to live and work in the United States",
      "World's second-largest commercial ship maritime registry generating reliable annual revenues",
      "Strategic US military installation at Kwajalein Atoll (missile defense testing)"
    ],
    "transcriptExcerpt": "The Marshall Islands has renewed American funding for services and development. Finding enough engineers, builders, and healthcare workers to deliver them is still difficult. Yellow.",
    "tags": [
      "COFA Pact",
      "US Funding",
      "Maritime Registry",
      "Staff Shortage"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1673s",
    "_searchStr": "marshall islands oceania secured renewed us compact funding guaranteeing essential aid, though finding engineers and medical workers is difficult. cofa pact us funding maritime registry staff shortage"
  },
  {
    "rank": 90,
    "name": "Tuvalu",
    "topoName": "Tuvalu",
    "id": "TUV",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "28:02",
    "videoSeconds": 1682,
    "region": "Oceania",
    "coordinates": [
      177.6493,
      -7.1095
    ],
    "isMicrostate": true,
    "summary": "Rising seas threaten low atolls, but raising land defenses and the historic Falepili Union treaty with Australia provide pathways.",
    "headwinds": [
      "Extreme existential threat from sea-level rise; highest point is only 4.6 meters above sea level",
      "Severe shortages of natural freshwater reliant entirely on rainwater capture tanks",
      "Zero commercial agriculture or manufacturing base due to coral soil"
    ],
    "tailwinds": [
      "Land reclamation project actively raising coastal land in Funafuti to safeguard population",
      "Falepili Union treaty with Australia guarantees climate residency pathways for up to 280 citizens annually",
      "Reliable royalty income from leasing the lucrative '.tv' internet top-level domain",
      "Tuvalu Trust Fund managed conservatively with international partner contributions"
    ],
    "transcriptExcerpt": "Tuvalu is building coastal defenses and raising land so people can keep living there as seas rise. Australia also offers up to 280 people a year a route to permanent residency, which gives families somewhere else to go while work continues to protect the home they already have. Yellow.",
    "tags": [
      "Sea-Level Rise",
      "Australia Treaty",
      ".tv Domain",
      "Land Reclamation"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1682s",
    "_searchStr": "tuvalu oceania rising seas threaten low atolls, but raising land defenses and the historic falepili union treaty with australia provide pathways. sea-level rise australia treaty .tv domain land reclamation"
  },
  {
    "rank": 91,
    "name": "Micronesia",
    "topoName": "Micronesia",
    "id": "FSM",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "28:16",
    "videoSeconds": 1696,
    "region": "Oceania",
    "coordinates": [
      150.5508,
      7.4256
    ],
    "isMicrostate": true,
    "summary": "600+ islands spread across thousands of kilometers; logistics and healthcare are tough, backed by renewed US Compact funds.",
    "headwinds": [
      "Extreme logistical expense of delivering electricity, fuel, schools, and clinics across 600 dispersed islands",
      "Vulnerability to El Niño droughts and tropical typhoons",
      "High youth emigration to the United States under COFA rights"
    ],
    "tailwinds": [
      "Renewed Compact of Free Association (COFA) with the United States guaranteeing long-term grant funding",
      "Vast exclusive economic zone (EEZ) generating substantial tuna fishing license fees",
      "Strategic security umbrella and defense guarantees provided directly by the US military",
      "Pristine marine biodiversity with potential for high-value scientific research"
    ],
    "transcriptExcerpt": "Micronesia's islands stretch across thousands of kilometers. Its small population still needs schools, clinics and supplies across all that distance. Yellow.",
    "tags": [
      "COFA Treaty",
      "Island Dispersion",
      "Tuna Licenses",
      "Logistics Challenge"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1696s",
    "_searchStr": "micronesia oceania 600+ islands spread across thousands of kilometers; logistics and healthcare are tough, backed by renewed us compact funds. cofa treaty island dispersion tuna licenses logistics challenge"
  },
  {
    "rank": 92,
    "name": "Palau",
    "topoName": "Palau",
    "id": "PLW",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "28:24",
    "videoSeconds": 1704,
    "region": "Oceania",
    "coordinates": [
      134.5825,
      7.515
    ],
    "isMicrostate": true,
    "summary": "Premier diving destination dependent on tourism, protected by strong environmental laws and a reinforced US defense partnership.",
    "headwinds": [
      "High economic concentration in international scuba tourism; sensitive to Asian travel downturns",
      "Dependence on imported petroleum and food products",
      "Geopolitical pressure from Beijing due to maintaining formal diplomatic ties with Taiwan"
    ],
    "tailwinds": [
      "Compact of Free Association renewal secured billions in US fiscal and postal support",
      "US military building tactical radar and airfield infrastructure, injecting local capital",
      "World-renowned marine sanctuary (Palau National Marine Sanctuary) protecting ocean resources",
      "High-value, low-impact eco-tourism branding model"
    ],
    "transcriptExcerpt": "Palau has outside support but depends heavily on tourists. Yellow.",
    "tags": [
      "Eco-Tourism",
      "US Defense Pact",
      "Taiwan Ally",
      "Marine Sanctuary"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1704s",
    "_searchStr": "palau oceania premier diving destination dependent on tourism, protected by strong environmental laws and a reinforced us defense partnership. eco-tourism us defense pact taiwan ally marine sanctuary"
  },
  {
    "rank": 93,
    "name": "Fiji",
    "topoName": "Fiji",
    "id": "FJI",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "28:28",
    "videoSeconds": 1708,
    "region": "Oceania",
    "coordinates": [
      178.065,
      -17.7134
    ],
    "isMicrostate": false,
    "summary": "South Pacific commercial and tourism hub with bottled water exports, carrying high public debt that makes disasters harder to absorb.",
    "headwinds": [
      "High public debt-to-GDP ratio accumulated during pandemic tourism border shutdowns",
      "Regular battering by Category 5 tropical cyclones causing severe infrastructure damage",
      "Emigration of skilled healthcare workers and tradespeople to Australia and New Zealand"
    ],
    "tailwinds": [
      "Premier tourism hub of the South Pacific with robust flight connectivity via Fiji Airways",
      "Iconic global consumer brand exports (Fiji Water)",
      "Commercial and diplomatic headquarters of regional Pacific institutions (Pacific Islands Forum)",
      "Growing business process outsourcing (BPO) service center investments in Suva"
    ],
    "transcriptExcerpt": "Fiji has tourism, money sent home from abroad and water exports, but also debt that would make a natural disaster hard to overcome. Remember Samoa's low debt and reserves? These countries face similar dangers with more to repair and with less money available. All six yellow.",
    "tags": [
      "Pacific Hub",
      "Cyclone Damage",
      "Public Debt",
      "Fiji Water"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1708s",
    "_searchStr": "fiji oceania south pacific commercial and tourism hub with bottled water exports, carrying high public debt that makes disasters harder to absorb. pacific hub cyclone damage public debt fiji water"
  },
  {
    "rank": 94,
    "name": "Mexico",
    "topoName": "Mexico",
    "id": "MEX",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "28:46",
    "videoSeconds": 1726,
    "region": "Americas",
    "coordinates": [
      -102.5528,
      23.6345
    ],
    "isMicrostate": false,
    "summary": "Capturing massive US nearshoring factories, but held back by Pemex debt, cartel violence, water shortages, and tariff renegotiations.",
    "headwinds": [
      "Cartel violence, cargo theft, and extortion raising security costs for manufacturers",
      "Heavily indebted state oil monopoly (Pemex) requiring repeated sovereign bailouts",
      "Electricity grid connection bottlenecks and severe industrial water shortages in northern states",
      "Uncertainty surrounding USMCA treaty review and unilateral US tariff threats"
    ],
    "tailwinds": [
      "Prime geographic beneficiary of North American nearshoring and supply chain reshoring",
      "World-class advanced automotive, aerospace, and medical device manufacturing clusters",
      "Massive remittance inflows (> $60B annually) supporting household consumption",
      "Prudent sovereign debt ratios and independent central bank (Banxico)"
    ],
    "transcriptExcerpt": "Mexico put factories next to an enormous customer, which is a very sensible strategy. But a new factory takes years to pay for itself. And the uncertainties are many: tariffs, electricity, and water in areas that are also affected by organized crime. Businesses face theft and extortion here... And Pemex, the state oil company, has needed government help with its financial problems. Yellow.",
    "tags": [
      "Nearshoring Boom",
      "USMCA & Tariffs",
      "Pemex Debt",
      "Cartel Extortion"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1726s",
    "_searchStr": "mexico americas capturing massive us nearshoring factories, but held back by pemex debt, cartel violence, water shortages, and tariff renegotiations. nearshoring boom usmca & tariffs pemex debt cartel extortion"
  },
  {
    "rank": 95,
    "name": "Guatemala",
    "topoName": "Guatemala",
    "id": "GTM",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "29:15",
    "videoSeconds": 1755,
    "region": "Americas",
    "coordinates": [
      -90.2308,
      15.7835
    ],
    "isMicrostate": false,
    "summary": "Massive remittance inflows support household budgets, but weak roads, underfunded clinics, and climate migration require reform.",
    "headwinds": [
      "Over-reliance on US remittances (~20% of GDP), leaving families vulnerable to US immigration crackdowns",
      "Severe chronic child malnutrition in rural indigenous highlands and drought-prone Dry Corridor",
      "Political pushback against anti-corruption reforms and fragile judicial independence"
    ],
    "tailwinds": [
      "Largest economy in Central America with consistent macroeconomic and currency stability",
      "Low sovereign debt-to-GDP ratio compared to regional peers",
      "Major exporter of specialty coffee, cardamom, bananas, and light textiles",
      "Democratic transition to reform-minded administration (Arévalo) prioritizing social spending"
    ],
    "transcriptExcerpt": "One of the biggest exports is workers. They find work abroad and send money home... Guatemala needs roads, healthcare, and education to improve alongside those household finances. Yellow.",
    "tags": [
      "Remittances",
      "Coffee Exports",
      "Dry Corridor",
      "Macro Stability"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1755s",
    "_searchStr": "guatemala americas massive remittance inflows support household budgets, but weak roads, underfunded clinics, and climate migration require reform. remittances coffee exports dry corridor macro stability"
  },
  {
    "rank": 96,
    "name": "Honduras",
    "topoName": "Honduras",
    "id": "HND",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "29:16",
    "videoSeconds": 1756,
    "region": "Americas",
    "coordinates": [
      -86.2419,
      15.2
    ],
    "isMicrostate": false,
    "summary": "Built up foreign currency reserves, but an unreliable state electricity grid, crime, and heavy emigration hold businesses back.",
    "headwinds": [
      "Dysfunctional state electric utility (ENEE) causing frequent industrial blackouts",
      "High violent crime and extortion driving ongoing outward migration",
      "Vulnerability to catastrophic Caribbean hurricanes (Eta/Iota legacy)"
    ],
    "tailwinds": [
      "Solid foreign exchange reserves built up through massive family remittances",
      "Leading regional garment maquiladora and apparel export sector to the US",
      "Major coffee, palm oil, and aquaculture (shrimp) producer",
      "Expanding port infrastructure at Puerto Cortés on the Caribbean coast"
    ],
    "transcriptExcerpt": "Honduras has built up foreign currency reserves, but its electricity system still holds businesses back. Yellow.",
    "tags": [
      "Power Blackouts",
      "Garment Maquila",
      "Remittances",
      "Forex Reserves"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1756s",
    "_searchStr": "honduras americas built up foreign currency reserves, but an unreliable state electricity grid, crime, and heavy emigration hold businesses back. power blackouts garment maquila remittances forex reserves"
  },
  {
    "rank": 97,
    "name": "El Salvador",
    "topoName": "El Salvador",
    "id": "SLV",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "29:16",
    "videoSeconds": 1756,
    "region": "Americas",
    "coordinates": [
      -88.8965,
      13.7942
    ],
    "isMicrostate": false,
    "summary": "Gang crackdown transformed everyday safety and commerce, but high debt and repression of critics present serious long-term risks.",
    "headwinds": [
      "Massive security state involves arbitrary detentions, suspension of constitutional rights, and human rights criticism",
      "High public debt burden limiting fiscal spending on schools, hospitals, and basic infrastructure",
      "Repression of dissenting voices, civil society, and independent journalists"
    ],
    "tailwinds": [
      "Dramatic, historic reduction in homicides and extortion, completely rejuvenating local street commerce",
      "Rapid growth in domestic and diaspora tourism and international events",
      "Pioneered geothermal Bitcoin adoption and digital payments",
      "Strong diaspora remittances supporting household living standards"
    ],
    "transcriptExcerpt": "El Salvador has sharply reduced gang violence, which major kudos for that. This has brought a huge change to daily life here. But the crackdown has also involved arbitrary arrests and heavy government debt limits spending on other improvements. The major issue I see is that the government represses critics. Earning more money offers very little reassurance if speaking up can put you in danger. Yellow.",
    "tags": [
      "Gang Crackdown",
      "Security vs Rights",
      "Public Debt",
      "Tourism Surge"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1756s",
    "_searchStr": "el salvador americas gang crackdown transformed everyday safety and commerce, but high debt and repression of critics present serious long-term risks. gang crackdown security vs rights public debt tourism surge"
  },
  {
    "rank": 98,
    "name": "Nicaragua",
    "topoName": "Nicaragua",
    "id": "NIC",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "29:17",
    "videoSeconds": 1757,
    "region": "Americas",
    "coordinates": [
      -85.2072,
      12.8654
    ],
    "isMicrostate": false,
    "summary": "Export agriculture and gold hold steady, but deep authoritarian repression drives hundreds of thousands to flee abroad.",
    "headwinds": [
      "Authoritarian regime represses political opposition, independent media, and religious institutions",
      "Western sanctions and diplomatic isolation restricting multilateral development loans",
      "Massive emigration wave draining educated youth and working-age professionals"
    ],
    "tailwinds": [
      "Booming gold, beef, coffee, and garment manufacturing exports",
      "Record remittance flows sent by recent migrants providing essential poverty relief",
      "High share of renewable energy in the domestic power grid (geothermal and wind)",
      "Stable macroeconomic fiscal balances maintained by the central bank"
    ],
    "transcriptExcerpt": "Guatemala, Honduras, El Salvador, and Nicaragua: one of the biggest exports is workers... Earning more money offers very little reassurance if speaking up can put you in danger. So all four yellow.",
    "tags": [
      "Authoritarianism",
      "Gold & Beef",
      "Remittances",
      "Emigration Wave"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1757s",
    "_searchStr": "nicaragua americas export agriculture and gold hold steady, but deep authoritarian repression drives hundreds of thousands to flee abroad. authoritarianism gold & beef remittances emigration wave"
  },
  {
    "rank": 99,
    "name": "Belize",
    "topoName": "Belize",
    "id": "BLZ",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "30:04",
    "videoSeconds": 1804,
    "region": "Americas",
    "coordinates": [
      -88.4976,
      17.1899
    ],
    "isMicrostate": false,
    "summary": "Pioneered blue bond debt relief for marine conservation, but warming seas and hurricanes threaten its barrier reef and tourism.",
    "headwinds": [
      "Rising ocean temperatures and bleaching threaten the Mesoamerican Barrier Reef, the cornerstone of tourism",
      "Vulnerability to destructive Caribbean hurricanes requiring recurring reconstruction",
      "High cost of fuel and imported consumer goods"
    ],
    "tailwinds": [
      "Successful 'Blue Bond' debt restructuring reduced sovereign debt in exchange for ocean conservation",
      "English-speaking democracy bridging Central America and the Caribbean Community (CARICOM)",
      "Expanding eco-tourism, cruise arrivals, and marine tourism revenues",
      "Agricultural exports in sugar, citrus, and bananas"
    ],
    "transcriptExcerpt": "Belize: tourists come for its barrier reef, and hurricanes and warming seas threaten it. Yellow.",
    "tags": [
      "Barrier Reef",
      "Blue Bond Debt",
      "Hurricanes",
      "Eco-Tourism"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1804s",
    "_searchStr": "belize americas pioneered blue bond debt relief for marine conservation, but warming seas and hurricanes threaten its barrier reef and tourism. barrier reef blue bond debt hurricanes eco-tourism"
  },
  {
    "rank": 100,
    "name": "Dominican Republic",
    "topoName": "Dominican Rep.",
    "id": "DOM",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "30:10",
    "videoSeconds": 1810,
    "region": "Americas",
    "coordinates": [
      -70.1627,
      18.7357
    ],
    "isMicrostate": false,
    "summary": "Caribbean economic superstar in tourism and free zones, needing to fix electricity distribution losses and broaden its tax intake.",
    "headwinds": [
      "Chronic technical and financial losses in the state electricity distribution companies (EDEs)",
      "Low fiscal tax intake (~14% GDP) restricting public infrastructure investments",
      "Severe border security and migration pressures from neighboring collapsed state Haiti"
    ],
    "tailwinds": [
      "Fastest growing major economy in Latin America and the Caribbean over the last two decades",
      "Record-breaking international tourism arrivals exceeding 10 million visitors annually",
      "Expanding free-trade export zones in medical devices, electronics, and cigars",
      "Strong democratic institutions, legal security, and investment-grade trajectory"
    ],
    "transcriptExcerpt": "The Dominican Republic has stronger growth but an unreliable electricity system and too little tax income to fund all the improvements it needs. Yellow.",
    "tags": [
      "Tourism Record",
      "Fast Growth",
      "Power Grid Losses",
      "Haiti Border"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1810s",
    "_searchStr": "dominican republic americas caribbean economic superstar in tourism and free zones, needing to fix electricity distribution losses and broaden its tax intake. tourism record fast growth power grid losses haiti border"
  },
  {
    "rank": 101,
    "name": "Bahamas",
    "topoName": "Bahamas",
    "id": "BHS",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "30:18",
    "videoSeconds": 1818,
    "region": "Americas",
    "coordinates": [
      -77.3963,
      25.0343
    ],
    "isMicrostate": true,
    "summary": "High-income tourism and offshore finance haven, facing extreme hurricane disaster costs and rising debt burdens.",
    "headwinds": [
      "Extreme exposure to catastrophic Category 5 Atlantic hurricanes (e.g., Hurricane Dorian)",
      "High public debt accumulated from disaster reconstruction and pandemic border closures",
      "High cost of domestic living and complete reliance on imported food and fuel"
    ],
    "tailwinds": [
      "Top global luxury destination welcoming millions of high-spending cruise and air passengers",
      "Established offshore private banking, trust, and wealth management sector",
      "High GDP per capita and stable political democracy",
      "Strong proximity and seamless commercial access to Florida and US markets"
    ],
    "transcriptExcerpt": "The Bahamas depends heavily on tourism while facing hurricanes. Yellow.",
    "tags": [
      "Luxury Tourism",
      "Hurricane Exposure",
      "Offshore Banking",
      "Disaster Debt"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1818s",
    "_searchStr": "bahamas americas high-income tourism and offshore finance haven, facing extreme hurricane disaster costs and rising debt burdens. luxury tourism hurricane exposure offshore banking disaster debt"
  },
  {
    "rank": 102,
    "name": "Antigua & Barbuda",
    "topoName": "Antigua and Barb.",
    "id": "ATG",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "30:23",
    "videoSeconds": 1823,
    "region": "Americas",
    "coordinates": [
      -61.8468,
      17.0608
    ],
    "isMicrostate": true,
    "summary": "Reduced sovereign debt and revitalized port facilities, but vulnerable to hurricane storm surges and external financing needs.",
    "headwinds": [
      "Extreme vulnerability to catastrophic tropical hurricanes and storm surges (Barbuda was fully evacuated in 2017)",
      "High refinancing needs for existing public debt commitments",
      "Heavy reliance on imported petroleum for electricity and water desalination"
    ],
    "tailwinds": [
      "Substantially lowered public debt-to-GDP ratio through disciplined fiscal policies",
      "Modernized cruise terminal in St. John's accommodating the world's largest mega-ships",
      "Successful Citizenship-by-Investment (CBI) revenues funding capital projects",
      "High-end yachting and nautical tourism capital of the Eastern Caribbean"
    ],
    "transcriptExcerpt": "Antigua and Barbuda has reduced its debt, though financing needs and storms remain a risk. Yellow.",
    "tags": [
      "Debt Reduction",
      "Mega-Cruise Port",
      "Yachting Capital",
      "Hurricane Risk"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1823s",
    "_searchStr": "antigua & barbuda americas reduced sovereign debt and revitalized port facilities, but vulnerable to hurricane storm surges and external financing needs. debt reduction mega-cruise port yachting capital hurricane risk"
  },
  {
    "rank": 103,
    "name": "Grenada",
    "topoName": "Grenada",
    "id": "GRD",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "30:32",
    "videoSeconds": 1832,
    "region": "Americas",
    "coordinates": [
      -61.679,
      12.1165
    ],
    "isMicrostate": true,
    "summary": "Built financial reserves and hurricane debt clauses into bonds to ensure quick cash for disaster recovery.",
    "headwinds": [
      "Vulnerability to direct hurricane strikes (devastated by Hurricane Beryl in mid-2024)",
      "Narrow domestic economy reliant on hospitality and spice exports",
      "Rising external debt service following post-disaster rebuilding"
    ],
    "tailwinds": [
      "Pioneered 'hurricane clauses' in sovereign bonds that automatically pause debt service after disasters",
      "Maintained fiscal contingency reserve funds to deploy immediate disaster cash",
      "Leading exporter of high-value nutmeg, cocoa, and organic chocolate",
      "Home to St. George's University School of Medicine generating reliable international education revenues"
    ],
    "transcriptExcerpt": "Grenada has built financial reserves to help it recover from disaster. Yellow.",
    "tags": [
      "Disaster Clauses",
      "Fiscal Reserves",
      "Spices & Cocoa",
      "Hurricane Recovery"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1832s",
    "_searchStr": "grenada americas built financial reserves and hurricane debt clauses into bonds to ensure quick cash for disaster recovery. disaster clauses fiscal reserves spices & cocoa hurricane recovery"
  },
  {
    "rank": 104,
    "name": "Jamaica",
    "topoName": "Jamaica",
    "id": "JAM",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "30:36",
    "videoSeconds": 1836,
    "region": "Americas",
    "coordinates": [
      -77.2975,
      18.1096
    ],
    "isMicrostate": false,
    "summary": "Model fiscal turnaround slashing debt from 140% to <70%, backed by a catastrophe bond that paid $150M after Hurricane Melissa.",
    "headwinds": [
      "Violent crime and homicide rates in urban pockets requiring heavy police and military resources",
      "Vulnerability to intense Atlantic hurricanes and infrastructure washouts",
      "Sluggish labor productivity growth outside the tourism enclaves"
    ],
    "tailwinds": [
      "Extraordinary fiscal discipline: slashed national debt-to-GDP from 145% to below 70%",
      "Pioneered World Bank catastrophe bonds providing instant multimillion-dollar payouts after major storms",
      "Beloved global cultural brand (reggae, athletics, cuisine) driving record tourism",
      "Expanding Kingston container transshipment port and logistics parks"
    ],
    "transcriptExcerpt": "Jamaica spent years paying down its debt. It also set up a catastrophe bond, which works like hurricane insurance... In October 2025, Hurricane Melissa became the strongest storm ever to make landfall here. The bond paid out $150 million, which covered only a fraction of the damage. But the money was ready when Jamaica needed it most. Yellow.",
    "tags": [
      "Fiscal Turnaround",
      "Catastrophe Bond",
      "Debt Slashing",
      "Tourism Brand"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1836s",
    "_searchStr": "jamaica americas model fiscal turnaround slashing debt from 140% to <70%, backed by a catastrophe bond that paid $150m after hurricane melissa. fiscal turnaround catastrophe bond debt slashing tourism brand"
  },
  {
    "rank": 105,
    "name": "Barbados",
    "topoName": "Barbados",
    "id": "BRB",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "31:15",
    "videoSeconds": 1875,
    "region": "Americas",
    "coordinates": [
      -59.5432,
      13.1939
    ],
    "isMicrostate": true,
    "summary": "Leader of the Bridgetown Initiative reforming global climate finance; improved tax revenues and lowered debt.",
    "headwinds": [
      "Severe exposure to climate shocks, coastal erosion, and sargassum seaweed inundations",
      "High national cost of living driven by import dependence",
      "Water stress on coral limestone aquifers requiring expanded desalination"
    ],
    "tailwinds": [
      "Spearheaded the 'Bridgetown Initiative' leading global reform of multilateral climate finance",
      "Significantly improved domestic tax intake and steadily reduced public debt-to-GDP",
      "World-renowned high-end tourism destination with high visitor repeat rates",
      "Stable parliamentary democracy with universal healthcare and education"
    ],
    "transcriptExcerpt": "Barbados has improved its tax income and reduced debt relative to its economy, helping it put more money into roads and other infrastructure. Yellow.",
    "tags": [
      "Bridgetown Initiative",
      "Debt Reduction",
      "Tax Reform",
      "Climate Finance"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1875s",
    "_searchStr": "barbados americas leader of the bridgetown initiative reforming global climate finance; improved tax revenues and lowered debt. bridgetown initiative debt reduction tax reform climate finance"
  },
  {
    "rank": 106,
    "name": "Estonia",
    "topoName": "Estonia",
    "id": "EST",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "31:35",
    "videoSeconds": 1895,
    "region": "Europe",
    "coordinates": [
      25.0136,
      58.5953
    ],
    "isMicrostate": false,
    "summary": "World-class digital society (e-Estonia) and tech unicorn factory, spending heavily on defense due to immediate proximity to Russia.",
    "headwinds": [
      "Direct border with revanchist Russia requires elevated defense spending (>3.5% GDP)",
      "Sluggish economic growth following loss of Russian transit trade and Nordic slowdown",
      "Aging population and small absolute labor pool"
    ],
    "tailwinds": [
      "Lowest public debt-to-GDP ratio in the entire European Union",
      "World's most advanced digital government infrastructure and highest tech unicorns per capita",
      "Ironclad NATO collective defense integration and multinational troop presence",
      "High energy security with complete decoupling from Russian power grids"
    ],
    "transcriptExcerpt": "Estonia, Latvia, and Lithuania have allies and European support. They also have a Russia nearby. Deterring an attack is expensive, even if it never happens. While aging populations need more care at home. Yellow.",
    "tags": [
      "e-Estonia",
      "Lowest EU Debt",
      "Tech Unicorns",
      "Russia Border Defense"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1895s",
    "_searchStr": "estonia europe world-class digital society (e-estonia) and tech unicorn factory, spending heavily on defense due to immediate proximity to russia. e-estonia lowest eu debt tech unicorns russia border defense"
  },
  {
    "rank": 107,
    "name": "Latvia",
    "topoName": "Latvia",
    "id": "LVA",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "31:36",
    "videoSeconds": 1896,
    "region": "Europe",
    "coordinates": [
      24.6032,
      56.9496
    ],
    "isMicrostate": false,
    "summary": "Fortifying eastern NATO border and re-routing transport corridors, constrained by demographic decline and low public debt.",
    "headwinds": [
      "Severe demographic shrinkage from low birth rates and decades of Western emigration",
      "Heavy budgetary allocation to eastern border fortifications and defense procurement",
      "Loss of lucrative Russian rail transit freight through Riga and Ventspils ports"
    ],
    "tailwinds": [
      "Modest sovereign debt levels (~40% of GDP) allowing fiscal flexibility",
      "Successful synchronization with European continental electricity grid (decoupling from BRELL)",
      "Strong forestry, timber processing, and pharmaceuticals export industries",
      "NATO Enhanced Forward Presence deterrence on national territory"
    ],
    "transcriptExcerpt": "Deterring an attack is expensive, even if it never happens. While aging populations need more care at home. Yellow.",
    "tags": [
      "Border Defense",
      "Demographic Decline",
      "Grid Decoupling",
      "Low Debt"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1896s",
    "_searchStr": "latvia europe fortifying eastern nato border and re-routing transport corridors, constrained by demographic decline and low public debt. border defense demographic decline grid decoupling low debt"
  },
  {
    "rank": 108,
    "name": "Lithuania",
    "topoName": "Lithuania",
    "id": "LTU",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "31:38",
    "videoSeconds": 1898,
    "region": "Europe",
    "coordinates": [
      23.8813,
      55.1694
    ],
    "isMicrostate": false,
    "summary": "Baltic economic leader and European fintech hub, hosting a permanent German brigade while guarding the Suwalki Gap.",
    "headwinds": [
      "Strategic vulnerability at the Suwalki Gap between Belarus and Russian Kaliningrad",
      "Rapidly rising defense expenditures competing with domestic healthcare and education",
      "Aging industrial labor workforce"
    ],
    "tailwinds": [
      "Fastest growing Baltic economy; leading European fintech and laser technology hub",
      "Complete energy independence achieved through Klaipėda LNG terminal ('Independence')",
      "Permanent deployment of a full combat brigade of the German Bundeswehr",
      "Prudent public debt ratio and diversified Western export partnerships"
    ],
    "transcriptExcerpt": "Estonia, Latvia, and Lithuania have allies and European support. They also have a Russia nearby. Deterring an attack is expensive... Yellow.",
    "tags": [
      "Fintech Hub",
      "Klaipeda LNG",
      "German Brigade",
      "Suwalki Gap"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1898s",
    "_searchStr": "lithuania europe baltic economic leader and european fintech hub, hosting a permanent german brigade while guarding the suwalki gap. fintech hub klaipeda lng german brigade suwalki gap"
  },
  {
    "rank": 109,
    "name": "Finland",
    "topoName": "Finland",
    "id": "FIN",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "31:49",
    "videoSeconds": 1909,
    "region": "Europe",
    "coordinates": [
      25.7482,
      61.9241
    ],
    "isMicrostate": false,
    "summary": "NATO membership sealed its 1,300km border with Russia, but prolonged economic stagnation and demographic aging weigh on finances.",
    "headwinds": [
      "Prolonged economic stagnation and multiple years of zero or negative GDP growth",
      "Rapid demographic aging with rising public welfare and medical costs",
      "1,340 km border with Russia remains completely closed to cross-border commerce"
    ],
    "tailwinds": [
      "NATO membership provides unconditional collective nuclear and conventional deterrence",
      "Europe's most formidable total-defense reserve military and civil bomb shelter networks",
      "Olkiluoto 3 nuclear reactor and wind power provide cheap, abundant green electricity",
      "Top-tier global rankings in education, social trust, and anti-corruption"
    ],
    "transcriptExcerpt": "Finland faces those pressures, too, with weak growth making them harder to pay for. Yellow.",
    "tags": [
      "NATO Border",
      "Economic Stagnation",
      "Nuclear Power",
      "Total Defense"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1909s",
    "_searchStr": "finland europe nato membership sealed its 1,300km border with russia, but prolonged economic stagnation and demographic aging weigh on finances. nato border economic stagnation nuclear power total defense"
  },
  {
    "rank": 110,
    "name": "Armenia",
    "topoName": "Armenia",
    "id": "ARM",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "31:55",
    "videoSeconds": 1915,
    "region": "Asia",
    "coordinates": [
      45.0382,
      40.0691
    ],
    "isMicrostate": false,
    "summary": "Pivoting diplomatically toward the West and booming as a regional tech hub; urgently needs a lasting peace treaty with Azerbaijan.",
    "headwinds": [
      "Risk of renewed military conflict or border skirmishes with Azerbaijan",
      "Tense relations with former security guarantor Russia after freezing CSTO participation",
      "Blockaded borders with Turkey and Azerbaijan constrain overland trade to Georgia and Iran"
    ],
    "tailwinds": [
      "Rapid tech and software development boom attracting thousands of engineers and startups",
      "Active Western engagement with European Union civilian monitoring missions and US joint exercises",
      "Diplomatic momentum toward finalizing a historic comprehensive peace treaty with Baku",
      "High economic growth rates and active diaspora investment from France and the US"
    ],
    "transcriptExcerpt": "Armenia needs lasting security so businesses can invest without another conflict overturning their plans. Yellow.",
    "tags": [
      "Peace Negotiations",
      "Tech Boom",
      "Western Pivot",
      "Caucasus Friction"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1915s",
    "_searchStr": "armenia asia pivoting diplomatically toward the west and booming as a regional tech hub; urgently needs a lasting peace treaty with azerbaijan. peace negotiations tech boom western pivot caucasus friction"
  },
  {
    "rank": 111,
    "name": "Azerbaijan",
    "topoName": "Azerbaijan",
    "id": "AZE",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "32:02",
    "videoSeconds": 1922,
    "region": "Asia",
    "coordinates": [
      47.5769,
      40.1431
    ],
    "isMicrostate": false,
    "summary": "Crucial natural gas supplier to Southern Europe via the Southern Gas Corridor, needing to diversify beyond depleting oil reserves.",
    "headwinds": [
      "Maturing offshore Caspian oil fields facing natural production declines",
      "Heavy reliance on hydrocarbons (over 85% of total export receipts)",
      "Authoritarian governance and human rights concerns affecting Western engagement"
    ],
    "tailwinds": [
      "Key gas supplier to Italy and the Balkans through the Southern Gas Corridor pipeline",
      "Substantial sovereign wealth fund (SOFAZ) holding tens of billions in foreign assets",
      "Strategic Middle Corridor transit hub connecting Central Asia and China to Europe",
      "Restored full territorial control over Karabakh, eliminating territorial conflict"
    ],
    "transcriptExcerpt": "Azerbaijan has energy wealth, but needs more industries beyond it. Yellow.",
    "tags": [
      "Gas to Europe",
      "SOFAZ Fund",
      "Middle Corridor",
      "Oil Depletion"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1922s",
    "_searchStr": "azerbaijan asia crucial natural gas supplier to southern europe via the southern gas corridor, needing to diversify beyond depleting oil reserves. gas to europe sofaz fund middle corridor oil depletion"
  },
  {
    "rank": 112,
    "name": "Georgia",
    "topoName": "Georgia",
    "id": "GEO",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "32:10",
    "videoSeconds": 1930,
    "region": "Asia",
    "coordinates": [
      43.3569,
      42.3154
    ],
    "isMicrostate": false,
    "summary": "Middle Corridor trade nexus, facing political friction with the EU over democratic backsliding and Russian influence.",
    "headwinds": [
      "Passage of 'foreign agent' laws and democratic disputes led the EU to freeze accession and aid",
      "Russian military occupation of 20% of territory (Abkhazia and South Ossetia)",
      "Severe domestic political polarization between ruling party and pro-Western opposition"
    ],
    "tailwinds": [
      "Indispensable transit node on the trans-Caspian 'Middle Corridor' bypassing Russia",
      "Strong economic growth fueled by regional trade, logistics, and tourism",
      "Anaklia deep-sea port development to expand container throughput capacity",
      "Abundant clean alpine hydropower generation"
    ],
    "transcriptExcerpt": "Georgia risks losing investment and support as its relationship with the European Union deteriorates. Yellow.",
    "tags": [
      "Middle Corridor",
      "EU Accession Frozen",
      "Russian Occupation",
      "Transit Node"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1930s",
    "_searchStr": "georgia asia middle corridor trade nexus, facing political friction with the eu over democratic backsliding and russian influence. middle corridor eu accession frozen russian occupation transit node"
  },
  {
    "rank": 113,
    "name": "Kazakhstan",
    "topoName": "Kazakhstan",
    "id": "KAZ",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "32:17",
    "videoSeconds": 1937,
    "region": "Asia",
    "coordinates": [
      66.9237,
      48.0196
    ],
    "isMicrostate": false,
    "summary": "World's #1 uranium producer and massive oil exporter; vulnerable because 80% of oil flows through Russian CPC pipeline ports.",
    "headwinds": [
      "Approximately 80% of oil exports transit through Russia via the CPC pipeline to Novorossiysk, exposing it to Russian interference",
      "Water shortages in the south and drying of the Aral and Caspian Seas",
      "Balancing between Russia, China, and the West without alienating any power"
    ],
    "tailwinds": [
      "World's undisputed leading producer of uranium (over 40% of global supply)",
      "Massive Tengiz, Kashagan, and Karachaganak oil and gas mega-fields generating immense revenues",
      "National Fund holding >$60 billion in sovereign liquid assets",
      "Aggressive investment in the Trans-Caspian transport route bypassing Russia"
    ],
    "transcriptExcerpt": "Kazakhstan has oil and minerals but depends on export routes through a difficult region. Yellow.",
    "tags": [
      "Uranium King",
      "CPC Pipeline Risk",
      "Caspian Oil",
      "Transit Balancing"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1937s",
    "_searchStr": "kazakhstan asia world's #1 uranium producer and massive oil exporter; vulnerable because 80% of oil flows through russian cpc pipeline ports. uranium king cpc pipeline risk caspian oil transit balancing"
  },
  {
    "rank": 114,
    "name": "Mongolia",
    "topoName": "Mongolia",
    "id": "MNG",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "32:26",
    "videoSeconds": 1946,
    "region": "Asia",
    "coordinates": [
      103.8467,
      46.8625
    ],
    "isMicrostate": false,
    "summary": "Oyu Tolgoi mega-copper mine powers growth, but over 90% of mineral exports go to a single customer: neighboring China.",
    "headwinds": [
      "Extreme export concentration: over 90% of exports are purchased by China",
      "Landlocked between only two giant neighbors (Russia and China), limiting export autonomy",
      "Severe winter weather events ('dzud') killing livestock and displacing nomadic herders"
    ],
    "tailwinds": [
      "Oyu Tolgoi underground copper-gold mine ramping up to become one of the world's largest copper producers",
      "Abundant reserves of coking coal, fluorspar, and critical rare earth minerals",
      "Vibrant, independent democratic institutions surrounded by authoritarian giants",
      "Sovereign wealth fund reforms designed to distribute mineral dividends to citizens"
    ],
    "transcriptExcerpt": "Mongolia sells minerals overwhelmingly to China, which is very convenient when China is buying and is much harder to replace that customer when it slows down. Yellow.",
    "tags": [
      "Copper Mega-Mine",
      "China Dependency",
      "Dzud Climatic Risk",
      "Landlocked"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1946s",
    "_searchStr": "mongolia asia oyu tolgoi mega-copper mine powers growth, but over 90% of mineral exports go to a single customer: neighboring china. copper mega-mine china dependency dzud climatic risk landlocked"
  },
  {
    "rank": 115,
    "name": "Uzbekistan",
    "topoName": "Uzbekistan",
    "id": "UZB",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "32:31",
    "videoSeconds": 1951,
    "region": "Asia",
    "coordinates": [
      64.5853,
      41.3775
    ],
    "isMicrostate": false,
    "summary": "Central Asia's most populous nation pursuing rapid market reforms, racing against acute water deficits in the Amu Darya basin.",
    "headwinds": [
      "Acute water scarcity worsened by Afghan Qosh Tepa canal construction diverting Amu Darya river flows",
      "Rapidly depleting domestic natural gas production forcing imports from Russia",
      "Need to create 600,000+ formal jobs every year for its young population"
    ],
    "tailwinds": [
      "Central Asia's demographic heavyweight (36M people) with bold pro-market economic liberalization",
      "World's second-largest open-pit gold mine (Muruntau) generating reliable hard currency",
      "Substantial reserves of uranium, copper, and molybdenum attracting global mining firms",
      "Major investments in solar and wind power parks in the desert regions"
    ],
    "transcriptExcerpt": "Uzbekistan needs growing businesses to create better jobs while dealing with water shortages. Yellow.",
    "tags": [
      "Water Scarcity",
      "Market Reforms",
      "Gold Riches",
      "Qosh Tepa Canal"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1951s",
    "_searchStr": "uzbekistan asia central asia's most populous nation pursuing rapid market reforms, racing against acute water deficits in the amu darya basin. water scarcity market reforms gold riches qosh tepa canal"
  },
  {
    "rank": 116,
    "name": "Turkmenistan",
    "topoName": "Turkmenistan",
    "id": "TKM",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "32:38",
    "videoSeconds": 1958,
    "region": "Asia",
    "coordinates": [
      59.5563,
      38.9697
    ],
    "isMicrostate": false,
    "summary": "Sits on the world's fourth-largest natural gas reserves (Galkynysh), managed under tight state isolation and single-buyer reliance.",
    "headwinds": [
      "Extreme export reliance on a single buyer: pipeline gas deliveries to China",
      "Severe state opacity, autocratic control, and restrictions on private enterprise and travel",
      "Massive methane pipeline leaks and regional water depletion"
    ],
    "tailwinds": [
      "World's fourth-largest natural gas reserves (Galkynysh mega-field)",
      "Low external sovereign debt and substantial cash reserves from gas shipments to Beijing",
      "Plans for the TAPI pipeline to India and Trans-Caspian pipeline to Europe",
      "Strict geopolitical status of recognized 'permanent neutrality'"
    ],
    "transcriptExcerpt": "Turkmenistan relies heavily on gas with tight state control and limited independent information. Yellow.",
    "tags": [
      "Gas Supergiant",
      "China Monopsony",
      "State Opacity",
      "Galkynysh"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1958s",
    "_searchStr": "turkmenistan asia sits on the world's fourth-largest natural gas reserves (galkynysh), managed under tight state isolation and single-buyer reliance. gas supergiant china monopsony state opacity galkynysh"
  },
  {
    "rank": 117,
    "name": "Tajikistan",
    "topoName": "Tajikistan",
    "id": "TJK",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "32:38",
    "videoSeconds": 1958,
    "region": "Asia",
    "coordinates": [
      71.2761,
      38.861
    ],
    "isMicrostate": false,
    "summary": "Building the world's tallest dam (Rogun) to export clean power, while heavily reliant on remittances from migrant workers in Russia.",
    "headwinds": [
      "Extreme economic dependence on remittances (~35-40% of GDP) from migrant workers in Russia",
      "Vulnerable to crackdowns, deportations, and conscription pressures on migrants in Russia",
      "Security concerns along the rugged 1,300 km porous mountain border with Afghanistan"
    ],
    "tailwinds": [
      "Construction of the Rogun Hydropower Dam: will be world's tallest dam, transforming it into clean energy exporter",
      "CASA-1000 electricity transmission project to sell hydropower to Pakistan and South Asia",
      "Substantial mineral wealth in gold, silver, antimony, and aluminum smelting",
      "Strategic security support from China and Russia"
    ],
    "transcriptExcerpt": "Tajikistan and Kyrgyzstan depend heavily on money from workers abroad, particularly in Russia. Losing a job there can mean a family struggling here. Yellow.",
    "tags": [
      "Rogun Dam",
      "Russia Remittances",
      "Hydropower Export",
      "Afghan Border"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1958s",
    "_searchStr": "tajikistan asia building the world's tallest dam (rogun) to export clean power, while heavily reliant on remittances from migrant workers in russia. rogun dam russia remittances hydropower export afghan border"
  },
  {
    "rank": 118,
    "name": "Kyrgyzstan",
    "topoName": "Kyrgyzstan",
    "id": "KGZ",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "32:38",
    "videoSeconds": 1958,
    "region": "Asia",
    "coordinates": [
      74.7661,
      41.2044
    ],
    "isMicrostate": false,
    "summary": "Gold mining from Kumtor and re-export trade flourish, but families depend heavily on money sent from workers in Russia.",
    "headwinds": [
      "Heavy household dependence on remittance inflows from labor migrants in Russia (~25% of GDP)",
      "Vulnerability to regional water sharing disputes across the Fergana Valley",
      "Democratic backsliding with tightening restrictions on civil society and media"
    ],
    "tailwinds": [
      "State-owned Kumtor gold mine generates hundreds of millions in hard currency revenues",
      "Major beneficiary of parallel trade and goods transshipment between China and the Eurasian Union",
      "Construction commencing on the landmark China-Kyrgyzstan-Uzbekistan (CKU) railway",
      "Substantial untapped mountain hydropower potential (Kambarata-1 project)"
    ],
    "transcriptExcerpt": "Tajikistan and Kyrgyzstan depend heavily on money from workers abroad, particularly in Russia. Losing a job there can mean a family struggling here. All five yellow.",
    "tags": [
      "Kumtor Gold",
      "CKU Railway",
      "Remittances",
      "Transshipment"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1958s",
    "_searchStr": "kyrgyzstan asia gold mining from kumtor and re-export trade flourish, but families depend heavily on money sent from workers in russia. kumtor gold cku railway remittances transshipment"
  },
  {
    "rank": 119,
    "name": "Israel",
    "topoName": "Israel",
    "id": "ISR",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "32:52",
    "videoSeconds": 1992,
    "region": "Middle East",
    "coordinates": [
      34.8516,
      31.0461
    ],
    "isMicrostate": false,
    "summary": "Tech powerhouse backed by massive US military aid; multi-front war drains the budget, pulls reservists from work, and damages tourism.",
    "headwinds": [
      "Prolonged multi-front warfare takes hundreds of thousands of workers away from tech and businesses into military service",
      "Ballooning fiscal budget deficits, sovereign credit rating downgrades, and elevated borrowing costs",
      "Severe devastation to tourism, construction, and agriculture in northern border zones"
    ],
    "tailwinds": [
      "World-class advanced high-tech, cybersecurity, AI, and defense innovation ecosystem",
      "Massive, guaranteed multi-billion-dollar annual military financing and weapons support from the United States",
      "Offshore Leviathan and Tamar natural gas fields providing complete energy self-sufficiency",
      "Desalination pioneer: generates over 80% of domestic municipal water from the Mediterranean Sea"
    ],
    "transcriptExcerpt": "Israel has valuable technology companies, wealth, and substantial American military support, including weapons and missile defense funding. Those advantages help pay for prolonged conflict. The war still takes people away from their jobs, damages businesses, and adds to government borrowing. The longer it continues, the more expensive recovery becomes. Yellow.",
    "tags": [
      "High-Tech Hub",
      "War Economy",
      "US Military Aid",
      "Offshore Gas"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1992s",
    "_searchStr": "israel middle east tech powerhouse backed by massive us military aid; multi-front war drains the budget, pulls reservists from work, and damages tourism. high-tech hub war economy us military aid offshore gas"
  },
  {
    "rank": 120,
    "name": "Taiwan",
    "topoName": "Taiwan",
    "id": "TWN",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "33:12",
    "videoSeconds": 1992,
    "region": "Asia",
    "coordinates": [
      120.9605,
      23.6978
    ],
    "isMicrostate": false,
    "summary": "Produces over 90% of the world's most advanced chips (TSMC); relies on imports for 95% of energy, making a Chinese blockade catastrophic.",
    "headwinds": [
      "Existential threat of a Chinese naval/aerial blockade or military invasion",
      "Approximately 95-97% of primary energy is imported (LNG, coal, oil), vulnerable to maritime cutoffs",
      "Fertility rate among the lowest globally, causing rapid domestic demographic contraction"
    ],
    "tailwinds": [
      "TSMC 'Silicon Shield': manufactures over 90% of the world's most advanced logic semiconductors",
      "Indispensable global role: a war or blockade would trigger a $10+ trillion worldwide economic depression",
      "Enormous private foreign assets, sovereign net wealth, and zero net external debt",
      "Deepening security, intelligence, and defense procurement partnerships with the US and allies"
    ],
    "transcriptExcerpt": "This is where several countries we've already ranked could suddenly have a much worse decade... TSMC makes chips that companies across the world design and depend on. The issue with Taiwan is that imports supplied roughly 95% of Taiwan's energy in 2025. A prolonged blockade could disrupt production without a chip factory being destroyed... But a war or a prolonged blockade could change its future and damage everyone relying on its factories. Yellow. With a very large condition attached.",
    "tags": [
      "TSMC Silicon Shield",
      "Blockade Risk",
      "Energy Import 95%",
      "Semiconductors"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=1992s",
    "_searchStr": "taiwan asia produces over 90% of the world's most advanced chips (tsmc); relies on imports for 95% of energy, making a chinese blockade catastrophic. tsmc silicon shield blockade risk energy import 95% semiconductors"
  },
  {
    "rank": 121,
    "name": "United States",
    "topoName": "United States of America",
    "id": "USA",
    "tier": "yellow",
    "tierLabel": "In Trouble, But With a Believable Way Out",
    "timestamp": "34:00",
    "videoSeconds": 2040,
    "region": "Americas",
    "coordinates": [
      -95.7129,
      37.0902
    ],
    "isMicrostate": false,
    "summary": "Dollar dominance, energy independence, and tech giants, facing an annual interest bill hitting $2.1T by 2036 and Social Security depletion in 2032.",
    "headwinds": [
      "Federal net interest payments projected by CBO to surpass $1 trillion in 2026 and hit $2.1 trillion annually by 2036",
      "Social Security Old-Age & Survivors Trust Fund projected to be depleted by late 2032, requiring benefit cuts or tax hikes",
      "Deep political polarization and partisan gridlock hindering long-term fiscal consolidation"
    ],
    "tailwinds": [
      "World's undisputed premier reserve currency (US Dollar) ensuring unmatched borrowing flexibility",
      "Global leadership in artificial intelligence, software, cloud computing, and advanced biotechnology",
      "World's #1 producer of crude oil and natural gas, plus abundant agricultural export capacity",
      "Unmatched military power, deep capital markets, and legal/intellectual property protections"
    ],
    "transcriptExcerpt": "The US has food, energy, extraordinary businesses, and the world's most important currency... But then you look at their interest bill. The Congressional Budget Office projected roughly $1 trillion in federal net interest for 2026. By 2036, its forecast had the annual bill at about $2.1 trillion. That's just interest... Social Security adds another deadline: its trust fund is projected to run out in late 2032... America has the means to deal with this. It also has a political system very capable of pushing the difficult decision until after the next election. So yellow.",
    "tags": [
      "Reserve Currency",
      "$2.1T Interest Bill",
      "Social Security 2032",
      "Tech & AI Dominance"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2040s",
    "_searchStr": "united states americas dollar dominance, energy independence, and tech giants, facing an annual interest bill hitting $2.1t by 2036 and social security depletion in 2032. reserve currency $2.1t interest bill social security 2032 tech & ai dominance"
  },
  {
    "rank": 122,
    "name": "Nigeria",
    "topoName": "Nigeria",
    "id": "NGA",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "35:33",
    "videoSeconds": 2133,
    "region": "Africa",
    "coordinates": [
      8.6753,
      9.082
    ],
    "isMicrostate": false,
    "summary": "Fuel subsidy removal and currency devaluation triggered crushing inflation; businesses rely on expensive diesel generators to survive grid failures.",
    "headwinds": [
      "Removal of petrol subsidies and currency devaluation triggered severe inflation, eroding household purchasing power",
      "Unreliable national electricity grid forces millions of small businesses to rely on costly private generators",
      "Insecurity: Boko Haram in northeast, banditry/kidnappings in northwest, crude oil theft in Niger Delta"
    ],
    "tailwinds": [
      "Africa's largest population (220M+) and vibrant entrepreneurial, fintech, and creative youth culture",
      "Dangote Mega Refinery operational, ending reliance on imported refined petroleum",
      "Massive proven natural gas reserves with expansion of LNG exports",
      "Substantial agricultural potential across fertile central belt"
    ],
    "transcriptExcerpt": "Nigeria that has oil, a huge market, and millions of young people who could build successful businesses. This sounds great, but they need the electricity to stay on. If you run a workshop, you may need a generator that needs fuel. If fuel gets more expensive, so does everything you make. For years, the government paid to keep petrol cheap. Cutting that subsidy reduced a huge public expense, but moved more of the bill onto the drivers and businesses... loosening currency controls helped push the Naira down, making imports cost more. Orange.",
    "tags": [
      "Subsidy Removal",
      "Inflation Shock",
      "Power Grid Failures",
      "Dangote Refinery"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2133s",
    "_searchStr": "nigeria africa fuel subsidy removal and currency devaluation triggered crushing inflation; businesses rely on expensive diesel generators to survive grid failures. subsidy removal inflation shock power grid failures dangote refinery"
  },
  {
    "rank": 123,
    "name": "Senegal",
    "topoName": "Senegal",
    "id": "SEN",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "36:17",
    "videoSeconds": 2177,
    "region": "Africa",
    "coordinates": [
      -14.4524,
      14.4974
    ],
    "isMicrostate": false,
    "summary": "First offshore oil and gas shipments began, but audit revealed hidden public debt and deficits much larger than reported.",
    "headwinds": [
      "Government audit in late 2024 uncovered billions in hidden debt and higher fiscal deficits left by prior administration",
      "High cost of living and youth unemployment driving hazardous migrant sea crossings to the Canary Islands",
      "Sahel jihadist instability pressing against eastern border with Mali"
    ],
    "tailwinds": [
      "Sangomar offshore oil project and Greater Tortue Ahmeyim (GTA) LNG project starting commercial exports",
      "One of West Africa's most stable constitutional democracies with peaceful transitions of power",
      "Expanding solar energy and port logistics infrastructure around Dakar",
      "Significant phosphate, gold, and mineral sands extraction"
    ],
    "transcriptExcerpt": "Senegal began producing oil and gas, then discovered its public debt was much higher than previously anticipated. New income helps. So does knowing how much you owe. Orange.",
    "tags": [
      "Hidden Debt Audit",
      "Offshore Oil & Gas",
      "Democracy",
      "Youth Emigration"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2177s",
    "_searchStr": "senegal africa first offshore oil and gas shipments began, but audit revealed hidden public debt and deficits much larger than reported. hidden debt audit offshore oil & gas democracy youth emigration"
  },
  {
    "rank": 124,
    "name": "Cameroon",
    "topoName": "Cameroon",
    "id": "CMR",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "36:27",
    "videoSeconds": 2187,
    "region": "Africa",
    "coordinates": [
      12.3547,
      7.3697
    ],
    "isMicrostate": false,
    "summary": "Rich natural resources, paralyzed by the Anglophone separatist conflict, Boko Haram incursions, and an aging 90+ presidency.",
    "headwinds": [
      "Protracted, violent Anglophone separatist crisis paralyzing economic output in western regions",
      "Aging political leadership and looming succession risks after four decades of rule",
      "Infrastructure bottlenecks in roads, electricity, and water distribution"
    ],
    "tailwinds": [
      "Diversified export base spanning oil, gas, timber, cocoa, coffee, and aluminum",
      "Kribi deepwater container port expanding regional maritime trade",
      "Hydropower potential along the Sanaga River basin (Nachtigal dam)",
      "Strategic transit gateway for landlocked Chad and Central African Republic"
    ],
    "transcriptExcerpt": "Cameroon needs better roads, electricity, and services with insecurity making investment harder. Orange.",
    "tags": [
      "Anglophone Crisis",
      "Succession Risk",
      "Kribi Port",
      "Hydropower"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2187s",
    "_searchStr": "cameroon africa rich natural resources, paralyzed by the anglophone separatist conflict, boko haram incursions, and an aging 90+ presidency. anglophone crisis succession risk kribi port hydropower"
  },
  {
    "rank": 125,
    "name": "Gabon",
    "topoName": "Gabon",
    "id": "GAB",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "36:33",
    "videoSeconds": 2193,
    "region": "Africa",
    "coordinates": [
      11.6094,
      -0.8037
    ],
    "isMicrostate": false,
    "summary": "Post-coup military transition governing mature oil fields; heavy debt limits what it can invest in replacing declining oil reserves.",
    "headwinds": [
      "Maturing offshore oil fields facing long-term natural depletion",
      "High sovereign debt burden accumulated by the ousted Bongo dynasty limits development spending",
      "High poverty and youth unemployment despite high statistical GDP per capita"
    ],
    "tailwinds": [
      "World's second-largest producer of high-grade manganese ore essential for steel and batteries",
      "Dense Congo Basin rainforest covering 88% of territory, positioning it as a carbon-credit powerhouse",
      "Béléné iron ore deposit offers massive mining potential",
      "Relative political calm during ongoing constitutional transition"
    ],
    "transcriptExcerpt": "Gabon depends on an oil industry that won't last forever, while debt limits what it can spend replacing that income. Orange.",
    "tags": [
      "Oil Depletion",
      "Manganese Leader",
      "Debt Limits",
      "Carbon Sinks"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2193s",
    "_searchStr": "gabon africa post-coup military transition governing mature oil fields; heavy debt limits what it can invest in replacing declining oil reserves. oil depletion manganese leader debt limits carbon sinks"
  },
  {
    "rank": 126,
    "name": "Benin",
    "topoName": "Benin",
    "id": "BEN",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "36:40",
    "videoSeconds": 2200,
    "region": "Africa",
    "coordinates": [
      2.3158,
      9.3077
    ],
    "isMicrostate": false,
    "summary": "Expanding Cotonou port and cotton trade, but deadly jihadist militant attacks spreading from the Sahel threaten northern parks.",
    "headwinds": [
      "Deadly cross-border terrorist attacks by Sahel jihadist groups in northern national parks (Pendjari/W)",
      "Diplomatic disputes and border closures with military junta in Niger disrupting transit trade",
      "Vulnerability to policy changes in Nigeria's border trade and currency"
    ],
    "tailwinds": [
      "Major modernization of the Port of Cotonou handling cargo for the wider region",
      "West Africa's leading cotton producer with growing domestic textile processing",
      "Disciplined fiscal management maintaining low sovereign borrowing spreads",
      "Expansion of Glo-Djigbé Industrial Zone (GDIZ) attracting garment manufacturing"
    ],
    "transcriptExcerpt": "Benin and Togo have trade and industrial opportunities, but violence spreading south from the Sahel threatens communities and investment. Orange.",
    "tags": [
      "Sahel Spillover",
      "Cotonou Port",
      "Cotton Exports",
      "GDIZ Industrial Zone"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2200s",
    "_searchStr": "benin africa expanding cotonou port and cotton trade, but deadly jihadist militant attacks spreading from the sahel threaten northern parks. sahel spillover cotonou port cotton exports gdiz industrial zone"
  },
  {
    "rank": 127,
    "name": "Togo",
    "topoName": "Togo",
    "id": "TGO",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "36:40",
    "videoSeconds": 2200,
    "region": "Africa",
    "coordinates": [
      0.8248,
      8.6195
    ],
    "isMicrostate": false,
    "summary": "Port of Lomé is West Africa's leading container transshipment hub, but northern borders face spillover militant violence.",
    "headwinds": [
      "Violent jihadist incursions in the northern Savanes region threatening rural populations",
      "High public debt ratio limiting state social safety net funding",
      "Domestic political tensions surrounding constitutional power transitions"
    ],
    "tailwinds": [
      "Port of Lomé: premier deepwater natural container port and transshipment hub in West Africa",
      "Expanding phosphate mining and clinker/cement production",
      "PIA (Plateforme Industrielle d'Adétikopé) attracting agricultural processing investments",
      "Regional headquarters for pan-African banking institutions (Ecobank, BOAD)"
    ],
    "transcriptExcerpt": "Benin and Togo have trade and industrial opportunities, but violence spreading south from the Sahel threatens communities and investment. Five oranges.",
    "tags": [
      "Port of Lome",
      "Sahel Militancy",
      "Transshipment Hub",
      "Phosphate"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2200s",
    "_searchStr": "togo africa port of lomé is west africa's leading container transshipment hub, but northern borders face spillover militant violence. port of lome sahel militancy transshipment hub phosphate"
  },
  {
    "rank": 128,
    "name": "Liberia",
    "topoName": "Liberia",
    "id": "LBR",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "36:48",
    "videoSeconds": 2208,
    "region": "Africa",
    "coordinates": [
      -9.4295,
      6.4281
    ],
    "isMicrostate": false,
    "summary": "Peaceful democratic transfer of power and expanding iron ore mines, but basic roads, clinics, and power grids remain fragile.",
    "headwinds": [
      "Severe infrastructure deficit: majority of population lacks access to paved roads and reliable grid electricity",
      "Food insecurity and heavy reliance on imported staple rice",
      "High vulnerability to global commodity price swings for iron ore and rubber"
    ],
    "tailwinds": [
      "Demonstrated democratic maturity with peaceful constitutional transfer of presidential power",
      "Major iron ore concession expansions by ArcelorMittal and other global mining firms",
      "World's premier commercial open-ship registry generating consistent foreign currency revenues",
      "Untapped forestry, agricultural, and gold mining potential"
    ],
    "transcriptExcerpt": "Liberia's recent growth follows years of setbacks. Mining can raise export income, but jobs and services still have a lot of lost ground to recover. Orange.",
    "tags": [
      "Mining Recovery",
      "Infrastructure Deficit",
      "Peaceful Democracy",
      "Ship Registry"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2208s",
    "_searchStr": "liberia africa peaceful democratic transfer of power and expanding iron ore mines, but basic roads, clinics, and power grids remain fragile. mining recovery infrastructure deficit peaceful democracy ship registry"
  },
  {
    "rank": 129,
    "name": "Sierra Leone",
    "topoName": "Sierra Leone",
    "id": "SLE",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "36:57",
    "videoSeconds": 2217,
    "region": "Africa",
    "coordinates": [
      -11.7799,
      8.4606
    ],
    "isMicrostate": false,
    "summary": "Critically depleted foreign exchange reserves mean any price spike for imported food or fuel threatens severe national shortages.",
    "headwinds": [
      "Critically depleted foreign currency reserves leaving little buffer to pay for essential food and fuel imports",
      "Severe inflation and Leone currency depreciation eroding wages",
      "Political polarization and civil unrest following contested election results"
    ],
    "tailwinds": [
      "Rich mineral resources: rutile, bauxite, diamonds, and high-grade iron ore",
      "Expanding commercial agricultural production, particularly in domestic rice cultivation",
      "Natural deepwater harbor at Freetown with expansion potential",
      "Strong international donor and multilateral financial institution engagement"
    ],
    "transcriptExcerpt": "Sierra Leone has critically low foreign currency reserves. The emergency money needs emergency money. If imports get more expensive, paying for essentials becomes harder almost immediately. Orange.",
    "tags": [
      "Depleted Forex",
      "Import Crisis",
      "Currency Depreciation",
      "Minerals"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2217s",
    "_searchStr": "sierra leone africa critically depleted foreign exchange reserves mean any price spike for imported food or fuel threatens severe national shortages. depleted forex import crisis currency depreciation minerals"
  },
  {
    "rank": 130,
    "name": "Gambia",
    "topoName": "Gambia",
    "id": "GMB",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "37:06",
    "videoSeconds": 2226,
    "region": "Africa",
    "coordinates": [
      -15.3101,
      13.4432
    ],
    "isMicrostate": true,
    "summary": "Tourism and diaspora remittances keep the river nation afloat, but high debt leaves zero margin for an economic shock.",
    "headwinds": [
      "Elevated public debt levels consuming a heavy portion of fiscal revenue in interest payments",
      "Vulnerability to external shocks in European charter winter tourism",
      "High youth irregular migration toward Europe draining young workforce"
    ],
    "tailwinds": [
      "Stable, restored democratic institutions and civil liberties post-Jammeh dictatorship",
      "Strong, consistent remittances from large overseas diaspora communities",
      "Modernized container handling at the Port of Banjul",
      "Thriving peanut farming and Atlantic artisanal fisheries exports"
    ],
    "transcriptExcerpt": "Gambia depends on tourism and money from abroad with that leaving little spare in the budget. Orange.",
    "tags": [
      "Tourism Dependent",
      "High Debt",
      "Remittances",
      "Banjul Port"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2226s",
    "_searchStr": "gambia africa tourism and diaspora remittances keep the river nation afloat, but high debt leaves zero margin for an economic shock. tourism dependent high debt remittances banjul port"
  },
  {
    "rank": 131,
    "name": "Guinea",
    "topoName": "Guinea",
    "id": "GIN",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "37:15",
    "videoSeconds": 2235,
    "region": "Africa",
    "coordinates": [
      -9.6966,
      9.9456
    ],
    "isMicrostate": false,
    "summary": "Simandou mega-iron-ore project shipped first ore in late 2025; challenge is translating massive mining riches into everyday livelihoods.",
    "headwinds": [
      "Military junta governance and delays in returning to constitutional civilian rule",
      "History of contractual disputes, corruption, and infrastructure bottlenecks delaying benefits",
      "Widespread poverty and lack of basic services for communities living adjacent to mega-mines"
    ],
    "tailwinds": [
      "Simandou: world's largest untapped high-grade iron ore deposit shipped first ore in Dec 2025 with 600km rail line",
      "World's leading exporter of bauxite, the essential raw material for aluminum smelting",
      "Water tower of West Africa with vast untapped hydroelectric potential along river sources",
      "Massive infrastructure investments by Chinese and international consortiums"
    ],
    "transcriptExcerpt": "Guinea has some of the richest iron ore on Earth. After decades of delays, a giant mine called Simandou shipped its first iron ore in December 2025. It also has enormous reserves of bauxite... Sounds promising, but a mine can be enormous without employing an enormous share of the country... How much of that wealth reaches ordinary people still depends on decisions being made now. Orange.",
    "tags": [
      "Simandou Iron Ore",
      "Bauxite King",
      "Resource Curse",
      "Junta Transition"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2235s",
    "_searchStr": "guinea africa simandou mega-iron-ore project shipped first ore in late 2025; challenge is translating massive mining riches into everyday livelihoods. simandou iron ore bauxite king resource curse junta transition"
  },
  {
    "rank": 132,
    "name": "Cabo Verde",
    "topoName": "Cabo Verde",
    "id": "CPV",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "37:53",
    "videoSeconds": 2273,
    "region": "Africa",
    "coordinates": [
      -24.0132,
      16.5388
    ],
    "isMicrostate": true,
    "summary": "Model archipelago democracy reliant on European beach tourism, carrying high public debt and expensive imported fuel/food bills.",
    "headwinds": [
      "Heavy public debt-to-GDP ratio accumulated during pandemic tourism border shutdowns",
      "Extreme vulnerability to imported fuel and food price spikes across 10 separate islands",
      "Severe chronic freshwater scarcity reliant on energy-intensive desalination"
    ],
    "tailwinds": [
      "Exemplary multi-party democracy, high civil liberties, and stable political governance",
      "Premier sun-and-beach resort tourism brand attracting millions of European holidaymakers",
      "Aggressive deployment of utility-scale wind and solar energy across windy islands",
      "Strong, highly educated diaspora remitting consistent financial support"
    ],
    "transcriptExcerpt": "Cabo Verde earns from tourism, but that and expensive imports leave it vulnerable to a bad season. Orange.",
    "tags": [
      "Island Democracy",
      "Tourism Debt",
      "Import Scarcity",
      "Desalination"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2273s",
    "_searchStr": "cabo verde africa model archipelago democracy reliant on european beach tourism, carrying high public debt and expensive imported fuel/food bills. island democracy tourism debt import scarcity desalination"
  },
  {
    "rank": 133,
    "name": "São Tomé & Príncipe",
    "topoName": "São Tomé and Principe",
    "id": "STP",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "37:59",
    "videoSeconds": 2279,
    "region": "Africa",
    "coordinates": [
      6.6131,
      0.1864
    ],
    "isMicrostate": true,
    "summary": "State power company crippled by unpaid fuel bills, causing widespread blackouts that ripple across businesses and hospitals.",
    "headwinds": [
      "State electricity utility (EMAE) paralyzed by huge unpaid fuel debts, triggering daily blackouts",
      "Severe depletion of foreign exchange reserves hindering fuel and food purchases",
      "Extremely narrow export base historically dependent on organic cocoa beans"
    ],
    "tailwinds": [
      "Pristine tropical environment with high-end luxury ecotourism and conservation potential",
      "Untapped offshore deepwater oil exploration prospects in the Joint Development Zone with Nigeria",
      "Peaceful democratic traditions with peaceful changes of government",
      "Expanding international donor support for solar mini-grids"
    ],
    "transcriptExcerpt": "São Tomé and Príncipe has an electricity company with huge unpaid fuel bills. When it can't pay, the problem reaches every shop and household depending on the power supply. Orange.",
    "tags": [
      "Utility Debt",
      "Daily Blackouts",
      "Forex Shortage",
      "Eco-Tourism"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2279s",
    "_searchStr": "são tomé & príncipe africa state power company crippled by unpaid fuel bills, causing widespread blackouts that ripple across businesses and hospitals. utility debt daily blackouts forex shortage eco-tourism"
  },
  {
    "rank": 134,
    "name": "Comoros",
    "topoName": "Comoros",
    "id": "COM",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "38:09",
    "videoSeconds": 2289,
    "region": "Africa",
    "coordinates": [
      43.8722,
      -11.8753
    ],
    "isMicrostate": true,
    "summary": "Heavily reliant on remittances from the diaspora in France, with acute domestic unemployment and few formal businesses.",
    "headwinds": [
      "Extreme economic dependence on personal remittances from diaspora in France (~20% of GDP)",
      "Very limited domestic private sector employment opportunities driving youth to emigrate",
      "Political tensions and contested constitutional referendums surrounding presidential terms"
    ],
    "tailwinds": [
      "World's leading producer of ylang-ylang perfume essence, plus major vanilla and clove exports",
      "Potential offshore natural gas reserves in the Mozambique Channel",
      "Strategic location along western Indian Ocean shipping lanes",
      "Substantial remittances providing basic household survival cushions"
    ],
    "transcriptExcerpt": "Comoros relies heavily on money sent home from abroad and has too few opportunities to earn locally. All three orange.",
    "tags": [
      "Remittance Dependent",
      "Ylang-Ylang Essence",
      "Youth Exodus",
      "Mozambique Channel"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2289s",
    "_searchStr": "comoros africa heavily reliant on remittances from the diaspora in france, with acute domestic unemployment and few formal businesses. remittance dependent ylang-ylang essence youth exodus mozambique channel"
  },
  {
    "rank": 135,
    "name": "Uganda",
    "topoName": "Uganda",
    "id": "UGA",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "38:17",
    "videoSeconds": 2297,
    "region": "Africa",
    "coordinates": [
      32.2903,
      1.3733
    ],
    "isMicrostate": false,
    "summary": "Lake Albert oil project delayed for two decades; high debt payments must be paid today with existing taxes before crude flows.",
    "headwinds": [
      "Heavy debt servicing obligations crowding out public healthcare and education budgets today",
      "Lake Albert oil drilling and EACOP pipeline face delays, environmental lawsuits, and funding hurdles",
      "Governance concerns, political repression of youth opposition, and four-decade presidential rule"
    ],
    "tailwinds": [
      "Tilenga and Kingfisher oil fields hold 1.4 billion barrels of recoverable crude preparing for initial pumping",
      "Major exporter of high-grade Robusta and Arabica coffee, gold, and agricultural produce",
      "Substantial hydropower generation along the Nile River (Karuma and Isimba dams)",
      "Young, rapidly urbanizing and entrepreneurial consumer population"
    ],
    "transcriptExcerpt": "Uganda found oil in 2006 and is only now close to pumping it. The government is counting on that money. Until it arrives, everything still has to be paid for with the taxes and loans it has now. Orange.",
    "tags": [
      "EACOP Pipeline",
      "Oil Delays",
      "Coffee Exports",
      "Debt Servicing"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2297s",
    "_searchStr": "uganda africa lake albert oil project delayed for two decades; high debt payments must be paid today with existing taxes before crude flows. eacop pipeline oil delays coffee exports debt servicing"
  },
  {
    "rank": 136,
    "name": "Rwanda",
    "topoName": "Rwanda",
    "id": "RWA",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "38:30",
    "videoSeconds": 2310,
    "region": "Africa",
    "coordinates": [
      29.8739,
      -1.9403
    ],
    "isMicrostate": false,
    "summary": "Rapid development and tech hub ambitions hit a major roadblock in 2025 as Western donors paused aid over alleged DR Congo rebel backing.",
    "headwinds": [
      "Multiple Western donor nations suspended or froze budgetary aid in 2025 over alleged military backing of M23 rebels in DR Congo",
      "High public debt accumulated to finance landmark convention centers, national airline, and sports sponsorships",
      "Land scarcity and high rural population density in the 'Land of a Thousand Hills'"
    ],
    "tailwinds": [
      "Reputation for clean, highly efficient governance, zero tolerance for petty corruption, and ease of doing business",
      "Kigali established as premier regional hub for international conferences, fintech, and sports",
      "High-margin luxury gorilla ecotourism generating significant hard currency",
      "Major domestic investments in digital infrastructure, drone logistics, and clean energy"
    ],
    "transcriptExcerpt": "Rwanda has grown fast for years, helped pay by a lot of foreign aid and loans. In 2025, several donors paused some of that aid over accusations that Rwanda backs rebels in neighboring eastern Congo, which Rwanda denies. Orange.",
    "tags": [
      "Aid Freeze 2025",
      "M23 Rebel Dispute",
      "Clean Governance",
      "Kigali Tech Hub"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2310s",
    "_searchStr": "rwanda africa rapid development and tech hub ambitions hit a major roadblock in 2025 as western donors paused aid over alleged dr congo rebel backing. aid freeze 2025 m23 rebel dispute clean governance kigali tech hub"
  },
  {
    "rank": 137,
    "name": "Kenya",
    "topoName": "Kenya",
    "id": "KEN",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "38:42",
    "videoSeconds": 2322,
    "region": "Africa",
    "coordinates": [
      37.9062,
      -0.0236
    ],
    "isMicrostate": false,
    "summary": "East Africa's financial and tech capital squeezed by crushing Eurobond debt service, sparking massive Gen-Z protests against new taxes.",
    "headwinds": [
      "Heavy sovereign debt service consumes over 55-60% of domestic tax revenue, leaving little for development",
      "Massive youth-led 'Gen Z' protests forced abandonment of proposed tax hikes, creating a fiscal hole",
      "High youth unemployment and pervasive frustration with political corruption"
    ],
    "tailwinds": [
      "Premier commercial, financial, aviation, and tech innovation capital of East Africa ('Silicon Savannah')",
      "Pioneered mobile money (M-Pesa) with high digital financial inclusion nationwide",
      "Over 90% of national electricity generated from clean renewables (geothermal and wind leader)",
      "Major exporter of black tea, fresh cut flowers to Europe, and agricultural produce"
    ],
    "transcriptExcerpt": "Kenya has businesses ready to expand. Debt payments take public money that could have improved the roads, power, and services they need. And many young people still struggle to find secure work. Orange.",
    "tags": [
      "Debt Service 60%",
      "Gen Z Tax Protests",
      "Silicon Savannah",
      "Geothermal Leader"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2322s",
    "_searchStr": "kenya africa east africa's financial and tech capital squeezed by crushing eurobond debt service, sparking massive gen-z protests against new taxes. debt service 60% gen z tax protests silicon savannah geothermal leader"
  },
  {
    "rank": 138,
    "name": "Egypt",
    "topoName": "Egypt",
    "id": "EGY",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "38:54",
    "videoSeconds": 2334,
    "region": "Africa",
    "coordinates": [
      30.8025,
      26.8206
    ],
    "isMicrostate": false,
    "summary": "Houthi Red Sea shipping attacks slashed Suez Canal revenue by over 50%; downstream Nile water concerns from Ethiopia's giant dam.",
    "headwinds": [
      "Houthi missile attacks on Red Sea shipping diverted cargo around Africa, cutting Suez Canal dollar revenue by >50%",
      "Acute water security anxieties: 97% of water comes from the Nile, now regulated by Ethiopia's GERD upstream",
      "Massive sovereign debt burden requiring multi-billion IMF and Gulf emergency bailouts",
      "Severe domestic inflation and multiple currency devaluations crushing household savings"
    ],
    "tailwinds": [
      "Massive multi-billion Gulf investments (such as UAE's $35B Ras El-Hekma coastal mega-development)",
      "Strategic international geopolitical centrality controlling the Suez maritime corridor",
      "Vast cultural tourism assets (Giza Pyramids, Grand Egyptian Museum) drawing millions",
      "Expanding offshore Mediterranean natural gas fields (Zohr) and solar energy projects"
    ],
    "transcriptExcerpt": "Egypt earns foreign currency from tourists, Suez Canal fees, and Egyptians working abroad sending money home. That sounds like a nicely diversified income portfolio. But the problem is once a regional conflict hits, more than one source will be affected at once. Tourists cancel, ships take the longer route around Africa, Egypt loses dollars while still needing them for imports and debt payments. It also depends on the Nile and most of the Nile's water starts in Ethiopia. Orange.",
    "tags": [
      "Suez Revenue Halved",
      "Red Sea Crisis",
      "Nile Water / GERD",
      "Ras El-Hekma"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2334s",
    "_searchStr": "egypt africa houthi red sea shipping attacks slashed suez canal revenue by over 50%; downstream nile water concerns from ethiopia's giant dam. suez revenue halved red sea crisis nile water / gerd ras el-hekma"
  },
  {
    "rank": 139,
    "name": "Djibouti",
    "topoName": "Djibouti",
    "id": "DJI",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "39:32",
    "videoSeconds": 2372,
    "region": "Africa",
    "coordinates": [
      42.5903,
      11.8251
    ],
    "isMicrostate": true,
    "summary": "Monopolizes landlocked Ethiopia's maritime trade through modern ports, but carries heavy Chinese loan debts with Red Sea shipping exposure.",
    "headwinds": [
      "Heavy sovereign debt burden owed to Chinese lenders for port, railway, and water pipeline infrastructure",
      "Exposure to Red Sea and Bab el-Mandeb naval security threats and shipping route diversions",
      "Virtually zero domestic agriculture or manufacturing; almost all food is imported"
    ],
    "tailwinds": [
      "Irreplaceable strategic chokepoint port handling over 90% of landlocked Ethiopia's entire foreign trade",
      "Hosts lucrative foreign military bases (US Camp Lemonnier, China's first overseas base, France, Japan)",
      "Modern electrified standard-gauge railway linking Port of Doraleh directly to Addis Ababa",
      "Subsea fiber-optic telecommunications landing hub connecting Asia, Africa, and Europe"
    ],
    "transcriptExcerpt": "Ethiopia doesn't have any coastline, which gives its neighbor Djibouti a valuable business... Djibouti is making good money from Ethiopian goods traveling through its ports. But Djibouti borrowed heavily, so debt payments take money that could have improved services at home. Both orange.",
    "tags": [
      "Ethiopian Gateway",
      "Chinese Debt",
      "Bab el-Mandeb",
      "Military Base Hub"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2372s",
    "_searchStr": "djibouti africa monopolizes landlocked ethiopia's maritime trade through modern ports, but carries heavy chinese loan debts with red sea shipping exposure. ethiopian gateway chinese debt bab el-mandeb military base hub"
  },
  {
    "rank": 140,
    "name": "Tunisia",
    "topoName": "Tunisia",
    "id": "TUN",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "39:55",
    "videoSeconds": 2395,
    "region": "Africa",
    "coordinates": [
      9.5375,
      33.8869
    ],
    "isMicrostate": false,
    "summary": "Stalled IMF debt bailout forces local banks to fund the government budget, choking credit to private businesses and jobs.",
    "headwinds": [
      "Rejection of IMF loan reforms led government to force domestic commercial banks to finance deficits, crowding out private lending",
      "Persistent shortages of subsidized staple goods (sugar, coffee, flour, cooking oil)",
      "Democratic backsliding and concentration of executive power under President Saied"
    ],
    "tailwinds": [
      "Established Mediterranean automotive wiring, electronics, and aerospace parts manufacturing cluster",
      "High-volume European package beach and cultural heritage tourism",
      "Major global exporter of olive oil and dates generating essential foreign exchange",
      "Strategic proximity to European industrial supply chains"
    ],
    "transcriptExcerpt": "Tunisia has too little outside financing and growing pressure on banks to fund the government. That can leave less money for businesses to expand and hire. Orange.",
    "tags": [
      "Bank Crowding Out",
      "IMF Standoff",
      "Staple Shortages",
      "Auto Components"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2395s",
    "_searchStr": "tunisia africa stalled imf debt bailout forces local banks to fund the government budget, choking credit to private businesses and jobs. bank crowding out imf standoff staple shortages auto components"
  },
  {
    "rank": 141,
    "name": "Moldova",
    "topoName": "Moldova",
    "id": "MDA",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "40:06",
    "videoSeconds": 2406,
    "region": "Europe",
    "coordinates": [
      28.3699,
      47.4116
    ],
    "isMicrostate": false,
    "summary": "Lost cheap electricity when Transnistria gas transit halted in 2025; faces aggressive Russian hybrid warfare next to Ukraine war.",
    "headwinds": [
      "Halt of Russian gas transit through Ukraine to breakaway Transnistria in 2025 disrupted cheap electricity supplies",
      "Massive ongoing Russian hybrid warfare, disinformation, and election interference campaigns",
      "Severe brain drain with a large portion of the working-age population living abroad in the EU"
    ],
    "tailwinds": [
      "European Union candidate status with rapid synchronization to the Romanian and European electricity grid",
      "Direct financial and humanitarian budget support from the European Commission and Western partners",
      "Vibrant, high-quality wine and agricultural export sector finding new Western markets",
      "Pro-European reformist leadership (Sandu) resolutely pursuing anti-corruption measures"
    ],
    "transcriptExcerpt": "Moldova has been trying to reduce its dependence on Russian energy. In 2025, Russian gas deliveries to the breakaway region of Transnistria stopped. So Moldova lost the cheap electricity it had bought from power plants there and needed replacements. At the same time, workers keep leaving for better wages abroad. EU support helps. But Moldova is dealing with energy shocks, Russian political interference, and war next door in Ukraine. Orange.",
    "tags": [
      "Transnistria Gas",
      "Hybrid Warfare",
      "EU Candidate",
      "Energy Decoupling"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2406s",
    "_searchStr": "moldova europe lost cheap electricity when transnistria gas transit halted in 2025; faces aggressive russian hybrid warfare next to ukraine war. transnistria gas hybrid warfare eu candidate energy decoupling"
  },
  {
    "rank": 142,
    "name": "Suriname",
    "topoName": "Suriname",
    "id": "SUR",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "40:30",
    "videoSeconds": 2430,
    "region": "Americas",
    "coordinates": [
      -56.0278,
      3.9193
    ],
    "isMicrostate": false,
    "summary": "Discovered billions in offshore oil (Block 58), but heavy debt repayments come due before initial oil flows around 2028.",
    "headwinds": [
      "Large debt repayments and restructuring commitments must be serviced before any offshore oil revenue arrives in 2028",
      "High historical inflation and currency depreciation that pushed up the cost of living",
      "Small domestic labor pool requiring imported skills to build the energy sector"
    ],
    "tailwinds": [
      "Final Investment Decision (FID) approved for $10B+ GranMorgu offshore oil development (TotalEnergies)",
      "One of only three carbon-negative countries in the world with over 90% Amazon rainforest cover",
      "Established commercial bauxite, gold mining (Newmont), and timber exports",
      "IMF debt restructuring successfully completed, stabilizing the macro economy"
    ],
    "transcriptExcerpt": "Suriname is right next door to Guyana and it's found oil in the same stretch of ocean. Production is expected to start around 2028. The problem is that Suriname has debts to repay before any of that money arrives. Orange.",
    "tags": [
      "Block 58 Oil",
      "Debt Hurdle",
      "2028 First Oil",
      "Carbon Negative"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2430s",
    "_searchStr": "suriname americas discovered billions in offshore oil (block 58), but heavy debt repayments come due before initial oil flows around 2028. block 58 oil debt hurdle 2028 first oil carbon negative"
  },
  {
    "rank": 143,
    "name": "Ecuador",
    "topoName": "Ecuador",
    "id": "ECU",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "41:14",
    "videoSeconds": 2474,
    "region": "Americas",
    "coordinates": [
      -78.1834,
      -1.8312
    ],
    "isMicrostate": false,
    "summary": "Plunged into violent narco-gang warfare and electricity blackouts caused by Andean drought, forcing strict fiscal austerity.",
    "headwinds": [
      "Explosive surge in narco-trafficking violence, prison riots, and gang turf wars turning Guayaquil into a cocaine transit hub",
      "Severe Andean drought crippled hydropower dams (Mazar/Paute), causing widespread nationwide power blackouts",
      "Fiscal deficit pressures under dollarized economy with zero money-printing capacity"
    ],
    "tailwinds": [
      "Utilizes the US Dollar as official currency, eliminating hyperinflation and currency depreciation risks",
      "World-leading exporter of bananas, farmed shrimp, high-grade cocoa beans, and cut flowers",
      "Major petroleum producer with crude pipelines crossing the Andes to Pacific ports",
      "Strong government resolve and military deployment to dismantle criminal cartels"
    ],
    "transcriptExcerpt": "Ecuador has improved its finances, but violent crime and unreliable infrastructure push it into orange. Also, I went there this year and a few days after arriving, I ended up in the hospital with pneumonia... Beautiful country, but it did try to kill me. So, I will be subtracting a few points for that. Orange.",
    "tags": [
      "Narco Violence",
      "Hydropower Blackouts",
      "Dollarized Economy",
      "Shrimp & Bananas"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2474s",
    "_searchStr": "ecuador americas plunged into violent narco-gang warfare and electricity blackouts caused by andean drought, forcing strict fiscal austerity. narco violence hydropower blackouts dollarized economy shrimp & bananas"
  },
  {
    "rank": 144,
    "name": "Nauru",
    "topoName": "Nauru",
    "id": "NRU",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "41:45",
    "videoSeconds": 2505,
    "region": "Oceania",
    "coordinates": [
      166.9315,
      -0.5228
    ],
    "isMicrostate": true,
    "summary": "Two-thirds of state revenue came from hosting Australia's offshore asylum processing center, leaving it vulnerable to Canberra politics.",
    "headwinds": [
      "Extreme fiscal dependency: approximately two-thirds of government revenue linked directly to Australia's offshore asylum center",
      "Legacy open-cast phosphate mining decimated 80% of the island's interior, leaving jagged limestone pinnacles",
      "Virtually zero domestic agricultural production; nearly all food and water must be imported"
    ],
    "tailwinds": [
      "Secured renewed multi-year funding agreements with Australia guaranteeing core revenue",
      "Pioneering deep-sea polymetallic nodule mining in the Clarion-Clipperton Zone (The Metals Company partnership)",
      "Significant revenues collected from licensing vast Pacific tuna fishing zones",
      "High per-capita donor aid and sovereign wealth trust holdings"
    ],
    "transcriptExcerpt": "Nauru with the most unusual way of making money for any country: Australian immigration. In the 2025 financial year, income linked to that asylum processing center supplied almost 2/3 of the government's revenue... but it obviously leaves them very vulnerable if a change of policy comes from Canberra. Orange.",
    "tags": [
      "Asylum Center Revenue",
      "Deep Sea Mining",
      "Phosphate Ruin",
      "Australia Dependency"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2505s",
    "_searchStr": "nauru oceania two-thirds of state revenue came from hosting australia's offshore asylum processing center, leaving it vulnerable to canberra politics. asylum center revenue deep sea mining phosphate ruin australia dependency"
  },
  {
    "rank": 145,
    "name": "Papua New Guinea",
    "topoName": "Papua New Guinea",
    "id": "PNG",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "41:55",
    "videoSeconds": 2515,
    "region": "Oceania",
    "coordinates": [
      143.9555,
      -6.3149
    ],
    "isMicrostate": false,
    "summary": "Massive natural gas, gold, and copper wealth, but rugged jungle geography leaves 85% of citizens without roads, power, or healthcare.",
    "headwinds": [
      "Extreme infrastructural underdevelopment: vast majority of rural population lacks access to roads, grid power, or clinics",
      "Deadly inter-tribal violence and urban unrest/looting in Port Moresby",
      "Severe foreign currency shortages restricting commercial business operations"
    ],
    "tailwinds": [
      "World-class resource deposits: Papua LNG project, Porgera gold mine, Ok Tedi copper mine",
      "Abundant agricultural fertility: coffee, cocoa, palm oil, and vanilla exports",
      "Strategic geopolitical courting and multi-billion infrastructure aid from Australia and the US",
      "Vast biodiversity and untouched tropical rainforest carbon absorption"
    ],
    "transcriptExcerpt": "Papua New Guinea exports gas and minerals, but many communities still lack reliable roads, power, and healthcare. Getting the income to those communities is the difficult part. Orange.",
    "tags": [
      "LNG & Gold",
      "Tribal Unrest",
      "No Road Access",
      "Resource Paradox"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2515s",
    "_searchStr": "papua new guinea oceania massive natural gas, gold, and copper wealth, but rugged jungle geography leaves 85% of citizens without roads, power, or healthcare. lng & gold tribal unrest no road access resource paradox"
  },
  {
    "rank": 146,
    "name": "Solomon Islands",
    "topoName": "Solomon Is.",
    "id": "SLB",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "42:00",
    "videoSeconds": 2520,
    "region": "Oceania",
    "coordinates": [
      160.1562,
      -9.6457
    ],
    "isMicrostate": true,
    "summary": "Exhausted primary logging reserves and facing depleted state cash, while navigating a tug-of-war between China and Western allies.",
    "headwinds": [
      "Rapid depletion of commercial round-log timber reserves, historically the primary source of export revenues",
      "Critically tight government cash flow and narrow domestic tax base",
      "Vulnerability to rising sea levels, coastal king tides, and severe cyclones"
    ],
    "tailwinds": [
      "Substantial foreign development grant aid sparked by geopolitical rivalry between China and Australia/US",
      "Tina River Hydropower Project under construction to replace expensive imported diesel power",
      "Vast exclusive economic zone (EEZ) rich in sustainable tuna fisheries",
      "Untapped nickel and gold mining deposits on Guadalcanal"
    ],
    "transcriptExcerpt": "The Solomon Islands have mining opportunities and very little government cash. Orange.",
    "tags": [
      "Logging Depletion",
      "China Alignment",
      "Tina River Hydro",
      "Cash Shortage"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2520s",
    "_searchStr": "solomon islands oceania exhausted primary logging reserves and facing depleted state cash, while navigating a tug-of-war between china and western allies. logging depletion china alignment tina river hydro cash shortage"
  },
  {
    "rank": 147,
    "name": "Tonga",
    "topoName": "Tonga",
    "id": "TON",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "42:04",
    "videoSeconds": 2524,
    "region": "Oceania",
    "coordinates": [
      -175.1982,
      -21.1789
    ],
    "isMicrostate": true,
    "summary": "Rebuilding from the colossal 2022 volcanic explosion and tsunami, dependent on remittances while losing tradespeople abroad.",
    "headwinds": [
      "Heavy loss of domestic skilled labor and tradespeople to seasonal work programs in Australia and New Zealand",
      "Immense lingering reconstruction costs from the catastrophic Hunga Tonga volcanic eruption and tsunami",
      "Heavy bilateral debt repayments owed to external creditors (China EXIM Bank)"
    ],
    "tailwinds": [
      "Strong diaspora remittance flows accounting for over 40% of GDP, directly supporting households",
      "Stable constitutional monarchy with deep cultural coherence and social safety networks",
      "Pristine marine environment supporting whale-watching ecotourism and squash/vanilla farming",
      "Generous bilateral infrastructure rebuild assistance from Pacific Quad partners"
    ],
    "transcriptExcerpt": "Tonga receives money from workers abroad while losing people needed to build and maintain things at home. Orange.",
    "tags": [
      "Tsunami Recovery",
      "Remittance 40%",
      "Labor Emigration",
      "Debt Servicing"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2524s",
    "_searchStr": "tonga oceania rebuilding from the colossal 2022 volcanic explosion and tsunami, dependent on remittances while losing tradespeople abroad. tsunami recovery remittance 40% labor emigration debt servicing"
  },
  {
    "rank": 148,
    "name": "Vanuatu",
    "topoName": "Vanuatu",
    "id": "VUT",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "42:10",
    "videoSeconds": 2530,
    "region": "Oceania",
    "coordinates": [
      166.9592,
      -15.3767
    ],
    "isMicrostate": true,
    "summary": "Hit by recurring twin Category 5 cyclones that destroy power grids and roads faster than government can afford to rebuild them.",
    "headwinds": [
      "Ranked as the world's most vulnerable nation to natural disasters: hit by twin Category 5 cyclones in single seasons",
      "Reconstruction cycles drain the national budget, requiring endless replacement of roads and schools",
      "Loss of visa-free travel to the European Union and UK curtailed lucrative passport sales revenue"
    ],
    "tailwinds": [
      "Pioneer in global climate justice: led historic UN General Assembly resolution to the International Court of Justice",
      "Strong traditional indigenous land stewardship ('kastom') providing community food resilience",
      "World-renowned boutique scuba diving, active volcano tourism (Mount Yasur), and beef exports",
      "Bilateral infrastructure grant financing from Australia, New Zealand, and China"
    ],
    "transcriptExcerpt": "Vanuatu keeps spending on replacing infrastructure destroyed by natural disasters. So all four orange.",
    "tags": [
      "Twin Cyclones",
      "Rebuilding Drain",
      "Passport Sales Loss",
      "Climate Justice"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2530s",
    "_searchStr": "vanuatu oceania hit by recurring twin category 5 cyclones that destroy power grids and roads faster than government can afford to rebuild them. twin cyclones rebuilding drain passport sales loss climate justice"
  },
  {
    "rank": 149,
    "name": "Saint Lucia",
    "topoName": "Saint Lucia",
    "id": "LCA",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "42:16",
    "videoSeconds": 2536,
    "region": "Americas",
    "coordinates": [
      -60.9789,
      13.9094
    ],
    "isMicrostate": true,
    "summary": "Stunning Pitons draw upscale tourism, but elevated public debt leaves no fiscal buffer for another major hurricane or oil shock.",
    "headwinds": [
      "Elevated public debt-to-GDP ratio restricts fiscal room to respond to new external shocks",
      "Complete dependence on imported petroleum for electricity generation and transport",
      "High youth unemployment and vulnerability of coastal tourism infrastructure to storm surges"
    ],
    "tailwinds": [
      "World-renowned luxury honeymoon and cruise tourism brand centered around the iconic UNESCO Pitons",
      "Revenues from Citizenship-by-Investment (CBI) programs funding public housing and hospitals",
      "Active exploration of domestic geothermal power potential in the Soufrière volcanic region",
      "Strong macroeconomic stability anchored by the Eastern Caribbean Central Bank (ECCB)"
    ],
    "transcriptExcerpt": "St. Lucia has tourism income, but too much debt for a comfortable recovery from another big shock. Orange.",
    "tags": [
      "Pitons Tourism",
      "High Public Debt",
      "Geothermal Hope",
      "Import Dependence"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2536s",
    "_searchStr": "saint lucia americas stunning pitons draw upscale tourism, but elevated public debt leaves no fiscal buffer for another major hurricane or oil shock. pitons tourism high public debt geothermal hope import dependence"
  },
  {
    "rank": 150,
    "name": "Dominica",
    "topoName": "Dominica",
    "id": "DMA",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "42:22",
    "videoSeconds": 2542,
    "region": "Americas",
    "coordinates": [
      -61.371,
      15.415
    ],
    "isMicrostate": true,
    "summary": "Investing in geothermal energy to become the first climate-resilient nation, constrained by heavy debt from Hurricane Maria.",
    "headwinds": [
      "Heavy public debt accumulated during the total reconstruction of the island following Category 5 Hurricane Maria (2017)",
      "Severe mountainous topography makes road and bridge building exceptionally costly",
      "International scrutiny and regulatory tightening on Citizenship-by-Investment (CBI) revenues"
    ],
    "tailwinds": [
      "Construction of commercial geothermal power plant to export clean electricity to Martinique/Guadeloupe",
      "World's first dedicated sperm whale marine reserve attracting high-value scientific eco-tourism",
      "Ambitious national pledge to build the world's first fully climate-resilient nation",
      "Construction of a new international airport to unlock direct long-haul flights"
    ],
    "transcriptExcerpt": "Dominica is investing in stronger infrastructure and geothermal power with heavy debt already limiting its options. Orange.",
    "tags": [
      "Hurricane Maria Debt",
      "Geothermal Export",
      "Climate Resilience",
      "Eco-Island"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2542s",
    "_searchStr": "dominica americas investing in geothermal energy to become the first climate-resilient nation, constrained by heavy debt from hurricane maria. hurricane maria debt geothermal export climate resilience eco-island"
  },
  {
    "rank": 151,
    "name": "Saint Kitts and Nevis",
    "topoName": "St. Kitts and Nevis",
    "id": "KNA",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "42:43",
    "videoSeconds": 2563,
    "region": "Americas",
    "coordinates": [
      -62.783,
      17.3578
    ],
    "isMicrostate": true,
    "summary": "Doubled passport prices and tightened vetting under Western pressure, causing state CBI revenue to crash by more than half.",
    "headwinds": [
      "Revenues from Citizenship-by-Investment (CBI) collapsed by >50% after raising minimum prices under EU/US pressure",
      "Government had expanded recurrent public spending while passport revenues were at record highs",
      "Heavy reliance on imported fuel, food, and manufactured commodities"
    ],
    "tailwinds": [
      "Highest GDP per capita among the independent Eastern Caribbean OECS nations",
      "Exploration of geothermal energy on Nevis capable of powering the entire two-island federation",
      "Upscale luxury yachting harbor at Christophe Harbour and cruise port in Basseterre",
      "Prudent currency union stability through the Eastern Caribbean Dollar peg"
    ],
    "transcriptExcerpt": "Saint Kitts and Nevis makes money by selling citizenship. But in 2023, it raised prices and tightened background checks while the competitors offered cheaper deals. Due to this change, revenue fell by more than half the following year. Unfortunately, the government had increased spending while the sales were still good. So, all three orange.",
    "tags": [
      "CBI Revenue Collapse",
      "High Spending Hole",
      "Nevis Geothermal",
      "Yachting Hub"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2563s",
    "_searchStr": "saint kitts and nevis americas doubled passport prices and tightened vetting under western pressure, causing state cbi revenue to crash by more than half. cbi revenue collapse high spending hole nevis geothermal yachting hub"
  },
  {
    "rank": 152,
    "name": "Bangladesh",
    "topoName": "Bangladesh",
    "id": "BGD",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "42:43",
    "videoSeconds": 2563,
    "region": "Asia",
    "coordinates": [
      90.3563,
      23.685
    ],
    "isMicrostate": false,
    "summary": "World's second-biggest garment exporter graduating off the UN Least Developed Country list, losing duty-free trade perks as banks struggle.",
    "headwinds": [
      "Graduation from the UN's Least Developed Country (LDC) list removes duty-free, quota-free tariff access to European markets",
      "Banking sector burdened by billions in non-performing loans (NPLs) and distressed bank balance sheets",
      "Extreme climate exposure: low delta topography flooded annually by monsoon cyclones and rising sea levels",
      "Political turbulence following the student-led ouster of the Sheikh Hasina administration"
    ],
    "tailwinds": [
      "World's #2 ready-made garment (RMG) exporter with established multinational brand relationships",
      "Massive remittance inflows ($24B+ annually) sent home by millions of overseas migrant workers",
      "New reformist interim government (Nobel laureate Muhammad Yunus) cleaning up financial institutions",
      "Major infrastructure megaprojects completed: Padma Bridge and Dhaka Metro Rail"
    ],
    "transcriptExcerpt": "Bangladesh is the world's second biggest clothing exporter after China. Part of what built that industry is its place on the UN's list of least developed countries, which lets it sell to Europe without paying import taxes. Now, it's due to graduate off that list, which sounds like great news, but it really isn't. The reason is they will gradually lose this advantage that helped them build their biggest industry in the first place... On top of that, troubled banks are making it harder for businesses to borrow and invest. Orange.",
    "tags": [
      "Garment Exports #2",
      "LDC Tariff Loss",
      "Bank Bad Loans",
      "Delta Flooding"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2563s",
    "_searchStr": "bangladesh asia world's second-biggest garment exporter graduating off the un least developed country list, losing duty-free trade perks as banks struggle. garment exports #2 ldc tariff loss bank bad loans delta flooding"
  },
  {
    "rank": 153,
    "name": "Sri Lanka",
    "topoName": "Sri Lanka",
    "id": "LKA",
    "tier": "orange",
    "tierLabel": "One Bad Year Away",
    "timestamp": "43:15",
    "videoSeconds": 2595,
    "region": "Asia",
    "coordinates": [
      80.7718,
      7.8731
    ],
    "isMicrostate": false,
    "summary": "Stabilizing after historic 2022 sovereign debt default, but late 2025 Cyclone Dwa caused $4.1B in physical damage, diverting rebuild funds.",
    "headwinds": [
      "Cyclone Dwa in late 2025 inflicted $4.1 billion in direct damage (~4% of GDP), diverting scarce capital from debt service",
      "Strict IMF austerity targets require tax increases and energy tariff hikes that strain households",
      "High external debt repayment schedule resuming after restructuring grace periods"
    ],
    "tailwinds": [
      "Successful sovereign debt restructuring agreements reached with bilateral creditors (India, China, Paris Club)",
      "Remarkable rebound in foreign tourist arrivals and international remittances",
      "Strategic deepwater maritime transshipment port at Colombo along major East-West shipping lanes",
      "High literacy, human capital, and expanding software development export services"
    ],
    "transcriptExcerpt": "Sri Lanka shows how quickly a recovery can be interrupted. Debt restructuring helped it start rebuilding its finances after the crisis. Then cyclone Dwa hit in late 2025. The World Bank estimated $4.1 billion in direct physical damage, roughly 4% of the economy. The money that could have gone into improving the country now has to go into rebuilding it. Orange.",
    "tags": [
      "Post-Default Recovery",
      "Cyclone Dwa $4.1B",
      "Colombo Port",
      "IMF Austerity"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2595s",
    "_searchStr": "sri lanka asia stabilizing after historic 2022 sovereign debt default, but late 2025 cyclone dwa caused $4.1b in physical damage, diverting rebuild funds. post-default recovery cyclone dwa $4.1b colombo port imf austerity"
  },
  {
    "rank": 154,
    "name": "Maldives",
    "topoName": "Maldives",
    "id": "MDV",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "43:47",
    "videoSeconds": 2627,
    "region": "Asia",
    "coordinates": [
      73.2207,
      3.2028
    ],
    "isMicrostate": true,
    "summary": "Imminent foreign debt crisis and dangerously low dollar reserves eclipse sea-level rise as the immediate 10-year threat.",
    "headwinds": [
      "Foreign exchange reserves depleted to dangerously low levels with heavy foreign debt repayments due immediately",
      "Imports virtually all food, fuel, medicine, and construction materials in US dollars",
      "Over-reliance on Chinese and Indian bilateral debt lines creating geopolitical tension",
      "Long-term existential threat of rising sea levels across lowest-lying country on Earth"
    ],
    "tailwinds": [
      "World's premier ultra-luxury private island resort tourism brand with high foreign currency yield",
      "Bilateral emergency financial currency swaps from India and China",
      "Expanding international airport at Malé increasing long-haul flight capacity",
      "Pristine marine biodiversity and sustainable pole-and-line tuna exports"
    ],
    "transcriptExcerpt": "Starting with the Maldives: you might expect rising seas to be the immediate problem here. In the long run, they are, but within our 10 years, a debt payment can arrive much sooner. Tourists bring dollars in. Imported food, fuel, and debt repayments take dollars out. And right now, more is going out than coming in with very little saved to cover the gap. If tourism has a bad year or lenders stop helping, there is almost nothing to fall back on. Red.",
    "tags": [
      "Debt Default Risk",
      "Depleted Forex",
      "Import Scarcity",
      "Luxury Tourism"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2627s",
    "_searchStr": "maldives asia imminent foreign debt crisis and dangerously low dollar reserves eclipse sea-level rise as the immediate 10-year threat. debt default risk depleted forex import scarcity luxury tourism"
  },
  {
    "rank": 155,
    "name": "Saint Vincent and the Grenadines",
    "topoName": "St. Vin. and Gren.",
    "id": "VCT",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "44:12",
    "videoSeconds": 2652,
    "region": "Americas",
    "coordinates": [
      -61.2872,
      12.9843
    ],
    "isMicrostate": true,
    "summary": "Volcanic eruption followed by consecutive hurricanes pushed public debt past 113% of GDP, leaving zero room for new disasters.",
    "headwinds": [
      "Sovereign public debt estimated by IMF at ~113% of GDP following relentless disaster rebuilding",
      "Severe physical devastation from La Soufrière volcanic eruption compounded by Hurricane Beryl flattening Union Island",
      "Small fiscal base unable to support recurring multi-million-dollar infrastructure rebuilds"
    ],
    "tailwinds": [
      "Argyle International Airport opened direct long-haul tourism flights to North America and Europe",
      "Upscale boutique yachting and resort tourism throughout the pristine Grenadines (Mustique, Bequia)",
      "Strong regional solidarity and financing through the Eastern Caribbean Central Bank (ECCB)",
      "Expanding commercial medical cannabis and agricultural crop diversification"
    ],
    "transcriptExcerpt": "Saint Vincent and the Grenadines is the Caribbean country I referred to earlier. Volcanic eruption, storms, rebuilding and then rebuilding again. The IMF estimated public debt at about 113% of the economy in 2025... the accumulated cost of recovery has left far less room for another one. Red.",
    "tags": [
      "Disaster Debt 113%",
      "Volcano & Hurricanes",
      "Union Island Ruin",
      "Grenadines Yachting"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2652s",
    "_searchStr": "saint vincent and the grenadines americas volcanic eruption followed by consecutive hurricanes pushed public debt past 113% of gdp, leaving zero room for new disasters. disaster debt 113% volcano & hurricanes union island ruin grenadines yachting"
  },
  {
    "rank": 156,
    "name": "Lesotho",
    "topoName": "Lesotho",
    "id": "LSO",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "44:33",
    "videoSeconds": 2673,
    "region": "Africa",
    "coordinates": [
      28.2336,
      -29.6099
    ],
    "isMicrostate": false,
    "summary": "Sells water to South Africa through the Highlands Water Project, but real per-capita income remains stuck below its 2007 level.",
    "headwinds": [
      "Real income per capita has remained depressed below its 2007 peak for nearly two decades",
      "Severe loss of customs revenue from South Africa's declining SACU pool",
      "Extreme domestic health challenges and one of the world's highest HIV prevalence rates",
      "Heavy job losses in textile export factories facing Asian competition"
    ],
    "tailwinds": [
      "Lesotho Highlands Water Project (LHWP Phase II) delivers royalty revenue selling clean water to Johannesburg",
      "Abundant clean alpine hydropower generation and export potential",
      "High-altitude diamond mining producing some of the world's largest, most valuable white diamonds (Letseng mine)",
      "Complete geographic encirclement by South Africa provides integrated supply logistics"
    ],
    "transcriptExcerpt": "Lesotho sells water to South Africa, which is a useful income, but it doesn't replace threatened government jobs or reduce dependence on South African trade and customs revenue. Income per person remains below its 2007 level. The government earns money from the water while the wider economy struggles to provide enough well-paid work. Red.",
    "tags": [
      "Stagnant Since 2007",
      "Highlands Water",
      "SACU Revenue Drop",
      "Letseng Diamonds"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2673s",
    "_searchStr": "lesotho africa sells water to south africa through the highlands water project, but real per-capita income remains stuck below its 2007 level. stagnant since 2007 highlands water sacu revenue drop letseng diamonds"
  },
  {
    "rank": 157,
    "name": "Pakistan",
    "topoName": "Pakistan",
    "id": "PAK",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "44:51",
    "videoSeconds": 2691,
    "region": "Asia",
    "coordinates": [
      69.3451,
      30.3753
    ],
    "isMicrostate": false,
    "summary": "Crushing circular energy debt inflates power bills, India suspended the Indus Waters Treaty in 2025, and climate floods devastate crops.",
    "headwinds": [
      "Massive circular debt in the energy sector inflates electricity bills to unaffordable levels, shutting factories",
      "India suspended the 1960 Indus Waters Treaty following a 2025 Kashmir terror attack, creating existential irrigation uncertainty",
      "Catastrophic climate disasters: historic monsoon floods washing away crops, highways, and villages",
      "Crushing external debt repayment schedule requiring continuous emergency IMF loan rollovers"
    ],
    "tailwinds": [
      "World's fifth most populous nation (240M+) with a youthful consumer demographic",
      "Textile and cotton apparel export base supplying major Western retail chains",
      "Strategic China-Pakistan Economic Corridor (CPEC) infrastructure and deep-sea port at Gwadar",
      "Massive untapped Reko Diq copper-gold project (Barrick Gold) promising billions in exports"
    ],
    "transcriptExcerpt": "Pakistan has made progress stabilizing its economy, but its electricity system shows how hard it is to escape underlying problems. The system built up debts... customers are charged extra to help repay them. So, your bill includes electricity you use, plus a contribution towards years of problems you didn't personally cause... Then, floods and extreme heat damage crops and homes... Its farms also depend heavily on the Indus river system... But in 2025, after a deadly attack on tourists in Kashmir, India put the treaty on hold. Red.",
    "tags": [
      "Circular Energy Debt",
      "Indus Treaty Suspended",
      "Climate Floods",
      "Reko Diq Copper"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2691s",
    "_searchStr": "pakistan asia crushing circular energy debt inflates power bills, india suspended the indus waters treaty in 2025, and climate floods devastate crops. circular energy debt indus treaty suspended climate floods reko diq copper"
  },
  {
    "rank": 158,
    "name": "Malawi",
    "topoName": "Malawi",
    "id": "MWI",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "45:55",
    "videoSeconds": 2755,
    "region": "Africa",
    "coordinates": [
      34.3015,
      -13.2543
    ],
    "isMicrostate": false,
    "summary": "Crippling foreign currency shortages prevent importing fertilizer and fuel, crippling the agricultural harvests that feed its people.",
    "headwinds": [
      "Critical shortage of foreign exchange reserves prevents purchasing essential imports of fertilizer, fuel, and medicines",
      "Fertilizer scarcity directly reduces domestic maize harvest yields, triggering widespread rural hunger",
      "Severe climate battering from devastating tropical cyclones (Freddy) causing mass displacement",
      "Heavy external debt distress and persistent local currency devaluations"
    ],
    "tailwinds": [
      "Major producer of premium burley tobacco, tea, and macadamia nuts generating export earnings",
      "Significant commercial rutile and rare earth deposits under exploration (Kasiya project)",
      "Peaceful democratic traditions with high social cohesion and communal support networks",
      "Substantial donor and humanitarian development aid from international agencies"
    ],
    "transcriptExcerpt": "Malawi and Burundi have severe shortage of foreign currency that makes it difficult to import fuel, medicine and fertilizer. Less fertilizer can mean a smaller harvest. Less fuel makes getting that harvest to market harder. These shortages damage the businesses that could help earn more foreign money. Both red.",
    "tags": [
      "Forex Famine",
      "Fertilizer Shortage",
      "Cyclone Freddy Damage",
      "Food Insecurity"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2755s",
    "_searchStr": "malawi africa crippling foreign currency shortages prevent importing fertilizer and fuel, crippling the agricultural harvests that feed its people. forex famine fertilizer shortage cyclone freddy damage food insecurity"
  },
  {
    "rank": 159,
    "name": "Burundi",
    "topoName": "Burundi",
    "id": "BDI",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "45:55",
    "videoSeconds": 2755,
    "region": "Africa",
    "coordinates": [
      29.9189,
      -3.3731
    ],
    "isMicrostate": false,
    "summary": "Paralyzing fuel shortages and dollar depletion bring transport to a crawl in one of the world's poorest and densest nations.",
    "headwinds": [
      "Acute shortages of foreign currency and motor fuel causing fuel queues lasting days and stalling transport",
      "One of the world's lowest GDP per capita figures with widespread chronic childhood stunting",
      "Border disputes and diplomatic tensions with neighboring Rwanda and DRC conflict spillover",
      "Extreme agricultural land fragmentation due to dense rural population"
    ],
    "tailwinds": [
      "Exceptional high-altitude specialty Arabica coffee and tea commanding global market premiums",
      "Substantial untapped nickel reserves (Gitega/Musongati) and rare earth elements",
      "Hydropower dam construction along regional rivers expanding domestic electricity generation",
      "Recent diplomatic re-engagement with international donors and multilateral lenders"
    ],
    "transcriptExcerpt": "Malawi and Burundi have severe shortage of foreign currency that makes it difficult to import fuel, medicine and fertilizer... These shortages damage the businesses that could help earn more foreign money. Both red.",
    "tags": [
      "Severe Fuel Drought",
      "Forex Collapse",
      "Extreme Poverty",
      "Specialty Coffee"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2755s",
    "_searchStr": "burundi africa paralyzing fuel shortages and dollar depletion bring transport to a crawl in one of the world's poorest and densest nations. severe fuel drought forex collapse extreme poverty specialty coffee"
  },
  {
    "rank": 160,
    "name": "Zimbabwe",
    "topoName": "Zimbabwe",
    "id": "ZWE",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "46:12",
    "videoSeconds": 2772,
    "region": "Africa",
    "coordinates": [
      29.1549,
      -19.0154
    ],
    "isMicrostate": false,
    "summary": "Repeated currency collapses wiped out citizens' life savings; latest gold-backed ZiG lacks public trust while debt locks out lenders.",
    "headwinds": [
      "Public deeply distrusts domestic paper currency after decades of hyperinflation; overwhelmingly prefer US dollars",
      "Unpaid sovereign debt arrears (> $18B) completely cut off access to concessional international lending from World Bank/IMF",
      "Severe El Niño drought devastated maize harvest, leaving millions needing food aid",
      "Hydroelectric generation at Kariba Dam collapsed due to historic low lake water levels"
    ],
    "tailwinds": [
      "World's largest lithium reserves in Africa attracting massive Chinese battery processing investments (Bikita, Arcadia)",
      "Major global producer of platinum group metals (PGMs), gold, chrome, and tobacco",
      "Highly literate, resilient, and skilled workforce with massive remittances from South Africa and the UK",
      "Significant potential for rapid agricultural rebound if irrigation is modernized"
    ],
    "transcriptExcerpt": "Zimbabwe has repeatedly seen currencies lose value and people's savings with them. Many people understandably prefer dollars. Now, the ZiG, its latest currency, has become more stable, but trust takes longer to recover. Businesses hesitate to accept long-term payments in money they're afraid will lose its value. Unpaid debts also restrict access to outside financing. Red.",
    "tags": [
      "ZiG Currency Distrust",
      "Debt Default Arrears",
      "Lithium Boom",
      "Kariba Dam Crisis"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2772s",
    "_searchStr": "zimbabwe africa repeated currency collapses wiped out citizens' life savings; latest gold-backed zig lacks public trust while debt locks out lenders. zig currency distrust debt default arrears lithium boom kariba dam crisis"
  },
  {
    "rank": 161,
    "name": "Bolivia",
    "topoName": "Bolivia",
    "id": "BOL",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "46:35",
    "videoSeconds": 2795,
    "region": "Americas",
    "coordinates": [
      -63.5887,
      -16.2902
    ],
    "isMicrostate": false,
    "summary": "Depleted natural gas exports turned it into a fuel importer; ending diesel subsidies in Sept 2026 caused an 83% overnight price shock.",
    "headwinds": [
      "Natural gas production collapsed due to lack of exploration, turning former gas exporter into a broke fuel importer",
      "Scarcity of US dollar reserves in the central bank causing chronic fuel queues and dollar black markets",
      "Abrupt termination of diesel subsidies in Sept 2026 caused an 83% overnight fuel price spike, driving up food prices",
      "Bitter political feud between Arce and Morales camps paralyzing governance and sparking road blockades"
    ],
    "tailwinds": [
      "World's largest lithium brine resources in the Salar de Uyuni (23 million metric tons)",
      "Major global exporter of agricultural commodities: soybeans, sunflower, and beef from Santa Cruz",
      "Significant silver, zinc, and tin mining operations",
      "Resilient informal commercial trade networks cushioning rural communities"
    ],
    "transcriptExcerpt": "Bolivia sold natural gas abroad and used the dollars to buy things it needed, including petrol and diesel. Then, gas production fell, and that's how an energy exporting country ended up with fuel shortages... in September 2026, hours after lawmakers approved an IMF loan, it ended the subsidy on diesel. The price jumped 83% overnight... anyone who drives to work, farms land, or buys food is now paying more. Red.",
    "tags": [
      "Gas Exhaustion",
      "Diesel Spike 83%",
      "Uyuni Lithium",
      "Dollar Shortage"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2795s",
    "_searchStr": "bolivia americas depleted natural gas exports turned it into a fuel importer; ending diesel subsidies in sept 2026 caused an 83% overnight price shock. gas exhaustion diesel spike 83% uyuni lithium dollar shortage"
  },
  {
    "rank": 162,
    "name": "Cuba",
    "topoName": "Cuba",
    "id": "CUB",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "47:10",
    "videoSeconds": 2830,
    "region": "Americas",
    "coordinates": [
      -77.7812,
      21.5218
    ],
    "isMicrostate": false,
    "summary": "Catastrophic nationwide power grid blackouts, acute fuel and food shortages, and historic emigration hollowing out the workforce.",
    "headwinds": [
      "Total nationwide electric grid collapses leaving millions in darkness for days due to obsolete thermoelectric plants",
      "Acute shortages of food, gasoline, and basic medicines driving the largest exodus in Cuban history (>10% of population fled)",
      "Tightened US economic embargo and sanctions restricting trade and international banking",
      "Collapse in domestic sugar harvest to historic multi-century lows"
    ],
    "tailwinds": [
      "Major global reserves of high-grade nickel and cobalt essential for EV battery manufacturing",
      "High-value biotechnology and pharmaceutical manufacturing producing homegrown vaccines",
      "Iconic cultural heritage and tourism potential awaiting structural reform",
      "Resilient family remittances sent from the Cuban diaspora in Miami"
    ],
    "transcriptExcerpt": "Cuba has too little fuel and foreign currency with a strained electricity system causing repeated blackouts. A blackout interrupts the businesses that might earn the money needed to make the next blackout less likely. Red.",
    "tags": [
      "Grid Blackout Collapse",
      "Historic Exodus",
      "Food & Fuel Crisis",
      "Nickel Reserves"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2830s",
    "_searchStr": "cuba americas catastrophic nationwide power grid blackouts, acute fuel and food shortages, and historic emigration hollowing out the workforce. grid blackout collapse historic exodus food & fuel crisis nickel reserves"
  },
  {
    "rank": 163,
    "name": "Laos",
    "topoName": "Laos",
    "id": "LAO",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "47:23",
    "videoSeconds": 2843,
    "region": "Asia",
    "coordinates": [
      102.4955,
      19.8563
    ],
    "isMicrostate": false,
    "summary": "Built mega-dams and high-speed rail on borrowed Chinese money; lenders want repayment before projects generate enough revenue.",
    "headwinds": [
      "Crushing external debt distress (debt-to-GDP >110%), overwhelmingly owed to Chinese state banks",
      "Severe Lao Kip currency depreciation and rampant domestic inflation squeezing living standards",
      "Depleted foreign currency reserves forcing debt deferral negotiations with Beijing"
    ],
    "tailwinds": [
      "'Battery of Southeast Asia': massive Mekong hydropower dams export clean electricity to Thailand and Vietnam",
      "China-Laos high-speed railway operational, transforming landlocked country into a regional transit corridor",
      "Rich mineral resources: commercial copper, gold, bauxite, and potash mining",
      "Surging overland eco-tourism and agricultural exports to China"
    ],
    "transcriptExcerpt": "Laos built dams and transport links using borrowed money. Those projects can earn income over decades. Lenders may prefer being paid before the decades are finished. Postponing payments buys time. The debt still has to be paid. Red.",
    "tags": [
      "Chinese Debt Trap",
      "Mekong Hydro",
      "China-Laos Railway",
      "Currency Plunge"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2843s",
    "_searchStr": "laos asia built mega-dams and high-speed rail on borrowed chinese money; lenders want repayment before projects generate enough revenue. chinese debt trap mekong hydro china-laos railway currency plunge"
  },
  {
    "rank": 164,
    "name": "Timor-Leste",
    "topoName": "Timor-Leste",
    "id": "TLS",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "47:39",
    "videoSeconds": 2859,
    "region": "Asia",
    "coordinates": [
      125.7275,
      -8.8742
    ],
    "isMicrostate": true,
    "summary": "Bayu-Undan gas field has run dry; spending from its sovereign wealth fund heavily outpaces returns, hurtling toward a fiscal cliff.",
    "headwinds": [
      "Main commercial gas field (Bayu-Undan) has run completely dry, stopping new export revenue inflows",
      "Government draws down far more from its Petroleum Fund than its estimated sustainable income, risking fund exhaustion",
      "Disputes with international energy companies over onshore processing for the undeveloped Greater Sunrise gas field",
      "High youth unemployment and very weak private domestic economy"
    ],
    "tailwinds": [
      "Undeveloped Greater Sunrise offshore gas and condensate field holds multi-billion-dollar energy value",
      "Petroleum Fund still retains substantial sovereign assets to navigate negotiations",
      "Organic specialty shade-grown coffee exports commanding high international prices",
      "Peaceful democratic stability and impending full accession to ASEAN"
    ],
    "transcriptExcerpt": "Remember Norway's oil fund: Timor saved his oil and gas money in a fund too. The difference is how each of them spend it. Norway mostly spends what its fund earns each year... Timor takes out far more than that because the fund pays for most of what the government does and its main gas field has run dry. So, almost nothing new is coming in... By the end of our 10 years, Timor-Leste could have far less money saved and still no other way to pay its bills. Red.",
    "tags": [
      "Gas Field Dry",
      "Petroleum Fund Cliff",
      "Greater Sunrise",
      "ASEAN Accession"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2859s",
    "_searchStr": "timor-leste asia bayu-undan gas field has run dry; spending from its sovereign wealth fund heavily outpaces returns, hurtling toward a fiscal cliff. gas field dry petroleum fund cliff greater sunrise asean accession"
  },
  {
    "rank": 165,
    "name": "Bahrain",
    "topoName": "Bahrain",
    "id": "BHR",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "48:18",
    "videoSeconds": 2898,
    "region": "Middle East",
    "coordinates": [
      50.5577,
      26.0667
    ],
    "isMicrostate": true,
    "summary": "First Gulf state to strike oil in 1932 is now running low; spends $160 for every $100 collected, with interest consuming 33% of revenue.",
    "headwinds": [
      "Spends $160 for every $100 in revenue collected; interest on public debt consumes more than one-third of state revenue",
      "Legacy onshore crude reserves are largely depleted, necessitating expensive enhanced recovery and offshore drilling",
      "Heavy fiscal reliance on financial rescue packages and loan guarantees from wealthy neighbors (Saudi Arabia, UAE)",
      "Domestic political tensions following the suppression of Arab Spring protests"
    ],
    "tailwinds": [
      "World's largest single-site aluminum smelter (Alba) generating massive non-oil industrial exports",
      "Established, respected regional financial hub with deep Islamic banking expertise",
      "Strategic host of the US Navy's Fifth Fleet headquarters safeguarding maritime routes",
      "King Fahd Causeway connects the island directly to Saudi Arabia's Eastern Province markets"
    ],
    "transcriptExcerpt": "Bahrain was the first country on the Arab side of the Gulf to strike oil back in 1932. It's also one of the first to start running low. In 2024, its government spent roughly $160 for every $100 it collected. That's obviously not good, and interest alone took more than a third of government revenue... Red.",
    "tags": [
      "Running Low on Oil",
      "Interest Takes 33%",
      "Spends $160 per $100",
      "Alba Smelter"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2898s",
    "_searchStr": "bahrain middle east first gulf state to strike oil in 1932 is now running low; spends $160 for every $100 collected, with interest consuming 33% of revenue. running low on oil interest takes 33% spends $160 per $100 alba smelter"
  },
  {
    "rank": 166,
    "name": "Angola",
    "topoName": "Angola",
    "id": "AGO",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "48:57",
    "videoSeconds": 2937,
    "region": "Africa",
    "coordinates": [
      17.8739,
      -11.2027
    ],
    "isMicrostate": false,
    "summary": "Declining oil production and heavy external debt service leave little to build replacement industries for a surging population.",
    "headwinds": [
      "Natural production declines in mature deepwater offshore oil fields reducing state export earnings",
      "Crushing debt repayment burdens (largely oil-backed loans to China) crowding out domestic health and education spending",
      "Surging young population struggling with deep poverty and lack of formal urban employment",
      "Volatile domestic currency (Kwanza) devaluations triggering high inflation"
    ],
    "tailwinds": [
      "US and G7-backed Lobito Rail Corridor revitalizing mineral transit from Zambia and DRC to the Atlantic port of Lobito",
      "World-class diamond mining sector (Catoca mine) and major untapped agricultural lands",
      "Development of offshore non-associated natural gas fields to feed the Angola LNG terminal",
      "Pioneering private sector reforms and state asset privatizations under President Lourenço"
    ],
    "transcriptExcerpt": "Angola earns from oil, but the industry creates too few jobs for its rapidly growing population. Debt payments also take income that could build other industries. Red.",
    "tags": [
      "Oil Decline",
      "Oil-Backed Debt",
      "Lobito Corridor",
      "Diamond Mining"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2937s",
    "_searchStr": "angola africa declining oil production and heavy external debt service leave little to build replacement industries for a surging population. oil decline oil-backed debt lobito corridor diamond mining"
  },
  {
    "rank": 167,
    "name": "Equatorial Guinea",
    "topoName": "Eq. Guinea",
    "id": "GNQ",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "49:07",
    "videoSeconds": 2947,
    "region": "Africa",
    "coordinates": [
      10.2679,
      1.6508
    ],
    "isMicrostate": false,
    "summary": "Oil boom has ended as fields run dry; facing steep economic contraction without having built a diversified replacement economy.",
    "headwinds": [
      "Rapid, terminal decline in legacy offshore oil production (Zafiro field) without new major discoveries",
      "Decades of colossal oil wealth were concentrated among the ruling elite, leaving basic public services neglected",
      "Severe GDP contractions and drying up of state construction budgets"
    ],
    "tailwinds": [
      "Punta Europa gas processing mega-complex importing offshore gas from neighboring Cameroon and Nigeria",
      "Modernized deepwater port facilities in Malabo and Bata",
      "Untapped offshore natural gas and Atlantic fisheries",
      "Potential to position itself as a regional Gulf of Guinea energy processing hub"
    ],
    "transcriptExcerpt": "Equatorial Guinea's oil production has declined without a large enough replacement economy. Red.",
    "tags": [
      "Terminal Oil Decline",
      "Gas Mega-Hub",
      "Resource Depletion",
      "Neglected Services"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2947s",
    "_searchStr": "equatorial guinea africa oil boom has ended as fields run dry; facing steep economic contraction without having built a diversified replacement economy. terminal oil decline gas mega-hub resource depletion neglected services"
  },
  {
    "rank": 168,
    "name": "Republic of the Congo",
    "topoName": "Congo",
    "id": "COG",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "49:11",
    "videoSeconds": 2951,
    "region": "Africa",
    "coordinates": [
      15.8277,
      -0.228
    ],
    "isMicrostate": false,
    "summary": "Oil-rich nation crippled by heavy sovereign debt and overdue state arrears to local businesses, choking private enterprise.",
    "headwinds": [
      "Heavy sovereign debt overhang and massive overdue domestic government arrears to local contractors paralyzing businesses",
      "Persistent poverty and high youth joblessness despite significant hydrocarbon exports",
      "Decades of political entrenchment and governance challenges under President Sassou Nguesso"
    ],
    "tailwinds": [
      "Commercial start of Marine XII offshore FLNG (floating LNG) terminal exporting natural gas to Europe",
      "Substantial high-grade iron ore and potash deposits under development in the interior",
      "Vast carbon sink: Congo Basin peatlands and dense rainforests eligible for international conservation funding",
      "Deepwater Atlantic port at Pointe-Noire serving as a regional commercial transshipment center"
    ],
    "transcriptExcerpt": "The Republic of the Congo also has oil alongside heavy debt and overdue government payments that hurt businesses and public services. All three red.",
    "tags": [
      "Domestic Arrears",
      "High Sovereign Debt",
      "FLNG Gas Export",
      "Congo Basin Peatlands"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2951s",
    "_searchStr": "republic of the congo africa oil-rich nation crippled by heavy sovereign debt and overdue state arrears to local businesses, choking private enterprise. domestic arrears high sovereign debt flng gas export congo basin peatlands"
  },
  {
    "rank": 169,
    "name": "Libya",
    "topoName": "Libya",
    "id": "LBY",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "49:19",
    "videoSeconds": 2959,
    "region": "Africa",
    "coordinates": [
      17.2283,
      26.3351
    ],
    "isMicrostate": false,
    "summary": "Rival armed factions in east and west battle for control of central bank cash and oil output, leaving broken public infrastructure.",
    "headwinds": [
      "Deep institutional fracture between rival governments and militias in Tripoli (West) and Benghazi (East)",
      "Periodic armed blockades of oil fields and export terminals weaponized for political leverage",
      "Decaying electrical grids, sewage systems, and municipal water networks following a decade of conflict",
      "Catastrophic infrastructure vulnerabilities highlighted by the deadly 2023 Derna dam collapses"
    ],
    "tailwinds": [
      "Africa's largest proven sweet crude oil reserves with very low extraction costs",
      "Substantial legacy sovereign wealth reserves in the Libyan Investment Authority (LIA)",
      "Immense solar potential and direct subsea natural gas pipelines (Greenstream) to Italy",
      "Strategic Mediterranean coastline proximate to European markets"
    ],
    "transcriptExcerpt": "Libya has oil money and competing authorities who want to control it. People still deal with unreliable electricity and public services. It's difficult to fix a country when you're still arguing over who's running it. Red.",
    "tags": [
      "Rival Governments",
      "Oil Terminal Blockades",
      "Decaying Infrastructure",
      "Africa's Top Oil"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2959s",
    "_searchStr": "libya africa rival armed factions in east and west battle for control of central bank cash and oil output, leaving broken public infrastructure. rival governments oil terminal blockades decaying infrastructure africa's top oil"
  },
  {
    "rank": 170,
    "name": "Iraq",
    "topoName": "Iraq",
    "id": "IRQ",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "49:31",
    "videoSeconds": 2971,
    "region": "Middle East",
    "coordinates": [
      43.6793,
      33.2232
    ],
    "isMicrostate": false,
    "summary": "Oil funds 90%+ of the budget while failing electricity, scorching 50°C heatwaves, and drying Tigris-Euphrates rivers threaten agriculture.",
    "headwinds": [
      "Severe water bankruptcy: upstream damming in Turkey and Iran combined with climate heat has shrunk Tigris and Euphrates river flows",
      "Over 90% of state revenue derived from oil; leaves government budget vulnerable to crude price drops",
      "Chronic electrical grid failures during scorching 50°C summer heatwaves, driving civil unrest",
      "Endemic public sector corruption and sprawling patronage networks"
    ],
    "tailwinds": [
      "World's fifth-largest proven petroleum reserves with massive production capacity (>4M barrels/day)",
      "Major gas capture agreements (TotalEnergies multi-energy mega-deal) to reduce flaring and power local grids",
      "Grand Faw Port megaproject and 'Development Road' transit corridor linking the Gulf to Europe via Turkey",
      "Rebound in agricultural marshland restoration and cultural tourism (Babylon, Ur)"
    ],
    "transcriptExcerpt": "Iraq also sells energy while struggling to provide reliable electricity to its own population. Oil pays for much of the public budget, so a fall in this price threatens wages and services. Add water shortages and one export has too many jobs to do. Red.",
    "tags": [
      "Drying Rivers",
      "90% Oil Reliance",
      "Failing Power Grid",
      "TotalEnergies Mega-Deal"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2971s",
    "_searchStr": "iraq middle east oil funds 90%+ of the budget while failing electricity, scorching 50°c heatwaves, and drying tigris-euphrates rivers threaten agriculture. drying rivers 90% oil reliance failing power grid totalenergies mega-deal"
  },
  {
    "rank": 171,
    "name": "Iran",
    "topoName": "Iran",
    "id": "IRN",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "49:46",
    "videoSeconds": 2986,
    "region": "Middle East",
    "coordinates": [
      53.688,
      32.4279
    ],
    "isMicrostate": false,
    "summary": "Crippling inflation, severe water bankruptcy, and Western sanctions compounded by direct military strikes and regional war escalation.",
    "headwinds": [
      "Severe nationwide water bankruptcy: sinking ground aquifers, drying rivers (Zayandeh), and agricultural desertification",
      "Crushing Western economic and energy sanctions choking oil exports and international banking",
      "Runaway inflation and currency (Rial) collapse impoverishing middle-class families",
      "Direct missile exchanges and military conflict with Israel and the US, risking full-scale war"
    ],
    "tailwinds": [
      "World's second-largest natural gas reserves and fourth-largest oil reserves",
      "Large, highly educated young population with formidable engineering and STEM talent",
      "Domestic industrial and military self-sufficiency (ballistic missiles, drones, uranium enrichment)",
      "Strategic transit crossroads connecting Russia, Central Asia, and the Persian Gulf (INSTC)"
    ],
    "transcriptExcerpt": "Iran has oil industry and educated people. War damage and disruption now add to sanctions, inflation and serious water shortages. Restrictions make investment harder, while damaged or unreliable infrastructure makes it harder for businesses to keep operating. Red.",
    "tags": [
      "Water Bankruptcy",
      "Sanctions & Inflation",
      "Regional Conflict",
      "Massive Gas Reserves"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=2986s",
    "_searchStr": "iran middle east crippling inflation, severe water bankruptcy, and western sanctions compounded by direct military strikes and regional war escalation. water bankruptcy sanctions & inflation regional conflict massive gas reserves"
  },
  {
    "rank": 172,
    "name": "Chad",
    "topoName": "Chad",
    "id": "TCD",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "50:02",
    "videoSeconds": 3002,
    "region": "Africa",
    "coordinates": [
      18.7322,
      15.4542
    ],
    "isMicrostate": false,
    "summary": "Frail oil economy and subsistence farming overwhelmed by hundreds of thousands of refugees fleeing ethnic slaughter in Sudan.",
    "headwinds": [
      "Overwhelmed by more than 600,000 traumatized refugees fleeing catastrophic genocide in Darfur (Sudan), straining water and food",
      "Severe climate exposure in the Sahel: desertification, extreme heat, and shrinking Lake Chad basin",
      "Dynastic military rule under President Mahamat Déby following his father's battlefield death",
      "High infant mortality, deep poverty, and fragile public healthcare services"
    ],
    "tailwinds": [
      "Crude oil pipeline exports via Cameroon generating baseline sovereign revenues",
      "Formidable, battle-tested desert military serving as a pivotal regional counter-terror force",
      "Untapped gold deposits and solar energy generation potential",
      "Substantial humanitarian funding from international agencies supporting border areas"
    ],
    "transcriptExcerpt": "Chad has oil, but also has vulnerable farming and immense pressure from people fleeing from Sudan's war. It needs to provide more with services already stretched. Red.",
    "tags": [
      "Sudan Refugee Influx",
      "Lake Chad Shrinkage",
      "Sahel Desertification",
      "Oil Pipeline"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3002s",
    "_searchStr": "chad africa frail oil economy and subsistence farming overwhelmed by hundreds of thousands of refugees fleeing ethnic slaughter in sudan. sudan refugee influx lake chad shrinkage sahel desertification oil pipeline"
  },
  {
    "rank": 173,
    "name": "Mozambique",
    "topoName": "Mozambique",
    "id": "MOZ",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "50:14",
    "videoSeconds": 3014,
    "region": "Africa",
    "coordinates": [
      35.5296,
      -18.6657
    ],
    "isMicrostate": false,
    "summary": "Promising $20B offshore LNG mega-projects stalled by ISIS-affiliated insurgency in Cabo Delgado, alongside post-election unrest.",
    "headwinds": [
      "ISIS-affiliated insurgency in northern Cabo Delgado forced force majeure on TotalEnergies' $20B LNG project",
      "High public debt distress tracing back to the 'hidden debt' scandal, limiting state credit access",
      "Devastating recurring Indian Ocean tropical cyclones (Idai, Freddy) battering coastal cities",
      "Violent street demonstrations and post-election unrest disputing official election outcomes"
    ],
    "tailwinds": [
      "One of the world's largest offshore natural gas discoveries (Rovuma Basin) with Coral Sul FLNG producing gas",
      "Major exporter of high-grade coal, heavy mineral sands, graphite for batteries, and aluminum",
      "Strategic Indian Ocean ports (Maputo, Beira, Nacala) providing rail outlets for landlocked neighbors",
      "Cahora Bassa Dam generating major clean hydroelectric exports to Southern Africa"
    ],
    "transcriptExcerpt": "Mozambique has major gas potential; insecurity and weak public finances make the promised income much harder to turn into reliable jobs and services. Red.",
    "tags": [
      "Cabo Delgado Insurgency",
      "Rovuma Basin LNG",
      "Cyclone Devastation",
      "Strategic Ports"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3014s",
    "_searchStr": "mozambique africa promising $20b offshore lng mega-projects stalled by isis-affiliated insurgency in cabo delgado, alongside post-election unrest. cabo delgado insurgency rovuma basin lng cyclone devastation strategic ports"
  },
  {
    "rank": 174,
    "name": "Madagascar",
    "topoName": "Madagascar",
    "id": "MDG",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "50:22",
    "videoSeconds": 3022,
    "region": "Africa",
    "coordinates": [
      46.8691,
      -18.7669
    ],
    "isMicrostate": false,
    "summary": "Deep poverty, recurring climate-driven famines in the south, and repeated cyclone destruction with zero fiscal buffer to rebuild.",
    "headwinds": [
      "Recurring climate-induced droughts and famine ('Kere') in the arid southern region, leaving hundreds of thousands food insecure",
      "Battered annually by destructive tropical cyclones wiping out roads, vanilla crops, and electrical lines",
      "Over 75% of the population lives in extreme poverty without formal electricity or clean water access",
      "Governance fragility and persistent political instability"
    ],
    "tailwinds": [
      "World's leading producer of Bourbon vanilla and major exporter of cloves and litchis",
      "Ambatovy nickel-cobalt mega-mine and substantial ilmenite mineral sands operations (Rio Tinto)",
      "Incomparable global biodiversity hotspot with 90%+ endemic wildlife (lemurs, baobabs) driving ecotourism",
      "Expanding offshore renewable energy and blue economy fisheries"
    ],
    "transcriptExcerpt": "Madagascar faces deep poverty and repeated climate damage with little money for recovery. Red.",
    "tags": [
      "Famine in South",
      "Extreme Poverty 75%",
      "Cyclone Battery",
      "Vanilla Monopoly"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3022s",
    "_searchStr": "madagascar africa deep poverty, recurring climate-driven famines in the south, and repeated cyclone destruction with zero fiscal buffer to rebuild. famine in south extreme poverty 75% cyclone battery vanilla monopoly"
  },
  {
    "rank": 175,
    "name": "Guinea-Bissau",
    "topoName": "Guinea-Bissau",
    "id": "GNB",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "50:27",
    "videoSeconds": 3027,
    "region": "Africa",
    "coordinates": [
      -15.1804,
      11.8037
    ],
    "isMicrostate": false,
    "summary": "Overwhelmingly dependent on raw cashew nut harvests; one bad harvest or price drop cascades across the entire country.",
    "headwinds": [
      "Extreme export concentration: raw cashew nuts account for over 90% of total export receipts",
      "History of repeated military coups, political assassinations, and constitutional instability",
      "Long-standing exploitation by transnational Latin American drug cartels as a cocaine transit hub to Europe"
    ],
    "tailwinds": [
      "Pristine marine biodiversity across the Bijagós Archipelago biosphere reserve",
      "Untapped offshore petroleum and natural gas exploration acreage in the MSGBC basin",
      "Extensive bauxite and phosphate mineral deposits awaiting commercial infrastructure",
      "Shared regional monetary stability via the West African CFA franc (pegged to Euro)"
    ],
    "transcriptExcerpt": "Guinea-Bissau depends overwhelmingly on cashew exports. One poor season or falling price reaches much of the country because of that. Red.",
    "tags": [
      "Cashew Monoculture",
      "Coup History",
      "Narco-Transit Hub",
      "Bijagos Biosphere"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3027s",
    "_searchStr": "guinea-bissau africa overwhelmingly dependent on raw cashew nut harvests; one bad harvest or price drop cascades across the entire country. cashew monoculture coup history narco-transit hub bijagos biosphere"
  },
  {
    "rank": 176,
    "name": "Niger",
    "topoName": "Niger",
    "id": "NER",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "50:35",
    "videoSeconds": 3035,
    "region": "Africa",
    "coordinates": [
      8.0817,
      17.6078
    ],
    "isMicrostate": false,
    "summary": "Military junta broke Western ties and export pipeline to Benin faces disputes; severe Sahel jihadist attacks imperil borders.",
    "headwinds": [
      "Severe ongoing terrorist attacks by ISGS and JNIM jihadist insurgencies in the Tillabéri border tri-border zone",
      "Diplomatic disputes and border closures with Benin disrupted the export flow of crude oil through the new Niger-Benin pipeline",
      "Suspension of Western budgetary aid and development assistance following the 2023 military coup",
      "One of the world's fastest-growing populations and highest fertility rates (6.8 children/woman) colliding with food insecurity"
    ],
    "tailwinds": [
      "New 2,000 km export crude oil pipeline to Benin's coast capable of tripling petroleum production to 110,000 bpd",
      "Major global producer of high-grade uranium ore (Arlit mines)",
      "Kandadji Dam project under construction along the Niger River for irrigation and power",
      "Abundant solar radiation potential across desert terrain"
    ],
    "transcriptExcerpt": "Niger has new oil income, but insecurity and restricted financing makes it harder to turn growth into better living conditions. Five reds.",
    "tags": [
      "Military Junta",
      "Jihadist Insurgency",
      "Benin Pipeline Dispute",
      "Uranium Riches"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3035s",
    "_searchStr": "niger africa military junta broke western ties and export pipeline to benin faces disputes; severe sahel jihadist attacks imperil borders. military junta jihadist insurgency benin pipeline dispute uranium riches"
  },
  {
    "rank": 177,
    "name": "Ethiopia",
    "topoName": "Ethiopia",
    "id": "ETH",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "50:42",
    "videoSeconds": 3042,
    "region": "Africa",
    "coordinates": [
      40.4897,
      9.145
    ],
    "isMicrostate": false,
    "summary": "GERD dam powers the grid, but internal ethnic wars (Tigray, Amhara, Oromia), sovereign debt default, and Egypt disputes cause deep crises.",
    "headwinds": [
      "Protracted internal ethnic conflicts: lingering devastation from Tigray war, active insurgency in Amhara (Fano), and OLA clashes",
      "Defaulted on sovereign Eurobond debt in late 2023, requiring painful IMF currency devaluations that spiked living costs",
      "Deep geopolitical friction and proxy war threats from Egypt over the Grand Ethiopian Renaissance Dam (GERD)",
      "Landlocked status forces complete reliance on Djibouti's ports for ocean trade"
    ],
    "tailwinds": [
      "Grand Ethiopian Renaissance Dam (GERD): Africa's largest hydropower dam, generating massive baseload power and export revenue",
      "Africa's second most populous nation (125M+) with massive manufacturing and textile industrial parks",
      "Ethiopian Airlines: Africa's premier, most profitable, and globally connected commercial airline",
      "Rapidly expanding homegrown digital payments (Telebirr) and mobile telecoms liberalization"
    ],
    "transcriptExcerpt": "For Ethiopia, the Grand Ethiopian Renaissance Dam means power for homes and factories, plus electricity to sell abroad. That's a major opportunity... The dispute is about when it's released, especially during drought... But Ethiopia also has debt problems, conflict, and millions of people needing humanitarian help. A farmer forced to abandon their land doesn't immediately benefit because the country generates more electricity. For now, red.",
    "tags": [
      "GERD Dam",
      "Eurobond Default",
      "Internal Wars",
      "Nile Standoff with Egypt"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3042s",
    "_searchStr": "ethiopia africa gerd dam powers the grid, but internal ethnic wars (tigray, amhara, oromia), sovereign debt default, and egypt disputes cause deep crises. gerd dam eurobond default internal wars nile standoff with egypt"
  },
  {
    "rank": 178,
    "name": "Russia",
    "topoName": "Russia",
    "id": "RUS",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "51:27",
    "videoSeconds": 3087,
    "region": "Europe",
    "coordinates": [
      105.3188,
      61.524
    ],
    "isMicrostate": false,
    "summary": "War economy looks busy, but 14%+ interest rates, hundreds of thousands dead/emigrated, sanctions, and spent rainy-day funds erode the future.",
    "headwinds": [
      "War economy distortion: military production crowds out civilian manufacturing; interest rates raised to 14%+ to fight inflation",
      "Drained much of the liquid assets in the National Wealth Fund to finance the Ukraine war machine",
      "Severe long-term demographic collapse compounded by hundreds of thousands of battlefield casualties and skilled youth fleeing abroad",
      "Severe Western technology sanctions degrading civil aviation, precision machine tooling, and automotive sectors"
    ],
    "tailwinds": [
      "World superpower in hydrocarbons (crude oil, natural gas) successfully redirected via tankers to China, India, and Turkey",
      "Unmatched natural mineral wealth spanning enriched uranium, nickel, palladium, diamonds, and fertilizers",
      "World's #1 wheat exporter with absolute food and fertilizer self-sufficiency",
      "Vast nuclear arsenal providing ultimate conventional and strategic territorial defense"
    ],
    "transcriptExcerpt": "You keep hearing its economy is about to collapse. It keeps not collapsing. It still sells oil mostly to China and India now at a discount... And the government is spending enormous amounts on the war, paying factories to make weapons and paying people a great wage... But you want a loan to expand, interest rates are at 14%. You want new machinery, sanctions make it impossible to get, and the young engineer you wanted to hire has left the country already. That's the problem with the war economy: it looks busy from the outside while factories run and wages rise, but very little out of that spending builds anything that keeps paying off after the war is done. Meanwhile, Russia has spent much of the rainy day fund it built from oil. Red.",
    "tags": [
      "War Economy Illusion",
      "Interest Rates 14%+",
      "Spent Wealth Fund",
      "Oil to China & India"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3087s",
    "_searchStr": "russia europe war economy looks busy, but 14%+ interest rates, hundreds of thousands dead/emigrated, sanctions, and spent rainy-day funds erode the future. war economy illusion interest rates 14%+ spent wealth fund oil to china & india"
  },
  {
    "rank": 179,
    "name": "Belarus",
    "topoName": "Belarus",
    "id": "BLR",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "51:44",
    "videoSeconds": 3104,
    "region": "Europe",
    "coordinates": [
      27.9534,
      53.7098
    ],
    "isMicrostate": false,
    "summary": "Tied its fate entirely to Russia's war effort; Western sanctions, political repression, and jailing critics leave no exit ramp.",
    "headwinds": [
      "Complete economic and political dependency on Moscow; Russian sanctions and war setbacks directly drag down Belarus",
      "Comprehensive Western sanctions cut off vital potash fertilizer and refined petroleum export corridors through Baltic ports",
      "Totalitarian domestic repression: thousands of political prisoners, independent media erased, mass flight of IT talent"
    ],
    "tailwinds": [
      "World's leading producer of potash fertilizer (Belaruskali), re-routed through Russian rail corridors",
      "Heavy industrial manufacturing base (BelAZ mining dump trucks, MTZ tractors)",
      "Subsidized Russian crude oil and natural gas supplies ensuring cheap domestic energy",
      "Russian tactical nuclear weapons stationed on territory providing defense umbrella"
    ],
    "transcriptExcerpt": "Belarus has tied itself ever closer to Russia while jailing critics at home. Russia's problems increasingly become its problems with fewer ways to choose a different path. Red.",
    "tags": [
      "Russian Dependency",
      "Potash Sanctions",
      "Totalitarian Rule",
      "Transit Cutoff"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3104s",
    "_searchStr": "belarus europe tied its fate entirely to russia's war effort; western sanctions, political repression, and jailing critics leave no exit ramp. russian dependency potash sanctions totalitarian rule transit cutoff"
  },
  {
    "rank": 180,
    "name": "North Korea",
    "topoName": "North Korea",
    "id": "PRK",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "52:47",
    "videoSeconds": 3167,
    "region": "Asia",
    "coordinates": [
      127.5101,
      40.3399
    ],
    "isMicrostate": false,
    "summary": "Extreme totalitarian isolation, systemic chronic food insecurity, and zero basic liberties, propped up by arms sales to Russia.",
    "headwinds": [
      "Extreme international isolation and totalitarian control completely denying citizens basic liberties, travel, and free information",
      "Chronic, systemic food insecurity and vulnerability of agricultural harvests to floods and fertilizer shortages",
      "Severe economic distortions from allocating colossal national resources to nuclear and missile programs"
    ],
    "tailwinds": [
      "Secured massive Russian food, fuel, and space technology transfers in exchange for artillery shells and troops",
      "Vast nuclear weapon and ballistic missile arsenal guaranteeing the survival of the Kim regime",
      "Substantial untapped mineral deposits in rare earth minerals, magnesite, and anthracite coal",
      "State-sponsored cyber-theft and cryptocurrency hacking networks generating hundreds of millions in hard currency"
    ],
    "transcriptExcerpt": "North Korea's isolation, repression, and food insecurity severely restrict ordinary life. Independent information is limited, but the lack of basic opportunity is clear. Red.",
    "tags": [
      "Totalitarian Isolation",
      "Chronic Food Deficit",
      "Russia Arms Deals",
      "Nuclear Arsenal"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3167s",
    "_searchStr": "north korea asia extreme totalitarian isolation, systemic chronic food insecurity, and zero basic liberties, propped up by arms sales to russia. totalitarian isolation chronic food deficit russia arms deals nuclear arsenal"
  },
  {
    "rank": 181,
    "name": "Eritrea",
    "topoName": "Eritrea",
    "id": "ERI",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "52:57",
    "videoSeconds": 3177,
    "region": "Africa",
    "coordinates": [
      39.7823,
      15.1794
    ],
    "isMicrostate": false,
    "summary": "'North Korea of Africa': indefinite compulsory military conscription drives massive youth flight, gutting the economy.",
    "headwinds": [
      "Indefinite, lifelong mandatory national conscription trapping working-age citizens in low-wage military/labor service",
      "Massive outward youth flight across deserts and Mediterranean making it one of the world's top refugee sources per capita",
      "Complete absence of private enterprise freedom, independent judiciary, or constitutional democracy"
    ],
    "tailwinds": [
      "Commercial gold, copper, and zinc mining operations (Bisha mine) generating foreign exchange royalties",
      "Pristine, strategically located Red Sea coastline along major maritime trade chokepoints",
      "2% diaspora tax collected from citizens abroad generating steady state revenues",
      "Highly disciplined military apparatus securing border control"
    ],
    "transcriptExcerpt": "Eritrea also severely restricts people's work and choices, including through prolonged compulsory national service that drives people to leave and limits what those who stay can build for themselves. Red.",
    "tags": [
      "Indefinite Conscription",
      "Mass Youth Flight",
      "No Civil Rights",
      "Red Sea Coast"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3177s",
    "_searchStr": "eritrea africa 'north korea of africa': indefinite compulsory military conscription drives massive youth flight, gutting the economy. indefinite conscription mass youth flight no civil rights red sea coast"
  },
  {
    "rank": 182,
    "name": "Venezuela",
    "topoName": "Venezuela",
    "id": "VEN",
    "tier": "red",
    "tierLabel": "Screwed",
    "timestamp": "53:10",
    "videoSeconds": 3190,
    "region": "Americas",
    "coordinates": [
      -66.5897,
      6.4238
    ],
    "isMicrostate": false,
    "summary": "Maduro captured in early 2026, but decade of collapsed oil infrastructure, UN abuse reports, and hyperinflation leave recovery precarious.",
    "headwinds": [
      "Decade of economic devastation: 8 million people fled abroad, public services collapsed, and hyperinflation destroyed savings",
      "Crude oil extraction infrastructure severely dilapidated from decades of corruption and underinvestment",
      "High uncertainty surrounding political transition and post-Maduro stability following early 2026 events",
      "UN investigators continue reporting severe human rights abuses and institutional breakdown"
    ],
    "tailwinds": [
      "World's largest proven oil reserves (over 300 billion barrels in the Orinoco Belt)",
      "Enormous natural gas, hydropower (Guri Dam), gold, and iron ore potential",
      "Re-engagement with international oil majors (Chevron, Repsol, Eni) ramping up production",
      "Massive overseas diaspora with capital and education ready to support national reconstruction"
    ],
    "transcriptExcerpt": "Venezuela is a moving target. The US intervention and Maduro's capture in January 2026 changed its political situation. UN investigators were still reporting serious abuses in September. So years of economic damage, weakened services, and lost trust still need repairing. Its direction is unusually uncertain. For now, red.",
    "tags": [
      "2026 Regime Transition",
      "World's #1 Oil Reserves",
      "Dilapidated Grid",
      "8M Diaspora"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3190s",
    "_searchStr": "venezuela americas maduro captured in early 2026, but decade of collapsed oil infrastructure, un abuse reports, and hyperinflation leave recovery precarious. 2026 regime transition world's #1 oil reserves dilapidated grid 8m diaspora"
  },
  {
    "rank": 183,
    "name": "Democratic Republic of the Congo",
    "topoName": "Dem. Rep. Congo",
    "id": "COD",
    "tier": "black",
    "tierLabel": "The Crisis Has Already Arrived",
    "timestamp": "53:36",
    "videoSeconds": 3216,
    "region": "Africa",
    "coordinates": [
      21.7587,
      -4.0383
    ],
    "isMicrostate": false,
    "summary": "Supplies over 70% of the world's cobalt, while eastern provinces endure brutal M23 warfare, mass displacement, and humanitarian collapse.",
    "headwinds": [
      "Active warfare in North Kivu by M23 rebels and over 100 armed militias displacing over 7 million people",
      "Catastrophic humanitarian crisis: widespread sexual violence, famine conditions, and cholera outbreaks in refugee camps",
      "Endemic corruption and smuggling diverting billions in mineral wealth away from public services",
      "Complete breakdown of state presence and basic infrastructure across vast rural provinces"
    ],
    "tailwinds": [
      "World's indispensable supplier of cobalt (>70%) and premier high-grade copper reserves (Kamoa-Kakula)",
      "Coltan, tantalum, lithium, and diamond wealth essential for modern smartphones and global green transition",
      "Inga Dam hydropower potential along the Congo River capable of powering half the African continent",
      "World's second-largest rainforest and peatland carbon sink absorbing global emissions"
    ],
    "transcriptExcerpt": "The Democratic Republic of the Congo supplies much of the world's cobalt used in many rechargeable batteries. Its minerals are worth a fortune. Meanwhile, fighting in the East has forced people from their homes, disrupted food supplies, and exposed communities to severe violence. Mining wealth elsewhere in the country hasn't given those families safety or provided reliable services for much of the population. Black.",
    "tags": [
      "Cobalt Superpower",
      "M23 Eastern War",
      "7M Displaced",
      "Humanitarian Catastrophe"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3216s",
    "_searchStr": "democratic republic of the congo africa supplies over 70% of the world's cobalt, while eastern provinces endure brutal m23 warfare, mass displacement, and humanitarian collapse. cobalt superpower m23 eastern war 7m displaced humanitarian catastrophe"
  },
  {
    "rank": 184,
    "name": "Central African Republic",
    "topoName": "Central African Rep.",
    "id": "CAF",
    "tier": "black",
    "tierLabel": "The Crisis Has Already Arrived",
    "timestamp": "53:59",
    "videoSeconds": 3239,
    "region": "Africa",
    "coordinates": [
      20.9394,
      6.6111
    ],
    "isMicrostate": false,
    "summary": "Decades of civil war leave the state with little control outside the capital, reliant on Russian Wagner mercenaries amidst extreme poverty.",
    "headwinds": [
      "Armed rebel coalitions control vast swathes of the hinterland and diamond/gold mining zones",
      "Relying on Russian Wagner Group (Africa Corps) mercenaries for regime survival, linked to widespread abuses",
      "One of the world's lowest Human Development Index (HDI) scores with extreme child mortality and hunger",
      "Landlocked with transport routes to Cameroon's coast frequently ambushed by armed bandits"
    ],
    "tailwinds": [
      "Vast untapped mineral wealth in artisanal and alluvial diamonds, gold, and uranium (Bakouma)",
      "Rich, unexploited tropical timber concessions and fertile agricultural savannahs",
      "Generous humanitarian aid programs funded by the United Nations and European donors",
      "Bilateral regional peace and disarmament accords brokered with regional neighbors"
    ],
    "transcriptExcerpt": "The Central African Republic faces prolonged insecurity, extreme poverty and weak essential services. Black.",
    "tags": [
      "Rebel Insurgency",
      "Wagner Presence",
      "Extreme Poverty",
      "Artisanal Diamonds"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3239s",
    "_searchStr": "central african republic africa decades of civil war leave the state with little control outside the capital, reliant on russian wagner mercenaries amidst extreme poverty. rebel insurgency wagner presence extreme poverty artisanal diamonds"
  },
  {
    "rank": 185,
    "name": "Mali",
    "topoName": "Mali",
    "id": "MLI",
    "tier": "black",
    "tierLabel": "The Crisis Has Already Arrived",
    "timestamp": "54:06",
    "videoSeconds": 3246,
    "region": "Africa",
    "coordinates": [
      -3.9962,
      17.5707
    ],
    "isMicrostate": false,
    "summary": "Military junta expelled French and UN peacekeepers, bringing in Russian mercenaries while jihadists blockade northern cities.",
    "headwinds": [
      "Al-Qaeda-affiliated JNIM and Islamic State jihadists wage relentless guerrilla warfare, blockading northern cities like Timbuktu",
      "Expelled French troops and the 15,000-strong UN MINUSMA mission, relying on controversial Russian mercenaries",
      "Formed the isolated 'Alliance of Sahel States' (AES) junta bloc, withdrawing from ECOWAS and facing trade sanctions",
      "Severe nationwide electricity blackouts and economic isolation paralyzing urban commerce"
    ],
    "tailwinds": [
      "Major African gold producer (Barrick, B2Gold) generating essential export cash flow",
      "Commercial lithium mining operations coming online at the Goulamina deposit",
      "Vast agricultural potential along the fertile Niger River inland delta",
      "Historical cultural resilience and deeply rooted regional trade traditions"
    ],
    "transcriptExcerpt": "In Mali and Burkina Faso, armed violence has displaced communities and closed schools. People lose access to farms, markets and healthcare. A village cut off from food suppliers can't wait for a better national growth forecast. All three are already in crisis. Black.",
    "tags": [
      "Jihadist Blockades",
      "Russian Mercenaries",
      "Junta Isolation",
      "Gold & Lithium"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3246s",
    "_searchStr": "mali africa military junta expelled french and un peacekeepers, bringing in russian mercenaries while jihadists blockade northern cities. jihadist blockades russian mercenaries junta isolation gold & lithium"
  },
  {
    "rank": 186,
    "name": "Burkina Faso",
    "topoName": "Burkina Faso",
    "id": "BFA",
    "tier": "black",
    "tierLabel": "The Crisis Has Already Arrived",
    "timestamp": "54:06",
    "videoSeconds": 3246,
    "region": "Africa",
    "coordinates": [
      -1.5616,
      12.2383
    ],
    "isMicrostate": false,
    "summary": "Military junta lost control of over 40% of national territory to militants; thousands of schools closed and 2 million displaced.",
    "headwinds": [
      "Armed jihadist groups (JNIM/ISGS) control or contest an estimated 40-50% of the national territory",
      "Over 2 million internally displaced persons, with over 6,000 schools shuttered due to terror threats",
      "Towns in the north and east completely besieged, requiring risky military airlifts to deliver basic grain",
      "Severe conscription and repression of civil society critics by the ruling military junta"
    ],
    "tailwinds": [
      "Fast-growing commercial gold mining sector providing the regime with vital export revenues",
      "Significant cotton production and agricultural fertility in southwestern provinces",
      "Highly motivated youth volunteer defense forces (VDP) resisting insurgent encroachment",
      "Untapped solar energy resources across arid northern plains"
    ],
    "transcriptExcerpt": "In Mali and Burkina Faso, armed violence has displaced communities and closed schools. People lose access to farms, markets and healthcare. All three are already in crisis. Black.",
    "tags": [
      "Territory Lost 40%",
      "Besieged Towns",
      "2M Displaced",
      "Gold Exports"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3246s",
    "_searchStr": "burkina faso africa military junta lost control of over 40% of national territory to militants; thousands of schools closed and 2 million displaced. territory lost 40% besieged towns 2m displaced gold exports"
  },
  {
    "rank": 187,
    "name": "Somalia",
    "topoName": "Somalia",
    "id": "SOM",
    "tier": "black",
    "tierLabel": "The Crisis Has Already Arrived",
    "timestamp": "54:20",
    "videoSeconds": 3260,
    "region": "Africa",
    "coordinates": [
      46.1996,
      5.1521
    ],
    "isMicrostate": false,
    "summary": "Al-Shabaab insurgency, recurring climate droughts, and state fragmentation leave millions dependent on emergency food aid.",
    "headwinds": [
      "Al-Shabaab terrorist insurgency launches frequent suicide bombings, car bombs, and extorts businesses across rural south",
      "Devastating cycles of multi-year historic droughts followed by flash floods, causing chronic near-famine conditions",
      "Deep political fragmentation among federal member states and diplomatic crisis with Ethiopia over Somaliland port deal",
      "Massive dependence on emergency international humanitarian food aid for basic survival"
    ],
    "tailwinds": [
      "Achieved historic full debt cancellation under the IMF/World Bank HIPC Initiative, unlocking new financing",
      "Vibrant, highly entrepreneurial private sector dominating mobile telecommunications and digital banking",
      "Vast coastline (longest in mainland Africa) with rich untapped marine fisheries and offshore oil exploration blocks",
      "Massive livestock exports (camels, sheep, goats) to Saudi Arabia and the Gulf"
    ],
    "transcriptExcerpt": "Somalia has people building businesses and keeping communities going despite conflict and repeated climate shocks. Severe hunger and displacement still leave millions needing help. Black.",
    "tags": [
      "Al-Shabaab Insurgency",
      "Climate Droughts",
      "HIPC Debt Relief",
      "Private Telecoms"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3260s",
    "_searchStr": "somalia africa al-shabaab insurgency, recurring climate droughts, and state fragmentation leave millions dependent on emergency food aid. al-shabaab insurgency climate droughts hipc debt relief private telecoms"
  },
  {
    "rank": 188,
    "name": "Afghanistan",
    "topoName": "Afghanistan",
    "id": "AFG",
    "tier": "black",
    "tierLabel": "The Crisis Has Already Arrived",
    "timestamp": "54:30",
    "videoSeconds": 3270,
    "region": "Asia",
    "coordinates": [
      67.71,
      33.9391
    ],
    "isMicrostate": false,
    "summary": "Taliban decrees ban women from secondary education and work, gutting half the workforce amidst deep poverty and global isolation.",
    "headwinds": [
      "Taliban bans on female secondary/university education and female employment erase half the nation's human capital",
      "Complete international diplomatic non-recognition and frozen central bank foreign currency assets abroad",
      "Severe structural poverty, malnutrition, and dependency on declining United Nations cash airlifts",
      "Vulnerability to devastating earthquakes, flash floods, and prolonged water droughts"
    ],
    "tailwinds": [
      "Construction of the massive Qosh Tepa irrigation canal diverting Amu Darya waters to green northern deserts",
      "Elimination of widespread battlefield fighting and sharp reduction in nationwide highway corruption",
      "Vast unmined mineral deposits estimated at $1 trillion (lithium, copper, iron ore, lapis lazuli)",
      "Active resource extraction negotiations and investment agreements with Chinese state firms"
    ],
    "transcriptExcerpt": "Afghanistan faces poverty, strained services, and restrictions that deny women and girls education and work. Earlier, we met countries desperately trying to find more workers. Here, the authorities prevent a huge part of the population from developing and using their skills. That harms people now and makes recovery harder for the next generation. Black.",
    "tags": [
      "Taliban Decrees",
      "Women Banned from Work",
      "Qosh Tepa Canal",
      "Trillion Dollar Minerals"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3270s",
    "_searchStr": "afghanistan asia taliban decrees ban women from secondary education and work, gutting half the workforce amidst deep poverty and global isolation. taliban decrees women banned from work qosh tepa canal trillion dollar minerals"
  },
  {
    "rank": 189,
    "name": "Myanmar",
    "topoName": "Myanmar",
    "id": "MMR",
    "tier": "black",
    "tierLabel": "The Crisis Has Already Arrived",
    "timestamp": "54:49",
    "videoSeconds": 3289,
    "region": "Asia",
    "coordinates": [
      95.956,
      21.9162
    ],
    "isMicrostate": false,
    "summary": "Full-scale multi-front civil war between collapsing military junta and resistance forces has destroyed livelihoods and the economy.",
    "headwinds": [
      "Brutal nationwide civil war: military junta using airstrikes and artillery on civilian towns as it loses ground",
      "Armed ethnic resistance forces and Peoples Defense Forces (PDF) captured border crossings and key military bases",
      "Severe economic collapse: runaway currency (Kyat) depreciation, electricity blackouts, and inflation",
      "Forced military conscription driving thousands of young educated workers to flee to Thailand and beyond"
    ],
    "tailwinds": [
      "World's leading producer of jade and high-grade heavy rare earth minerals essential for EV motors and wind turbines",
      "Abundant natural gas reserves piped to Thailand and China generating baseline foreign revenues",
      "Vast agricultural fertile river valleys (Ayeyarwady delta) for rice cultivation",
      "Resilient democratic resistance alliance building grassroots federal administration"
    ],
    "transcriptExcerpt": "Myanmar's war has destroyed livelihoods and driven people from their homes. Damaged infrastructure and repeated disasters make recovery harder. Black.",
    "tags": [
      "Civil War",
      "Junta Collapsing",
      "Rare Earths & Jade",
      "Kyat Depreciation"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3289s",
    "_searchStr": "myanmar asia full-scale multi-front civil war between collapsing military junta and resistance forces has destroyed livelihoods and the economy. civil war junta collapsing rare earths & jade kyat depreciation"
  },
  {
    "rank": 190,
    "name": "Haiti",
    "topoName": "Haiti",
    "id": "HTI",
    "tier": "black",
    "tierLabel": "The Crisis Has Already Arrived",
    "timestamp": "54:56",
    "videoSeconds": 3296,
    "region": "Americas",
    "coordinates": [
      -72.2852,
      18.9712
    ],
    "isMicrostate": false,
    "summary": "Heavily armed gang coalitions control 85%+ of Port-au-Prince; state authority has collapsed amidst acute starvation and gang terror.",
    "headwinds": [
      "Armed gang alliances (Viv Ansanm) control over 85% of Port-au-Prince, blocking fuel terminals, ports, and hospitals",
      "Near-total collapse of formal state institutions, judicial systems, and basic law enforcement",
      "Acute famine conditions: over 5 million people suffering crisis-level or emergency food insecurity",
      "Tens of thousands displaced into squalid refugee encampments inside public schools"
    ],
    "tailwinds": [
      "Deployment of the UN-authorized Multinational Security Support (MSS) mission led by Kenyan police",
      "Enormous, dedicated diaspora in the United States and Canada remitting over $3 billion annually",
      "Pristine historical and natural tourism assets in northern coastal regions (Cap-Haïtien, Citadelle Laferrière)",
      "Duty-free trade preferences with the US for textile and apparel manufacturing (HOPE/HELP acts)"
    ],
    "transcriptExcerpt": "In Haiti, armed gangs control routes people need to reach work, food, and hospitals. Even moving across the capital can be dangerous. Black.",
    "tags": [
      "Gang Coalition Rule",
      "State Collapse",
      "Acute Famine",
      "Kenyan Police Mission"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3296s",
    "_searchStr": "haiti americas heavily armed gang coalitions control 85%+ of port-au-prince; state authority has collapsed amidst acute starvation and gang terror. gang coalition rule state collapse acute famine kenyan police mission"
  },
  {
    "rank": 191,
    "name": "Yemen",
    "topoName": "Yemen",
    "id": "YEM",
    "tier": "black",
    "tierLabel": "The Crisis Has Already Arrived",
    "timestamp": "55:04",
    "videoSeconds": 3304,
    "region": "Middle East",
    "coordinates": [
      48.5164,
      15.5527
    ],
    "isMicrostate": false,
    "summary": "Decade of war left a divided economy, ruined healthcare, and millions facing hunger; Houthi ship attacks bring foreign airstrikes.",
    "headwinds": [
      "Decade of brutal civil war leaves over 80% of the population dependent on humanitarian aid for basic survival",
      "Houthi missile attacks on Red Sea shipping provoked US/UK airstrikes and maritime insurance boycotts",
      "Divided national economy with rival central banks in Sana'a and Aden issuing competing, incompatible currencies",
      "Critical water table depletion: capital city Sana'a faces total groundwater exhaustion"
    ],
    "tailwinds": [
      "Strategic geopolitical control of the Bab el-Mandeb maritime strait, a primary global shipping artery",
      "Historic agricultural terracing producing world-renowned specialty mocha coffee and honey",
      "Untapped offshore natural gas and mineral deposits awaiting postwar stabilization",
      "Deep entrepreneurial diaspora networks across Saudi Arabia, the Gulf, and East Africa"
    ],
    "transcriptExcerpt": "Yemen has endured years of war with hunger, damaged services, and a divided economy, leaving families dependent on help that isn't always reliable. All already in crisis. Black.",
    "tags": [
      "Red Sea Attacks",
      "Decade of War",
      "Divided Central Banks",
      "Groundwater Depletion"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3304s",
    "_searchStr": "yemen middle east decade of war left a divided economy, ruined healthcare, and millions facing hunger; houthi ship attacks bring foreign airstrikes. red sea attacks decade of war divided central banks groundwater depletion"
  },
  {
    "rank": 192,
    "name": "Syria",
    "topoName": "Syria",
    "id": "SYR",
    "tier": "black",
    "tierLabel": "The Crisis Has Already Arrived",
    "timestamp": "55:13",
    "videoSeconds": 3313,
    "region": "Middle East",
    "coordinates": [
      38.9968,
      34.8021
    ],
    "isMicrostate": false,
    "summary": "Catastrophic destruction of entire cities, broken power grids, and divided territory require hundreds of billions to rebuild.",
    "headwinds": [
      "Catastrophic physical destruction of housing, electrical grids, water networks, and hospitals estimated at $400B+",
      "Millions of citizens remain internally displaced or living as refugees in Turkey, Lebanon, Jordan, and Europe",
      "Severe economic collapse with domestic currency in freefall and acute fuel and bread shortages",
      "Division of national territory among multiple armed factions, foreign military occupations, and local militias"
    ],
    "tailwinds": [
      "Historic opportunities for national reconciliation and institutional reconstruction following political shifts",
      "Strategic geographic transit bridge connecting the Mediterranean Sea, Levant, and Persian Gulf",
      "Traditionally rich agricultural fertility in the Euphrates and Orontes river plains",
      "Highly skilled, resilient diaspora worldwide ready to invest in post-conflict reconstruction"
    ],
    "transcriptExcerpt": "Syria has a chance to rebuild after political change. It also has destroyed neighborhoods, damaged infrastructure, and families who need a safe way home. A new government creates an opportunity, but people still need electricity, work, and a house they can live in. Black.",
    "tags": [
      "$400B Rebuild Cost",
      "Destroyed Cities",
      "Millions Displaced",
      "Territory Divided"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3313s",
    "_searchStr": "syria middle east catastrophic destruction of entire cities, broken power grids, and divided territory require hundreds of billions to rebuild. $400b rebuild cost destroyed cities millions displaced territory divided"
  },
  {
    "rank": 193,
    "name": "Lebanon",
    "topoName": "Lebanon",
    "id": "LBN",
    "tier": "black",
    "tierLabel": "The Crisis Has Already Arrived",
    "timestamp": "55:28",
    "videoSeconds": 3328,
    "region": "Middle East",
    "coordinates": [
      35.8623,
      33.8547
    ],
    "isMicrostate": false,
    "summary": "Complete banking collapse froze citizens' life savings; renewed military bombardment and Israeli ground war flattened southern villages.",
    "headwinds": [
      "Historic 2019 banking system collapse permanently trapped citizen lifetime savings in insolvent banks",
      "Massive Israeli air bombardment and ground war in 2024-2025 destroyed southern towns, suburbs, and displaced over 1 million",
      "Severe state institutional paralysis: prolonged presidential vacancy, decaying power grid providing ~2-4 hours of electricity",
      "Crushing debt default with public debt exceeding 200% of GDP"
    ],
    "tailwinds": [
      "Colossal, affluent global diaspora (in Americas, Europe, Africa) sending vital multi-billion remittance lifelines",
      "Highly educated, multilingual, and creative entrepreneurial workforce in tech and creative media",
      "Potential offshore natural gas deposits in the Mediterranean Block 9 exploration zone",
      "Strategic Mediterranean cultural and commercial bridge"
    ],
    "transcriptExcerpt": "Lebanon has renewed destruction on top of a financial collapse that trapped people's savings and damaged basic services. Rebuilding requires money and functioning banks, both already difficult to access. So, black.",
    "tags": [
      "Banking Freeze",
      "War Devastation",
      "1M Displaced",
      "200% Debt Default"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3328s",
    "_searchStr": "lebanon middle east complete banking collapse froze citizens' life savings; renewed military bombardment and israeli ground war flattened southern villages. banking freeze war devastation 1m displaced 200% debt default"
  },
  {
    "rank": 194,
    "name": "Palestine",
    "topoName": "Palestine",
    "id": "PSE",
    "tier": "black",
    "tierLabel": "The Crisis Has Already Arrived",
    "timestamp": "55:43",
    "videoSeconds": 3343,
    "region": "Middle East",
    "coordinates": [
      35.2332,
      31.9522
    ],
    "isMicrostate": false,
    "summary": "Gaza reduced to catastrophic rubble with famine and medical collapse; West Bank faces intensified raids, checkpoints, and economic strangulation.",
    "headwinds": [
      "Total catastrophic destruction in Gaza: over 70% of housing destroyed, complete healthcare collapse, and famine",
      "West Bank faces intensive military raids, settler violence, checkpoints, and severe economic strangulation",
      "Palestinian Authority faces acute insolvency as Israel freezes clearance tax revenues",
      "Severe trauma, loss of life, and complete destruction of basic water, sanitation, and electrical infrastructure"
    ],
    "tailwinds": [
      "Unprecedented global diplomatic recognition of Palestinian statehood by Western and European nations",
      "Unbreakable societal resilience, communal mutual aid solidarity, and high educational values",
      "Potential commercial development of the offshore 'Gaza Marine' natural gas field",
      "Vast international donor commitments and multilateral reconstruction funds pledged for post-war rebuilding"
    ],
    "transcriptExcerpt": "Palestine is already in crisis. In Gaza, devastation, displacement, and restrictions on essentials have made finding food, shelter, and medical care an immediate struggle. The West Bank faces a different situation: military raids, attacks by settlers, and checkpoints make it hard for people to move freely, farm their land, or get to work. One color has to cover both places here, but it can't tell you whether a particular family still has a home to go back to. Black.",
    "tags": [
      "Gaza Destruction",
      "Famine & Ruins",
      "West Bank Raids",
      "Tax Revenue Freeze"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3343s",
    "_searchStr": "palestine middle east gaza reduced to catastrophic rubble with famine and medical collapse; west bank faces intensified raids, checkpoints, and economic strangulation. gaza destruction famine & ruins west bank raids tax revenue freeze"
  },
  {
    "rank": 195,
    "name": "Ukraine",
    "topoName": "Ukraine",
    "id": "UKR",
    "tier": "black",
    "tierLabel": "The Crisis Has Already Arrived",
    "timestamp": "56:09",
    "videoSeconds": 3369,
    "region": "Europe",
    "coordinates": [
      31.1656,
      48.3794
    ],
    "isMicrostate": false,
    "summary": "State functions heroically, but systematic Russian missile strikes shattered 50%+ of electrical grid while frontline cities are pulverized.",
    "headwinds": [
      "Systematic Russian ballistic missile and drone bombardments destroyed over 50-60% of domestic power generation capacity",
      "Colossal frontline destruction across eastern and southern oblasts with millions of landmines contaminating farmland",
      "Over 6 million refugees abroad and millions internally displaced, causing severe industrial labor shortages",
      "Massive budget deficits dependent on continuous Western financial and military aid tranches"
    ],
    "tailwinds": [
      "Heroic societal resilience and state functionality: digital state services (Diia), banking, and railways operate under fire",
      "Accelerated European Union accession pathway and ironclad Western bilateral security pacts",
      "World's most fertile 'black soil' (chernozem) and agricultural grain export corridor through the Black Sea",
      "Global leader in wartime battlefield innovation: autonomous defense drones, electronic warfare, and robotics"
    ],
    "transcriptExcerpt": "Ukraine is also black. Its government continues to function while businesses still operate, people work, and international support helps defend itself and rebuild. But homes and infrastructure are being destroyed while that work continues. Keeping electricity running through attacks is an extraordinary achievement. It also shows the emergency people are living through. The country has a route to recovery: it needs the destruction to stop. Black.",
    "tags": [
      "Grid Destruction",
      "Frontline Warfare",
      "Heroic Resilience",
      "EU Accession Track"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3369s",
    "_searchStr": "ukraine europe state functions heroically, but systematic russian missile strikes shattered 50%+ of electrical grid while frontline cities are pulverized. grid destruction frontline warfare heroic resilience eu accession track"
  },
  {
    "rank": 196,
    "name": "South Sudan",
    "topoName": "S. Sudan",
    "id": "SSD",
    "tier": "black",
    "tierLabel": "The Crisis Has Already Arrived",
    "timestamp": "56:31",
    "videoSeconds": 3391,
    "region": "Africa",
    "coordinates": [
      31.307,
      6.877
    ],
    "isMicrostate": false,
    "summary": "War in Sudan ruptured the pipeline carrying 90% of its oil exports to the sea, triggering currency collapse and acute hunger.",
    "headwinds": [
      "War in neighboring Sudan ruptured and paralyzed the export pipeline carrying over 90% of South Sudan's oil to the Red Sea",
      "Near-total loss of government oil revenues triggered extreme hyperinflation and the collapse of the South Sudanese Pound",
      "Over 7 million people (60%+ of the nation) suffer from acute crisis-level food insecurity and severe flooding",
      "Intercommunal militia violence and unresolved transitional security arrangements"
    ],
    "tailwinds": [
      "Vast proven petroleum reserves in the Melut and Muglad basins ready for export once transit routes stabilize",
      "Untapped agricultural breadbasket: vast fertile arable land fed by the White Nile river system",
      "Rich mineral resources including commercial gold, copper, and iron ore deposits",
      "International humanitarian and peacekeeping presence (UNMISS) securing core civilian corridors"
    ],
    "transcriptExcerpt": "South Sudan's conflict and humanitarian emergency are made worse by dependence on another country in this tier. Its oil needs pipelines through Sudan to reach the sea. Disruption there cuts the income needed to pay for services here. Two countries in crisis with one making the other's recovery harder. Black.",
    "tags": [
      "Pipeline Severed",
      "90% Oil Loss",
      "Hyperinflation",
      "Acute Starvation"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3391s",
    "_searchStr": "south sudan africa war in sudan ruptured the pipeline carrying 90% of its oil exports to the sea, triggering currency collapse and acute hunger. pipeline severed 90% oil loss hyperinflation acute starvation"
  },
  {
    "rank": 197,
    "name": "Sudan",
    "topoName": "Sudan",
    "id": "SDN",
    "tier": "black",
    "tierLabel": "The Crisis Has Already Arrived",
    "timestamp": "56:47",
    "videoSeconds": 3407,
    "region": "Africa",
    "coordinates": [
      30.2176,
      12.8628
    ],
    "isMicrostate": false,
    "summary": "The most screwed country on Earth: catastrophic civil war between SAF and RSF created the world's largest displacement crisis (10M+) and famine.",
    "headwinds": [
      "World's largest humanitarian displacement crisis: over 10 million people forced from homes; over 2 million fled abroad",
      "Catastrophic famine declared in Zamzam camp and spreading across Darfur and Khartoum war zones",
      "Brutal ethnically targeted massacres and sexual violence perpetrated by the RSF in El Geneina and Gezira",
      "Complete physical destruction of Khartoum's industrial parks, universities, central bank, and medical facilities"
    ],
    "tailwinds": [
      "Vast agricultural breadbasket along the confluence of the Blue and White Niles capable of feeding the region",
      "Africa's third-largest gold producer with rich artisanal and commercial deposits across northern states",
      "Strategic 850 km Red Sea coastline with Port Sudan serving as an essential maritime trading hub",
      "Deeply courageous grassroots 'Emergency Response Rooms' run by youth volunteers saving millions of lives"
    ],
    "transcriptExcerpt": "And finally, our last country, Sudan. War has driven millions from their homes, devastated livelihoods, and caused catastrophic hunger. Inside Sudan, families are trying to survive the destruction of the places and services they depended on. For those families, getting through tomorrow matters more than any prediction about the next decade. And that's all 197. Black.",
    "tags": [
      "#197 Most Screwed",
      "10M Displaced",
      "Famine Declared",
      "Brutal Civil War"
    ],
    "youtubeUrl": "https://www.youtube.com/watch?v=de1wR-L-Sp0&t=3407s",
    "_searchStr": "sudan africa the most screwed country on earth: catastrophic civil war between saf and rsf created the world's largest displacement crisis (10m+) and famine. #197 most screwed 10m displaced famine declared brutal civil war"
  }
];

// Quick lookup map by country name or topoName
export const countryLookup = new Map();
countriesData.forEach(c => {
  countryLookup.set(c.name.toLowerCase(), c);
  if (c.topoName) countryLookup.set(c.topoName.toLowerCase(), c);
  if (c.id) countryLookup.set(c.id.toLowerCase(), c);
});

// High-performance search function using pre-indexed string
export function searchCountries(query) {
  if (!query || !query.trim()) return countriesData;
  const q = query.toLowerCase().trim();
  return countriesData.filter(c => c._searchStr && c._searchStr.includes(q));
}

export default countriesData;
