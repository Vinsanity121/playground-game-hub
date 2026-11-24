(() => {
  const gameFrame = document.querySelector('#game-frame');
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

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-screen="home"], [data-home-link]')) {
      fullscreenButton.hidden = true;
      return;
    }

    const selectedCard = event.target.closest('.game-card');
    if (!selectedCard) return;

    window.setTimeout(() => {
      const selectedTitle = selectedCard.querySelector('.game-card-title')?.textContent.trim();
      const playerScreen = document.querySelector('#player-screen');
      fullscreenButton.hidden = playerScreen.classList.contains('hidden') || selectedTitle !== 'Crossy Road';
    }, 0);
  });
})();
