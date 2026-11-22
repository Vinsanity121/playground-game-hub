# Good Games — Cloudflare Pages

A static game shelf protected by a Cloudflare Pages Function. The access code and session signing key are runtime secrets; neither belongs in this repository.

## First game

PolyTrack is listed with a link to the official game by Kodub. This starter does not copy or redistribute a third-party mirror. The official game opens in a new tab.

## Configure deployment and private access

In the GitHub repository, open **Settings → Secrets and variables → Actions** and add these repository secrets:

- `CLOUDFLARE_API_TOKEN`: a Cloudflare API token with Cloudflare Pages edit permission.
- `CLOUDFLARE_ACCOUNT_ID`: the account ID shown in your Cloudflare dashboard.
- `SITE_ACCESS_CODE`: your shared access code.
- `SESSION_SECRET`: a separate random secret of at least 32 characters for signing 12-hour login sessions.

The deployment workflow creates the Pages project, transfers the two runtime secrets to Cloudflare over Wrangler, and deploys the site. Secret values are not written into Git. The site stays locked until all four secrets are set. After adding them, rerun the latest failed **Deploy Good Games to Cloudflare Pages** workflow.

The selected access code is only four digits, which is easy to guess on a public URL. Use a longer passphrase before relying on it for anything sensitive. For local development, copy `.dev.vars.example` to `.dev.vars`, replace the placeholders, and keep `.dev.vars` out of Git.

## Site address

The intended Pages address is `https://goodgames-playzone.pages.dev`. The exact requested `goodgames.com` already belongs to an active printing business. A possible alternative is `goodgamesplayzone.com`; check its live availability and price in Cloudflare before buying. Attach a purchased domain through the Pages project's **Custom domains** settings.

## Add another game

Add a new card in `index.html` and link to a game you have permission to distribute or embed. For a GitHub project, check the license and preserve its copyright and license notices before copying its files into this site.
