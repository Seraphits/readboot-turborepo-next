# ReadBootBand (hero presets)

**Layer:** Organism

Single hero **band** primitive with **`surface: 'boxed' | 'open'`** (see `readboot-layout-model.mdc`).

- **`surface="boxed"`** — ruled `SectionLayout` inset; headline, subhead, CTA, optional **`imageNode`** for non-centered layouts.
- **`surface="open"`** — portrait + kicker + headline + deck + lead + dual **Next.js `Link`** CTAs; no outer rule on the full band.

**Presets (same implementation):** **`BoxedFeatureHero`**, **`FullBleedHero`** — thin wrappers that set `surface` for ergonomic names.

## Import

```tsx
import { ReadBootBand, BoxedFeatureHero, FullBleedHero } from '@repo/ui/organisms';
```

## Usage

- Homepage / docs landing use **`ReadBootBand`** with **`surface="open"`** and props from template defaults.
- Portfolio header bands can use **`surface="boxed"`** (or **`BoxedFeatureHero`**) inside **`ShowcaseTemplate`** slots.

SCSS: `BoxedFeatureHero.module.scss` (boxed) and `FullBleedHero.module.scss` (open).

## Storybook

`ReadBootBand.stories.tsx` — boxed and open examples.
