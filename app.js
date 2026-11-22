const tabs = document.querySelectorAll('.tab');
const views = {
  home: document.querySelector('#home-view'),
  mine: document.querySelector('#mine-view'),
  orbit: document.querySelector('#orbit-view'),
  memory: document.querySelector('#memory-view'),
  sun: document.querySelector('#sun-view'),
};

function showView(name) {
  tabs.forEach((tab) => {
    const active = tab.dataset.view === name;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-pressed', String(active));
  });
  Object.entries(views).forEach(([viewName, view]) => view.classList.toggle('hidden', viewName !== name));
  if (name === 'orbit') sizeOrbitCanvas();
  if (name === 'memory') sizeMemoryBoard();
  if (name === 'sun') updateSunClicker();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

tabs.forEach((tab) => tab.addEventListener('click', () => showView(tab.dataset.view)));
document.querySelector('.brand').addEventListener('click', (event) => {
  event.preventDefault();
  showView('home');
});
document.querySelectorAll('[data-open-view]').forEach((button) => {
  button.addEventListener('click', () => showView(button.dataset.openView));
});

// Catch the Spark
const startButton = document.querySelector('#start-game');
const stage = document.querySelector('#game-stage');
const target = document.querySelector('#target');
const message = document.querySelector('#stage-message');
const scoreDisplay = document.querySelector('#score');
const timerDisplay = document.querySelector('#timer');
const statusDisplay = document.querySelector('#game-status');
const bestDisplay = document.querySelector('#best-score');
let score = 0;
let remaining = 30;
let active = false;
let clock;
let best = Number(localStorage.getItem('playground-best') || 0);
bestDisplay.textContent = best;

function moveTarget() {
  const bounds = stage.getBoundingClientRect();
  const inset = 30;
  target.style.left = `${inset + Math.random() * Math.max(1, bounds.width - 2 * inset - 51)}px`;
  target.style.top = `${48 + Math.random() * Math.max(1, bounds.height - 105)}px`;
}

function finishCatchGame() {
  active = false;
  clearInterval(clock);
  target.hidden = true;
  message.hidden = false;
  message.querySelector('strong').textContent = `Time! ${score} points`;
  message.querySelector('span').textContent = 'Play again?';
  statusDisplay.textContent = 'ROUND OVER';
  if (score > best) {
    best = score;
    localStorage.setItem('playground-best', best);
    bestDisplay.textContent = best;
  }
  startButton.textContent = 'Again';
}

startButton.addEventListener('click', () => {
  clearInterval(clock);
  score = 0;
  remaining = 30;
  active = true;
  scoreDisplay.textContent = '0';
  timerDisplay.textContent = '00:30';
  statusDisplay.textContent = 'CATCH AS MANY AS YOU CAN';
  message.hidden = true;
  target.hidden = false;
  moveTarget();
  clock = setInterval(() => {
    remaining -= 1;
    timerDisplay.textContent = `00:${String(remaining).padStart(2, '0')}`;
    if (remaining <= 0) finishCatchGame();
  }, 1000);
});

target.addEventListener('click', () => {
  if (!active) return;
  score += 1;
  scoreDisplay.textContent = String(score);
  moveTarget();
});

window.addEventListener('resize', () => { if (active) moveTarget(); sizeOrbitCanvas(); });

// Orbit Dodge
const orbitCanvas = document.querySelector('#orbit-canvas');
const orbitContext = orbitCanvas.getContext('2d');
const orbitStage = document.querySelector('#orbit-stage');
const orbitMessage = document.querySelector('#orbit-message');
const orbitStart = document.querySelector('#orbit-start');
const orbitTime = document.querySelector('#orbit-time');
const orbitLives = document.querySelector('#orbit-lives');
const orbitBestDisplay = document.querySelector('#orbit-best');
let orbitWidth = 0;
let orbitHeight = 0;
let orbitRunning = false;
let orbitFrame = 0;
let lastFrame = 0;
let elapsed = 0;
let spawnElapsed = 0;
let orbitLivesCount = 3;
let dodged = 0;
let shipX = 0;
let moveDirection = 0;
let asteroids = [];
let stars = [];
let orbitBest = Number(localStorage.getItem('playground-orbit-best') || 0);
orbitBestDisplay.textContent = orbitBest;

function sizeOrbitCanvas() {
  const bounds = orbitCanvas.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  orbitWidth = bounds.width;
  orbitHeight = bounds.height;
  orbitCanvas.width = Math.round(orbitWidth * ratio);
  orbitCanvas.height = Math.round(orbitHeight * ratio);
  orbitContext.setTransform(ratio, 0, 0, ratio, 0, 0);
  shipX = Math.max(16, Math.min(orbitWidth - 16, shipX || orbitWidth / 2));
  stars = Array.from({ length: 48 }, () => ({ x: Math.random() * orbitWidth, y: Math.random() * orbitHeight, size: Math.random() * 1.7 + 0.4 }));
  drawOrbit();
}

function drawShip(x, y) {
  orbitContext.save();
  orbitContext.shadowColor = '#9df6ff';
  orbitContext.shadowBlur = 18;
  orbitContext.fillStyle = '#c4fcff';
  orbitContext.beginPath();
  orbitContext.moveTo(x, y - 18);
  orbitContext.lineTo(x + 14, y + 13);
  orbitContext.lineTo(x, y + 8);
  orbitContext.lineTo(x - 14, y + 13);
  orbitContext.closePath();
  orbitContext.fill();
  orbitContext.restore();
  orbitContext.fillStyle = '#806cf0';
  orbitContext.beginPath();
  orbitContext.arc(x, y + 4, 4, 0, Math.PI * 2);
  orbitContext.fill();
}

function drawOrbit() {
  if (!orbitWidth || !orbitHeight) return;
  const ctx = orbitContext;
  const background = ctx.createLinearGradient(0, 0, 0, orbitHeight);
  background.addColorStop(0, '#121629');
  background.addColorStop(1, '#1b2140');
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, orbitWidth, orbitHeight);
  ctx.fillStyle = '#ffffff';
  stars.forEach((star) => {
    ctx.globalAlpha = 0.35 + Math.sin(elapsed * 2 + star.x) * 0.15;
    ctx.fillRect(star.x, star.y, star.size, star.size);
  });
  ctx.globalAlpha = 1;
  asteroids.forEach((rock) => {
    ctx.save();
    ctx.translate(rock.x, rock.y);
    ctx.rotate(rock.spin);
    ctx.fillStyle = '#a6a8bd';
    ctx.strokeStyle = '#cfd1df';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < 8; i += 1) {
      const angle = (Math.PI * 2 * i) / 8;
      const radius = rock.radius * (i % 2 === 0 ? 1 : 0.78);
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  });
  drawShip(shipX, orbitHeight - 42);
}

function finishOrbitGame(messageText) {
  orbitRunning = false;
  cancelAnimationFrame(orbitFrame);
  orbitMessage.hidden = false;
  orbitMessage.querySelector('strong').textContent = messageText;
  orbitMessage.querySelector('span').textContent = `You dodged ${dodged} asteroids`;
  orbitStart.textContent = 'Again';
  if (dodged > orbitBest) {
    orbitBest = dodged;
    localStorage.setItem('playground-orbit-best', orbitBest);
    orbitBestDisplay.textContent = orbitBest;
  }
  drawOrbit();
}

function runOrbitFrame(stamp) {
  if (!orbitRunning) return;
  const delta = Math.min((stamp - (lastFrame || stamp)) / 1000, 0.04);
  lastFrame = stamp;
  elapsed += delta;
  spawnElapsed += delta;
  const timeLeft = Math.max(0, 45 - elapsed);
  orbitTime.textContent = `00:${String(Math.ceil(timeLeft)).padStart(2, '0')}`;
  shipX = Math.max(19, Math.min(orbitWidth - 19, shipX + moveDirection * 330 * delta));
  const spawnRate = Math.max(0.28, 0.72 - elapsed * 0.007);
  if (spawnElapsed >= spawnRate) {
    spawnElapsed = 0;
    asteroids.push({ x: 20 + Math.random() * Math.max(1, orbitWidth - 40), y: -22, radius: 9 + Math.random() * 10, speed: 120 + Math.random() * 90 + elapsed * 2, spin: Math.random() * 5, spinSpeed: (Math.random() - 0.5) * 2 });
  }
  const shipY = orbitHeight - 42;
  asteroids = asteroids.filter((rock) => {
    rock.y += rock.speed * delta;
    rock.spin += rock.spinSpeed * delta;
    if (rock.y > orbitHeight + 25) { dodged += 1; return false; }
    if (Math.hypot(rock.x - shipX, rock.y - shipY) < rock.radius + 12) {
      orbitLivesCount -= 1;
      orbitLives.textContent = String(orbitLivesCount);
      if (orbitLivesCount <= 0) finishOrbitGame('Ship hit!');
      return false;
    }
    return true;
  });
  drawOrbit();
  if (timeLeft <= 0) { finishOrbitGame('You made it!'); return; }
  orbitFrame = requestAnimationFrame(runOrbitFrame);
}

function startOrbitGame() {
  cancelAnimationFrame(orbitFrame);
  sizeOrbitCanvas();
  asteroids = [];
  elapsed = 0;
  spawnElapsed = 0;
  lastFrame = 0;
  dodged = 0;
  orbitLivesCount = 3;
  moveDirection = 0;
  shipX = orbitWidth / 2;
  orbitLives.textContent = '3';
  orbitTime.textContent = '00:45';
  orbitMessage.hidden = true;
  orbitStart.textContent = 'Restart';
  orbitRunning = true;
  orbitFrame = requestAnimationFrame(runOrbitFrame);
}

orbitStart.addEventListener('click', startOrbitGame);
window.addEventListener('keydown', (event) => {
  if (!orbitRunning) return;
  if (['ArrowLeft', 'a', 'A'].includes(event.key)) { moveDirection = -1; event.preventDefault(); }
  if (['ArrowRight', 'd', 'D'].includes(event.key)) { moveDirection = 1; event.preventDefault(); }
});
window.addEventListener('keyup', (event) => {
  if (['ArrowLeft', 'ArrowRight', 'a', 'A', 'd', 'D'].includes(event.key)) moveDirection = 0;
});
document.querySelectorAll('[data-move]').forEach((button) => {
  const stop = () => { moveDirection = 0; };
  button.addEventListener('pointerdown', (event) => { event.preventDefault(); moveDirection = Number(button.dataset.move); });
  button.addEventListener('pointerup', stop);
  button.addEventListener('pointerleave', stop);
  button.addEventListener('pointercancel', stop);
});

sizeOrbitCanvas();

// Memory Flip
const memoryBoard = document.querySelector('#memory-board');
const memoryMessage = document.querySelector('#memory-message');
const memoryStart = document.querySelector('#memory-start');
const memoryStatus = document.querySelector('#memory-status');
const memoryMovesDisplay = document.querySelector('#memory-moves');
const memoryTimeDisplay = document.querySelector('#memory-time');
const memoryBestDisplay = document.querySelector('#memory-best');
const symbols = ['🎮', '🚀', '🌙', '💎', '🌟', '🪐', '🛸', '⚡'];
let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;
let memoryMoves = 0;
let memorySeconds = 0;
let memoryRunning = false;
let memoryLocked = false;
let memoryClock;
let memoryFlipTimeout;
let memoryBest = Number(localStorage.getItem('playground-memory-best') || 0);
memoryBestDisplay.textContent = memoryBest ? `${memoryBest} moves` : '—';

function sizeMemoryBoard() {
  memoryBoard.style.setProperty('--card-count', '4');
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function formatMemoryTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
}

function startMemoryGame() {
  clearInterval(memoryClock);
  clearTimeout(memoryFlipTimeout);
  memoryCards = shuffle([...symbols, ...symbols]);
  flippedCards = [];
  matchedPairs = 0;
  memoryMoves = 0;
  memorySeconds = 0;
  memoryLocked = false;
  memoryRunning = true;
  memoryMovesDisplay.textContent = '0';
  memoryTimeDisplay.textContent = '00:00';
  memoryStatus.textContent = 'FIND ALL 8 PAIRS';
  memoryMessage.hidden = true;
  memoryStart.textContent = 'Restart';
  memoryBoard.innerHTML = memoryCards.map((symbol, index) => `
    <button class="memory-card" type="button" data-index="${index}" aria-label="Card ${index + 1}, face down">
      <span class="memory-back" aria-hidden="true">✦</span>
      <span class="memory-front" aria-hidden="true">${symbol}</span>
    </button>`).join('');
  memoryClock = setInterval(() => {
    if (!memoryRunning) return;
    memorySeconds += 1;
    memoryTimeDisplay.textContent = formatMemoryTime(memorySeconds);
  }, 1000);
}

function finishMemoryGame() {
  memoryRunning = false;
  clearInterval(memoryClock);
  memoryStatus.textContent = 'ALL PAIRS FOUND';
  memoryMessage.hidden = false;
  memoryMessage.querySelector('strong').textContent = `Solved in ${memoryMoves} moves`;
  memoryMessage.querySelector('span').textContent = `Time ${formatMemoryTime(memorySeconds)} · Shuffle to play again`;
  if (!memoryBest || memoryMoves < memoryBest) {
    memoryBest = memoryMoves;
    localStorage.setItem('playground-memory-best', memoryBest);
    memoryBestDisplay.textContent = `${memoryBest} moves`;
  }
  memoryStart.textContent = 'Again';
}

memoryStart.addEventListener('click', startMemoryGame);
memoryBoard.addEventListener('click', (event) => {
  const card = event.target.closest('.memory-card');
  if (!card || !memoryRunning || memoryLocked || card.classList.contains('matched') || card.classList.contains('flipped')) return;
  const index = Number(card.dataset.index);
  card.classList.add('flipped');
  card.setAttribute('aria-label', `Card ${index + 1}, ${memoryCards[index]}`);
  flippedCards.push(card);
  if (flippedCards.length < 2) return;

  memoryMoves += 1;
  memoryMovesDisplay.textContent = String(memoryMoves);
  const [first, second] = flippedCards;
  const firstSymbol = memoryCards[Number(first.dataset.index)];
  const secondSymbol = memoryCards[Number(second.dataset.index)];
  flippedCards = [];
  if (firstSymbol === secondSymbol) {
    first.classList.add('matched');
    second.classList.add('matched');
    first.setAttribute('aria-label', `Matched ${firstSymbol}`);
    second.setAttribute('aria-label', `Matched ${secondSymbol}`);
    matchedPairs += 1;
    if (matchedPairs === symbols.length) finishMemoryGame();
    return;
  }

  memoryLocked = true;
  memoryFlipTimeout = setTimeout(() => {
    [first, second].forEach((item) => {
      item.classList.remove('flipped');
      const itemIndex = Number(item.dataset.index);
      item.setAttribute('aria-label', `Card ${itemIndex + 1}, face down`);
    });
    memoryLocked = false;
  }, 700);
});

sizeMemoryBoard();

// Sun Clicker
const sunBuildings = [
  { id: 'moon', name: 'Moon Base', icon: '🌙', description: 'A tiny outpost mining lunar dust.', baseCost: 15, rate: 0.1, unlockAt: 0 },
  { id: 'planet', name: 'Planet', icon: '🪐', description: 'A world warmed by your growing star.', baseCost: 100, rate: 1.2, unlockAt: 25 },
  { id: 'asteroid', name: 'Asteroid Belt', icon: '☄️', description: 'A stream of rocks full of rare metals.', baseCost: 1100, rate: 8.5, unlockAt: 150 },
  { id: 'star', name: 'Young Star', icon: '⭐', description: 'A second star begins to burn.', baseCost: 12000, rate: 47, unlockAt: 2000 },
  { id: 'nebula', name: 'Nebula', icon: '🌌', description: 'A stellar nursery, rich with raw matter.', baseCost: 140000, rate: 260, unlockAt: 30000 },
  { id: 'blackhole', name: 'Black Hole', icon: '🕳️', description: 'Even light bends toward its event horizon.', baseCost: 2000000, rate: 1450, unlockAt: 400000 },
  { id: 'galaxy', name: 'Galaxy', icon: '🌠', description: 'A billion stars spinning in your orbit.', baseCost: 40000000, rate: 7900, unlockAt: 8000000 },
  { id: 'cluster', name: 'Galaxy Cluster', icon: '🌀', description: 'Galaxies gather into a greater design.', baseCost: 1200000000, rate: 48000, unlockAt: 450000000 },
  { id: 'dyson', name: 'Dyson Sphere', icon: '⚙️', description: 'Harvest the power of an entire star.', baseCost: 32000000000, rate: 290000, unlockAt: 30000000000 },
  { id: 'quasar', name: 'Quasar', icon: '✨', description: 'A brilliant engine at the heart of space.', baseCost: 650000000000, rate: 1800000, unlockAt: 2000000000000 },
];

const sunResearch = [
  { id: 'solar_lens', name: 'Solar Lens', icon: '🔎', description: 'Focus sunlight. Click power ×2.', cost: 50, unlockLifetime: 25, kind: 'click', multiplier: 2 },
  { id: 'amber_glass', name: 'Amber Glass', icon: '🟠', description: 'A brighter, more precise beam. Click power ×3.', cost: 1000, unlockLifetime: 750, kind: 'click', multiplier: 3 },
  { id: 'fusion_tap', name: 'Fusion Tap', icon: '⚡', description: 'Reach into the corona. Click power ×4.', cost: 25000, unlockLifetime: 15000, kind: 'click', multiplier: 4 },
  { id: 'nova_pulse', name: 'Nova Pulse', icon: '💥', description: 'Harness a controlled stellar burst. Click power ×10.', cost: 2000000, unlockLifetime: 1000000, kind: 'click', multiplier: 10 },
  { id: 'lunar_mining', name: 'Lunar Mining', icon: '🌑', description: 'Moon Bases produce twice as much.', cost: 300, unlockBuilding: 'moon', amount: 10, kind: 'building', building: 'moon', multiplier: 2 },
  { id: 'planetary_cores', name: 'Planetary Cores', icon: '🌋', description: 'Planets produce twice as much.', cost: 4000, unlockBuilding: 'planet', amount: 10, kind: 'building', building: 'planet', multiplier: 2 },
  { id: 'belt_resonance', name: 'Belt Resonance', icon: '🪨', description: 'Asteroid Belts produce twice as much.', cost: 70000, unlockBuilding: 'asteroid', amount: 10, kind: 'building', building: 'asteroid', multiplier: 2 },
  { id: 'stellar_fusion', name: 'Stellar Fusion', icon: '☀️', description: 'Young Stars produce twice as much.', cost: 850000, unlockBuilding: 'star', amount: 10, kind: 'building', building: 'star', multiplier: 2 },
  { id: 'nebula_mapping', name: 'Nebula Mapping', icon: '🌫️', description: 'Nebulae produce twice as much.', cost: 16000000, unlockBuilding: 'nebula', amount: 10, kind: 'building', building: 'nebula', multiplier: 2 },
  { id: 'hawking_radiation', name: 'Hawking Radiation', icon: '🕳️', description: 'Black Holes produce twice as much.', cost: 250000000, unlockBuilding: 'blackhole', amount: 10, kind: 'building', building: 'blackhole', multiplier: 2 },
  { id: 'spiral_arms', name: 'Spiral Arms', icon: '🌌', description: 'Galaxies produce twice as much.', cost: 4000000000, unlockBuilding: 'galaxy', amount: 10, kind: 'building', building: 'galaxy', multiplier: 2 },
  { id: 'cluster_lensing', name: 'Cluster Lensing', icon: '🔭', description: 'Galaxy Clusters produce twice as much.', cost: 90000000000, unlockBuilding: 'cluster', amount: 10, kind: 'building', building: 'cluster', multiplier: 2 },
  { id: 'stellar_engineering', name: 'Stellar Engineering', icon: '🛠️', description: 'Dyson Spheres produce twice as much.', cost: 2200000000000, unlockBuilding: 'dyson', amount: 10, kind: 'building', building: 'dyson', multiplier: 2 },
  { id: 'quasar_beam', name: 'Quasar Beamforming', icon: '📡', description: 'Quasars produce twice as much.', cost: 50000000000000, unlockBuilding: 'quasar', amount: 10, kind: 'building', building: 'quasar', multiplier: 2 },
];

const sunMilestones = [
  { id: 'first_light', icon: '✦', name: 'First Light', detail: 'Collect your first sunlight.', check: () => sunSave.lifetime >= 1 },
  { id: 'click_happy', icon: '☝', name: 'Solar Fingers', detail: 'Click the sun 100 times.', check: () => sunSave.clicks >= 100 },
  { id: 'moon_landing', icon: '🌙', name: 'Moon Landing', detail: 'Build your first Moon Base.', check: () => sunSave.buildings.moon >= 1 },
  { id: 'planetary', icon: '🪐', name: 'Planetary', detail: 'Bring a planet into orbit.', check: () => sunSave.buildings.planet >= 1 },
  { id: 'builder', icon: '🧱', name: 'Cosmic Builder', detail: 'Own 25 celestial systems.', check: () => Object.values(sunSave.buildings).reduce((sum, count) => sum + count, 0) >= 25 },
  { id: 'red_giant', icon: '⭐', name: 'Star Forger', detail: 'Create a Young Star.', check: () => sunSave.buildings.star >= 1 },
  { id: 'dark_matter', icon: '◉', name: 'Nothing Escapes', detail: 'Create a Black Hole.', check: () => sunSave.buildings.blackhole >= 1 },
  { id: 'galactic', icon: '🌌', name: 'Galaxy Brain', detail: 'Build your first Galaxy.', check: () => sunSave.buildings.galaxy >= 1 },
  { id: 'flare_chaser', icon: '☄', name: 'Flare Chaser', detail: 'Catch a wandering Solar Flare.', check: () => sunSave.flares >= 1 },
  { id: 'million_lights', icon: '💡', name: 'A Million Lights', detail: 'Collect 1 million lifetime sunlight.', check: () => sunSave.lifetime >= 1000000 },
  { id: 'universe', icon: '🌀', name: 'Known Universe', detail: 'Collect 1 billion lifetime sunlight.', check: () => sunSave.lifetime >= 1000000000 },
  { id: 'big_bang', icon: '💫', name: 'The Big Bang', detail: 'Reset a system and earn a Star Shard.', check: () => sunSave.ascensions >= 1 },
  { id: 'shard_collector', icon: '💎', name: 'Shard Collector', detail: 'Gather 10 Star Shards.', check: () => sunSave.shards >= 10 },
  { id: 'everything', icon: '∞', name: 'Infinite Space', detail: 'Collect 1 trillion lifetime sunlight.', check: () => sunSave.lifetime >= 1000000000000 },
];

const SUN_SAVE_KEY = 'playground-sun-clicker-v1';
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
let sunSave = loadSunGame();
let sunBuyMode = '1';
let sunToastTimer;
let sunFlareTimer;
let sunPulseTimer;
let sunTicks = 0;
let sunLastTick = Date.now();

function createFreshSunSave() {
  return {
    balance: 0, lifetime: 0, runLifetime: 0, clicks: 0, buildings: Object.fromEntries(sunBuildings.map((building) => [building.id, 0])),
    research: [], milestones: [], shards: 0, ascensions: 0, flares: 0, lastSaved: Date.now(),
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
    fresh.buildings = Object.fromEntries(sunBuildings.map((building) => [building.id, Math.max(0, Math.floor(Number(saved.buildings?.[building.id]) || 0))]));
    fresh.research = Array.isArray(saved.research) ? saved.research.filter((id) => sunResearch.some((item) => item.id === id)) : [];
    fresh.milestones = Array.isArray(saved.milestones) ? saved.milestones.filter((id) => sunMilestones.some((item) => item.id === id)) : [];
    fresh.shards = Math.max(0, Math.floor(Number(saved.shards) || 0));
    fresh.ascensions = Math.max(0, Math.floor(Number(saved.ascensions) || 0));
    fresh.flares = Math.max(0, Math.floor(Number(saved.flares) || 0));
    fresh.lastSaved = Math.max(0, Number(saved.lastSaved) || Date.now());
  } catch (error) {
    console.warn('Sun Clicker save could not be read.', error);
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
  return (1 + sunSave.shards * 0.25) * (1 + sunSave.milestones.length * 0.02);
}

function getSunBuildingMultiplier(id) {
  return sunResearch
    .filter((item) => item.kind === 'building' && item.building === id && sunSave.research.includes(item.id))
    .reduce((multiplier, item) => multiplier * item.multiplier, 1);
}

function getSunRate() {
  const baseRate = sunBuildings.reduce((sum, building) => sum + sunSave.buildings[building.id] * building.rate * getSunBuildingMultiplier(building.id), 0);
  return baseRate * getSunGlobalMultiplier();
}

function getSunClickPower() {
  const researchMultiplier = sunResearch.filter((item) => item.kind === 'click' && sunSave.research.includes(item.id)).reduce((multiplier, item) => multiplier * item.multiplier, 1);
  return researchMultiplier * getSunGlobalMultiplier();
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
  const unlocked = item.unlockLifetime !== undefined
    ? sunSave.lifetime >= item.unlockLifetime
    : sunSave.buildings[item.unlockBuilding] >= item.amount;
  return { owned: false, unlocked, affordable: unlocked && sunSave.balance >= item.cost };
}

function getSunAscendGain() {
  return Math.floor(Math.sqrt(sunSave.runLifetime / 10000000));
}

function renderSunBuildings() {
  sunBuildingList.innerHTML = sunBuildings.map((building) => `
    <article class="sun-building-row" data-building-row="${building.id}">
      <span class="building-icon" aria-hidden="true">${building.icon}</span>
      <div class="building-main">
        <div class="building-title-line"><h3>${building.name}</h3><span class="building-owned" data-building-owned="${building.id}">0</span></div>
        <p>${building.description}</p>
        <span class="building-rate" data-building-rate="${building.id}">+${formatSunNumber(building.rate)} / sec each</span>
      </div>
      <button class="building-buy" type="button" data-buy-building="${building.id}"><strong data-building-cost="${building.id}">${formatSunNumber(building.baseCost)}</strong><small data-building-label="${building.id}">BUY ×1</small></button>
    </article>`).join('');
}

function renderSunResearch() {
  sunResearchList.innerHTML = sunResearch.map((item) => `
    <article class="sun-research-card locked" data-research-card="${item.id}">
      <span class="research-icon" aria-hidden="true">${item.icon}</span>
      <div class="research-copy"><h3>${item.name}</h3><p>${item.description}</p><span class="research-cost" data-research-cost="${item.id}">${formatSunNumber(item.cost)} sunlight</span></div>
      <button class="research-buy" type="button" data-buy-research="${item.id}" aria-label="Research ${item.name}">Locked</button>
    </article>`).join('');
}

function renderSunMilestones() {
  sunAchievementList.innerHTML = sunMilestones.map((item) => `
    <article class="achievement-card" data-achievement="${item.id}">
      <span aria-hidden="true">${item.icon}</span><h3>${item.name}</h3><p>${item.detail}</p>
    </article>`).join('');
}

function refreshSunBuildings() {
  sunBuildings.forEach((building) => {
    const row = sunBuildingList.querySelector(`[data-building-row="${building.id}"]`);
    if (!row) return;
    const owned = sunSave.buildings[building.id];
    const unlocked = sunSave.lifetime >= building.unlockAt;
    const amount = getSunBuyAmount(building);
    const cost = amount ? getSunBulkPrice(building, amount) : getSunBuildingPrice(building);
    const affordable = amount > 0 && cost <= sunSave.balance && unlocked;
    row.querySelector(`[data-building-owned="${building.id}"]`).textContent = formatSunNumber(owned);
    row.querySelector(`[data-building-cost="${building.id}"]`).textContent = formatSunNumber(cost);
    row.querySelector(`[data-building-label="${building.id}"]`).textContent = unlocked ? (amount ? `BUY ×${formatSunNumber(amount)}` : 'CAN’T AFFORD') : `AT ${formatSunNumber(building.unlockAt)} LIFETIME`;
    row.querySelector(`[data-buy-building="${building.id}"]`).disabled = !affordable;
    row.querySelector(`[data-buy-building="${building.id}"]`).setAttribute('aria-label', unlocked ? `Buy ${amount || 1} ${building.name} for ${formatSunNumber(cost)} sunlight` : `${building.name} unlocks at ${formatSunNumber(building.unlockAt)} lifetime sunlight`);
    row.classList.toggle('affordable', affordable);
    const production = owned * building.rate * getSunBuildingMultiplier(building.id) * getSunGlobalMultiplier();
    row.querySelector(`[data-building-rate="${building.id}"]`).textContent = `+${formatSunNumber(production)} / sec total`;
  });
}

function refreshSunResearch() {
  let ready = false;
  sunResearch.forEach((item) => {
    const card = sunResearchList.querySelector(`[data-research-card="${item.id}"]`);
    const button = card.querySelector(`[data-buy-research="${item.id}"]`);
    const status = getSunResearchStatus(item);
    const requiredBuilding = sunBuildings.find((building) => building.id === item.unlockBuilding);
    const requiredBuildingPlural = requiredBuilding?.id === 'galaxy' ? 'Galaxies' : `${requiredBuilding?.name}s`;
    const requirement = item.unlockLifetime !== undefined
      ? `Unlocks at ${formatSunNumber(item.unlockLifetime)} lifetime sunlight`
      : `Requires ${item.amount} ${requiredBuildingPlural}`;
    card.classList.toggle('locked', !status.unlocked && !status.owned);
    card.classList.toggle('affordable', status.affordable);
    card.querySelector(`[data-research-cost="${item.id}"]`).textContent = status.owned ? 'RESEARCH COMPLETE' : status.unlocked ? `${formatSunNumber(item.cost)} sunlight` : requirement;
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
    sunAchievementList.querySelector(`[data-achievement="${item.id}"]`).classList.toggle('unlocked', sunSave.milestones.includes(item.id));
  });
}

function setSunPanel(name) {
  sunPanels.forEach((tab) => {
    const selected = tab.dataset.sunPanel === name;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
  });
  ['systems', 'research', 'milestones', 'ascend'].forEach((panel) => {
    document.querySelector(`#sun-${panel}-panel`).classList.toggle('hidden', panel !== name);
  });
}

function showSunToast(message) {
  sunToast.textContent = message;
  sunToast.classList.add('show');
  clearTimeout(sunToastTimer);
  sunToastTimer = setTimeout(() => sunToast.classList.remove('show'), 2400);
}

function checkSunMilestones() {
  let unlocked = false;
  sunMilestones.forEach((item) => {
    if (!sunSave.milestones.includes(item.id) && item.check()) {
      sunSave.milestones.push(item.id);
      unlocked = true;
      showSunToast(`Milestone unlocked · ${item.name} · production +2%`);
    }
  });
  if (unlocked) saveSunGame();
  return unlocked;
}

function updateSunClicker() {
  checkSunMilestones();
  const rate = getSunRate();
  sunBalanceDisplay.textContent = formatSunNumber(sunSave.balance);
  sunRateDisplay.textContent = formatSunNumber(rate);
  sunTopRateDisplay.textContent = `${formatSunNumber(rate)} / sec`;
  sunTopLifetimeDisplay.textContent = formatSunNumber(sunSave.lifetime);
  sunClickPowerDisplay.textContent = `+${formatSunNumber(getSunClickPower())}`;
  document.querySelector('#sun-shards').textContent = `${formatSunNumber(sunSave.shards)} · +${Math.round(sunSave.shards * 25)}%`;
  const bestBuilding = [...sunBuildings].reverse().find((building) => sunSave.buildings[building.id] > 0);
  document.querySelector('#sun-best-system').textContent = bestBuilding ? bestBuilding.name : '—';
  const nextBuilding = sunBuildings.find((building) => sunSave.lifetime >= building.unlockAt && getSunBuildingPrice(building) > sunSave.balance) || sunBuildings[0];
  const progress = Math.min(100, (sunSave.balance / Math.max(1, getSunBuildingPrice(nextBuilding))) * 100);
  sunProgress.style.width = `${progress}%`;
  refreshSunBuildings();
  refreshSunResearch();
  refreshSunMilestones();
  const gain = getSunAscendGain();
  document.querySelector('#sun-ascend-gain').textContent = `${formatSunNumber(gain)} Star Shard${gain === 1 ? '' : 's'}`;
  const ascendButton = document.querySelector('#sun-ascend');
  ascendButton.disabled = gain < 1;
  ascendButton.textContent = gain ? `Create Big Bang · reset this run` : `Need 10 million run sunlight`;
}

function saveSunGame() {
  sunSave.lastSaved = Date.now();
  try {
    localStorage.setItem(SUN_SAVE_KEY, JSON.stringify(sunSave));
    sunSaveStatus.textContent = 'Saved locally';
  } catch (error) {
    sunSaveStatus.textContent = 'Save unavailable';
    console.warn('Sun Clicker could not save progress.', error);
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
    sunPulseTimer = setTimeout(() => sunCore.classList.remove('sun-pulse'), 120);
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

function createSunBigBang() {
  const gain = getSunAscendGain();
  if (gain < 1) return;
  sunSave.shards += gain;
  sunSave.ascensions += 1;
  sunSave.balance = 0;
  sunSave.runLifetime = 0;
  sunSave.buildings = Object.fromEntries(sunBuildings.map((building) => [building.id, 0]));
  sunSave.research = [];
  checkSunMilestones();
  setSunPanel('systems');
  updateSunClicker();
  saveSunGame();
  showSunToast(`Big Bang complete · +${formatSunNumber(gain)} Star Shards`);
}

function scheduleSunFlare() {
  clearTimeout(sunFlareTimer);
  sunFlareTimer = setTimeout(() => {
    if (views.sun.classList.contains('hidden')) {
      sunFlareTimer = setTimeout(scheduleSunFlare, 25000);
      return;
    }
    sunFlare.hidden = false;
    sunFlareTimer = setTimeout(() => {
      sunFlare.hidden = true;
      scheduleSunFlare();
    }, 11000);
  }, 55000 + Math.random() * 45000);
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

sunFlare.addEventListener('click', () => {
  sunFlare.hidden = true;
  clearTimeout(sunFlareTimer);
  sunSave.flares += 1;
  const bonus = Math.max(25, getSunRate() * 20, sunSave.balance * 0.05);
  collectSunlight(bonus);
  showSunToast(`Solar Flare · +${formatSunNumber(bonus)} sunlight`);
  scheduleSunFlare();
});

renderSunBuildings();
renderSunResearch();
renderSunMilestones();
const awaySeconds = Math.min(28800, Math.max(0, (Date.now() - sunSave.lastSaved) / 1000));
if (awaySeconds > 30) {
  const awayEarnings = getSunRate() * awaySeconds;
  if (awayEarnings > 0) {
    sunSave.balance += awayEarnings;
    sunSave.lifetime += awayEarnings;
    sunSave.runLifetime += awayEarnings;
    const offlineNote = document.querySelector('#sun-offline-note');
    offlineNote.hidden = false;
    offlineNote.textContent = `While away +${formatSunNumber(awayEarnings)}`;
  }
}
updateSunClicker();
saveSunGame();
scheduleSunFlare();
setInterval(() => {
  const now = Date.now();
  const elapsed = Math.min(28800, Math.max(0, (now - sunLastTick) / 1000));
  sunLastTick = now;
  if (elapsed > 0) collectSunlight(getSunRate() * elapsed);
  sunTicks += 1;
  if (sunTicks >= 8) {
    sunTicks = 0;
    saveSunGame();
  }
}, 1000);
window.addEventListener('beforeunload', saveSunGame);
document.addEventListener('visibilitychange', () => { if (document.hidden) saveSunGame(); });
