# Quality checks & CI (ReadBoot)

This document describes **what runs automatically** on pull requests and `main`, and **what to run locally** before you push so CI stays green.

## GitHub Actions (`.github/workflows/ci.yml`)

Runs on **push to `main`** and on **pull requests**. Steps run in this order (fast failures first):

| Step               | Command / action                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Install            | `pnpm install --frozen-lockfile`                                                                                          |
| Ripgrep            | `apt` installs `ripgrep` (needed for `pnpm guardrails` on Linux runners)                                                  |
| Guardrails         | `pnpm guardrails` — see [Guardrails](#guardrails)                                                                         |
| Format             | `pnpm format:check` — Prettier on `**/*.{ts,tsx,md}` (respects `.prettierignore`)                                         |
| Lint               | `pnpm lint` (Turborepo across packages)                                                                                   |
| Typecheck          | `pnpm check-types`                                                                                                        |
| Build web          | `pnpm turbo run build --filter=web` with `NEXT_PUBLIC_WORDPRESS_API_URL` set to the public WPGraphQL endpoint (see below) |
| Build Trappsystems | `pnpm turbo run build --filter=@trappsystems/site` with the same `NEXT_PUBLIC_WORDPRESS_API_URL`                          |
| Build ReadBoot     | `pnpm turbo run build --filter=@readboot/site` with the same `NEXT_PUBLIC_WORDPRESS_API_URL`                               |
| Build Storybook    | `pnpm turbo run build-storybook --filter=storybook`                                                                       |

### CI environment for the web app build

The **web** production build step sets:

`NEXT_PUBLIC_WORDPRESS_API_URL=https://readboot.cloudaccess.host/graphql`

That matches the WordPress host used in `apps/web/next.config.mts` image `remotePatterns` and gives CI a defined GraphQL origin without using your private `.env.local`. Local development should still use `apps/web/.env.local` as needed.

## Local commands (repo root)

Use **pnpm** from the repository root (`pnpm` 9.x via Corepack).

| Script                    | Purpose                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------- |
| `pnpm format`             | Write Prettier formatting for `ts`, `tsx`, `md`                                               |
| `pnpm format:check`       | Verify formatting (same as CI)                                                                |
| `pnpm guardrails`         | Architectural checks (same as CI); requires **`rg` (ripgrep)** on your PATH                   |
| `pnpm check:all`          | `guardrails` → `format:check` → `lint` → `check-types`                                        |
| `pnpm build:web`          | Production `next build` for `web` only                                                        |
| `pnpm build:trappsystems` | Production `next build` for `@trappsystems/site` only                                         |
| `pnpm build:readboot`     | Production `next build` for `@readboot/site` only                                              |
| `pnpm quality`            | `check:all` then `build:web` + `build:trappsystems` + `build:readboot` — **recommended before important pushes** |
| `pnpm quality:full`       | `quality` plus Storybook static build — **matches the full CI job** (slower)                  |

### Prerequisites for guardrails locally

`scripts/guardrails.mjs` shells out to **`rg`**. Install ripgrep if `pnpm guardrails` fails with “command not found”:

- **macOS:** `brew install ripgrep`
- **Linux:** `apt install ripgrep` or your distro’s package

## Guardrails

Implemented in `scripts/guardrails.mjs`. Current checks (no matches allowed):

- Inline `style={{` in `apps/web`, `apps/docs`, `apps/trappsystems`, and `apps/readboot` TSX (prefer stylesheets when you add styling).
- Imports containing `@repo/.../src/` (use public package entrypoints only).
- Retired legacy docs identifiers in `apps` TSX (see script hints if this fires).

## Related rules

- Monorepo and `pnpm --filter`: `.cursor/rules/monorepo.mdc`
- Imports and `WPContent`: `.cursor/rules/linking-standards.mdc`
- Branding / SCSS: `.cursor/rules/readboot-branding.mdc`
