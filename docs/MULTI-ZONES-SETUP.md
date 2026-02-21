# Multi-Zones Setup: readboot.com/docs

This project uses **Vercel Microfrontends** to serve docs at readboot.com/docs.

## Prerequisites

1. **Microfrontends group**: In Vercel Dashboard → Settings → Microfrontends, create a group and add both `readboot-turborepo-next` (default) and `readboot-turborepo-next-docs`.
2. **Root directories**: Main app = `apps/web`, Docs app = `apps/docs`.

## What's configured

- **apps/web/microfrontends.json**: Routes `/docs` and `/docs/*` to the docs app. Must only exist in the default (web) app.
- **apps/docs**: All routes live under `app/docs/` so they match the `/docs` path.
- **apps/docs/package.json**: Build script sets `VC_MICROFRONTENDS_CONFIG_FILE_NAME=../web/microfrontends.json` so the docs app can find the config when building.

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
