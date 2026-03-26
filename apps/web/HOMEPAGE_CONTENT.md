# Homepage content & decisions (ReadBoot / Futurist Carton)

This doc replaces the older Gemini brief. **Glitch effects are removed** — they are deprecated in ReadBoot standards. Emphasis on “Alignment” uses **brand accent color + thick underline** only.

## What’s implemented

- **Split hero** — 12px radius, 4px charcoal frame on the portrait, two CTAs (primary fill + **outline** secondary). Copy lives in `packages/ui/.../Templates/HomePage/homePageDefaults.ts`.
- **Mission** — bordered panel, **newspaper `column-count`** over two short paragraphs, accent on the word *Alignment*.
- **Three pillars** — 4px bordered cards, `placehold.co` images until you ship real art.
- **100-year roadmap** — horizontal **4px** rule with labeled nodes (Artist, Philosopher, Nomad, Hero).
- **Connect footer** — headline, outbound links, copyright. Rendered from **`apps/web/app/layout.tsx`** and **`apps/docs/app/docs/layout.tsx`** via `<ConnectFooterSection {...defaultConnect} />` (shared defaults in `homePageDefaults.ts`).

Images use **`https://placehold.co`**; `apps/web/next.config.mts` allows that hostname for `next/image`.

---

## “Decisions” — concrete suggestions (pick or edit)

These are **defaults you can change** in one place: pass props to `<HomePage />` from `app/page.tsx`, or edit `homePageDefaults.ts`.

| Topic | Suggestion | Why |
|--------|------------|-----|
| **Primary CTA** | Label: *View portfolio* → `/projects/` | Sends visitors to proof of work first. |
| **Secondary CTA** | Label: *Documentation* → `/docs/` | Matches your monorepo/docs story; uses the existing rewrite. |
| **Headshot** | Replace `DEFAULT_PORTRAIT_PLACEHOLDER` with a file under `apps/web/public/` or a WP upload URL | Better LCP + authenticity; placeholders are only for now. |
| **Pillar 1 link** | *Explore the framework* → `/projects/` until a dedicated RBEOS route exists | Avoids a 404; swap when the page exists. |
| **Pillar 2 link** | *Read on the blog* → `/blog/` | Capstone story fits long-form blog until you add a case-study slug. |
| **Pillar 3 link** | *Open design docs* → `/docs/` | Describes the design-system / Turborepo lab. |
| **Footer email** | `mailto:hello@example.com` | **Replace** with your real address before launch. |
| **LinkedIn / GitHub** | Currently `https://www.linkedin.com/in/futuristnicole/` and `https://github.com/Seraphits/readboot-turborepo-next` | **Replace** with your profile URLs (same pattern in `defaultConnect.links`). |
| **Strauss-Howe copy** | Keep as-is for now | If you want a softer tone later, we can rephrase without the theory name. |
| **Footer scope** | **Global** — `ConnectFooterSection` in **web** and **docs** root layouts | Edit `defaultConnect` in `homePageDefaults.ts` (or pass custom props in each `layout.tsx`) to change links/copy site-wide. |
| **Copy ownership** | Repo defaults (`homePageDefaults.ts`) | Later: optional WordPress-driven blocks if editors need control without deploys. |

---

## Rules checklist (current standards)

- SCSS **modules** only; tokens from **`packages/ui` Atoms** (`colors-variables`, `fonts-variables`, spacing, geometric).
- **4px** borders on primary containers; **12px** radius; **bouncy** hover on buttons/links where specified.
- **No** `.fx--glitch`.
- **No** inline `style={{}}` in app TSX (guardrails).

---

## Quick override example

```tsx
// apps/web/app/page.tsx
import { HomePage, defaultHomeHero } from "@repo/ui/templates";

export default function Home() {
  return (
    <HomePage
      portraitSrc="/images/nicole.jpg"
      portraitAlt="Nicole Trapp"
      hero={{
        ...defaultHomeHero,
        primaryCta: { label: "Hire me", href: "/contact/" },
      }}
    />
  );
}
```

(Adjust paths when `/contact/` or `/images/` exist.)

**Footer (all routes):** change `defaultConnect` in `packages/ui/.../Templates/HomePage/homePageDefaults.ts`, or in `apps/web/app/layout.tsx` / `apps/docs/app/docs/layout.tsx` replace `<ConnectFooterSection {...defaultConnect} />` with explicit props.
