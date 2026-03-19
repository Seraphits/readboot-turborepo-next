# Docs app — Vercel & routing

## Why `app/docs/` exists

Next routes are defined by the folder name under `app/`. This project uses **`app/docs/layout.tsx`** and **`app/docs/page.tsx`** so the docs site is served at **`/docs/`** on whatever host runs the docs app.

That matches production UX on **readboot.com**: the web app rewrites `https://readboot.com/docs/` → your docs deployment, which serves the same path.

## Why the Vercel preview looked “broken” (404)

The **standalone docs project** preview URL is usually:

`https://readboot-turborepo-next-docs-….vercel.app/`

That hits route **`/`**. Before a root page existed, **`/` had no page** → Next.js **404**, even though **`/docs/`** worked.

**What we did:** `app/page.tsx` **`redirect('/docs/')`** so preview **root** sends users to the real homepage.

### How to verify a docs deployment

1. Open **`/`** on the deployment — should redirect to **`/docs/`**.
2. Open **`/docs/`** directly — should show the docs home (hero + content).
3. On **readboot.com**, use **`/docs/`** — served via the **web** app rewrite (unchanged).

## Thumbnail vs live preview on Vercel

The dashboard sometimes picks a different path for the thumbnail than the iframe (e.g. `/docs` vs `/`). If one shows content and the other 404, check the **exact URL** in the preview bar.

## TypeScript: `@repo/ui/organisms`

Subpaths must map to `packages/ui/src/patterns/...` in **tsconfig `paths`**, not `src/organisms`. Shared config lives in **`@repo/typescript-config/nextjs.json`**.
