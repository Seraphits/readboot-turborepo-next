# HomePage

**Layer:** Template

Single landing template: **`ReadBootBand`** (open), **`MissionProvocation`**, **`FeaturedPillarsSection`**, **`VisionRoadmapSection`**. Defaults for the portfolio site live in **`homePageDefaults.ts`**; the docs app uses **`docsHomeDefaults.ts`** (same props, docs copy).

**Connect footer** is **not** inside this template; it lives in **`app/layout.tsx`** (web/docs) as **`ConnectFooterSection`** + **`defaultConnect`**.

## Import

```tsx
import {
  HomePage,
  defaultDocsHomeHero,
  defaultDocsMission,
  defaultDocsPillars,
  defaultDocsVision,
} from '@repo/ui/templates';
import type { HomePageProps, PillarItem } from '@repo/ui/templates';
```

Shared types: **`PillarItem`** from **`patterns/homeContentTypes/`** (re-exported from templates). See that folder’s **`README.md`**.

## Usage

- Pass **`portraitSrc` / `portraitAlt`** for hero art when ready.
- **Portfolio** — use defaults from **`homePageDefaults.ts`** (or omit props).
- **Docs** — spread **`docsHomeDefaults`** or pass individual **`hero` / `mission` / `pillars` / `vision`** overrides (see **`apps/docs/app/docs/page.tsx`** for env-based CTA hrefs).

## Storybook

**`HomePage.stories.tsx`** — **`PortfolioPreview`** (portfolio defaults), **`DocsLandingPreview`** (docs defaults).
