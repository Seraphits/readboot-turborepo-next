# Badge

**Layer:** Atom (Display)

Small status / label chip. Used inside card molecules and similar surfaces.

## Import

`Badge` is not on the `@repo/ui/atoms` barrel today; import from the package patterns export:

```tsx
import { Badge } from "@repo/ui/patterns/Atoms/DisplayAtoms/Badge/Badge";
```

Prefer composing through existing molecules (e.g. `BlogCard`, `ProjectCard`) when you only need default chip styling.

## Usage

Pass `variant` (e.g. `primary`, `outline`) and children. Styles use SCSS modules and design tokens — see `readboot-branding.mdc` in `.cursor/rules/`.

## Storybook

`Badge.stories.tsx` — variants and states.
