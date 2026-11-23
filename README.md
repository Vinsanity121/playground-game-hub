# Playground

A browser game hub with Doge Miner 2, Cookie Clicker, PolyTrack, Free Rider Jumps, Free Rider HD, Snow Rider 3D, Shred Sauce, Shell Shockers, Deadshot.io, Crossy Road, and Granny. Games open inside the player, with an **Open directly** fallback for sites that block embedding.

PolyTrack is served from a pinned, self-hosted copy of Kodub’s official 0.6.3 web build. The deploy workflows download the build directly from Kodub’s web host, enable its unblocked-hosting setting, and keep the game’s original outbound links intact. The site displays the required attribution, official CrazyGames link, and unofficial noncommercial reupload notice. PolyTrack’s online services still connect to Kodub. Other third-party games remain links unless their rights holders allow redistribution; Energy Crossing is hosted locally.

## Deploy to Cloudflare Pages

The Cloudflare Pages workflow deploys the site to <https://vinsanity-game-hub.pages.dev/>. On its first run it creates the Pages project, then publishes the site files from the repository root.

Add these repository Actions secrets before running the workflow:

- `CLOUDFLARE_API_TOKEN`: an API token with Cloudflare Pages Edit permission.
- `CLOUDFLARE_ACCOUNT_ID`: the account ID shown in the Cloudflare dashboard.

Then open **Actions → Deploy game hub to Cloudflare Pages → Run workflow**. Later pushes to `index.html`, `styles.css`, or `games.js` publish automatically.

## GitHub Pages

The GitHub Pages workflow remains available and publishes the same public game hub to <https://vinsanity121.github.io/playground-game-hub/>.
