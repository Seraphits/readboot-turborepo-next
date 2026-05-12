# ContentSidebarNav

Unstyled, reusable sidebar navigation for greenfield Next apps.

## Import

```tsx
import { ContentSidebarNav } from "@repo/ui/sites";
```

## Usage

- Use when a page or layout needs a reusable side navigation made from app-provided links.
- Keep this component presentational only; fetch and map data in the app or data layer first.
- Suitable for library posts, case studies, docs sections, or any other title-based rail navigation.

## Notes

- Styling is intentionally minimal so app-level SCSS can own the final presentation.
- See `greenfield-next-sites.mdc`, `readboot-scss-architecture.mdc`, and `linking-standards.mdc`.
