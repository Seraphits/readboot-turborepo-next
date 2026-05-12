# ContentLibrary

Unstyled, reusable library/archive UI for greenfield Next apps.

## Import

```tsx
import {
  ContentLibrary,
  ContentLibraryFilters,
} from "@repo/ui/sites";
```

## Usage

- Use for archive-style pages that list CMS entries with shared metadata.
- Pass normalized data from the app or `@repo/wp-utils`; do not fetch WordPress inside these components.
- Render article type and theory classifications here, but keep WordPress `tags` separate.

## Notes

- Styling is intentionally minimal so app-level SCSS can own the final presentation.
- See `greenfield-next-sites.mdc`, `readboot-scss-architecture.mdc`, and `linking-standards.mdc`.
