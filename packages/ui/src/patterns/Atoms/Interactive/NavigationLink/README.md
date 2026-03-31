# NavigationLink

**Layer:** Atom (Interactive)

Default export from `navigation-link.tsx`. Text link styled for nav/menus; pairs with **`NavigationMenu`** for roving tabindex / keyboard behavior.

## Import

```tsx
import { NavigationLink } from "@repo/ui/atoms";
```

(Barrel re-exports the default as `NavigationLink`.)

## Usage

- Pass **`href`**, **`children`**, optional **`active`** when the route matches (Storybook can set `parameters.nextNavigation.pathname` for previews).
- Do not use for long-form WordPress HTML — use **`WPContent`** from `@repo/wp-utils` in app routes per linking standards.

## Storybook

`NavigationLink.stories.tsx` — active state and pathname override.
