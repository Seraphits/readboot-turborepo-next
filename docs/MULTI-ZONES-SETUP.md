# Multi-zone routing: readboot.com/storybook

The **web** app (`apps/web`) owns **`readboot.com`**. It uses **`next.config.mts` rewrites** to proxy **`/storybook/`** to the **Storybook** Vercel deployment (`*.vercel.app`). This works on **Vercel Hobby** without the **Microfrontends dashboard group** (that feature has a low project limit on free tiers).

`apps/web/microfrontends.json` remains as a **reference** for path routing; routing is implemented by **rewrites in code**, not by grouping projects in the dashboard.

> The former **`apps/docs`** Next app has been removed from this repo. **`/docs/`** is no longer rewritten from `web`; host documentation elsewhere (e.g. Storybook, a future site) if needed.

## Prerequisites

1. **Domains:** `readboot.com` (and `www` if used) are attached only to the **web** project — not to Storybook.
2. **Root directories:** Web = `apps/web`, Storybook = `apps/storybook`.
3. **Storybook subpath:** Storybook is built with Vite `base: /storybook/`. The Storybook project includes **`apps/storybook/vercel.json`** so `/storybook/*` maps to static files at the build root.
4. **Web rewrites:** `apps/web/next.config.mts` proxies to `STORYBOOK_DEPLOYMENT_URL` (see file for defaults).

## What's configured

- **apps/web/next.config.mts** — `rewrites()` for `/storybook/`.
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

- https://readboot.com/storybook/

If you see **ERR_TOO_MANY_REDIRECTS**:

1. **www vs apex** — In the **web** project → **Settings → Domains**, pick **one** canonical host (`readboot.com` **or** `www.readboot.com`) and set the other to **redirect to it** exactly once. If both try to redirect to each other, the browser loops (`www` ↔ apex).
2. **Storybook project** — Do **not** attach `readboot.com` / `www` to the Storybook Vercel project; only the **web** project should serve the custom domain.
3. Redeploy **web** after changing `next.config.mts` or `vercel.json`.
