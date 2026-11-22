# Good Games — Cloudflare Pages starter

A static game shelf protected by a Cloudflare Pages Function. The access code and session signing key are runtime secrets; neither belongs in this repository.

## First game

PolyTrack is listed with a link to the official game by Kodub. This starter does not copy or redistribute a third-party mirror. The official game opens in a new tab.

## Configure private access

In Cloudflare, create a Pages project and add these **Production** secrets under **Settings → Variables and Secrets**:

- `SITE_ACCESS_CODE`: the shared code you chose. It is checked only in the Pages Function and is not shipped to visitors.
- `SESSION_SECRET`: a separate random secret of at least 32 characters used to sign 12-hour, HttpOnly, Secure, SameSite cookies.

For local development, copy `.dev.vars.example` to `.dev.vars`, replace the placeholders, and keep `.dev.vars` out of Git.

The shared code currently chosen is four digits. That is convenient for invited friends but weak against guessing on a public URL. Use a longer passphrase before relying on it for anything private or sensitive, and configure Cloudflare rate limiting for `/auth`. Cloudflare's built-in Worker rate limits are approximate and regional, so they are a speed bump, not strong protection against a determined attacker.

The Pages Function must run for every route so static files cannot bypass the gate. In Cloudflare Pages, set **Fail open / closed** to **Fail closed**. Pages Functions requests count against the Workers Free plan request limit.

## Deploy

This project is a plain static site with Pages Functions in `functions/`. In Cloudflare, create a Pages project named `goodgames-playzone`, upload this folder with Wrangler, or connect a GitHub repository and set the build command to empty and the output directory to `.`. Add the runtime secrets above before the first deployment.

After the project is deployed, attach a domain from the Pages project's **Custom domains** settings. A `.com` name must be available and registered before it can be attached. The requested `goodgames.com` already belongs to an active printing business. A possible alternative is `goodgamesplayzone.com`; check its live availability and price in Cloudflare before buying. Until then, use the project’s `pages.dev` address.

## Add another game

Add a new card in `index.html` and link to a game you have permission to distribute or embed. For a GitHub project, check the license and preserve its copyright and license notices before copying its files into this site.

