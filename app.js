const tabs = document.querySelectorAll('.tab');
const views = {
  home: document.querySelector('#home-view'),
  mine: document.querySelector('#mine-view'),
  orbit: document.querySelector('#orbit-view'),
  memory: document.querySelector('#memory-view'),
  sun: document.querySelector('#sun-view'),
  doge: document.querySelector('#doge-view'),
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

