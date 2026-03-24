# Tokens & typography (how to use)

This page summarizes how **color tokens** and **typography** fit together in the shared UI package. The canvas stories under **Atoms → Branding** are the live previews; use this guide when you need the mental model or file paths.

## Color: reference vs system

| Layer | Sass prefix | Role |
| ----- | ----------- | ---- |
| **Tier 1 — reference** | `$ref-color-*` | Brand primitives (fixed “stars”). |
| **Tier 2 — system** | `$sys-color-*` | Role tokens used in components and modules. |

**Rule:** ship UI against **system** tokens (`$sys-*`). Reference tokens exist to **define** system tokens, not for ad-hoc use in feature SCSS.

- **Source of truth:** `packages/ui/src/patterns/Atoms/Branding/Colors/_colors-variables.scss`
- **Storybook swatches:** **Atoms → Branding → Colors → Primitives** — stories **Reference tokens (Tier 1)** and **System tokens (Tier 2)** (`colors-data.ts` mirrors hex for the canvas).

## Color pairings (SCSS)

Semantic **background / text / border** sets live in `_colors-pairings.module.scss` and are applied with the mixin in `_colors-mixins.scss`.

```scss
@use "../../Branding/Colors/colors-mixins" as colors;

.my-block {
  @include colors.apply-pairing("ink-dark-on-paper-light");
}
```

**Atoms → Branding → Colors → Pairings** shows each key with the exact `@include` line (keys match `pairingKeys.ts`).

## Typography

- **Component:** `Typography` — `variant` drives styles; use **`as`** for semantic HTML (`as="h1"`, `as="p"`, …).
- **Link variant:** use **`as="a"`** when you pass **`href`** so TypeScript accepts anchor props.
- **Styles:** `Typography.module.scss` (sizes, ink, action link color).
- **Storybook:** **Atoms → Branding → Typography → All variants** lists `h1`–`h6`, `body` (with `<strong>`), `caption`, and `link`.

## Imports (cross-package)

From app or package code, consume UI via **public exports** only (for example the `npm` scope paths documented in the monorepo). See `.cursor/rules/linking-standards.mdc`. Do not deep-import another package’s `src/`.
