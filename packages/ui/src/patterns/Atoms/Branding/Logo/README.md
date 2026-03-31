# LogoImage & LogoImageClient

**Layer:** Atom (Branding)

- **`LogoImage`** (default export) — **async server component**: bundled ReadBoot mark by default, or WordPress site logo when **`useWordPressLogo`** (uses `getLogoData` from `@repo/wp-utils`). Use in **Next.js RSC** routes only.
- **`LogoImageClient`** — **client-safe**; same bundled asset, no WP fetch. Use in client islands, Storybook, and any `"use client"` parent.

## Import

```tsx
import { LogoImage, LogoImageClient } from "@repo/ui/atoms";
```

## Usage

- Prefer **`LogoImage`** in `app/` **Server Components** when you render the logo **directly** (e.g. style-guide pages).
- Prefer **`LogoImageClient`** where the tree is client-rendered or in Storybook.
- **`NavigationBar`** uses **`LogoImageClient`** for its built-in logo (bundled mark; optional **`useWordPressLogo`**) so **Storybook** and **Next.js** both work without an async server child in the client bundle.

## Storybook

`LogoImage.stories.tsx` — uses **`LogoImageClient`**; Docs tab explains server vs client.
