# Typography

**Layer:** Atom (Branding)

Semantic text scale: **`as`** (polymorphic) + **`variant`** (`h1`–`h6`, `body`, `caption`, `link`). Use instead of raw `<h1>`–`<p>` in new UI so type stays on the Futurist Carton scale.

## Import

```tsx
import { Typography } from "@repo/ui/atoms";
```

## Usage

- Map headings and body copy to **`variant`**; use **`as`** when the DOM tag must differ (e.g. `as="h2"` with a visual `h1` scale only if design allows).
- Link styling: `variant="link"` and pass **`href`** when `as="a"`.

## Storybook

`Typography.stories.tsx` — all variants and emphasis patterns.
