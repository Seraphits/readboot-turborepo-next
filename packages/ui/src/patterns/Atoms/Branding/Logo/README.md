# LogoImage & LogoImageClient

**Layer:** Atom (Branding)

- **`LogoImage`** (default export) — **async server component**: bundled ReadBoot mark by default, or WordPress site logo when **`useWordPressLogo`** (uses `getLogoData` from `@repo/wp-utils`). Use in **Next.js RSC** routes only.
- **`LogoImageClient`** — **client-safe**; same bundled asset, no WP fetch. Use in client islands, Storybook, and any `"use client"` parent.

## Import

```tsx
import { LogoImage, LogoImageClient } from '@repo/ui/atoms';
```

## Usage

- Prefer **`LogoImage`** in `app/` **Server Components** (e.g. layout).
- Prefer **`LogoImageClient`** where the tree is client-rendered or in Storybook.

## Storybook

`LogoImage.stories.tsx` — uses **`LogoImageClient`**; Docs tab explains server vs client.
