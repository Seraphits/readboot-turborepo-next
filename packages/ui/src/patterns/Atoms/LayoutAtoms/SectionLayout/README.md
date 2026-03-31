# SectionLayout

**Layer:** Atom (Layout)

Grid shell presets (**`variant`**: `centered`, `split`, `grid`, `newspaper`, `stack`, `preview`, `asymmetrical`). Optional **`bordered`** applies the Futurist Carton frame (charcoal rule + radius).

## Import

```tsx
import { SectionLayout } from "@repo/ui/atoms";
```

## Usage

- Pass **`children`** as slot content; slot count depends on **`variant`** (see Storybook **VariantShowcase** and `layout-debug.module.scss` in stories for empty-slot previews).
- Used inside **`ReadBootBand`** (boxed surface) and **`Showcase`**, among others.

## Storybook

`SectionLayout.stories.tsx` — all variants + bordered showcase.
