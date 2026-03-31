# ProjectCard

**Layer:** Molecule (Cards)

Card for a **project** shaped like `@repo/wp-utils` **`Project`** (title, excerpt, tags, lifecycle, slug, etc.).

## Import

```tsx
import { ProjectCard } from "@repo/ui/molecules";
```

## Usage

Pass **`project={...}`**. Links to **`/projects/[slug]`** are internal to the web app; ensure slugs match the routing app.

## Storybook

`ProjectCard.stories.tsx` — default and stress (long title, many tags).
