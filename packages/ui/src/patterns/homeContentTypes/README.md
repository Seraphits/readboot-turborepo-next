# `homeContentTypes` (shared shapes)

Neutral **TypeScript-only** module at **`patterns/homeContentTypes/`** (`index.ts`). It holds content **shapes** used by **organisms** and **templates** so organisms do not import defaults from `Templates/HomePage/*` (avoids circular or awkward coupling).

## `PillarItem`

Fields: **`title`**, **`tagline`**, **`summary`**, **`actionLabel`**, **`href`**.

Used by **`FeaturedPillarsSection`** and by **`HomePage`** props (`pillars`). Default arrays live in **`homePageDefaults.ts`** and **`docsHomeDefaults.ts`**.

## Import

```tsx
import type { PillarItem } from '@repo/ui/organisms';
// or
import type { PillarItem } from '@repo/ui/templates';
```

Both barrels re-export **`PillarItem`** from this module (see `Organisms/index.tsx` and `HomePage.tsx` exports).

## When to extend

Add new shared homepage-style types here when more than one layer needs the same shape and the type must not live under a single template file.

## Related

- `readboot-layout-model.mdc` — content types and defaults (`.cursor/rules/`).
- `Templates/HomePage/README.md` — how defaults wire into pages.
