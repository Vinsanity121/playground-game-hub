const gameOptions = {
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
  energycrossing: {
    title: 'Energy Crossing',
    sourceLabel: 'SELF-HOSTED',
    url: './games/energy-crossing/',
    icon: '⚡',
    note: 'Arcade runner',
    cardClass: 'energy-crossing-card',
  },
};




const FAVORITES_STORAGE_KEY = 'playground-favorites-v1';
const RECENTS_STORAGE_KEY = 'playground-recents-v1';
const gameSearch = document.querySelector('#game-search');
const catalogSummary = document.querySelector('#catalog-summary');
const catalogEmpty = document.querySelector('#catalog-empty');
const allCount = document.querySelector('#all-count');
const favoritesCount = document.querySelector('#favorites-count');
const recentCount = document.querySelector('#recent-count');
const filterButtons = document.querySelectorAll('[data-filter]');
let activeFilter = 'all';

function loadSavedList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value.filter((item) => typeof item === 'string' && gameOptions[item]) : [];
  } catch {
    return [];
  }
}

const favoriteKeys = new Set(loadSavedList(FAVORITES_STORAGE_KEY));
let recentKeys = loadSavedList(RECENTS_STORAGE_KEY).slice(0, 20);

function saveSavedList(key, values) {
  try {
    localStorage.setItem(key, JSON.stringify(values));
  } catch {
    // The catalog still works when browser storage is unavailable.
  }
}

function getVisibleGames() {
  const query = gameSearch.value.trim().toLocaleLowerCase();
  let entries = Object.entries(gameOptions);
  if (activeFilter === 'favorites') entries = entries.filter(([key]) => favoriteKeys.has(key));
  if (activeFilter === 'recent') {
    entries = recentKeys
      .filter((key) => Boolean(gameOptions[key]))
      .map((key) => [key, gameOptions[key]]);
  } else {
    entries.sort(([, first], [, second]) => first.title.localeCompare(second.title, undefined, { sensitivity: 'base' }));
  }
  if (!query) return entries;
  return entries.filter(([, game]) => [game.title, game.note, game.category, game.sourceLabel]
    .filter(Boolean).join(' ').toLocaleLowerCase().includes(query));
}

function updateCatalogCounts() {
  allCount.textContent = String(Object.keys(gameOptions).length);
  favoritesCount.textContent = String(favoriteKeys.size);
  recentCount.textContent = String(recentKeys.length);
}

function renderGameCards() {
  const entries = getVisibleGames();
  gameGrid.replaceChildren();
  entries.forEach(([key, game]) => {
    const card = document.createElement('article');
    card.className = `game-card ${game.cardClass}`;
    const playButton = document.createElement('button');
    playButton.className = 'game-card-play';
    playButton.type = 'button';
    playButton.setAttribute('aria-label', `Play ${game.title}`);
    const icon = document.createElement('span');
    icon.className = 'game-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = game.icon;
    const source = document.createElement('span');
    source.className = 'game-card-source';
    source.textContent = ({ TABSPAWN: 'TabSpawn', AESTRO: 'Aestro', KOMYO: 'Komyo', 'SELF-HOSTED': 'Self-hosted', 'SELF-HOSTED REUPLOAD': 'Self-hosted' })[game.sourceLabel] || game.sourceLabel;
    const title = document.createElement('span');
    title.className = 'game-card-title';
    title.textContent = game.title;
    const note = document.createElement('span');
    note.className = 'game-card-note';
    note.textContent = game.category || game.note;
    const arrow = document.createElement('span');
    arrow.className = 'card-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    playButton.append(icon, source, title, note, arrow);
    playButton.addEventListener('click', () => showGame(key));
    const favoriteButton = document.createElement('button');
    favoriteButton.className = 'favorite-toggle';
    favoriteButton.type = 'button';
    favoriteButton.textContent = favoriteKeys.has(key) ? '♥' : '♡';
    favoriteButton.setAttribute('aria-pressed', String(favoriteKeys.has(key)));
    favoriteButton.setAttribute('aria-label', favoriteKeys.has(key) ? `Remove ${game.title} from favorites` : `Add ${game.title} to favorites`);
    favoriteButton.addEventListener('click', () => {
      if (favoriteKeys.has(key)) favoriteKeys.delete(key);
      else favoriteKeys.add(key);
      saveSavedList(FAVORITES_STORAGE_KEY, [...favoriteKeys]);
      renderGameCards();
    });
    card.append(playButton, favoriteButton);
    gameGrid.append(card);
  });
  updateCatalogCounts();
  catalogSummary.textContent = gameSearch.value.trim()
    ? `Showing ${entries.length} of ${Object.keys(gameOptions).length} games`
    : `${entries.length} games`;
  catalogEmpty.hidden = entries.length > 0;
  if (!entries.length) {
    catalogEmpty.textContent = activeFilter === 'favorites' && !favoriteKeys.size
      ? 'Tap a heart on any game to save it here.'
      : activeFilter === 'recent' && !recentKeys.length
        ? 'Games you open will appear here.'
        : 'No games match your search.';
  }
}

gameSearch.addEventListener('input', renderGameCards);
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((filter) => filter.classList.toggle('active', filter === button));
    renderGameCards();
  });
});

const homeScreen = document.querySelector('#home-screen');
const playerScreen = document.querySelector('#player-screen');
const gameName = document.querySelector('#game-name');
const gameType = document.querySelector('#game-type');
const gamePlayer = document.querySelector('#game-player');
const gameFrame = document.querySelector('#game-frame');
const directLink = document.querySelector('#direct-link');
const featuredGames = document.querySelector('.featured-games');
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

featuredGames.querySelectorAll('[data-game]').forEach((button) => {
  button.addEventListener('click', () => showGame(button.dataset.game));
});

function showHome() {
  setActiveScreen('home');
  homeScreen.classList.remove('hidden');
  playerScreen.classList.add('hidden');
  directLink.hidden = true;
}

function showGame(key) {
  const game = gameOptions[key];
  if (!game) return;
  recentKeys = [key, ...recentKeys.filter((recentKey) => recentKey !== key)].slice(0, 20);
  saveSavedList(RECENTS_STORAGE_KEY, recentKeys);
  renderGameCards();

  setActiveScreen(key);
  homeScreen.classList.add('hidden');
  playerScreen.classList.remove('hidden');
  directLink.hidden = false;
  directLink.href = game.url;
  directLink.textContent = 'Open directly ↗';
  gameName.textContent = game.title;
  gameType.textContent = ({ TABSPAWN: 'TabSpawn', AESTRO: 'Aestro', KOMYO: 'Komyo', 'SELF-HOSTED': 'Self-hosted', 'SELF-HOSTED REUPLOAD': 'Self-hosted' })[game.sourceLabel] || game.sourceLabel;
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

renderGameCards();
showHome();
