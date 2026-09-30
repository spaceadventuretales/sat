# GitHub Pages Deployment

This site is configured to be published at `https://sat.engilyin.com`.

The current Docusaurus settings already match that target:

- `url`: `https://sat.engilyin.com`
- `baseUrl`: `/`
- `organizationName`: `spaceadventuretales`
- `projectName`: `sat`

## One-time GitHub setup

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Set `Build and deployment` to `Deploy from a branch`.
4. Select branch `gh-pages` and folder `/(root)`.
5. Save the configuration.

## One-time DNS setup for the subdomain

Point `sat.engilyin.com` to GitHub Pages.

Recommended DNS record:

- Type: `CNAME`
- Name / Host: `sat`
- Target / Value: `spaceadventuretales.github.io`

Notes:

- If your DNS provider uses a trailing dot format, `spaceadventuretales.github.io.` is also valid.
- Do not point the subdomain to the repository path. The DNS target should be the GitHub Pages host for the account or organization.
- DNS propagation may take a few minutes to several hours depending on TTL and provider behavior.

## Keep the custom domain during deploys

This repository includes `static/CNAME` with the expected domain:

```text
sat.engilyin.com
```

Docusaurus copies everything from `static/` into the site root during build, so the generated `gh-pages` branch will keep the custom domain configuration.

## Manual deployment from local machine

Prerequisites:

- Node.js 20+
- `npm install` already run
- Push access to `spaceadventuretales/sat`

From this repository root:

```bash
npm install
npm run build
GIT_USER=spaceadventuretales npm run deploy
```

Windows notes:

- In PowerShell, prefer `npm.cmd` instead of `npm` if execution policy blocks `npm.ps1`.
- In Git Bash, the command above works as written.

PowerShell example:

```powershell
npm.cmd install
npm.cmd run build
$env:GIT_USER='spaceadventuretales'
npm.cmd run deploy
```

What this does:

- builds the static site
- publishes the output to the `gh-pages` branch
- pushes the branch to GitHub

## Verify after deploy

1. Open the GitHub Pages settings and confirm the custom domain shows `sat.engilyin.com`.
2. Wait for Pages to finish the publish.
3. Visit:
   - `https://sat.engilyin.com/`
   - `https://sat.engilyin.com/encyclopedia/intro`
   - `https://sat.engilyin.com/news`
4. If GitHub shows the `Enforce HTTPS` checkbox, enable it after the certificate is issued.

## Recommended publishing flow

Use this sequence for content changes:

1. Commit and push changes to the main development branch.
2. Run a local production build.
3. Deploy to `gh-pages`.
4. Verify the live routes and feed.

## Common failure cases

### Site loads without styles or routes break

Cause: `baseUrl` is wrong for the hosting model.

Expected value here:

```js
baseUrl: '/'
```

Because the site is served from a custom subdomain root, not from `/sat/`.

### GitHub Pages resets the custom domain

Cause: missing `CNAME` file in the published artifact.

Fix: keep `static/CNAME` committed with `sat.engilyin.com`.

### Deploy command cannot push

Cause: the local git identity or auth session does not have repository write access.

Fix: verify you can push normally to `spaceadventuretales/sat`, then rerun the deploy command.