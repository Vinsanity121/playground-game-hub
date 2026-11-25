(() => {
  const gameFrame = document.querySelector('#game-frame');
  const gameHeading = document.querySelector('.game-heading');
  const fullscreenButton = document.createElement('button');

  fullscreenButton.className = 'direct-link';
  fullscreenButton.type = 'button';
  fullscreenButton.textContent = 'Fullscreen ⛶';
  fullscreenButton.setAttribute('aria-label', 'Enter game fullscreen');
  fullscreenButton.setAttribute('aria-pressed', 'false');
  fullscreenButton.style.cssText = 'font:inherit;cursor:pointer;margin-left:auto';
  fullscreenButton.hidden = true;
  gameHeading.style.cssText = 'display:flex;align-items:center;justify-content:space-between;gap:12px';
  gameHeading.append(fullscreenButton);

  function updateFullscreenButton() {
    const active = document.fullscreenElement === gameFrame;
    fullscreenButton.textContent = active ? 'Exit fullscreen' : 'Fullscreen ⛶';
    fullscreenButton.setAttribute('aria-label', active ? 'Exit game fullscreen' : 'Enter game fullscreen');
    fullscreenButton.setAttribute('aria-pressed', String(active));
  }

  fullscreenButton.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (gameFrame.requestFullscreen) {
        await gameFrame.requestFullscreen();
      }
    } catch {
      fullscreenButton.title = 'Fullscreen is unavailable for this game or browser.';
    }
  });

  document.addEventListener('fullscreenchange', updateFullscreenButton);

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-screen="home"], [data-home-link]')) {
      fullscreenButton.hidden = true;
      return;
    }

    if (!event.target.closest('.game-card')) return;

    window.setTimeout(() => {
      const playerScreen = document.querySelector('#player-screen');
      fullscreenButton.hidden = playerScreen.classList.contains('hidden');
    }, 0);
  });
})();
