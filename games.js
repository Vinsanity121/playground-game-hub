const gameOptions = {
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
  cookieclicker: {
    title: 'Cookie Clicker',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-cookie-clicker',
    icon: '🍪',
    note: 'Clicker',
    cardClass: 'cookie-clicker-card',
  },
  crossyroad: {
    title: 'Road Hopper',
    sourceLabel: 'SELF-HOSTED',
    url: './games/road-hopper/',
    icon: '🛣️',
    note: 'Arcade crossing',
    cardClass: 'crossy-card',
  },
  'detective-logic-puzzle': {
    title: 'Detective Logic Puzzle',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-detective-logic-puzzle',
    icon: '🕵️',
    note: 'Logic puzzle',
    cardClass: 'coolmath-card',
  },
  'papas-freezeria': {
    title: 'Papa\'s Freezeria',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-papas-freezeria',
    icon: '🍦',
    note: 'Restaurant',
    cardClass: 'coolmath-card',
  },
  'chess': {
    title: 'Chess',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-chess',
    icon: '♟️',
    note: 'Strategy',
    cardClass: 'coolmath-card',
  },
  'tiny-fishing': {
    title: 'Tiny Fishing',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-tiny-fishing',
    icon: '🎣',
    note: 'Fishing',
    cardClass: 'coolmath-card',
  },
  'worldguessr': {
    title: 'WorldGuessr',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-worldguessr',
    icon: '🌍',
    note: 'Geography',
    cardClass: 'coolmath-card',
  },
  'slice-master': {
    title: 'Slice Master',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-slice-master',
    icon: '🔪',
    note: 'Arcade',
    cardClass: 'coolmath-card',
  },
  'suika': {
    title: 'Suika Watermelon Game',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-suika-watermelon-game',
    icon: '🍉',
    note: 'Merge puzzle',
    cardClass: 'coolmath-card',
  },
  'hangman': {
    title: 'Hangman',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-hangman',
    icon: '🔤',
    note: 'Word game',
    cardClass: 'coolmath-card',
  },
  'moto-x3m': {
    title: 'Moto X3M',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-moto-x3m',
    icon: '🏍️',
    note: 'Bike racing',
    cardClass: 'coolmath-card',
  },
  'moto-x3m-winter': {
    title: 'Moto X3M Winter',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-moto-x3m-winter',
    icon: '❄️',
    note: 'Bike racing',
    cardClass: 'coolmath-card',
  },
  'fireboy-watergirl': {
    title: 'Fireboy and Watergirl',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-fireboy-and-water-girl-in-the-forest-temple',
    icon: '🔥',
    note: 'Co-op platformer',
    cardClass: 'coolmath-card',
  },
  'fireboy-watergirl-5': {
    title: 'Fireboy and Watergirl 5: Elements',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-fireboy-watergirl-5-elements',
    icon: '💧',
    note: 'Co-op platformer',
    cardClass: 'coolmath-card',
  },
  'checkers': {
    title: 'Checkers',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-checkers',
    icon: '🔴',
    note: 'Strategy',
    cardClass: 'coolmath-card',
  },
  'dinosaur-game': {
    title: 'Dinosaur Game',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-dinosaur-game',
    icon: '🦖',
    note: 'Arcade',
    cardClass: 'coolmath-card',
  },
  'planet-clicker': {
    title: 'Planet Clicker',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-planet-clicker',
    icon: '🪐',
    note: 'Clicker',
    cardClass: 'coolmath-card',
  },
  'parking-fury-3': {
    title: 'Parking Fury 3',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-parking-fury-3',
    icon: '🚘',
    note: 'Driving',
    cardClass: 'coolmath-card',
  },
  '8-ball-pool': {
    title: '8 Ball Pool',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-8-ball-pool',
    icon: '🎱',
    note: 'Sports',
    cardClass: 'coolmath-card',
  },
  'maze-challenge': {
    title: 'Maze Challenge',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-maze-challenge',
    icon: '🌀',
    note: 'Maze',
    cardClass: 'coolmath-card',
  },
  'mancala': {
    title: 'Mancala',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-mancala',
    icon: '🪨',
    note: 'Strategy',
    cardClass: 'coolmath-card',
  },
  'cribbage': {
    title: 'Cribbage',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-cribbage',
    icon: '🃏',
    note: 'Card game',
    cardClass: 'coolmath-card',
  },
  'retro-ping-pong': {
    title: 'Retro Ping Pong',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-retro-ping-pong',
    icon: '🏓',
    note: 'Sports',
    cardClass: 'coolmath-card',
  },
  'crazy-eights': {
    title: 'Crazy Eights',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-crazy-eights',
    icon: '🂡',
    note: 'Card game',
    cardClass: 'coolmath-card',
  },
  'snake': {
    title: 'Snake',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-snake',
    icon: '🐍',
    note: 'Arcade',
    cardClass: 'coolmath-card',
  },
  'sugar-sugar': {
    title: 'Sugar, Sugar',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-sugar-sugar',
    icon: '🍬',
    note: 'Physics puzzle',
    cardClass: 'coolmath-card',
  },
  'b-cubed': {
    title: 'B-Cubed',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-b-cubed',
    icon: '🧊',
    note: 'Puzzle',
    cardClass: 'coolmath-card',
  },
  'bloxorz': {
    title: 'Bloxorz',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-bloxorz',
    icon: '🟫',
    note: 'Puzzle',
    cardClass: 'coolmath-card',
  },
  'coolmath-2048': {
    title: '2048 on Coolmath',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-2048',
    icon: '🔢',
    note: 'Puzzle',
    cardClass: 'coolmath-card',
  },
  'coolmath-games-the-game': {
    title: 'Coolmath Games: The Game',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/0-coolmath-games-the-game',
    icon: '🎮',
    note: 'Arcade',
    cardClass: 'coolmath-card',
  },
  'coolmath-catalog': {
    title: 'Browse Coolmath Games',
    sourceLabel: 'COOLMATH GAMES',
    url: 'https://www.coolmathgames.com/all-games',
    icon: '🕹️',
    note: 'Game catalog',
    cardClass: 'coolmath-card',
  },
  energycrossing: {
    title: 'Energy Crossing',
    sourceLabel: 'SELF-HOSTED',
    url: './games/energy-crossing/',
    icon: '⚡',
    note: 'Arcade runner',
    cardClass: 'energy-crossing-card',
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
