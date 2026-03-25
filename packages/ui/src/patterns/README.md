# `patterns/` — ReadBoot UI layers

Components live under **Atoms → Molecules → Organisms → Templates**. Each **component folder** (the directory that contains the main `*.tsx`) includes a **`README.md`** with:

- **Import** — use `@repo/ui/atoms`, `@repo/ui/molecules`, `@repo/ui/organisms`, or `@repo/ui/templates` when the symbol is exported from that barrel (`package.json` → `exports`). If not re-exported, use `@repo/ui/patterns/...` (see `linking-standards` in `.cursor/rules/`).
- **When to use** — role of the component and layering rules.
- **Storybook** — stories are colocated as `*.stories.tsx`; the Storybook app indexes `packages/ui/src/patterns` so the sidebar path mirrors these folders.

Shared types (e.g. `PillarItem`) live in **`patterns/homeContentTypes/`** (`index.ts` + `README.md`).
