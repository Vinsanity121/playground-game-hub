(() => {
  const gameGrid = document.querySelector('#game-grid');
  const homeScreen = document.querySelector('#home-screen');
  const playerScreen = document.querySelector('#player-screen');
  const gameName = document.querySelector('#game-name');
  const gameType = document.querySelector('#game-type');
  const gamePlayer = document.querySelector('#game-player');
  const gameFrame = document.querySelector('#game-frame');
  const directLink = document.querySelector('#direct-link');
  const gameHeading = document.querySelector('.game-heading');
  const fullscreenButton = document.createElement('button');
  fullscreenButton.className = 'direct-link';
  fullscreenButton.type = 'button';
  fullscreenButton.textContent = 'Fullscreen ⛶';
  fullscreenButton.setAttribute('aria-label', 'Show Crossy Road fullscreen');
  fullscreenButton.style.cssText = 'font:inherit;cursor:pointer;margin-left:auto';
  fullscreenButton.hidden = true;
  gameHeading.style.cssText = 'display:flex;align-items:center;justify-content:space-between;gap:12px';
  gameHeading.append(fullscreenButton);

  fullscreenButton.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement === gameFrame) {
        await document.exitFullscreen();
      } else if (gameFrame.requestFullscreen) {
        await gameFrame.requestFullscreen();
      }
    } catch {
      fullscreenButton.title = 'Use the browser fullscreen control to expand the game.';
    }
  });
  document.addEventListener('fullscreenchange', () => {
    fullscreenButton.textContent = document.fullscreenElement === gameFrame
      ? 'Exit fullscreen'
      : 'Fullscreen ⛶';
  });

  gameGrid.querySelector('[data-game="crossyroad"]')?.remove();

  const card = document.createElement('button');
  card.dataset.game = 'crossyroad';
  card.className = 'game-card crossy-card';
  card.type = 'button';
  card.setAttribute('aria-label', 'Crossy Road, arcade crossing');

  const icon = document.createElement('span');
  icon.className = 'game-icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = '🐔';

  const title = document.createElement('span');
  title.className = 'game-card-title';
  title.textContent = 'Crossy Road';

  const note = document.createElement('span');
  note.className = 'game-card-note';
  note.textContent = 'Arcade crossing';

  const arrow = document.createElement('span');
  arrow.className = 'card-arrow';
  arrow.setAttribute('aria-hidden', 'true');
  arrow.textContent = '↗';

  card.append(icon, title, note, arrow);
  card.addEventListener('click', () => {
    document.querySelectorAll('[data-screen]').forEach((tab) => {
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
    });
    homeScreen.classList.add('hidden');
    playerScreen.classList.remove('hidden');
    directLink.hidden = false;
    directLink.href = './games/crossy-road/';
    directLink.textContent = 'Open directly ↗';
    gameName.textContent = 'Crossy Road';
    gameType.textContent = 'This is for educational purposes only.';
    fullscreenButton.hidden = false;
    gamePlayer.setAttribute('aria-label', 'Crossy Road game');
    gameFrame.title = 'Crossy Road';
    gameFrame.src = './games/crossy-road/';
  });
  gameGrid.append(card);

  document.addEventListener('click', (event) => {
    const selectedCard = event.target.closest('.game-card');
    if (!selectedCard) return;

    window.setTimeout(() => {
      if (playerScreen.classList.contains('hidden')) return;
      gameType.textContent = 'This is for educational purposes only.';
      fullscreenButton.hidden = selectedCard !== card;
    }, 0);
  });
})();
