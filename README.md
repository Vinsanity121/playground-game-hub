# Playground

A browser game hub with Doge Miner 2, Cookie Clicker, PolyTrack, Free Rider Jumps, Free Rider HD, Snow Rider 3D, Shred Sauce, Shell Shockers, Deadshot.io, Crossy Road, and Granny. Games open inside the player, with an **Open directly** fallback for sites that block embedding.

Cookie Clicker uses the requested third-party page at <https://cookieclickerunblocked.netlify.app/>. PolyTrack uses the unofficial browser build supplied for this project.

## Deploy to Cloudflare Pages

The Cloudflare Pages workflow deploys the site to <https://vinsanity-game-hub.pages.dev/>. On its first run it creates the Pages project, then publishes the site files from the repository root.

Add these repository Actions secrets before running the workflow:

- `CLOUDFLARE_API_TOKEN`: an API token with Cloudflare Pages Edit permission.
- `CLOUDFLARE_ACCOUNT_ID`: the account ID shown in the Cloudflare dashboard.

Then open **Actions → Deploy game hub to Cloudflare Pages → Run workflow**. Later pushes to `index.html`, `styles.css`, or `games.js` publish automatically.

## GitHub Pages

The GitHub Pages workflow remains available and publishes the same public game hub to <https://vinsanity121.github.io/playground-game-hub/>.
