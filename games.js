const gameOptions = {
  doge: {
    title: 'Doge Miner 2',
    sourceLabel: 'BROWSER GAME',
    url: 'https://dogeminer2.com/play/',
  },
  cookie: {
    title: 'Cookie Clicker',
    sourceLabel: 'WEB VERSION',
    url: 'https://orteil.dashnet.org/cookieclicker/',
  },
  polytrack: {
    title: 'PolyTrack',
    sourceLabel: 'UNOFFICIAL BUILD',
    url: 'https://playpolytrackunblocked.github.io/',
  },
};

const homeScreen = document.querySelector('#home-screen');
const playerScreen = document.querySelector('#player-screen');
const gameName = document.querySelector('#game-name');
const gameType = document.querySelector('#game-type');
const gamePlayer = document.querySelector('#game-player');
const gameFrame = document.querySelector('#game-frame');
const directLink = document.querySelector('#direct-link');
const screenTabs = document.querySelectorAll('[data-screen]');
const gameCards = document.querySelectorAll('[data-game]');
const homeLink = document.querySelector('[data-home-link]');
let currentGame = null;

function setActiveScreen(screen) {
  screenTabs.forEach((tab) => {
    const active = tab.dataset.screen === screen;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
}

function showHome() {
  setActiveScreen('home');
  homeScreen.classList.remove('hidden');
  playerScreen.classList.add('hidden');
  directLink.hidden = true;
}

function showGame(key) {
  const game = gameOptions[key];
  if (!game) return;

  setActiveScreen(key);
  homeScreen.classList.add('hidden');
  playerScreen.classList.remove('hidden');
  directLink.hidden = false;
  directLink.href = game.url;
  directLink.textContent = 'Open directly ↗';
  gameName.textContent = game.title;
  gameType.textContent = game.sourceLabel;
  gamePlayer.setAttribute('aria-label', `${game.title} game`);
  gameFrame.title = game.title;

  if (currentGame !== key) {
    gameFrame.src = game.url;
    currentGame = key;
  }
}

screenTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    if (tab.dataset.screen === 'home') showHome();
    else showGame(tab.dataset.screen);
  });
});

homeLink.addEventListener('click', (event) => {
  event.preventDefault();
  showHome();
});

gameCards.forEach((card) => {
  card.addEventListener('click', () => showGame(card.dataset.game));
});

showHome();
