# ConnectFooterSection

**Layer:** Organism (Footer)

Global **connect** strip: title, outbound links (`next/link`), copyright. Landmark **`<footer>`**.

## Import

```tsx
import { ConnectFooterSection, defaultConnect } from "@repo/ui/templates";
```

`ConnectFooterSection` is implemented here but **re-exported from `@repo/ui/templates`** next to **`defaultConnect`** from `Templates/HomePage/homePageDefaults.ts` so apps can set footer copy in one place.

## Usage

```tsx
<ConnectFooterSection {...defaultConnect} />
```

Override props per layout if needed.

## Storybook

`ConnectFooterSection.stories.tsx`
