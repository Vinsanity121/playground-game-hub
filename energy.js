// Energy Collector — the energy-themed idle game.
const sunBuildings = [
  { id: 'bonfire', name: 'Bonfire', icon: '✹', description: 'A tiny flame. The start of a brighter world.', baseCost: 15, rate: 1, unlockAt: 0 },
  { id: 'steam', name: 'Steam Engine', icon: '◖', description: 'Turn heat and water into steady motion.', baseCost: 100, rate: 5, unlockAt: 25 },
  { id: 'waterwheel', name: 'Waterwheel', icon: '◉', description: 'Let a flowing river spin the grid.', baseCost: 1100, rate: 30, unlockAt: 150 },
  { id: 'wind', name: 'Wind Turbine', icon: '✦', description: 'Catch the wind high above the hills.', baseCost: 12000, rate: 140, unlockAt: 2000 },
  { id: 'coal', name: 'Coal Power Plant', icon: '◆', description: 'A smoky giant with a dependable output.', baseCost: 140000, rate: 650, unlockAt: 30000 },
  { id: 'solar', name: 'Solar Farm', icon: '☼', description: 'A field of panels drinks in the daylight.', baseCost: 2000000, rate: 2900, unlockAt: 400000 },
  { id: 'hydro', name: 'Hydroelectric Dam', icon: '≈', description: 'Store a river behind a wall of power.', baseCost: 40000000, rate: 14000, unlockAt: 8000000 },
  { id: 'geothermal', name: 'Geothermal Station', icon: '⌁', description: 'Tap the heat hidden under the crust.', baseCost: 1200000000, rate: 70000, unlockAt: 450000000 },
  { id: 'market', name: 'Energy Exchange', icon: '▥', description: 'Trade power where the grid meets the market.', baseCost: 32000000000, rate: 350000, unlockAt: 30000000000 },
  { id: 'fission', name: 'Fission Reactor', icon: '⊕', description: 'Split atoms to release enormous energy.', baseCost: 650000000000, rate: 1700000, unlockAt: 2000000000000 },
  { id: 'tidal', name: 'Tidal Generator', icon: '∿', description: 'Harvest the pull of oceans and moons.', baseCost: 14000000000000, rate: 9000000, unlockAt: 100000000000000 },
  { id: 'fusion', name: 'Fusion Reactor', icon: '✳', description: 'Bottle a star and keep it under control.', baseCost: 250000000000000, rate: 48000000, unlockAt: 1000000000000000 },
  { id: 'orbital', name: 'Orbital Solar Array', icon: '◎', description: 'Collect sunlight above the clouds.', baseCost: 5000000000000000, rate: 260000000, unlockAt: 20000000000000000 },
  { id: 'antimatter', name: 'Antimatter Reactor', icon: '◇', description: 'Turn a tiny collision into a huge pulse.', baseCost: 100000000000000000, rate: 1400000000, unlockAt: 200000000000000000 },
  { id: 'dyson', name: 'Dyson Swarm', icon: '◍', description: 'Surround a star with a harvesting network.', baseCost: 2000000000000000000, rate: 7800000000, unlockAt: 2000000000000000000 },
  { id: 'vacuum', name: 'Vacuum Energy Extractor', icon: '∅', description: 'Find usable power in empty space.', baseCost: 40000000000000000000, rate: 48000000000, unlockAt: 20000000000000000000 },
  { id: 'blackhole', name: 'Black Hole Generator', icon: '●', description: 'Draw power from the edge of an event horizon.', baseCost: 900000000000000000000, rate: 300000000000, unlockAt: 200000000000000000000 },
  { id: 'galactic', name: 'Galactic Core Harvester', icon: '✺', description: 'Collect the combined output of a galaxy.', baseCost: 20000000000000000000000, rate: 1800000000000, unlockAt: 2000000000000000000000 },
  { id: 'universe', name: 'Universe Engine', icon: '∞', description: 'Run a power plant at the scale of everything.', baseCost: 400000000000000000000000, rate: 10000000000000, unlockAt: 20000000000000000000000 },
  { id: 'reality', name: 'Reality Forge', icon: 'ϟ', description: 'Shape a new universe from raw energy.', baseCost: 8000000000000000000000000, rate: 60000000000000, unlockAt: 200000000000000000000000 },
];

const sunResearch = [
  { id: 'lightning_rod', name: 'Lightning Rod', icon: 'ϟ', description: 'Guide the charge. Click power ×2.', cost: 50, unlockLifetime: 25, kind: 'click', multiplier: 2 },
  { id: 'conductor_coils', name: 'Conductor Coils', icon: '⌁', description: 'Carry more current. Click power ×3.', cost: 1000, unlockLifetime: 750, kind: 'click', multiplier: 3 },
  { id: 'capacitor_bank', name: 'Capacitor Bank', icon: '▤', description: 'Store charge for a bigger strike. Click power ×4.', cost: 25000, unlockLifetime: 15000, kind: 'click', multiplier: 4 },
  { id: 'arc_amplifier', name: 'Arc Amplifier', icon: 'ϟ', description: 'Turn a spark into a controlled blast. Click power ×10.', cost: 2000000, unlockLifetime: 1000000, kind: 'click', multiplier: 10 },
  ...sunBuildings.flatMap((building, index) => [
    { id: `${building.id}_circuit`, name: `${building.name} Circuit`, icon: building.icon, description: `Double ${building.name} output.`, cost: building.baseCost * 50, unlockBuilding: building.id, amount: 10, kind: 'building', building: building.id, multiplier: 2 },
    { id: `${building.id}_overdrive`, name: `${building.name} Overdrive`, icon: '✦', description: `Triple ${building.name} output.`, cost: building.baseCost * 500, unlockBuilding: building.id, amount: 25, kind: 'building', building: building.id, multiplier: 3 },
  ]),
  { id: 'grid_awakening', name: 'Grid Awakening', icon: '◉', description: 'Research a sentient grid. It attracts energy-leeching Flux Leeches.', cost: 10000000000, unlockLifetime: 1000000000, kind: 'awakening' },
];

const sunMilestones = [
  { id: 'first_light', icon: '✦', name: 'First Spark', detail: 'Collect your first unit of energy.', check: () => sunSave.lifetime >= 1 },
  { id: 'click_happy', icon: 'ϟ', name: 'Live Wire', detail: 'Strike the core 100 times.', check: () => sunSave.clicks >= 100 },
  { id: 'bonfire', icon: '✹', name: 'Fire Starter', detail: 'Build your first Bonfire.', check: () => sunSave.buildings.bonfire >= 1 },
  { id: 'steam', icon: '◖', name: 'Age of Steam', detail: 'Build your first Steam Engine.', check: () => sunSave.buildings.steam >= 1 },
  { id: 'builder', icon: '◆', name: 'Grid Builder', detail: 'Own 25 power stations.', check: () => Object.values(sunSave.buildings).reduce((sum, count) => sum + count, 0) >= 25 },
  { id: 'wind', icon: '✦', name: 'Catch the Wind', detail: 'Build your first Wind Turbine.', check: () => sunSave.buildings.wind >= 1 },
  { id: 'fusion', icon: '✳', name: 'Pocket Star', detail: 'Build your first Fusion Reactor.', check: () => sunSave.buildings.fusion >= 1 },
  { id: 'dark_matter', icon: '●', name: 'Point of No Return', detail: 'Build a Black Hole Generator.', check: () => sunSave.buildings.blackhole >= 1 },
  { id: 'surge_chaser', icon: '⚡', name: 'Surge Chaser', detail: 'Capture an Energy Surge.', check: () => sunSave.flares >= 1 },
  { id: 'million_energy', icon: 'ϟ', name: 'A Million Volts', detail: 'Collect one million lifetime energy.', check: () => sunSave.lifetime >= 1000000 },
  { id: 'billion_energy', icon: '◆', name: 'Grid at Scale', detail: 'Collect one billion lifetime energy.', check: () => sunSave.lifetime >= 1000000000 },
  { id: 'first_reboot', icon: '↻', name: 'New Power Age', detail: 'Reboot the grid and earn a Legacy Watt.', check: () => sunSave.ascensions >= 1 },
  { id: 'legacy_collector', icon: '✧', name: 'Legacy Collector', detail: 'Gather 10 Legacy Watts.', check: () => sunSave.shards >= 10 },
  { id: 'infinite_energy', icon: '∞', name: 'Beyond the Grid', detail: 'Collect one trillion lifetime energy.', check: () => sunSave.lifetime >= 1000000000000 },
];

const SUN_SAVE_KEY = 'playground-sun-clicker-v1';
const LEGACY_BUILDING_MAP = { bonfire: 'moon', steam: 'planet', waterwheel: 'asteroid', wind: 'star', coal: 'nebula', solar: 'blackhole', hydro: 'galaxy', geothermal: 'cluster', market: 'dyson', fission: 'quasar' };
const LEGACY_RESEARCH_MAP = { solar_lens: 'lightning_rod', amber_glass: 'conductor_coils', fusion_tap: 'capacitor_bank', nova_pulse: 'arc_amplifier', lunar_mining: 'bonfire_circuit', planetary_cores: 'steam_circuit', belt_resonance: 'waterwheel_circuit', stellar_fusion: 'wind_circuit', nebula_mapping: 'coal_circuit', hawking_radiation: 'solar_circuit', spiral_arms: 'hydro_circuit', cluster_lensing: 'geothermal_circuit', stellar_engineering: 'market_circuit', quasar_beam: 'fission_circuit' };
const LEGACY_MILESTONE_MAP = { moon_landing: 'bonfire', planetary: 'steam', red_giant: 'wind', galactic: 'fusion', flare_chaser: 'surge_chaser', million_lights: 'million_energy', universe: 'billion_energy', big_bang: 'first_reboot', shard_collector: 'legacy_collector', everything: 'infinite_energy' };
const sunBuildingList = document.querySelector('#sun-building-list');
const sunResearchList = document.querySelector('#sun-research-list');
const sunAchievementList = document.querySelector('#sun-achievement-list');
const sunCore = document.querySelector('#sun-core');
const sunScene = document.querySelector('#sun-scene');
const sunFlare = document.querySelector('#sun-flare');
const sunToast = document.querySelector('#sun-toast');
const sunBalanceDisplay = document.querySelector('#sun-balance');
const sunRateDisplay = document.querySelector('#sun-rate');
const sunTopRateDisplay = document.querySelector('#sun-top-rate');
const sunTopLifetimeDisplay = document.querySelector('#sun-top-lifetime');
const sunClickPowerDisplay = document.querySelector('#sun-click-power');
const sunProgress = document.querySelector('#sun-progress');
const sunSaveStatus = document.querySelector('#sun-save-status');
const sunPanels = document.querySelectorAll('[data-sun-panel]');
const buyModes = document.querySelectorAll('[data-buy-mode]');
const sunNameDialog = document.querySelector('#sun-name-dialog');
const sunNameInput = document.querySelector('#sun-name-input');
const sunDevPanel = document.querySelector('#sun-dev-panel');
const sunLeechLayer = document.querySelector('#sun-leech-layer');
const sunGardenGrid = document.querySelector('#sun-garden-grid');
const sunWeather = [
  { name: 'SOLAR FLARE', production: 1.04, click: 1.04 },
  { name: 'WINDFRONT', production: 1.1, click: 1 },
  { name: 'ECLIPSE', production: 1.02, click: 1.12 },
  { name: 'AURORA', production: 1.06, click: 1.06 },
  { name: 'METEOR SHOWER', production: 1.03, click: 1.02 },
];
const sunWeatherToday = sunWeather[Math.floor(Date.now() / 86400000) % sunWeather.length];
const sunSeedTypes = ['sparkbloom', 'wattgrass', 'staticfern'];
let sunSave = loadSunGame();
let sunBuyMode = '1';
let sunToastTimer;
let sunFlareTimer;
let sunPulseTimer;
let sunTicks = 0;
let sunLastTick = Date.now();
let sunMarketLastMove = Date.now();
let sunBuff = null;
let sunCurrentSurge = null;
let sunRenderedBuildingCount = -1;
let sunRenderedLeechCount = -1;

function createFreshSunSave() {
  return {
    balance: 0, lifetime: 0, runLifetime: 0, clicks: 0,
    buildings: Object.fromEntries(sunBuildings.map((building) => [building.id, 0])),
    levels: Object.fromEntries(sunBuildings.map((building) => [building.id, 0])),
    research: [], milestones: [], shards: 0, ascensions: 0, flares: 0,
    operatorName: 'New Operator', crystals: 0, crystalReadyAt: 0,
    garden: Array(9).fill(''), gardenHarvests: 0, controlMode: 'steady',
    marketShares: 0, marketPrice: 10, aura: 'steady', gridAwakening: false,
    leeches: [], leechNextAt: 0, lastSaved: Date.now(),
  };
}

function loadSunGame() {
  const fresh = createFreshSunSave();
  try {
    const saved = JSON.parse(localStorage.getItem(SUN_SAVE_KEY) || 'null');
    if (!saved || typeof saved !== 'object') return fresh;
    fresh.balance = Math.max(0, Number(saved.balance) || 0);
    fresh.lifetime = Math.max(0, Number(saved.lifetime) || 0);
    fresh.runLifetime = Math.max(0, Number(saved.runLifetime) || 0);
    fresh.clicks = Math.max(0, Math.floor(Number(saved.clicks) || 0));
    fresh.buildings = Object.fromEntries(sunBuildings.map((building) => {
      const migrated = Number(saved.buildings?.[LEGACY_BUILDING_MAP[building.id]]) || 0;
      return [building.id, Math.max(0, Math.floor(Number(saved.buildings?.[building.id]) || migrated))];
    }));
    fresh.levels = Object.fromEntries(sunBuildings.map((building) => [building.id, Math.max(0, Math.floor(Number(saved.levels?.[building.id]) || 0))]));
    fresh.research = Array.isArray(saved.research)
      ? [...new Set(saved.research.map((id) => LEGACY_RESEARCH_MAP[id] || id).filter((id) => sunResearch.some((item) => item.id === id)))]
      : [];
    fresh.milestones = Array.isArray(saved.milestones)
      ? [...new Set(saved.milestones.map((id) => LEGACY_MILESTONE_MAP[id] || id).filter((id) => sunMilestones.some((item) => item.id === id)))]
      : [];
    fresh.shards = Math.max(0, Math.floor(Number(saved.shards) || 0));
    fresh.ascensions = Math.max(0, Math.floor(Number(saved.ascensions) || 0));
    fresh.flares = Math.max(0, Math.floor(Number(saved.flares) || 0));
    fresh.operatorName = String(saved.operatorName || saved.name || 'New Operator').slice(0, 24);
    fresh.crystals = Math.max(0, Math.floor(Number(saved.crystals) || 0));
    fresh.crystalReadyAt = Math.max(0, Number(saved.crystalReadyAt) || 0);
    fresh.garden = Array.isArray(saved.garden) ? Array.from({ length: 9 }, (_, index) => sunSeedTypes.includes(saved.garden[index]) ? saved.garden[index] : '') : fresh.garden;
    fresh.gardenHarvests = Math.max(0, Math.floor(Number(saved.gardenHarvests) || 0));
    fresh.controlMode = ['steady', 'click', 'efficient'].includes(saved.controlMode) ? saved.controlMode : 'steady';
    fresh.marketShares = Math.max(0, Math.floor(Number(saved.marketShares) || 0));
    fresh.marketPrice = Math.max(1, Number(saved.marketPrice) || 10);
    fresh.aura = ['overdrive', 'steady', 'spark'].includes(saved.aura) ? saved.aura : 'steady';
    fresh.gridAwakening = Boolean(saved.gridAwakening);
    fresh.leeches = Array.isArray(saved.leeches) ? saved.leeches.slice(0, 10).map((leech) => ({ id: String(leech.id || Math.random()), bank: Math.max(0, Number(leech.bank) || 0) })) : [];
    fresh.leechNextAt = Math.max(0, Number(saved.leechNextAt) || 0);
    fresh.lastSaved = Math.max(0, Number(saved.lastSaved) || Date.now());
  } catch (error) {
    console.warn('Energy Collector save could not be read.', error);
  }
  return fresh;
}

function formatSunNumber(value) {
  if (!Number.isFinite(value)) return '∞';
  const amount = Math.max(0, value);
  if (amount >= 1e36) return amount.toExponential(2);
  if (amount < 1000) return amount < 10 && amount % 1 ? amount.toFixed(1) : Math.floor(amount).toLocaleString('en-US');
  const suffixes = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc'];
  const tier = Math.min(Math.floor(Math.log10(amount) / 3), suffixes.length - 1);
  const scaled = amount / (1000 ** tier);
  const digits = scaled < 10 ? 2 : scaled < 100 ? 1 : 0;
  return `${Number(scaled.toFixed(digits))}${suffixes[tier]}`;
}

function getSunGlobalMultiplier() {
  const gardenTiles = sunSave.garden.filter(Boolean).length;
  return (1 + sunSave.shards * 0.25) * (1 + sunSave.milestones.length * 0.02) * (1 + gardenTiles * 0.02) * sunWeatherToday.production;
}

function getSunBuildingMultiplier(id) {
  const upgrades = sunResearch
    .filter((item) => item.kind === 'building' && item.building === id && sunSave.research.includes(item.id))
    .reduce((multiplier, item) => multiplier * item.multiplier, 1);
  const level = 1 + (sunSave.levels[id] || 0) * 0.05;
  const buff = sunBuff?.type === 'building' && sunBuff.building === id && sunBuff.ends > Date.now() ? sunBuff.multiplier : 1;
  return upgrades * level * buff;
}

function getSunRawRate() {
  const baseRate = sunBuildings.reduce((sum, building) => sum + sunSave.buildings[building.id] * building.rate * getSunBuildingMultiplier(building.id), 0);
  const aura = sunSave.ascensions > 0 && sunSave.aura === 'steady' ? 1.15 : 1;
  const spell = sunBuff?.type === 'production' && sunBuff.ends > Date.now() ? sunBuff.multiplier : 1;
  return baseRate * getSunGlobalMultiplier() * aura * spell;
}

function getSunRate() {
  const controlMode = sunSave.controlMode === 'steady' ? 1.15 : sunSave.controlMode === 'click' ? 0.9 : 1.1;
  const leechDrain = Math.min(0.5, sunSave.leeches.length * 0.05);
  return getSunRawRate() * controlMode * (1 - leechDrain);
}

function getSunClickPower() {
  const researchMultiplier = sunResearch.filter((item) => item.kind === 'click' && sunSave.research.includes(item.id)).reduce((multiplier, item) => multiplier * item.multiplier, 1);
  const mode = sunSave.controlMode === 'click' ? 1.25 : sunSave.controlMode === 'steady' ? 0.9 : 1.1;
  const aura = sunSave.ascensions > 0 && sunSave.aura === 'overdrive' ? 1.25 : 1;
  const buff = sunBuff?.type === 'click' && sunBuff.ends > Date.now() ? sunBuff.multiplier : 1;
  const garden = 1 + sunSave.garden.filter((seed) => seed === 'wattgrass').length * 0.02;
  return researchMultiplier * getSunGlobalMultiplier() * mode * aura * buff * garden * sunWeatherToday.click;
}

function getSunBuildingPrice(building, owned = sunSave.buildings[building.id]) {
  return building.baseCost * (1.15 ** owned);
}

function getSunBulkPrice(building, amount) {
  if (!amount) return 0;
  const firstPrice = getSunBuildingPrice(building);
  return Math.ceil(firstPrice * ((1.15 ** amount - 1) / 0.15));
}

function getSunBuyAmount(building) {
  if (sunBuyMode !== 'max') return Number(sunBuyMode);
  const firstPrice = getSunBuildingPrice(building);
  let amount = Math.min(10000, Math.max(0, Math.floor(Math.log1p((sunSave.balance * 0.15) / firstPrice) / Math.log(1.15))));
  while (amount > 0 && getSunBulkPrice(building, amount) > sunSave.balance) amount -= 1;
  while (amount < 10000 && getSunBulkPrice(building, amount + 1) <= sunSave.balance) amount += 1;
  return amount;
}

function getSunResearchStatus(item) {
  if (sunSave.research.includes(item.id)) return { owned: true, unlocked: true, affordable: false };
  const unlocked = item.kind === 'awakening'
    ? sunSave.lifetime >= item.unlockLifetime
    : item.unlockLifetime !== undefined ? sunSave.lifetime >= item.unlockLifetime : sunSave.buildings[item.unlockBuilding] >= item.amount;
  return { owned: false, unlocked, affordable: unlocked && sunSave.balance >= item.cost };
}

function getSunAscendGain() {
  return Math.floor(Math.sqrt(sunSave.runLifetime / 10000000));
}

function getUnlockedSunBuildings() {
  return sunBuildings.filter((building) => sunSave.lifetime >= building.unlockAt);
}

function renderSunBuildings() {
  const unlocked = getUnlockedSunBuildings();
  const locked = sunBuildings.slice(unlocked.length, unlocked.length + 3);
  const rows = unlocked.map((building) => `
    <article class="sun-building-row" data-building-row="${building.id}">
      <span class="building-icon" aria-hidden="true">${building.icon}</span>
      <div class="building-main">
        <div class="building-title-line"><h3>${building.name}</h3><span class="building-owned" data-building-owned="${building.id}">0</span></div>
        <p>${building.description}</p>
        <span class="building-rate" data-building-rate="${building.id}">+${formatSunNumber(building.rate)} / sec each</span>
      </div>
      <button class="building-buy" type="button" data-buy-building="${building.id}"><strong data-building-cost="${building.id}">${formatSunNumber(building.baseCost)}</strong><small data-building-label="${building.id}">BUY ×1</small></button>
    </article>`).join('');
  const silhouettes = locked.map((_, index) => `
    <div class="sun-building-silhouette silhouette-${index + 1}" aria-label="Locked future power station">
      <span class="silhouette-icon" aria-hidden="true">${['◖', '✦', '◉'][index]}</span><span class="silhouette-name">???</span><span class="silhouette-lock" aria-hidden="true">◆</span>
    </div>`).join('');
  sunBuildingList.innerHTML = `${rows}<div class="future-heading"><span>THE NEXT DISCOVERIES</span><small>${locked.length} AHEAD</small></div><div class="future-stations">${silhouettes || '<span class="all-discovered">ALL STATIONS DISCOVERED</span>'}</div>`;
  sunRenderedBuildingCount = unlocked.length;
}

function renderSunResearch() {
  sunResearchList.innerHTML = sunResearch.map((item) => `
    <article class="sun-research-card locked" data-research-card="${item.id}">
      <span class="research-icon" aria-hidden="true">${item.icon}</span>
      <div class="research-copy"><h3>${item.name}</h3><p>${item.description}</p><span class="research-cost" data-research-cost="${item.id}">${formatSunNumber(item.cost)} energy</span></div>
      <button class="research-buy" type="button" data-buy-research="${item.id}" aria-label="Research ${item.name}">Locked</button>
    </article>`).join('');
}

function renderSunMilestones() {
  sunAchievementList.innerHTML = sunMilestones.map((item) => `
    <article class="achievement-card" data-achievement="${item.id}">
      <span aria-hidden="true">${item.icon}</span><h3>${item.name}</h3><p>${item.detail}</p>
    </article>`).join('');
}

function renderSunGarden() {
  sunGardenGrid.innerHTML = sunSave.garden.map((seed, index) => `<button type="button" class="garden-cell ${seed ? 'planted' : ''}" data-garden-cell="${index}" aria-label="${seed ? `Harvest ${seed}` : 'Plant a seed'}">${seed ? (seed === 'sparkbloom' ? '✦' : seed === 'wattgrass' ? '❋' : '⌁') : '+'}</button>`).join('');
}

function refreshSunBuildings() {
  getUnlockedSunBuildings().forEach((building) => {
    const row = sunBuildingList.querySelector(`[data-building-row="${building.id}"]`);
    if (!row) return;
    const owned = sunSave.buildings[building.id];
    const amount = getSunBuyAmount(building);
    const cost = amount ? getSunBulkPrice(building, amount) : getSunBuildingPrice(building);
    const affordable = amount > 0 && cost <= sunSave.balance;
    row.querySelector(`[data-building-owned="${building.id}"]`).textContent = formatSunNumber(owned);
    row.querySelector(`[data-building-cost="${building.id}"]`).textContent = formatSunNumber(cost);
    row.querySelector(`[data-building-label="${building.id}"]`).textContent = amount ? `BUY ×${formatSunNumber(amount)}` : 'CAN’T AFFORD';
    row.querySelector(`[data-buy-building="${building.id}"]`).disabled = !affordable;
    row.querySelector(`[data-buy-building="${building.id}"]`).setAttribute('aria-label', `Buy ${amount || 1} ${building.name} for ${formatSunNumber(cost)} energy`);
    row.classList.toggle('affordable', affordable);
    const production = owned * building.rate * getSunBuildingMultiplier(building.id) * getSunGlobalMultiplier();
    row.querySelector(`[data-building-rate="${building.id}"]`).textContent = `+${formatSunNumber(production)} / sec total`;
  });
}

function refreshSunResearch() {
  let ready = false;
  sunResearch.forEach((item) => {
    const card = sunResearchList.querySelector(`[data-research-card="${item.id}"]`);
    if (!card) return;
    const button = card.querySelector(`[data-buy-research="${item.id}"]`);
    const status = getSunResearchStatus(item);
    const requiredBuilding = sunBuildings.find((building) => building.id === item.unlockBuilding);
    const requirement = item.unlockLifetime !== undefined
      ? `Unlocks at ${formatSunNumber(item.unlockLifetime)} lifetime energy`
      : `Requires ${item.amount} ${requiredBuilding?.name || 'stations'}`;
    card.classList.toggle('locked', !status.unlocked && !status.owned);
    card.classList.toggle('affordable', status.affordable);
    card.querySelector(`[data-research-cost="${item.id}"]`).textContent = status.owned ? 'RESEARCH COMPLETE' : status.unlocked ? `${formatSunNumber(item.cost)} energy` : requirement;
    button.textContent = status.owned ? 'DONE' : status.unlocked ? 'RESEARCH' : 'LOCKED';
    button.disabled = !status.affordable;
    button.setAttribute('aria-label', status.owned ? `${item.name} researched` : `${status.unlocked ? 'Research' : 'Locked'}: ${item.name}`);
    if (status.affordable) ready = true;
  });
  document.querySelector('#sun-research-ready').hidden = !ready;
}

function refreshSunMilestones() {
  document.querySelector('#sun-milestone-count').textContent = sunSave.milestones.length;
  document.querySelector('#sun-milestone-total').textContent = sunSave.milestones.length;
  sunMilestones.forEach((item) => {
    const card = sunAchievementList.querySelector(`[data-achievement="${item.id}"]`);
    if (card) card.classList.toggle('unlocked', sunSave.milestones.includes(item.id));
  });
}

function isSunMinigameUnlocked(id) {
  const required = { garden: 'solar', pantheon: 'hydro', grimoire: 'fusion', market: 'market' }[id];
  return Boolean(sunSave.buildings[required] > 0);
}

function formatSunCountdown(milliseconds) {
  const total = Math.max(0, Math.ceil(milliseconds / 1000));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function ensureCrystalTimer() {
  if (sunSave.lifetime >= 1000000000 && !sunSave.crystalReadyAt) sunSave.crystalReadyAt = Date.now() + 86400000;
}

function refreshSunGridLab() {
  ensureCrystalTimer();
  const now = Date.now();
  const crystalStatus = document.querySelector('#sun-crystal-status');
  const crystalClaim = document.querySelector('#sun-crystal-claim');
  const crystalReady = sunSave.crystalReadyAt > 0 && now >= sunSave.crystalReadyAt;
  document.querySelector('#sun-crystal-count').textContent = formatSunNumber(sunSave.crystals);
  if (sunSave.lifetime < 1000000000) crystalStatus.textContent = 'Unlocks at 1 billion lifetime energy';
  else if (crystalReady) crystalStatus.textContent = 'A Core Crystal is ready to collect';
  else crystalStatus.textContent = `Next crystal in ${formatSunCountdown(sunSave.crystalReadyAt - now)}`;
  crystalClaim.disabled = !crystalReady;
  crystalClaim.textContent = crystalReady ? 'Collect Core Crystal' : '24-hour charge';

  const levelSelect = document.querySelector('#sun-crystal-building');
  const selected = levelSelect.value;
  const choices = sunBuildings.filter((building) => sunSave.buildings[building.id] > 0);
  levelSelect.innerHTML = choices.length
    ? choices.map((building) => `<option value="${building.id}">${building.name} · level ${sunSave.levels[building.id] || 0}</option>`).join('')
    : '<option value="">Own a station first</option>';
  if (choices.some((building) => building.id === selected)) levelSelect.value = selected;
  document.querySelector('#sun-crystal-level').disabled = sunSave.crystals < 1 || !choices.length;

  document.querySelectorAll('[data-minigame]').forEach((card) => {
    const id = card.dataset.minigame;
    const unlocked = isSunMinigameUnlocked(id);
    card.classList.toggle('minigame-locked', !unlocked);
    card.querySelector(`[data-game-unlock="${id}"]`).textContent = unlocked ? 'ONLINE' : 'LOCKED';
  });
  document.querySelectorAll('[data-control-mode]').forEach((button) => {
    button.classList.toggle('selected', sunSave.controlMode === button.dataset.controlMode);
    button.disabled = !isSunMinigameUnlocked('pantheon');
  });
  sunGardenGrid.querySelectorAll('[data-garden-cell]').forEach((button) => {
    const index = Number(button.dataset.gardenCell);
    const seed = sunSave.garden[index];
    button.classList.toggle('planted', Boolean(seed));
    button.textContent = seed ? (seed === 'sparkbloom' ? '✦' : seed === 'wattgrass' ? '❋' : '⌁') : '+';
    button.disabled = !isSunMinigameUnlocked('garden') || Boolean(seed);
    button.setAttribute('aria-label', seed ? `Harvest ${seed}` : 'Plant a seed');
  });
  const plants = sunSave.garden.filter(Boolean).length;
  document.querySelector('#sun-garden-harvest').disabled = !isSunMinigameUnlocked('garden') || plants === 0;
  document.querySelectorAll('[data-spell]').forEach((button) => {
    const cost = button.dataset.spell === 'overclock' ? 50 : 100;
    button.disabled = !isSunMinigameUnlocked('grimoire') || sunSave.balance < cost;
  });
  document.querySelector('#sun-market-price').textContent = formatSunNumber(sunSave.marketPrice);
  document.querySelector('#sun-market-shares').textContent = formatSunNumber(sunSave.marketShares);
  document.querySelectorAll('[data-market]').forEach((button) => {
    button.disabled = !isSunMinigameUnlocked('market') || (button.dataset.market === 'buy' ? sunSave.balance < sunSave.marketPrice : sunSave.marketShares < 1);
  });
  document.querySelectorAll('[data-aura]').forEach((button) => {
    button.classList.toggle('selected', sunSave.aura === button.dataset.aura);
    button.disabled = sunSave.ascensions < 1;
  });
  document.querySelector('#sun-phoenix-status').textContent = sunSave.ascensions > 0 ? 'AWAKE' : 'SLEEPING';
  const awakeningResearch = sunSave.research.includes('grid_awakening');
  document.querySelector('#sun-awakening-status').textContent = sunSave.gridAwakening ? `ACTIVE · ${sunSave.leeches.length} Flux Leeches` : awakeningResearch ? 'Research complete · start when ready' : 'Research unlocks this event';
  const awakeningButton = document.querySelector('#sun-awakening-start');
  awakeningButton.disabled = !awakeningResearch || sunSave.gridAwakening;
  awakeningButton.textContent = sunSave.gridAwakening ? 'Active' : 'Start';
}

function setSunPanel(name) {
  sunPanels.forEach((tab) => {
    const selected = tab.dataset.sunPanel === name;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
  });
  ['systems', 'research', 'milestones', 'gridlab', 'ascend'].forEach((panel) => {
    document.querySelector(`#sun-${panel}-panel`).classList.toggle('hidden', panel !== name);
  });
}

function showSunToast(message) {
  sunToast.textContent = message;
  sunToast.classList.add('show');
  clearTimeout(sunToastTimer);
  sunToastTimer = setTimeout(() => sunToast.classList.remove('show'), 2600);
}

function checkSunMilestones() {
  let unlocked = false;
  sunMilestones.forEach((item) => {
    if (!sunSave.milestones.includes(item.id) && item.check()) {
      sunSave.milestones.push(item.id);
      unlocked = true;
      showSunToast(`Achievement unlocked · ${item.name} · Resonance +2%`);
    }
  });
  if (unlocked) saveSunGame();
  return unlocked;
}

function updateSunClicker() {
  checkSunMilestones();
  const unlockedCount = getUnlockedSunBuildings().length;
  if (unlockedCount !== sunRenderedBuildingCount) renderSunBuildings();
  const rate = getSunRate();
  const clickPower = getSunClickPower();
  sunBalanceDisplay.textContent = formatSunNumber(sunSave.balance);
  sunRateDisplay.textContent = formatSunNumber(rate);
  sunTopRateDisplay.textContent = `${formatSunNumber(rate)} / sec`;
  sunTopLifetimeDisplay.textContent = formatSunNumber(sunSave.lifetime);
  sunClickPowerDisplay.textContent = `+${formatSunNumber(clickPower)}`;
  document.querySelector('#sun-scene-click').textContent = formatSunNumber(clickPower);
  document.querySelector('#sun-shards').textContent = `${formatSunNumber(sunSave.shards)} · +${Math.round(sunSave.shards * 25)}%`;
  document.querySelector('#sun-best-system').textContent = [...sunBuildings].reverse().find((building) => sunSave.buildings[building.id] > 0)?.name || '—';
  const nextBuilding = getUnlockedSunBuildings().find((building) => sunSave.balance < getSunBuildingPrice(building))
    || sunBuildings.find((building) => sunSave.lifetime < building.unlockAt)
    || sunBuildings[sunBuildings.length - 1];
  const nextPrice = getSunBuildingPrice(nextBuilding);
  sunProgress.style.width = `${Math.min(100, (sunSave.balance / Math.max(1, nextPrice)) * 100)}%`;
  document.querySelector('#sun-weather-label').textContent = `GRID WEATHER · ${sunWeatherToday.name}`;
  const remaining = sunBuff ? Math.max(0, Math.ceil((sunBuff.ends - Date.now()) / 1000)) : 0;
  document.querySelector('#sun-buff-label').textContent = sunBuff && remaining ? `${sunBuff.label.toUpperCase()} · ${remaining}S` : sunSave.gridAwakening ? 'GRID AWAKENING' : 'GRID STABLE';
  document.querySelector('#sun-name-label').textContent = sunSave.operatorName || 'New Operator';
  sunDevPanel.hidden = sunSave.operatorName === 'ignitethegrid' ? false : true;
  sunDevPanel.classList.toggle('hidden', sunSave.operatorName !== 'ignitethegrid');
  refreshSunBuildings();
  refreshSunResearch();
  refreshSunMilestones();
  refreshSunGridLab();
  const gain = getSunAscendGain();
  document.querySelector('#sun-ascend-gain').textContent = `${formatSunNumber(gain)} Legacy Watt${gain === 1 ? '' : 's'}`;
  const ascendButton = document.querySelector('#sun-ascend');
  ascendButton.disabled = gain < 1;
  ascendButton.textContent = gain ? `Reboot the grid · reset this run` : `Need 10 million run energy`;
}

function saveSunGame() {
  sunSave.lastSaved = Date.now();
  try {
    localStorage.setItem(SUN_SAVE_KEY, JSON.stringify(sunSave));
    sunSaveStatus.textContent = 'Grid saved locally';
  } catch (error) {
    sunSaveStatus.textContent = 'Save unavailable';
    console.warn('Energy Collector could not save progress.', error);
  }
}

function collectSunlight(amount, fromClick = false) {
  if (!(amount > 0)) return;
  sunSave.balance += amount;
  sunSave.lifetime += amount;
  sunSave.runLifetime += amount;
  if (fromClick) {
    sunSave.clicks += 1;
    sunCore.classList.add('sun-pulse');
    clearTimeout(sunPulseTimer);
    sunPulseTimer = setTimeout(() => sunCore.classList.remove('sun-pulse'), 150);
  }
  updateSunClicker();
}

function buySunBuilding(id) {
  const building = sunBuildings.find((item) => item.id === id);
  if (!building || sunSave.lifetime < building.unlockAt) return;
  const amount = getSunBuyAmount(building);
  const cost = getSunBulkPrice(building, amount);
  if (!amount || cost > sunSave.balance) return;
  sunSave.balance -= cost;
  sunSave.buildings[id] += amount;
  checkSunMilestones();
  updateSunClicker();
  saveSunGame();
}

function buySunResearch(id) {
  const item = sunResearch.find((research) => research.id === id);
  if (!item) return;
  const status = getSunResearchStatus(item);
  if (!status.affordable) return;
  sunSave.balance -= item.cost;
  sunSave.research.push(item.id);
  showSunToast(`Research complete · ${item.name}`);
  updateSunClicker();
  saveSunGame();
}

function renderSunLeeches() {
  sunLeechLayer.innerHTML = sunSave.leeches.map((leech, index) => `<button type="button" class="flux-leech" data-leech="${leech.id}" style="left:${8 + ((index * 17) % 82)}%;top:${24 + ((index * 19) % 58)}%" aria-label="Pop Flux Leech for ${formatSunNumber(leech.bank * 1.1)} energy">ϟ</button>`).join('');
  sunRenderedLeechCount = sunSave.leeches.length;
}

function spawnSunLeech() {
  if (!sunSave.gridAwakening || sunSave.leeches.length >= 10) return;
  sunSave.leeches.push({ id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, bank: 0 });
  sunSave.leechNextAt = Date.now() + 45000;
  renderSunLeeches();
  saveSunGame();
  showSunToast('A Flux Leech latched onto the core');
}

function popSunLeech(id) {
  const index = sunSave.leeches.findIndex((leech) => leech.id === id);
  if (index < 0) return;
  const [leech] = sunSave.leeches.splice(index, 1);
  const reward = leech.bank * 1.1;
  renderSunLeeches();
  if (reward > 0) collectSunlight(reward);
  saveSunGame();
  showSunToast(`Flux Leech popped · +${formatSunNumber(reward)} energy`);
}

function triggerEnergySurge(force = false) {
  if (sunCurrentSurge || (sunSave.gridAwakening && Math.random() < 0.33 && !force)) {
    sunCurrentSurge = { wrath: true };
  } else {
    sunCurrentSurge = { wrath: false };
  }
  sunFlare.classList.toggle('wrath-surge', sunCurrentSurge.wrath);
  sunFlare.querySelector('strong').textContent = sunCurrentSurge.wrath ? 'Static Surge!' : 'Energy Surge!';
  sunFlare.querySelector('small').textContent = 'Click to capture';
  sunFlare.hidden = false;
  clearTimeout(sunFlareTimer);
  sunFlareTimer = setTimeout(() => {
    sunFlare.hidden = true;
    sunCurrentSurge = null;
    scheduleEnergySurge();
  }, 12000);
}

function captureEnergySurge() {
  if (!sunCurrentSurge) return;
  const wrath = sunCurrentSurge.wrath;
  sunCurrentSurge = null;
  sunFlare.hidden = true;
  clearTimeout(sunFlareTimer);
  sunSave.flares += 1;
  const common = ['frenzy', 'lucky', 'click', 'building', 'chain', 'sweet'];
  const corrupted = ['clot', 'ruin', 'elder'];
  const effect = (wrath ? corrupted.concat(common.slice(0, 3)) : common)[Math.floor(Math.random() * (wrath ? corrupted.length + 3 : common.length))];
  if (effect === 'frenzy') {
    sunBuff = { type: 'production', multiplier: 7, ends: Date.now() + 77000, label: 'Power Frenzy' };
    showSunToast('Power Frenzy · output ×7 for 77 seconds');
  } else if (effect === 'lucky') {
    const reward = Math.max(25, getSunRate() * 900, sunSave.balance * 0.15);
    collectSunlight(reward);
    showSunToast(`Stored Charge · +${formatSunNumber(reward)} energy`);
  } else if (effect === 'click') {
    sunBuff = { type: 'click', multiplier: 77, ends: Date.now() + 13000, label: 'Overclock' };
    showSunToast('Overclock · click power ×77 for 13 seconds');
  } else if (effect === 'building') {
    const owned = sunBuildings.filter((building) => sunSave.buildings[building.id] > 0);
    const target = owned[Math.floor(Math.random() * Math.max(owned.length, 1))];
    if (target) {
      sunBuff = { type: 'building', building: target.id, multiplier: 10, ends: Date.now() + 30000, label: `${target.name} Focus` };
      showSunToast(`${target.name} Focus · output ×10 for 30 seconds`);
    } else {
      collectSunlight(25);
      showSunToast('First Charge · +25 energy');
    }
  } else if (effect === 'chain') {
    const reward = Math.max(100, getSunRate() * (30 + Math.random() * 180));
    collectSunlight(reward);
    showSunToast(`Chain Reaction · +${formatSunNumber(reward)} energy`);
  } else if (effect === 'sweet') {
    if (sunSave.lifetime >= 1000000000) {
      sunSave.crystals += 1;
      showSunToast('Core Crystal · +1 crystal');
    } else {
      const reward = Math.max(50, getSunRate() * 60);
      collectSunlight(reward);
      showSunToast(`Charge Cell · +${formatSunNumber(reward)} energy`);
    }
  } else if (effect === 'clot') {
    sunBuff = { type: 'production', multiplier: 0.5, ends: Date.now() + 66000, label: 'Grid Clot' };
    showSunToast('Grid Clot · output halved for 66 seconds');
  } else if (effect === 'ruin') {
    const loss = sunSave.balance * 0.05;
    sunSave.balance -= loss;
    showSunToast(`Power Drain · −${formatSunNumber(loss)} energy`);
  } else if (effect === 'elder') {
    sunBuff = { type: 'production', multiplier: 666, ends: Date.now() + 6000, label: 'Elder Frenzy' };
    showSunToast('Elder Frenzy · output ×666 for 6 seconds');
  }
  updateSunClicker();
  saveSunGame();
  scheduleEnergySurge();
}

function scheduleEnergySurge() {
  clearTimeout(sunFlareTimer);
  const auraReduction = sunSave.ascensions > 0 && sunSave.aura === 'spark' ? 0.7 : 1;
  const weatherReduction = sunWeatherToday.name === 'METEOR SHOWER' ? 0.8 : 1;
  sunFlareTimer = setTimeout(() => {
    if (views.sun.classList.contains('hidden')) {
      sunFlareTimer = setTimeout(scheduleEnergySurge, 18000);
      return;
    }
    triggerEnergySurge();
  }, (55000 + Math.random() * 45000) * auraReduction * weatherReduction);
}

function claimCoreCrystal() {
  if (sunSave.lifetime < 1000000000 || !sunSave.crystalReadyAt || Date.now() < sunSave.crystalReadyAt) return;
  sunSave.crystals += 1;
  sunSave.crystalReadyAt = Date.now() + 86400000;
  updateSunClicker();
  saveSunGame();
  showSunToast('Core Crystal charged · use it to level a station');
}

function levelSunBuilding() {
  const id = document.querySelector('#sun-crystal-building').value;
  if (!id || sunSave.crystals < 1 || sunSave.buildings[id] < 1) return;
  sunSave.crystals -= 1;
  sunSave.levels[id] += 1;
  updateSunClicker();
  saveSunGame();
  showSunToast(`${sunBuildings.find((building) => building.id === id).name} leveled · output +5%`);
}

function plantSunSeed(index) {
  if (!isSunMinigameUnlocked('garden') || sunSave.garden[index]) return;
  const planted = sunSave.garden.filter(Boolean).length;
  const cost = 250 * (planted + 1);
  if (sunSave.balance < cost) {
    showSunToast(`Planting costs ${formatSunNumber(cost)} energy`);
    return;
  }
  sunSave.balance -= cost;
  sunSave.garden[index] = sunSeedTypes[(index + sunSave.gardenHarvests) % sunSeedTypes.length];
  updateSunClicker();
  saveSunGame();
}

function harvestSunGarden() {
  const plants = sunSave.garden.filter(Boolean).length;
  if (!plants || !isSunMinigameUnlocked('garden')) return;
  const reward = Math.max(100, getSunRate() * 60 * plants * 0.5);
  sunSave.garden = Array(9).fill('');
  sunSave.gardenHarvests += 1;
  collectSunlight(reward);
  saveSunGame();
  showSunToast(`Renewable Field harvested · +${formatSunNumber(reward)} energy`);
}

function castSunSpell(spell) {
  if (!isSunMinigameUnlocked('grimoire')) return;
  if (spell === 'overclock') {
    if (sunSave.balance < 50) return;
    sunSave.balance -= 50;
    sunBuff = { type: 'click', multiplier: 10, ends: Date.now() + 30000, label: 'Arc Overclock' };
    showSunToast('Arc Overclock · click power ×10 for 30 seconds');
  } else {
    if (sunSave.balance < 100) return;
    sunSave.balance -= 100;
    if (Math.random() < 0.7) {
      const reward = Math.max(100, getSunRate() * 120);
      collectSunlight(reward);
      showSunToast(`Transmutation worked · +${formatSunNumber(reward)} energy`);
    } else {
      const loss = Math.min(sunSave.balance, sunSave.balance * 0.2);
      sunSave.balance -= loss;
      showSunToast('Lab backfire · a little stored energy escaped');
    }
  }
  updateSunClicker();
  saveSunGame();
}

function moveSunMarket() {
  sunSave.marketPrice = Math.max(1, sunSave.marketPrice * (0.78 + Math.random() * 0.46));
  sunMarketLastMove = Date.now();
  refreshSunGridLab();
  saveSunGame();
}

function tradeSunMarket(action) {
  if (!isSunMinigameUnlocked('market')) return;
  if (action === 'buy' && sunSave.balance >= sunSave.marketPrice) {
    sunSave.balance -= sunSave.marketPrice;
    sunSave.marketShares += 1;
    showSunToast('Energy share bought');
  } else if (action === 'sell' && sunSave.marketShares > 0) {
    sunSave.marketShares -= 1;
    collectSunlight(sunSave.marketPrice);
    showSunToast(`Energy share sold · +${formatSunNumber(sunSave.marketPrice)}`);
  }
  updateSunClicker();
  saveSunGame();
}

function startGridAwakening() {
  if (!sunSave.research.includes('grid_awakening') || sunSave.gridAwakening) return;
  sunSave.gridAwakening = true;
  sunSave.leechNextAt = Date.now();
  spawnSunLeech();
  updateSunClicker();
  saveSunGame();
  showSunToast('Grid Awakening started · watch for Flux Leeches');
}

function setSunName(name) {
  sunSave.operatorName = String(name || '').trim().slice(0, 24) || 'New Operator';
  updateSunClicker();
  saveSunGame();
  if (sunSave.operatorName === 'ignitethegrid') showSunToast('Public test mode unlocked');
}

function useSunDevTool(action) {
  if (sunSave.operatorName !== 'ignitethegrid') return;
  if (action === 'energy') {
    collectSunlight(1000);
    showSunToast('Test energy added · +1,000');
  } else if (action === 'station') {
    const next = sunBuildings.find((building) => sunSave.lifetime < building.unlockAt);
    if (next) {
      sunSave.lifetime = next.unlockAt;
      sunSave.runLifetime = Math.max(sunSave.runLifetime, next.unlockAt);
      sunSave.balance = Math.max(sunSave.balance, next.baseCost);
      showSunToast(`${next.name} revealed · test funds added`);
    } else showSunToast('All power stations are already visible');
  } else if (action === 'surge') {
    triggerEnergySurge(true);
  } else if (action === 'crystal') {
    sunSave.lifetime = Math.max(sunSave.lifetime, 1000000000);
    sunSave.runLifetime = Math.max(sunSave.runLifetime, 1000000000);
    sunSave.crystals += 1;
    updateSunClicker();
    showSunToast('Test Core Crystal added');
  } else if (action === 'awakening') {
    sunSave.research = [...new Set([...sunSave.research, 'grid_awakening'])];
    startGridAwakening();
  } else if (action === 'legacy') {
    sunSave.shards += 1;
    sunSave.ascensions = Math.max(1, sunSave.ascensions);
    updateSunClicker();
    showSunToast('Test Legacy Watt added · Plasma Phoenix awake');
  }
  updateSunClicker();
  saveSunGame();
}

function createSunBigBang() {
  const gain = getSunAscendGain();
  if (gain < 1) return;
  if (!window.confirm(`Reboot the grid? This resets your energy, stations, and research for +${formatSunNumber(gain)} Legacy Watts.`)) return;
  sunSave.shards += gain;
  sunSave.ascensions += 1;
  sunSave.balance = 0;
  sunSave.runLifetime = 0;
  sunSave.buildings = Object.fromEntries(sunBuildings.map((building) => [building.id, 0]));
  sunSave.levels = Object.fromEntries(sunBuildings.map((building) => [building.id, 0]));
  sunSave.research = [];
  sunSave.garden = Array(9).fill('');
  sunSave.gridAwakening = false;
  sunSave.leeches = [];
  sunBuff = null;
  sunRenderedBuildingCount = -1;
  sunRenderedLeechCount = -1;
  checkSunMilestones();
  setSunPanel('systems');
  renderSunLeeches();
  updateSunClicker();
  saveSunGame();
  showSunToast(`Grid rebooted · +${formatSunNumber(gain)} Legacy Watts`);
}

sunPanels.forEach((tab) => tab.addEventListener('click', () => setSunPanel(tab.dataset.sunPanel)));
buyModes.forEach((button) => button.addEventListener('click', () => {
  sunBuyMode = button.dataset.buyMode;
  buyModes.forEach((mode) => {
    const active = mode === button;
    mode.classList.toggle('active', active);
    mode.setAttribute('aria-pressed', String(active));
  });
  updateSunClicker();
}));
sunBuildingList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-buy-building]');
  if (button && !button.disabled) buySunBuilding(button.dataset.buyBuilding);
});
sunResearchList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-buy-research]');
  if (button && !button.disabled) buySunResearch(button.dataset.buyResearch);
});
document.querySelector('#sun-ascend').addEventListener('click', createSunBigBang);
document.querySelector('#sun-crystal-claim').addEventListener('click', claimCoreCrystal);
document.querySelector('#sun-crystal-level').addEventListener('click', levelSunBuilding);
document.querySelector('#sun-garden-harvest').addEventListener('click', harvestSunGarden);
sunGardenGrid.addEventListener('click', (event) => {
  const cell = event.target.closest('[data-garden-cell]');
  if (cell && !cell.disabled) plantSunSeed(Number(cell.dataset.gardenCell));
});
document.querySelector('#sun-control-choices').addEventListener('click', (event) => {
  const button = event.target.closest('[data-control-mode]');
  if (!button || button.disabled) return;
  sunSave.controlMode = button.dataset.controlMode;
  updateSunClicker();
  saveSunGame();
  showSunToast(`Grid Control · ${button.textContent.split('·')[0].trim()} mode`);
});
document.querySelector('#sun-gridlab-panel').addEventListener('click', (event) => {
  const spell = event.target.closest('[data-spell]');
  const trade = event.target.closest('[data-market]');
  const aura = event.target.closest('[data-aura]');
  if (spell && !spell.disabled) castSunSpell(spell.dataset.spell);
  if (trade && !trade.disabled) tradeSunMarket(trade.dataset.market);
  if (aura && !aura.disabled) {
    sunSave.aura = aura.dataset.aura;
    updateSunClicker();
    saveSunGame();
    showSunToast(`Plasma Phoenix aura · ${aura.textContent.split('·')[0].trim()}`);
  }
});
document.querySelector('#sun-awakening-start').addEventListener('click', startGridAwakening);
document.querySelector('#sun-dev-panel').addEventListener('click', (event) => {
  const button = event.target.closest('[data-dev]');
  if (button) useSunDevTool(button.dataset.dev);
});
sunLeechLayer.addEventListener('click', (event) => {
  const button = event.target.closest('[data-leech]');
  if (button) popSunLeech(button.dataset.leech);
});

document.querySelector('#sun-name-edit').addEventListener('click', () => {
  sunNameInput.value = sunSave.operatorName === 'New Operator' ? '' : sunSave.operatorName;
  sunNameDialog.showModal();
  sunNameInput.focus();
});
document.querySelector('#sun-name-cancel').addEventListener('click', () => sunNameDialog.close());
document.querySelector('#sun-name-form').addEventListener('submit', (event) => {
  event.preventDefault();
  setSunName(sunNameInput.value);
  sunNameDialog.close();
});
sunNameDialog.addEventListener('click', (event) => {
  if (event.target === sunNameDialog) sunNameDialog.close();
});

sunCore.addEventListener('click', (event) => {
  const amount = getSunClickPower();
  collectSunlight(amount, true);
  const bounds = sunScene.getBoundingClientRect();
  const float = document.createElement('span');
  float.className = 'sun-float';
  float.textContent = `+${formatSunNumber(amount)}`;
  float.style.left = `${event.detail ? event.clientX - bounds.left : bounds.width / 2}px`;
  float.style.top = `${event.detail ? event.clientY - bounds.top : bounds.height / 2}px`;
  sunScene.appendChild(float);
  setTimeout(() => float.remove(), 900);
});
sunFlare.addEventListener('click', captureEnergySurge);

renderSunBuildings();
renderSunResearch();
renderSunMilestones();
renderSunGarden();
renderSunLeeches();
if (sunSave.gridAwakening && !sunSave.leechNextAt) sunSave.leechNextAt = Date.now() + 45000;
const awaySeconds = Math.min(28800, Math.max(0, (Date.now() - sunSave.lastSaved) / 1000));
if (awaySeconds > 30) {
  const awayEarnings = getSunRate() * awaySeconds;
  if (awayEarnings > 0) {
    sunSave.balance += awayEarnings;
    sunSave.lifetime += awayEarnings;
    sunSave.runLifetime += awayEarnings;
    const offlineNote = document.querySelector('#sun-offline-note');
    offlineNote.hidden = false;
    offlineNote.textContent = `While away +${formatSunNumber(awayEarnings)} energy`;
  }
}
ensureCrystalTimer();
updateSunClicker();
saveSunGame();
scheduleEnergySurge();
window.addEventListener('beforeunload', saveSunGame);
setInterval(() => {
  const now = Date.now();
  const elapsed = Math.min(10, Math.max(0, (now - sunLastTick) / 1000));
  sunLastTick = now;
  if (sunBuff && sunBuff.ends <= now) {
    showSunToast(`${sunBuff.label} ended`);
    sunBuff = null;
  }
  if (sunSave.gridAwakening && now >= sunSave.leechNextAt && sunSave.leeches.length < 10) spawnSunLeech();
  const rawRate = getSunRawRate();
  if (rawRate > 0) {
    sunSave.leeches.forEach((leech) => { leech.bank += rawRate * 0.05 * elapsed; });
    const earnings = getSunRate() * elapsed;
    if (earnings > 0) {
      sunSave.balance += earnings;
      sunSave.lifetime += earnings;
      sunSave.runLifetime += earnings;
    }
  }
  if (now - sunMarketLastMove >= 20000) moveSunMarket();
  if (sunSave.lifetime >= 1000000000) ensureCrystalTimer();
  sunTicks += 1;
  updateSunClicker();
  if (sunTicks % 10 === 0) saveSunGame();
}, 1000);
