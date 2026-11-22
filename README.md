# Playground

A small game hub built with HTML, CSS, and JavaScript. It includes Catch the Spark, Orbit Dodge, Memory Flip, Energy Collector, and an embedded Doge Miner 2 browser game.

Energy Collector is an idle energy game with 20 power stations, research, achievements, random Energy Surges, four Grid Lab minigames, 24-hour Core Crystals, offline earnings, and Legacy Watt reboots. Progress saves in the browser. Set the operator name to `ignitethegrid` to open the public test tools.

## Run locally

Open `index.html` in a browser. No build step or dependencies are needed.

## Deploy

The GitHub Actions workflow deploys the public game hub to Cloudflare Pages when changes reach `main`. The Pages project is `playground-game-hub`; its output directory is the repository root (`.`).

The workflow requires the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` Actions secrets in the repository. Deployment settings are in `wrangler.toml` and `.github/workflows/deploy.yml`.

## Work together

1. Both contributors clone the repository and run `git pull` before starting work.
2. Use a separate branch for each change and open a pull request for review.
3. Merge the pull request, then pull the latest `main` before starting another task.

Keep new games in their own folders as the collection grows (for example, `games/your-game/`).
