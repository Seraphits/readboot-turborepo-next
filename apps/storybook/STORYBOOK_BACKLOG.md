# Storybook backlog

Track progress on **fixing existing stories** and **adding missing stories** for `@repo/ui`. Rules of reference: `.cursor/rules/storybook.mdc`, placeholders in `packages/ui/src/assets/storybook/`.

**How to use:** Check boxes as you complete items. Run `pnpm --filter storybook build-storybook` and `pnpm lint` before merging meaningful batches.

---

## Phase 1 — Fix existing stories (correctness)

- [x] **NavigationMenu** — Replace bogus second `href` (`/?path=/story/...`) with a normal path (e.g. `/blog/`).
- [x] **Alert** — Replace `var(--sys-color-border)` in the story wrapper with a real token or visible dashed border from the design system.
- [x] **HomePage** — Update the story comment: placeholders come from bundled imports (`placeholders.ts`), not raw `/assets/...` paths only.
- [x] **NavigationLink `Active`** — `parameters.nextNavigation.pathname` + decorator + `packages/ui/src/lib/storybookPathnameOverride.ts` + `next-navigation-mock` read override (removed non-functional `parameters.nextjs`).
- [x] **LogoImage** — Restored **Small**, **Large**, **FillContainer**; charcoal dashed frame for FillContainer.

**Exit:** Each item verified in the Storybook UI; CI green.

---

## Phase 2 — Deepen existing stories (coverage)

**Phase 2a (component stories):**

- [x] **Button** — Stories for `asChild` + `Link`, `disabled`, optional `aria-label`; tighten `StoryObj<typeof Button>` where possible.
- [x] **BlogCard** — Story without featured image (excerpt-only layout).
- [x] **ProjectCard** — Stress variants: long title, many tags.

**Phase 2b (nav + theme):**

- [x] **NavigationBar** — Realistic `href`s; optional story without custom `logo` slot (if compatible).
- [x] **ThemeToggle** — Optional: `parameters.docs` note on `data-theme` / `html` for debugging.

**Phase 2c (Typography):**

- [x] **Typography** — Show **every** `Typography` variant from `Typography.tsx`: `h1`–`h6`, `body`, `caption`, `link` (story currently only highlights h1/h2 + body + caption). Check **`Typography.module.scss`** for missing rules (e.g. link, h3–h6 sizing); if styles are incomplete, fix SCSS or document as follow-up. Include **bold** / inline emphasis if you standardize on `<strong>` inside `body` or a dedicated pattern.

**Phase 2e (Docs — how to use):**

- [x] **Tokens & typography guide** — `parameters.docs` on individual stories (2c/2d) plus **`patterns/Docs/TokensAndTypography.md`** (authorable Markdown) imported with **`?raw`** into **`TokensAndTypography.stories.tsx`** and rendered with **`Markdown`** from `@storybook/addon-docs/blocks` (MDX optional; avoids MDX compiler issues). Covers reference vs system tokens, pairings mixin usage, Typography `as` / link + `href`, and linking standards; `preview.ts` `storySort` puts **Docs** first.

**Phase 2d (colors + pairings + docs notes):**

- [x] **Primitives (`Colors` → reference swatches)** — Today’s story only maps **`BRAND_COLORS`** (Tier 1 **reference** tokens in `colors-data.ts`). Add a **second section (or story)** for **Tier 2 system colors** from `_colors-variables.scss` (`$sys-color-paper-light-bg`, `$sys-color-ink-dark-text`, `$sys-color-action-primary`, borders, status, etc.). **Rule to document:** components should consume **system** tokens; **reference** tokens exist to define system tokens, not for direct use in UI. Prefer **`ColorSwatch`** or parallel layout for consistency.
- [x] **Pairings story** — Each row must show the **SCSS mixin pairing key** used with `@include colors.apply-pairing('…')` (see `pairingKeys.ts` — e.g. `ink-dark-on-paper-light`, `action-on-light`, …). The older lab named these explicitly; restore that discoverability next to each preview. Keep visuals aligned with `_colors-pairings.module.scss` / `PAIRING_KEYS`.
- [x] **Storybook “how to use” / docs** — Use **`@storybook/addon-docs`** (already in the app) to add **usage notes**: short **Docs** description or a **`*.mdx`** companion for Colors (reference vs system), Typography variants, and default token/mixin patterns. Options: `parameters.docs.description` on the story meta, MDX file colocated with stories, or a “Usage” story that renders markdown via `docs` parameters.

**Exit (Phase 2 deepen):** Clear API coverage for Button, BlogCard, ProjectCard; Colors stories document **reference vs system**; Pairings show **mixin keys**; Typography shows **all variants**; Docs tab gives direction on tokens and pairings.

---

## Phase 3 — New stories (components without stories)

**Phase 3a (Tier A — atoms / small):**

- [x] **Badge** — `Atoms/DisplayAtoms/Badge/Badge.tsx`
- [x] **Container** — `Atoms/EnvironmentalAtoms/Container/Container.tsx` (exercise `as`: section vs main)
- [x] **SectionLayout** — `Atoms/LayoutAtoms/SectionLayout/SectionLayout.tsx`
- [x] **ColorSwatch** — `Atoms/Branding/Colors/ColorSwatch.tsx` (may merge with Phase 2 Primitives refactor)

**Phase 3b (Tier A — remainder):**

- [x] **Hero** — `Organisms/Hero/Hero.tsx`
- [x] **Showcase** — `Organisms/Showcase/Showcase.tsx`
- [x] **ShowcaseTemplate** — `Templates/ShowcaseTemplate/ShowcaseTemplate.tsx`
- [x] **ConnectFooterSection** — `Templates/HomePage/ConnectFooterSection.tsx` (e.g. `defaultConnect`)

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
2. **Sprint 2:** Phase 2 **design-token stories** (system colors + pairing mixin labels + full Typography variants + Docs/MDX usage notes) — high impact for daily component work.
3. **Sprint 3:** Phase 2 remainder (NavigationBar, ThemeToggle polish) + Tier A (Badge, Container, SectionLayout, ConnectFooter).
4. **Sprint 4:** Tier B + Hero + Showcase + ShowcaseTemplate + DocsHomePage as needed.
5. **Sprint 5:** Tier D only if scheduled.

---

## Reference — components still without any story

See prior audit: BlogShowcase, DocsHomePage, FeaturedPillarsSection, MissionProvocation, SplitHomeHero, VisionRoadmapSection; server: `LogoImage`, async `BlogShowcase`. (Phase 3a–3b: Badge, ColorSwatch, Container, SectionLayout, Hero, Showcase, ShowcaseTemplate, ConnectFooterSection.)

---

*Last updated: expanded Phase 2 with system vs reference colors, pairing mixin keys, full Typography variants, and addon-docs usage (portfolio feedback). Two-layer tracking: `progress.md` points here.*
