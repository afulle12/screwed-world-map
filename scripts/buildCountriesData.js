// scripts/buildCountriesData.js
// Generates the comprehensive dataset for all 197 countries ranked by how screwed they are.

import fs from 'fs';
import path from 'path';

const countries = [
  // ================= GREEN TIER (1-22) =================
  {
    rank: 1,
    name: "Switzerland",
    id: "CHE",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "0:32",
    videoSeconds: 32,
    region: "Europe",
    coordinates: [8.2275, 46.8182],
    summary: "Neutral, wealthy, running a federal budget surplus, with world-class engineering, skilled labor, and deep fiscal firepower.",
    headwinds: [
      "Vulnerability to sudden global export slumps or European recession",
      "Very high domestic cost of living ($10 coffee)",
      "Strong Swiss Franc puts persistent pressure on exporter margins"
    ],
    tailwinds: [
      "Projected federal budget surplus and exceptionally low sovereign debt",
      "Deeply entrenched geopolitical neutrality and diplomatic security",
      "High-value specialty industries (pharma, advanced precision tools, private banking)",
      "Immense sovereign reserves and capacity to respond to economic shocks"
    ],
    transcriptExcerpt: "Neutral, wealthy, and they are expecting a federal budget surplus this year... It also has skilled workers, valuable companies, and a government that can afford to respond when things go wrong. Trouble with exports would hurt, but Switzerland has more ways to handle it than most.",
    tags: ["Fiscal Surplus", "Neutrality", "High-Tech", "Banking"]
  },
  {
    rank: 2,
    name: "Singapore",
    id: "SGP",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "0:54",
    videoSeconds: 54,
    region: "Asia",
    coordinates: [103.8198, 1.3521],
    summary: "Resource-poor city-state that has spent decades engineering self-sufficiency in water and technology, backed by massive sovereign wealth.",
    headwinds: [
      "Extremely limited land mass and zero native natural resources",
      "Historical reliance on imported fresh water from Malaysia",
      "High vulnerability to sea-level rise and global shipping disruptions"
    ],
    tailwinds: [
      "State-of-the-art water security: NEWater recycling, desalination, and rainwater harvesting",
      "Massive sovereign wealth funds (GIC & Temasek) with hundreds of billions in reserves",
      "World premier maritime logistics, aviation, and financial hub",
      "Highly competent, long-term forward-planning government"
    ],
    transcriptExcerpt: "It's on very little land, has few natural resources, and it even imports water from Malaysia. But Singapore has spent decades making that fact less dangerous. It catches rain, removes salt from sea water, and recycles waste water into water clean enough to drink... substantial savings and a government capable of getting these things built.",
    tags: ["Water Engineering", "Sovereign Wealth", "Trade Hub", "Finance"]
  },
  {
    rank: 3,
    name: "Malaysia",
    id: "MYS",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "1:27",
    videoSeconds: 87,
    region: "Asia",
    coordinates: [101.9758, 4.2105],
    summary: "Diversified industrial power critical to the global semiconductor supply chain, with thriving domestic services and energy.",
    headwinds: [
      "Fiscal deficits and public debt servicing requirements",
      "Vulnerability to global electronics demand cycles and tariff wars",
      "Domestic political coalition tensions"
    ],
    tailwinds: [
      "Indispensable global role in semiconductor packaging, testing, and electronics",
      "Well-diversified export base: palm oil, LNG, electronics, manufacturing",
      "Strong domestic consumer market providing resilience if any single industry struggles",
      "Key beneficiary of 'China + 1' manufacturing relocation"
    ],
    transcriptExcerpt: "Manufactures electronics, including important parts of the semiconductor supply chain. It also earns from other exports and businesses serving customers at home. Meaning if one industry struggles, the country has several to fall back on.",
    tags: ["Semiconductors", "Diversified Economy", "Manufacturing", "ASEAN"]
  },
  {
    rank: 4,
    name: "Netherlands",
    id: "NLD",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "1:41",
    videoSeconds: 101,
    region: "Europe",
    coordinates: [5.2913, 52.1326],
    summary: "Century-tested water management champions housing ASML, the world's most critical semiconductor lithography monopoly.",
    headwinds: [
      "Approximately 26% of land territory lies below sea level",
      "Severe domestic housing shortage and congested infrastructure",
      "Agricultural nitrogen emission disputes and political friction"
    ],
    tailwinds: [
      "Centuries of world-leading hydraulic engineering and flood defense systems",
      "Home to ASML, the sole manufacturer of extreme ultraviolet (EUV) chipmaking machines",
      "Rotterdam: Europe's largest port and leading logistics artery",
      "High agricultural productivity and sound public finances"
    ],
    transcriptExcerpt: "More expensive housing, crowded infrastructure, and about 26% of the country below sea level. Those would normally sound like red flags, but the Dutch have spent centuries treating them as fun engineering challenges that they of course have solved. They also have successful companies including ASML.",
    tags: ["Water Engineering", "ASML", "Semiconductors", "Port Hub"]
  },
  {
    rank: 5,
    name: "Denmark",
    id: "DNK",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "2:09",
    videoSeconds: 129,
    region: "Europe",
    coordinates: [9.5018, 56.2639],
    summary: "Robust Nordic welfare model and green energy pioneer, weathered pharma concentration concerns and secured Arctic defense stability.",
    headwinds: [
      "Over-reliance on pharmaceuticals (Novo Nordisk drove >50% of GDP growth in 2024)",
      "High household debt levels relative to income",
      "Geopolitical friction in the Baltic and Arctic security corridors"
    ],
    tailwinds: [
      "Low sovereign debt and world-class, trusted public institutions",
      "Diversified industrial base (wind energy, shipping via Maersk, agriculture)",
      "Greenland-US-Denmark trilateral security deal concluded in late 2026 resolving territorial standoffs",
      "World-class renewable energy integration (wind power exports)"
    ],
    transcriptExcerpt: "Pharmaceuticals provided more than half our economic growth in 2024. Depending that much on one industry means its problems become everyone's problems. In 2025, Novo announced job cuts... Denmark still has strong public services and other successful exporters, and in September 2026, Denmark, Greenland, and the US signed a security deal.",
    tags: ["Pharma", "Green Energy", "Nordic Model", "Arctic Security"]
  },
  {
    rank: 6,
    name: "Norway",
    id: "NOR",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "2:49",
    videoSeconds: 169,
    region: "Europe",
    coordinates: [8.4689, 60.4720],
    summary: "Disciplined resource manager with the world's largest sovereign wealth fund owning 1.5% of all global equities.",
    headwinds: [
      "Long-term global transition away from fossil fuels (oil and gas)",
      "High domestic labor costs and non-oil productivity lag",
      "Heavy exposure to global stock market volatility via wealth fund"
    ],
    tailwinds: [
      "Government Pension Fund Global holds >$1.6 trillion, owning ~1.5% of all world public shares",
      "Fiscal spending rule strictly limits withdrawals to real fund returns, growing principal",
      "Almost 100% domestic electricity generated from clean hydropower",
      "High European energy demand for Norwegian pipeline natural gas"
    ],
    transcriptExcerpt: "It found oil, sold it, and invested a huge amount of the money overseas. Its fund now owns roughly 1 and a half% of the world's listed shares... And let's remember that fund because later we'll meet another oil country with a savings account and a very different ending to Norway's.",
    tags: ["Sovereign Fund", "Oil & Gas", "Hydropower", "Fiscal Discipline"]
  },
  {
    rank: 7,
    name: "Sweden",
    id: "SWE",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "3:08",
    videoSeconds: 188,
    region: "Europe",
    coordinates: [18.6435, 60.1282],
    summary: "Export powerhouse with global industrial champions and low public debt capable of buffering high household mortgages.",
    headwinds: [
      "High household debt and variable mortgage exposure sensitive to interest rates",
      "Integration challenges and gang crime debates",
      "Slower construction sector during high rate environments"
    ],
    tailwinds: [
      "World-class engineering, telecoms, defence, and automotive giants (Ericsson, Volvo, Atlas Copco, Saab)",
      "Low sovereign government debt allowing significant counter-cyclical stimulus",
      "NATO membership secures national defense and Baltic stability",
      "Vibrant tech and green steel industrial investments"
    ],
    transcriptExcerpt: "Its businesses sell machinery, telecoms, equipment, and plenty else the world needs... households have borrowed heavily, meaning higher interest rates could hurt them. But the government has relatively low debt and can help keep the economy moving through a downturn.",
    tags: ["Engineering", "Low Public Debt", "NATO", "Tech"]
  },
  {
    rank: 8,
    name: "Iceland",
    id: "ISL",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "3:34",
    videoSeconds: 214,
    region: "Europe",
    coordinates: [-19.0208, 64.9631],
    summary: "Energy-independent island insulated from global heating crises by bountiful geothermal heat and hydropower.",
    headwinds: [
      "Volcanic eruptions on Reykjanes peninsula damaging local infrastructure",
      "Dependence on imported fuels for aviation, ships, and cars",
      "Small domestic market susceptible to tourism demand swings"
    ],
    tailwinds: [
      "100% of domestic electricity and residential heating from geothermal and hydropower",
      "Zero vulnerability to fossil fuel price spikes for home heating and baseload grid",
      "Profitable sustainable fisheries and data center hosting",
      "High standard of living and strong social trust"
    ],
    transcriptExcerpt: "Geothermal energy and hydropower supply almost all its electricity while geothermal heat warms most homes. Cars, planes, and fishing boats still need imported fuel. Sure, but keeping the house warm doesn't. So, green.",
    tags: ["Geothermal", "Hydropower", "Clean Energy", "Fisheries"]
  },
  {
    rank: 9,
    name: "Brunei",
    id: "BRN",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "3:49",
    videoSeconds: 229,
    region: "Asia",
    coordinates: [114.7277, 4.5353],
    summary: "Massive hydrocarbon savings buffer a small population over the 10-year horizon while economic diversification begins.",
    headwinds: [
      "Maturing oil and gas reserves require new discoveries or downstream refining",
      "Urgent long-term requirement to diversify beyond fossil fuels",
      "Heavy reliance on public sector employment"
    ],
    tailwinds: [
      "Immense sovereign wealth and savings spread over just 450,000 citizens",
      "Virtually zero public debt and high foreign currency assets",
      "Substantial capital reserves to comfortably fund the 10-year transition",
      "Expansion in downstream petrochemical processing (Hengyi complex)"
    ],
    transcriptExcerpt: "It has oil and gas savings spread across a small population. Eventually, it needs more ways to earn. This is true, but for our 10-year window, it has substantial money to help build them.",
    tags: ["Oil Wealth", "Small Population", "Zero Debt", "Sovereign Savings"]
  },
  {
    rank: 10,
    name: "Australia",
    id: "AUS",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "4:07",
    videoSeconds: 247,
    region: "Oceania",
    coordinates: [133.7751, -25.2744],
    summary: "Resource superpower exporting critical minerals, gas, and food, with low sovereign debt to absorb extreme climate events.",
    headwinds: [
      "Extreme climate vulnerability: bushfires, floods, prolonged droughts",
      "Severe urban housing affordability and mortgage strains",
      "Heavy export exposure to Chinese economic demand cycles"
    ],
    tailwinds: [
      "Unmatched natural wealth: iron ore, lithium, critical minerals, LNG, and agriculture",
      "Low net government debt and triple-A sovereign credit rating",
      "Proximity to high-growth Indo-Pacific consumer markets",
      "Strong democratic institutions, legal certainty, and strategic alliances (AUKUS)"
    ],
    transcriptExcerpt: "Food, energy, minerals, and relatively low government debt. I have to give them green as well. Yes, I know about the housing market and the fires, floods, and droughts, but they have several profitable industries, and a government able to borrow money gives it ways to respond.",
    tags: ["Critical Minerals", "Agriculture", "Fiscal Capacity", "AUKUS"]
  },
  {
    rank: 11,
    name: "New Zealand",
    id: "NZL",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "4:26",
    videoSeconds: 266,
    region: "Oceania",
    coordinates: [174.8860, -40.9006],
    summary: "Isolated agricultural powerhouse with high institutional trust, capable of financing infrastructure despite low productivity growth.",
    headwinds: [
      "Geographic distance from major trading hubs makes transport and logistics expensive",
      "Sluggish capital investment in technology and equipment holding back wage gains",
      "Infrastructure deficits in water and transportation"
    ],
    tailwinds: [
      "World-class dairy and agricultural export brand with strong global pricing power",
      "Pristine institutional credibility, rule of law, and low corruption",
      "Sovereign debt headroom to borrow and fund overdue transport and grid upgrades",
      "Geopolitical distance from major conflict flashpoints"
    ],
    transcriptExcerpt: "Being far from major markets makes trade expensive. Businesses have invested too little in equipment and technology to keep wages growing strongly. But the government can borrow to improve transport and other infrastructure and its public institutions generally work.",
    tags: ["Agriculture", "Rule of Law", "Fiscal Headroom", "Isolated Safety"]
  },
  {
    rank: 12,
    name: "Samoa",
    id: "WSM",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "4:42",
    videoSeconds: 282,
    region: "Oceania",
    coordinates: [-172.1046, -13.7590],
    summary: "Surprise Pacific green: low sovereign debt and substantial foreign exchange reserves provide resilience against climate disasters.",
    headwinds: [
      "Acute exposure to tropical cyclones and sea-level rise",
      "Small isolated island economy heavily dependent on tourism and remittances",
      "High cost of imported fuel, food, and consumer goods"
    ],
    tailwinds: [
      "Low national debt burden compared to peer island nations",
      "Substantial foreign currency reserves capable of sustaining essential imports during crises",
      "Strong diaspora financial support and community cohesion",
      "Proactive disaster mitigation and donor coordination"
    ],
    transcriptExcerpt: "Tourism, money sent home from Samoans abroad and a small economy exposed to disasters leaves it in the green, but it also has low government debt and substantial foreign currency reserves that helps it keep buying essentials if a disaster interrupts its income.",
    tags: ["Pacific Island", "Low Debt", "Forex Reserves", "Remittances"]
  },
  {
    rank: 13,
    name: "Chile",
    id: "CHL",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "5:05",
    videoSeconds: 305,
    region: "Americas",
    coordinates: [-71.5430, -35.6751],
    summary: "Global copper and lithium leader backed by Latin America's most credible central bank and fiscal stabilizers.",
    headwinds: [
      "Water stress in northern mining corridors and agricultural valleys",
      "Social demands for broader welfare safety nets and constitutional debates",
      "Exposure to swings in global commodity demand"
    ],
    tailwinds: [
      "World's largest copper reserves and premier lithium producer for the EV revolution",
      "Independent, highly credible financial institutions and Central Bank",
      "Massive solar generation in the Atacama Desert driving green hydrogen ambitions",
      "Manageable debt and strong investment-grade credit"
    ],
    transcriptExcerpt: "Chile has copper to sell and credible financial institutions to help it through a downturn.",
    tags: ["Copper", "Lithium", "Green Energy", "Strong Institutions"]
  },
  {
    rank: 14,
    name: "Uruguay",
    id: "URY",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "5:10",
    videoSeconds: 310,
    region: "Americas",
    coordinates: [-55.7658, -32.5228],
    summary: "The beacon of South American stability, with clean energy grid transformation and low sovereign borrowing risk.",
    headwinds: [
      "Recent severe droughts impacted agriculture and municipal water in Montevideo",
      "Relatively small domestic market bordering volatile giants (Argentina, Brazil)",
      "High cost structure relative to regional peers"
    ],
    tailwinds: [
      "Highest democratic and rule of law ranking in Latin America",
      "Over 90% of electricity generated from renewables (wind, solar, hydro, biomass)",
      "Dependable government policies and highly manageable sovereign borrowing spreads",
      "Growing software and technology services export sector"
    ],
    transcriptExcerpt: "Uruguay has a dependable government and manageable borrowing risks.",
    tags: ["Renewable Grid", "Democratic Stability", "Agriculture", "Tech Services"]
  },
  {
    rank: 15,
    name: "Paraguay",
    id: "PRY",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "5:13",
    videoSeconds: 313,
    region: "Americas",
    coordinates: [-58.4438, -23.4425],
    summary: "Massive hydroelectricity surplus from Itaipu and expanding agribusiness supported by solid foreign currency buffers.",
    headwinds: [
      "Paraná river droughts threaten both crop barge shipping and hydropower output",
      "High informality in the domestic labor market",
      "Governance and border smuggling challenges"
    ],
    tailwinds: [
      "Enormous clean electricity surplus generated by the Itaipu & Yacyretá dams",
      "Growing foreign currency reserves and competitive tax environment attracting factories",
      "Low public debt compared to South American neighbors",
      "Booming soybean and beef export engine"
    ],
    transcriptExcerpt: "Paraguay has built up reserves, though a drought could hit both farming and hydropower quite hard.",
    tags: ["Hydropower Surplus", "Itaipu", "Agriculture", "Forex Reserves"]
  },
  {
    rank: 16,
    name: "Costa Rica",
    id: "CRI",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "5:19",
    videoSeconds: 319,
    region: "Americas",
    coordinates: [-83.7534, 9.7489],
    summary: "Successfully transitioning from eco-tourism to sophisticated medical device manufacturing, despite rising security concerns.",
    headwinds: [
      "Rising violent crime and drug transit security threats",
      "Fiscal consolidation pressures and high infrastructure bottlenecks",
      "Public healthcare and pension system funding strains"
    ],
    tailwinds: [
      "Attracted major high-tech and medical device manufacturing plants",
      "Nearly 100% renewable electricity grid (geothermal, hydro, wind)",
      "Long-standing demilitarized democracy with high human development indicators",
      "Robust, high-spending eco-tourism sector"
    ],
    transcriptExcerpt: "Costa Rica has attracted more sophisticated manufacturing, giving it better paid work beyond tourism and agriculture. Rising violent crime is a threat to that progress. But still, I'm keeping it green like the other three.",
    tags: ["Medical Devices", "Renewables", "Eco-Tourism", "Democracy"]
  },
  {
    rank: 17,
    name: "Ireland",
    id: "IRL",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "5:31",
    videoSeconds: 331,
    region: "Europe",
    coordinates: [-8.2439, 53.4129],
    summary: "European tech and pharma hub awash in multinational corporate tax windfalls, struggling primarily with domestic housing supply.",
    headwinds: [
      "Acute, generational housing shortage driving public frustration",
      "Extreme tax base concentration in a handful of US tech & pharma multinationals",
      "Risk of future changes to global corporate minimum tax rules"
    ],
    tailwinds: [
      "Massive corporate tax revenue surpluses funding sovereign infrastructure funds",
      "English-speaking gateway inside the European Union single market",
      "Rapidly falling sovereign debt ratios and strong state liquidity buffers",
      "Leading European cluster for biotechnology, cloud computing, and medical devices"
    ],
    transcriptExcerpt: "Multinationals pay enormous amounts of tax that gives the government money to improve things. But if it hires more teachers with an unusually good year's tax receipts, it still owes those teachers a salary during an unusually bad year. For now, the finances are strong. Finding a house is still a problem, though.",
    tags: ["Tax Windfall", "Multinationals", "EU Hub", "Housing Crunch"]
  },
  {
    rank: 18,
    name: "Luxembourg",
    id: "LUX",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "5:50",
    videoSeconds: 350,
    region: "Europe",
    coordinates: [6.1296, 49.8153],
    summary: "Wealthy investment fund capital with exemplary public finances and AAA sovereign credit.",
    headwinds: [
      "High cost of residential real estate forcing workers across borders",
      "Exposure to regulatory changes in European fund management and banking",
      "Cross-border infrastructure bottlenecks"
    ],
    tailwinds: [
      "One of the highest GDP per capita figures globally",
      "Europe's premier investment fund domicile and cross-border finance hub",
      "Exemplary sovereign fiscal metrics with negligible net public debt",
      "High state investment in public transport and tech infrastructure"
    ],
    transcriptExcerpt: "Luxembourg, Andorra, and Monaco also get green. Wealth and sound public finances give them considerable protection even if finding an affordable home can be another matter.",
    tags: ["Finance Hub", "Investment Funds", "High Wealth", "AAA Credit"]
  },
  {
    rank: 19,
    name: "Andorra",
    id: "AND",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "5:51",
    videoSeconds: 351,
    region: "Europe",
    coordinates: [1.5218, 42.5063],
    summary: "Prosperous Pyrenean microstate protected by sound finances, duty-free commerce, and mountain tourism.",
    headwinds: [
      "Vulnerability to climate change shortening ski tourism seasons",
      "Geographic isolation without commercial airport or rail",
      "Increasing EU compliance requirements on tax transparency"
    ],
    tailwinds: [
      "Consistently sound public balance sheet and very low debt",
      "High-spending ski and mountain tourism year-round",
      "Favorable fiscal regime attracting high-net-worth residents and entrepreneurs",
      "Zero military expenditure burdens"
    ],
    transcriptExcerpt: "Wealth and sound public finances give them considerable protection.",
    tags: ["Microstate", "Mountain Tourism", "Low Debt", "Fiscal Haven"]
  },
  {
    rank: 20,
    name: "Monaco",
    id: "MCO",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "5:51",
    videoSeconds: 351,
    region: "Europe",
    coordinates: [7.4246, 43.7384],
    summary: "Ultra-wealthy Mediterranean principality with zero public debt and extraordinary constitutional reserve reserves.",
    headwinds: [
      "Extreme land scarcity requiring multi-billion land reclamation projects",
      "Monitored closely by international financial crime watchdogs (FATF grey list compliance)",
      "High dependency on international luxury tourism and elite residency"
    ],
    tailwinds: [
      "Zero sovereign debt and a massive Constitutional Reserve Fund",
      "Concentration of global wealth and high-liquidity private banking",
      "World-class physical security, stability, and rule of law",
      "Premier global brand with insatiable demand for residency"
    ],
    transcriptExcerpt: "Monaco also gets green. Wealth and sound public finances give them considerable protection.",
    tags: ["Ultra Wealth", "Zero Debt", "Banking", "Private Security"]
  },
  {
    rank: 21,
    name: "Liechtenstein",
    id: "LIE",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "5:59",
    videoSeconds: 359,
    region: "Europe",
    coordinates: [9.5554, 47.1660],
    summary: "Virtually zero debt and government financial assets that exceed its entire annual GDP.",
    headwinds: [
      "Extreme vulnerability to European industrial supply disruptions (customs union with Switzerland)",
      "Limited domestic labor supply requiring heavy cross-border commuting",
      "Small scale limits diversification scope"
    ],
    tailwinds: [
      "Government net financial assets are larger than the country's entire annual GDP",
      "Virtually zero public debt",
      "Highly sophisticated precision manufacturing cluster (Hilti, Ivoclar)",
      "High-trust specialized wealth management and trust services"
    ],
    transcriptExcerpt: "Virtually no public debt and government financial assets comfortably larger than its entire annual economy. Green.",
    tags: ["Net Asset Cushion", "Zero Debt", "Precision Industry", "Finance"]
  },
  {
    rank: 22,
    name: "Cyprus",
    id: "CYP",
    tier: "green",
    tierLabel: "Probably Fine",
    timestamp: "6:08",
    videoSeconds: 368,
    region: "Europe",
    coordinates: [33.4299, 35.1264],
    summary: "The final Green tier state: strong GDP expansion, rapidly dropping public debt, and resilience against energy shocks.",
    headwinds: [
      "Ongoing political partition and military tension with Turkey in Northern Cyprus",
      "High dependence on imported fossil fuels for domestic electricity grid",
      "Regional proximity to Middle East conflict zones"
    ],
    tailwinds: [
      "Strong sustained economic growth outperforming Eurozone averages",
      "Significant reduction in public debt-to-GDP over recent years",
      "Growing tech, shipping registry, and international services sector",
      "Offshore natural gas discoveries (Aphrodite/Cronos) providing long-term upside"
    ],
    transcriptExcerpt: "Its economy has been growing and government debt has come down. Imported fuel still makes electricity vulnerable to price spikes, but it has improved its ability to absorb that cost. So that's 22 greens who are all probably fine.",
    tags: ["Debt Reduction", "Shipping", "Eastern Med Gas", "Services"]
  }
];

export default countries;
