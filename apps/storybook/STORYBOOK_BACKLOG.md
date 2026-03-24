# Storybook backlog

Track progress on **fixing existing stories** and **adding missing stories** for `@repo/ui`. Rules of reference: `.cursor/rules/storybook.mdc`, placeholders in `packages/ui/src/assets/storybook/`.

**How to use:** Check boxes as you complete items. Run `pnpm --filter storybook build-storybook` and `pnpm lint` before merging meaningful batches.

---

## Phase 1 — Fix existing stories (correctness)

- [ ] **NavigationMenu** — Replace bogus second `href` (`/?path=/story/...`) with a normal path (e.g. `/blog/`).
- [ ] **Alert** — Replace `var(--sys-color-border)` in the story wrapper with a real token or visible dashed border from the design system.
- [ ] **HomePage** — Update the story comment: placeholders come from bundled imports (`placeholders.ts`), not raw `/assets/...` paths only.
- [ ] **NavigationLink `Active`** — Confirm `parameters.nextjs.router` works with Storybook 10 + Vite; if not, wire `next-navigation-mock` or a decorator so active styling is visible vs `Default`.
- [ ] **LogoImage** — Uncomment Small / Large / FillContainer stories **or** remove commented blocks.

**Exit:** Each item verified in the Storybook UI; CI green.

---

## Phase 2 — Deepen existing stories (coverage)

- [ ] **Button** — Stories for `asChild` + `Link`, `disabled`, optional `aria-label`; tighten `StoryObj<typeof Button>` where possible.
- [ ] **BlogCard** — Story without featured image (excerpt-only layout).
- [ ] **ProjectCard** — Stress variants: long title, many tags.
- [ ] **Typography** — `argTypes` or per-variant stories; align copy with tokens if pixel sizes drift.
- [ ] **NavigationBar** — Realistic `href`s; optional story without custom `logo` slot (if compatible).
- [ ] **ThemeToggle** — Optional: `parameters.docs` note on `data-theme` / `html` for debugging.
- [ ] **Primitives / Pairings** — Meaningful `meta.component` (or wrapper); consider using **`ColorSwatch`** in Primitives so the story matches shipped UI.

**Exit:** Clear API coverage for Button, BlogCard, NavigationLink; Primitives/Pairings documented in Docs tab.

---

## Phase 3 — New stories (components without stories)

### Tier A — Straightforward

- [ ] **Badge** — `Atoms/DisplayAtoms/Badge/Badge.tsx`
- [ ] **Container** — `Atoms/EnvironmentalAtoms/Container/Container.tsx` (exercise `as`: section vs main)
- [ ] **SectionLayout** — `Atoms/LayoutAtoms/SectionLayout/SectionLayout.tsx`
- [ ] **ColorSwatch** — `Atoms/Branding/Colors/ColorSwatch.tsx` (may merge with Phase 2 Primitives refactor)
- [ ] **Hero** — `Organisms/Hero/Hero.tsx`
- [ ] **Showcase** — `Organisms/Showcase/Showcase.tsx`
- [ ] **ShowcaseTemplate** — `Templates/ShowcaseTemplate/ShowcaseTemplate.tsx`
- [ ] **ConnectFooterSection** — `Organisms/HomePage/ConnectFooterSection.tsx` (e.g. `defaultConnect`)

### Tier B — Homepage sections (isolated)

- [ ] **SplitHomeHero**
- [ ] **MissionProvocation**
- [ ] **FeaturedPillarsSection**
- [ ] **VisionRoadmapSection**

### Tier C — Alternate shells

- [ ] **DocsHomePage** — Same spirit as HomePage; docs defaults; fullscreen layout if needed.

### Tier D — Deferred / spike

- [ ] **LogoImage** (async server) — Document in story description: **LogoImageClient** is the Storybook target; server component optional.
- [ ] **BlogShowcase** (async) — Spike: MSW, loader, or presentational split.

---

## Phase 4 — Consistency pass

- [ ] ESLint clean on all `*.stories.tsx` (`pnpm --filter @repo/ui lint`).
- [ ] String image mocks: `placeholderSrc()` / `StaticImageData` usage consistent.
- [ ] Optional: one bullet in `.cursor/rules/storybook.mdc` on WP-shaped URLs and server-only components.

---

## Suggested sprint order

1. **Sprint 1:** Phase 1 + Button / BlogCard / NavigationMenu href.
2. **Sprint 2:** Phase 2 remainder + Tier A (Badge, Container, SectionLayout, ConnectFooter).
3. **Sprint 3:** Tier B + Hero + Showcase + ShowcaseTemplate + DocsHomePage as needed.
4. **Sprint 4:** Tier D only if scheduled.

---

## Reference — components still without any story

See prior audit: Badge, ColorSwatch, Container, SectionLayout, BlogShowcase, Showcase, Hero, ConnectFooterSection, DocsHomePage, FeaturedPillarsSection, MissionProvocation, SplitHomeHero, VisionRoadmapSection, ShowcaseTemplate; server: `LogoImage`, async `BlogShowcase`.

---

*Last updated: created with two-layer tracking (`progress.md` points here).*
