# Button

**Layer:** Atom (Interactive)

Primary interactive control for actions. Supports **`asChild`** (Radix Slot) for wrapping `next/link` or other elements.

## Import

```tsx
import { Button } from "@repo/ui/atoms";
```

## Usage

- Use **`variant`** for token-backed styles (e.g. `action-on-light`, `outline-on-light`).
- For navigation that should look like a button: `<Button asChild><Link href="...">...</Link></Button>` (see `linking-standards.mdc`).

SCSS: `Button.module.scss`; tokens from `patterns/Atoms/**`.

## Storybook

`Button.stories.tsx` — primary, `asChild` + `Link`, disabled, a11y.
