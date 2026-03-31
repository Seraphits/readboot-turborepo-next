# NavigationBar

**Layer:** Organism

Site header: logo slot, **`NavigationMenu`**, optional **`ThemeToggle`**.

When **`logo`** is omitted, the bar renders **`LogoImageClient`** (bundled mark; optional **`useWordPressLogo`** for a client-side WP fetch). The async server **`LogoImage`** atom is not used here so **Storybook** and **Next.js** layouts behave consistently.

## Import

```tsx
import { NavigationBar } from "@repo/ui/organisms";
```

## Usage

- Pass **`links`** with `href` + `label` (already transformed for the app — see `toWebHref` / `toDocsHref`).
- **`logo`**: optional React node to replace the default logo (e.g. Storybook experiments).

## Storybook

`NavigationBar.stories.tsx`
