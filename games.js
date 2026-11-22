const gameOptions = {
  doge: {
    title: 'Doge Miner 2',
    sourceLabel: 'BROWSER GAME',
    url: 'https://dogeminer2.com/play/',
    icon: 'Ð',
    note: 'Clicker',
    cardClass: 'doge-card',
  },
  cookie: {
    title: 'Cookie Clicker',
    sourceLabel: 'THIRD-PARTY PAGE',
    url: 'https://cookieclickernew.com/',
    icon: '🍪',
    note: 'Idle game',
    cardClass: 'cookie-card',
  },
  polytrack: {
    title: 'PolyTrack',
    sourceLabel: 'UNOFFICIAL BUILD',
    url: 'https://playpolytrackunblocked.github.io/',
    icon: '🏁',
    note: 'Racing',
    cardClass: 'polytrack-card',
  },
  freeriderjumps: {
    title: 'Free Rider Jumps',
    sourceLabel: 'BIKE GAME',
    url: 'https://freeriderjumps.com/',
    icon: '🚴',
    note: 'Bike tracks',
    cardClass: 'freerider-jumps-card',
  },
  freeriderhd: {
    title: 'Free Rider HD',
    sourceLabel: 'BIKE GAME',
    url: 'https://www.freeriderhd.com/',
    icon: '🚲',
    note: 'Track builder',
    cardClass: 'freerider-hd-card',
  },
  snowrider: {
    title: 'Snow Rider 3D',
    sourceLabel: 'SNOW RACING',
    url: 'https://snowrider3d.com/#google_vignette',
    icon: '❄',
    note: 'Sled racing',
    cardClass: 'snowrider-card',
  },
  shredsauce: {
    title: 'Shred Sauce',
    sourceLabel: 'SPORTS GAME',
    url: 'https://shredsauce.com/',
    icon: '🏂',
    note: 'Ski & snowboard',
    cardClass: 'shredsauce-card',
  },
  shellshock: {
    title: 'Shell Shockers',
    sourceLabel: 'MULTIPLAYER',
    url: 'https://shellshock.io/',
    icon: '🥚',
    note: 'Arena shooter',
    cardClass: 'shellshock-card',
  },
  deadshot: {
    title: 'Deadshot.io',
    sourceLabel: 'MULTIPLAYER',
    url: 'https://deadshot.io/',
    icon: '🎯',
    note: 'Arena shooter',
    cardClass: 'deadshot-card',
  },
  crossyroad: {
    title: 'Crossy Road',
    sourceLabel: 'ARCADE',
    url: 'https://crossyroadgame.io/',
    icon: '🐔',
    note: 'Road crossing',
    cardClass: 'crossy-card',
  },
  granny: {
    title: 'Granny',
    sourceLabel: 'HORROR GAME',
    url: 'https://granny-games.com/',
    icon: '🗝',
    note: 'Escape',
    cardClass: 'granny-card',
  },
};

const homeScreen = document.querySelector('#home-screen');
const playerScreen = document.querySelector('#player-screen');
const gameName = document.querySelector('#game-name');
const gameType = document.querySelector('#game-type');
const gamePlayer = document.querySelector('#game-player');
const gameFrame = document.querySelector('#game-frame');
const directLink = document.querySelector('#direct-link');
const gameGrid = document.querySelector('#game-grid');
const screenTabs = document.querySelectorAll('[data-screen]');
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

function renderGameCards() {
  Object.entries(gameOptions).forEach(([key, game]) => {
    const card = document.createElement('button');
    card.className = `game-card ${game.cardClass}`;
    card.type = 'button';
    card.dataset.game = key;
    card.setAttribute('aria-label', `${game.title}, ${game.note}`);

    const icon = document.createElement('span');
    icon.className = 'game-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = game.icon;

    const title = document.createElement('span');
    title.className = 'game-card-title';
    title.textContent = game.title;

    const note = document.createElement('span');
    note.className = 'game-card-note';
    note.textContent = game.note;

    const arrow = document.createElement('span');
    arrow.className = 'card-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';

    card.append(icon, title, note, arrow);
    card.addEventListener('click', () => showGame(key));
    gameGrid.append(card);
  });
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

renderGameCards();
showHome();
