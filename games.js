const ACCESS_CODE = '1311';
const ACCESS_SESSION_KEY = 'playground-access-unlocked';

const unlockScreen = document.querySelector('#unlock-screen');
const siteContent = document.querySelector('#site-content');
const unlockForm = document.querySelector('#unlock-form');
const accessCodeInput = document.querySelector('#access-code');
const unlockError = document.querySelector('#unlock-error');

function showSite() {
  unlockScreen.hidden = true;
  siteContent.hidden = false;
}

if (sessionStorage.getItem(ACCESS_SESSION_KEY) === 'true') {
  showSite();
}

unlockForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (accessCodeInput.value === ACCESS_CODE) {
    sessionStorage.setItem(ACCESS_SESSION_KEY, 'true');
    unlockError.hidden = true;
    showSite();
  } else {
    unlockError.hidden = false;
    accessCodeInput.value = '';
    accessCodeInput.focus();
  }
});

const gameOptions = {
  doge: {
    title: 'Doge Miner 2',
    sourceLabel: 'BROWSER GAME',
    url: 'https://dogeminer2.com/play/',
    icon: 'Ð',
    note: 'Clicker',
    cardClass: 'doge-card',
  },
  polytrack: {
    title: 'PolyTrack',
    sourceLabel: 'SELF-HOSTED REUPLOAD',
    url: './games/polytrack/',
    icon: '🏁',
    note: 'Racing',
    cardClass: 'polytrack-card',
  },
  game2048: {
    title: '2048',
    sourceLabel: 'SELF-HOSTED',
    url: './games/catalog-sample/2048/',
    icon: '🔢',
    note: 'Puzzle',
    cardClass: 'game-2048-card',
  },
  breaklock: {
    title: 'Breaklock',
    sourceLabel: 'SELF-HOSTED',
    url: './games/catalog-sample/breaklock/',
    icon: '🔐',
    note: 'Pattern puzzle',
    cardClass: 'breaklock-card',
  },
  wbwwb: {
    title: 'We Become What We Behold',
    sourceLabel: 'SELF-HOSTED',
    url: './games/catalog-sample/we-become-what-we-behold/',
    icon: '📰',
    note: 'Interactive story',
    cardClass: 'wbwwb-card',
  },
  gta: {
    title: 'GTA Simulator',
    sourceLabel: 'CATALOG PAGE',
    url: 'https://sites.google.com/view/drive-u-7-home/gta',
    icon: '🚘',
    note: 'City driving',
    cardClass: 'gta-card',
  },
  nitrocar: {
    title: 'Nitro Car',
    sourceLabel: 'CATALOG PAGE',
    url: 'https://sites.google.com/view/drive-u-7-home/nitro-car',
    icon: '🏎️',
    note: 'Racing',
    cardClass: 'nitro-car-card',
  },
  dunedash: {
    title: 'Dune Dash',
    sourceLabel: 'CATALOG PAGE',
    url: 'https://sites.google.com/view/drive-u-7-home/dune-dash',
    icon: '🏜️',
    note: 'Dune racing',
    cardClass: 'dune-dash-card',
  },
  digoutofprison: {
    title: 'Dig Out of Prison',
    sourceLabel: 'BROWSER GAME',
    url: 'https://www.crazygames.com/game/dig-out-of-prison',
    icon: '🪏',
    note: 'Escape puzzle',
    cardClass: 'dig-out-prison-card',
  },
  maggario: {
    title: 'Maggar.io',
    sourceLabel: 'CATALOG PAGE',
    url: 'https://sites.google.com/view/drive-u-7-home/maggar-io',
    icon: '🎮',
    note: 'Multiplayer arena',
    cardClass: 'maggar-card',
  },
  motox3mwinter: {
    title: 'Moto X3M Winter',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-moto-x3m-winter',
    icon: '🏍️',
    note: 'Winter motocross',
    cardClass: 'moto-x3m-winter-card',
  },
  trucksimulator: {
    title: 'Truck Simulator',
    sourceLabel: 'CATALOG PAGE',
    url: 'https://sites.google.com/view/drive-u-7-home/truck-simulator',
    icon: '🚚',
    note: 'Driving',
    cardClass: 'truck-simulator-card',
  },
  diep: {
    title: 'Diep.io',
    sourceLabel: 'BROWSER GAME',
    url: 'https://diep.io/',
    icon: '🛡️',
    note: 'Tank arena',
    cardClass: 'diep-card',
  },
  footballbros: {
    title: 'Football Bros',
    sourceLabel: 'OFFICIAL GAME',
    url: 'https://fb.dunkbros.com/',
    icon: '🏈',
    note: 'Football',
    cardClass: 'football-bros-card',
  },
  basketbros: {
    title: 'Basket Bros',
    sourceLabel: 'OFFICIAL GAME',
    url: 'https://bb.basketbros.io/',
    icon: '🏀',
    note: 'Basketball',
    cardClass: 'basket-bros-card',
  },
  cookieclicker: {
    title: 'Cookie Clicker',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-cookie-clicker',
    icon: '🍪',
    note: 'Clicker',
    cardClass: 'cookie-clicker-card',
  },
  freeriderjumps: {
    title: 'Free Rider Jumps',
    sourceLabel: 'BIKE GAME',
    url: 'https://freeriderjumps.com/',
    icon: '🚴',
    note: 'Bike tracks',
    cardClass: 'freerider-jumps-card',
  },
  snowrider: {
    title: 'Snow Rider 3D',
    sourceLabel: 'SNOW RACING',
    url: 'https://snowrider3d.com/#google_vignette',
    icon: '❄',
    note: 'Sled racing',
    cardClass: 'snowrider-card',
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
    title: 'Road Hopper',
    sourceLabel: 'SELF-HOSTED',
    url: './games/road-hopper/',
    icon: '🛣️',
    note: 'Arcade crossing',
    cardClass: 'crossy-card',
  },
  energycrossing: {
    title: 'Energy Crossing',
    sourceLabel: 'SELF-HOSTED',
    url: './games/energy-crossing/',
    icon: '⚡',
    note: 'Arcade runner',
    cardClass: 'energy-crossing-card',
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
const gameAttribution = document.querySelector('#game-attribution');
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
  gameAttribution.hidden = key !== 'polytrack';
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
