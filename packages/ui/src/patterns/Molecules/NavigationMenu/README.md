# NavigationMenu

**Layer:** Molecule

Accessible list of **`NavigationLink`** items with keyboard roving tabindex. Feed **`items`** with `href` + label; transform WordPress URLs in the **data layer** (`toWebHref` / `toDocsHref`) before passing props.

## Import

```tsx
import { NavigationMenu } from "@repo/ui/molecules";
```

## Usage

- Use in **`NavigationBar`** or standalone nav.
- Do not embed raw WP URLs without transformation — see `linking-standards.mdc`.

## Storybook

`NavigationMenu.stories.tsx`
