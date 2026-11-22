const gameOptions = {
  doge: {
    title: 'Doge Miner 2',
    url: 'https://dogeminer2.com/play/',
  },
  polytrack: {
    title: 'PolyTrack · Unofficial',
    url: 'https://sites.google.com/view/newcargame/poly-track-0-6-0',
  },
};

const gameFrame = document.querySelector('#game-frame');
const gameName = document.querySelector('#game-name');
const gamePlayer = document.querySelector('.player');
const gameTabs = document.querySelectorAll('[data-game]');

gameTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const selected = gameOptions[tab.dataset.game];
    if (!selected) return;

    gameTabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });

    gameName.textContent = selected.title;
    gamePlayer.setAttribute('aria-label', `${selected.title} game`);
    gameFrame.title = selected.title;
    gameFrame.src = selected.url;
  });
});
