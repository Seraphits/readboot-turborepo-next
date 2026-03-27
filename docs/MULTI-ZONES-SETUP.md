# Multi-Zones Setup: readboot.com/docs and readboot.com/storybook

This project uses **Vercel Microfrontends** to serve docs at readboot.com/docs and Storybook at readboot.com/storybook.

## Prerequisites

1. **Microfrontends group**: In Vercel Dashboard → Settings → Microfrontends, create a group and add **`readboot-turborepo-next` (default)**, **`readboot-turborepo-next-docs`**, and **`readboot-turborepo-next-storybook`** (see `apps/web/microfrontends.json` routing).
2. **Root directories**: Main app = `apps/web`, Docs app = `apps/docs`, Storybook app = `apps/storybook`.
3. **Storybook static + subpath**: Storybook is built with Vite `base: /storybook/` so asset URLs resolve under `/storybook/`. The Storybook Vercel project includes **`apps/storybook/vercel.json`** rewrites (`/storybook/:path*` → `/:path*`) so files emitted at the build root still load when the browser requests `/storybook/...` on that deployment.
4. **Web app rewrites**: `apps/web/next.config.mts` proxies `/storybook/` to `STORYBOOK_DEPLOYMENT_URL` (default `https://readboot-turborepo-next-storybook.vercel.app`) with the **`/storybook/`** prefix preserved on the destination, matching the static build.

## What's configured

- **apps/web/microfrontends.json**: Routes `/docs` and `/docs/*` to the docs app; `/storybook` and `/storybook/:path*` to the Storybook app. Must only exist in the default (web) app.
- **apps/docs**: All routes live under `app/docs/` so they match the `/docs` path.
- **apps/docs/package.json**: Build script sets `VC_MICROFRONTENDS_CONFIG_FILE_NAME=../web/microfrontends.json` so the docs app can find the config when building.
- **apps/storybook**: Vite `base` is `/storybook/` by default (override with `STORYBOOK_BASE_PATH`). Dev URL: `http://localhost:6006/storybook/`.

## Phase 3: Zero-Downtime Domain Migration

### 1. Alias the domain (Vercel CLI)

```bash
vercel alias set <your-main-app-deployment-url>.vercel.app readboot.com
```

Replace `<your-main-app-deployment-url>` with the production URL of readboot-turborepo-next (e.g. `readboot-turborepo-next.vercel.app`).

### 2. Update dashboard settings

1. Go to your **old project** settings and remove `readboot.com` from Domains.
2. Go to **readboot-turborepo-next** project settings → Domains → add `readboot.com`.
3. Vercel will recognize the existing configuration; the transition should be instantaneous.

### 3. Verify

Visit https://readboot.com/docs to confirm the docs are served correctly.
