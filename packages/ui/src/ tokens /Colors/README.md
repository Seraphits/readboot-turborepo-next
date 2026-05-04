# Colors (ColorSwatch + token stories)

**Layer:** Atom (Branding)

- **`ColorSwatch`** — small swatch + label for documenting reference or system colors in Storybook and docs.
- **`Primitives.stories.tsx` / `Pairings.stories.tsx`** — Storybook-only labs for **reference vs system** tokens and **SCSS pairing mixin keys** (`@include colors.apply-pairing('…')`). They are not production route components.

## Import

```tsx
import { ColorSwatch } from "@repo/ui/atoms";
```

Pairing/Primitive “components” are stories; open the files under this folder to extend the labs.

## Usage

- **UI code** should consume **system** tokens via SCSS `@use` from Atoms token modules — see `readboot-branding.mdc`.
- Use **`ColorSwatch`** when building style-guide or internal docs UIs.

## Storybook

Open **Atoms → Branding → Colors** in the sidebar for Primitives, Pairings, and ColorSwatch.
