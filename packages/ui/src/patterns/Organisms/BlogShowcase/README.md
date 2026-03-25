# BlogShowcase

**Layer:** Organism

**Async server component**: fetches posts via **`getPosts`** from `@repo/wp-utils` and renders **`Showcase`** with **`type="blog"`**. Use on RSC pages (e.g. blog index).

## Import

```tsx
import { BlogShowcase } from '@repo/ui/organisms';
```

## Usage

- Not runnable in Storybook as-is; see **`BlogShowcase.stories.tsx`** for equivalent UI using **`Showcase` + `MOCK_POSTS`** from `assets/storybook/wpShowcaseMocks.ts`.
- For static previews, use **`Showcase`** directly with mock **`Post[]`**.

## Storybook

`BlogShowcase.stories.tsx` — documents server behavior + mock grid.
