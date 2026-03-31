# Showcase

**Layer:** Organism

**Homogeneous** grid of **`ProjectCard`** or **`BlogCard`** inside **`SectionLayout`** **`variant="grid"`**. Pass **`items`** shaped as **`Project[]`** or **`Post[]`** from `@repo/wp-utils` and **`type`**.

## Import

```tsx
import { Showcase } from "@repo/ui/organisms";
```

## Usage

- Use **`BlogShowcase`** when you need WP fetch + blog type on the server.
- Storybook mocks use **`wpShowcaseMocks.ts`** for consistent **`placeholderSrc`** / `Post` / `Project` shapes.

## Storybook

`Showcase.stories.tsx`
