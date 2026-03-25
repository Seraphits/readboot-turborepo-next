# NavigationBar

**Layer:** Organism

Site header: logo slot, **`NavigationMenu`**, optional **`ThemeToggle`**. **Server-friendly** by default (logo fetch stays server-side when using server logo patterns).

## Import

```tsx
import { NavigationBar } from '@repo/ui/organisms';
```

## Usage

- Pass **`menuItems`** with `href` + `label` (already transformed for the app — see `toWebHref` / `toDocsHref`).
- **Logo** slot: optional; default behavior uses logo pipeline from `@repo/wp-utils` where applicable.

## Storybook

`NavigationBar.stories.tsx`
