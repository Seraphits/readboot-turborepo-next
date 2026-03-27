# Multi-zone routing: readboot.com/docs and readboot.com/storybook

The **web** app (`apps/web`) owns **`readboot.com`**. It uses **`next.config.mts` rewrites** to proxy `/docs` and `/storybook` to the **docs** and **storybook** Vercel deployments (`*.vercel.app`). This works on **Vercel Hobby** without the **Microfrontends dashboard group** (that feature has a low project limit on free tiers).

`apps/web/microfrontends.json` remains as a **reference** for path routing; routing is implemented by **rewrites in code**, not by grouping projects in the dashboard.

## Prerequisites

1. **Domains:** `readboot.com` (and `www` if used) are attached only to the **web** project — not to docs or storybook.
2. **Root directories:** Web = `apps/web`, Docs = `apps/docs`, Storybook = `apps/storybook`.
3. **Storybook subpath:** Storybook is built with Vite `base: /storybook/`. The Storybook project includes **`apps/storybook/vercel.json`** so `/storybook/*` maps to static files at the build root.
4. **Web rewrites:** `apps/web/next.config.mts` proxies to `STORYBOOK_DEPLOYMENT_URL` / docs URLs (see file for defaults).

## What's configured

- **apps/web/next.config.mts** — `rewrites()` for `/docs/`, `/storybook/`, and `/vc-ap-*` (docs assets when applicable).
- **apps/docs** — Routes under `app/docs/` for `/docs`.
- **apps/storybook** — Dev URL: `http://localhost:6006/storybook/`.

## Domain migration (shell)

### 1. Alias the domain (Vercel CLI)

```bash
vercel alias set <your-main-app-deployment-url>.vercel.app readboot.com
```

### 2. Dashboard

1. Remove `readboot.com` from any **non-web** project if it was added by mistake.
2. On the **web** project → Domains → add `readboot.com` / `www` as needed.
3. **Redirect:** In Vercel Domains, set **either** apex **or** `www` as primary and redirect the other **once** (avoid conflicting redirect rules).

### 3. Verify

- https://readboot.com/docs/
- https://readboot.com/storybook/

If you see **ERR_TOO_MANY_REDIRECTS**, check **www vs apex** (single canonical) and that **docs/storybook** projects do **not** have `readboot.com` as a domain.
