const startButton = document.querySelector('#start-game');
const stage = document.querySelector('#game-stage');
const target = document.querySelector('#target');
const message = document.querySelector('#stage-message');
const scoreDisplay = document.querySelector('#score');
const timerDisplay = document.querySelector('#timer');
const statusDisplay = document.querySelector('#game-status');
const bestDisplay = document.querySelector('#best-score');
const tabs = document.querySelectorAll('.tab');
const views = { mine: document.querySelector('#mine-view'), coolmath: document.querySelector('#coolmath-view') };

let score = 0;
let remaining = 30;
let active = false;
let clock;
let best = Number(localStorage.getItem('playground-best') || 0);
bestDisplay.textContent = best;

tabs.forEach((tab) => tab.addEventListener('click', () => {
  tabs.forEach((item) => item.classList.toggle('active', item === tab));
  Object.entries(views).forEach(([name, view]) => view.classList.toggle('hidden', name !== tab.dataset.view));
}));

function moveTarget() {
  const bounds = stage.getBoundingClientRect();
  const inset = 30;
  target.style.left = `${inset + Math.random() * Math.max(1, bounds.width - 2 * inset - 51)}px`;
  target.style.top = `${48 + Math.random() * Math.max(1, bounds.height - 105)}px`;
}

function finishGame() {
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
    if (remaining <= 0) finishGame();
  }, 1000);
});

target.addEventListener('click', () => {
  if (!active) return;
  score += 1;
  scoreDisplay.textContent = String(score);
  moveTarget();
});

window.addEventListener('resize', () => { if (active) moveTarget(); });
