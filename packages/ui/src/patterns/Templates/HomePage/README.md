# HomePage & DocsHomePage

**Layer:** Template

- **`HomePage`** — portfolio homepage stack: **`ReadBootBand`** (open), **`MissionProvocation`**, **`FeaturedPillarsSection`**, **`VisionRoadmapSection`**. Props override **`homePageDefaults`** (`portrait`, hero, mission, pillars, vision).
- **`DocsHomePage`** — same structure with **`docsHomeDefaults`** and docs-specific copy.

**Connect footer** is **not** inside these templates; it lives in **`app/layout.tsx`** (web/docs) as **`ConnectFooterSection`** + **`defaultConnect`**.

## Import

```tsx
import { HomePage } from '@repo/ui/templates';
import { DocsHomePage, defaultDocsHomeHero } from '@repo/ui/templates';
import type { PillarItem } from '@repo/ui/templates';
```

Shared types: **`PillarItem`** from **`patterns/homeContentTypes/`** (re-exported from templates). See that folder’s **`README.md`**.

## Usage

- Pass **`portraitSrc` / `portraitAlt`** for hero art when ready.
- **Defaults** live in **`homePageDefaults.ts`** and **`docsHomeDefaults.ts`** in this folder.

## Storybook

`HomePage.stories.tsx`, `DocsHomePage.stories.tsx`
