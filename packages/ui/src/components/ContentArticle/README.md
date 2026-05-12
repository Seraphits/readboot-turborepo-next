# ContentArticle

Unstyled, reusable article/detail-page building blocks for greenfield Next apps.

## Import

```tsx
import {
  ContentArticle,
  ContentArticleHeader,
  ContentFeaturedImage,
} from "@repo/ui/sites";
```

## Usage

- Use for single-entry routes after the app fetches and normalizes content data.
- Pair with `WPContent` or another body renderer; these components do not fetch CMS content themselves.
- Article type and theory classifications belong in the header metadata; WordPress `tags` stay separate.

## Notes

- Styling is intentionally minimal so app-level SCSS can own the final presentation.
- See `greenfield-next-sites.mdc`, `readboot-scss-architecture.mdc`, and `linking-standards.mdc`.
