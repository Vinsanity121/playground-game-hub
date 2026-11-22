# Playground

A lightweight game hub built with plain HTML, CSS, and JavaScript. It includes Catch the Spark, Orbit Dodge, Memory Flip, and Sun Clicker.

Sun Clicker is an idle game with ten celestial producers, research upgrades, milestones, offline earnings, random solar flares, and a Big Bang prestige reset. Progress saves in the browser.

## Run it

Open `index.html` in a browser. No build step or dependencies are needed.

## Deploy to Cloudflare Pages

The GitHub Actions workflow deploys the site to Cloudflare Pages whenever changes are pushed to `main`. The site is static, so its build command is empty and its output directory is the repository root (`.`).

One-time setup:

1. In Cloudflare, create a Pages project named `playground-game-hub` (Direct Upload is fine; the workflow handles later deployments).
2. Create a Cloudflare API token with **Cloudflare Pages: Edit** permission for the account.
3. In the GitHub repository, add Actions secrets named `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
4. Push to `main`. The workflow publishes the site to the `playground-game-hub` Pages project.

The deployment config is in `wrangler.toml`.

## Work on it together

1. Both clone the repository. Before starting a task, run `git pull`.
2. Work on separate branches for separate changes, then open a pull request for the other person to review.
3. Merge the pull request and pull the latest changes before starting the next task.
4. Keep game files in their own folders as the project grows (for example, `games/your-game/`).
