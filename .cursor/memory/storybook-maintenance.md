# Storybook 10 + Vite 6 Maintenance (pnpm Monorepo)

Prevents recurrence of virtual-module 404 (vite-app.js double-encoding) and resolution persistence.

## What We Already Did (Hardening)

- **Sidebar = filesystem under `patterns/`**: `main.ts` uses a `stories` entry with `directory` → `packages/ui/src/patterns` (no `title` in `*.stories.tsx`; order via `preview.ts` `storySort`). See `.cursor/rules/storybook.mdc`.
- **Canvas parity with web**: `preview.ts` imports `packages/ui/src/patterns/globals.scss`. **Fonts** also need the same Google Fonts `<link>`s as `apps/web/app/layout.tsx` — those go in `.storybook/preview-head.html` (Storybook does not use Next’s `<head>`). **Manager chrome** (sidebar logo/title): `.storybook/manager.ts` + `apps/storybook/public/branding/readboot-logo.png` (see `staticDirs`). Tab icon: `public/favicon.png` + `preview-head.html` `<link rel="icon">`.
- **pnpm catalog** (root `pnpm-workspace.yaml`): Single-version policy for Storybook and Vite. All `@storybook/*` and `vite` in `apps/storybook` use `catalog:` so versions stay in sync. Requires pnpm 9.5+ (project uses 9.15.0).
- **predev cache clear** (`apps/storybook/package.json`): `predev` removes `node_modules/.cache/storybook` and `node_modules/.vite` before every `pnpm --filter storybook dev`, so the server never starts with a stale virtual-module map.
- **main.ts**: `server.fs.allow` with `searchForWorkspaceRoot`, `preTransformRequests: false`, `optimizeDeps.exclude` for builder/react-vite, and the double-encoding patch + URL-rewrite middleware for malformed request paths.
- **preview.ts**: No JSX in `.ts` (uses `React.createElement(Story)`) to avoid ESM parser errors in Storybook 10.3 + Vite 6.
- **Sass**: `_colors-variables.scss` and `_global-mixins.scss` use `sass:color` and `sass:math` (no deprecated global `lighten`/`unit`).
- **.npmrc**: `node-linker=hoisted` and `public-hoist-pattern=*storybook*` so Storybook sees a flat node_modules.

## Recurring Checklist

| Action | When | Purpose |
|--------|------|--------|
| Run `npx storybook doctor` from `apps/storybook` | After adding/upgrading addons or Storybook | Catch version mismatches and duplicate deps before they cause 404s. |
| Clear site data for localhost:6006 | If you see a persistent spinner or 404 after a major update | DevTools → Application → Storage → Clear site data. Hard refresh (Cmd+Shift+R) is not enough when a Service Worker has cached the bad path. |
| Unregister Service Worker for localhost:6006 | Same as above | Application → Service Workers → Unregister. |
| Don’t use `NODE_PRESERVE_SYMLINKS=1` with `node-linker=hoisted` | Always | With hoisted linker it can cause path mangling and 404s. |
| Pin Vite on upgrade | When upgrading Storybook | Keep `vite` at 6.0.11 (or a version noted in Storybook release notes). Update the catalog in `pnpm-workspace.yaml` and run `pnpm install`. |

## If 404 or Double-Encoding Comes Back

1. From repo root: `rm -rf node_modules/.cache apps/storybook/node_modules/.cache node_modules/.vite` then `pnpm install` then `pnpm --filter storybook dev`.
2. In browser: Clear site data + unregister Service Worker for localhost:6006, then open a new tab to http://localhost:6006.
3. If it still fails: run `pnpm list vite` and `npx storybook doctor` from `apps/storybook` and fix any version drift or duplicates.
