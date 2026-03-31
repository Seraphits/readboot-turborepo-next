# BlogCard

**Layer:** Molecule (Cards)

Card for a **blog post** shaped like `@repo/wp-utils` **`Post`** (title, excerpt, optional featured image, slug).

## Import

```tsx
import { BlogCard } from "@repo/ui/molecules";
```

## Usage

Pass **`post={...}`**. Featured image URLs from mocks should use **`placeholderSrc()`** from `assets/storybook/placeholders.ts` in Storybook — see `storybook.mdc` (WP-shaped data).

## Storybook

`BlogCard.stories.tsx` — with and without featured image.
