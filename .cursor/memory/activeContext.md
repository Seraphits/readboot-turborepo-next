Active Context: ReadBoot Shared UI

- Current Objective: Building the shared "Futurist Carton" component library in packages/ui.
- Active Task: Migrating basic components (Button, Card, Code) to use the new SCSS Module architecture.
- Status: Button is complete. Card and Code are pending migration.
- Recent: Fixed Vercel build timeout on /blog: (1) increased wp-utils fetch timeout 8s→25s; (2) added force-dynamic to /blog, /blog/category/[slug], /blog/post/[slug], /projects, /projects/[slug] so WordPress-dependent pages render on demand instead of at build time. Web build passes.
- Recent: Fixed docs rewrite redirect loop in apps/web/next.config.mts: destination URLs now include trailing slashes to match trailingSlash: true.
- Recent: Storybook viteFinal: server config now spreads ...config.server before allowedHosts: true. Nuclear clean executed; pnpm install completed.
- Recent: Dark mode fixes: ThemeToggle added to NavigationBar; localStorage persistence; beforeInteractive theme-init script in docs/web layouts; color-scheme + html[data-theme="dark"] in globals.scss.
- Recent: Sass module migration: \_colors-variables.scss uses sass:color and sass:math (no deprecated lighten/unit). Storybook hardening: pnpm catalog for Storybook/Vite, predev cache clear, main.ts double-encoding patch + URL middleware; see .cursor/memory/storybook-maintenance.md.
- Recent: Fixed branding SCSS module resolution + Turbopack `:export` parsing by updating `colors-pairings` imports and replacing `:export`-based pairing keys with `pairingKeys.ts`.
- Recent: Fixed WPGraphQL request storm / `net::ERR_HTTP2_PROTOCOL_ERROR` in browser by making `NavigationBar` a Server Component (logo fetch stays server-side) and adding a client-safety guard to `getWordPressData`.
- Recent: Linking standards refactor started: added `.cursor/rules/linking-standards.mdc`, exported `@repo/ui/templates`, removed deep `@repo/wp-utils/src` imports, applied docs `transformHref` via `toDocsHref`, and routed WP HTML through `WPContent` with click interception.
- Recent: Routing polish: added `toWebHref()` for web top-nav `transformHref` to avoid full refreshes from absolute WP URLs.
- Recent: Rules harmonization complete: updated branding/style-guide/accessibility `.mdc` files to use valid recursive globs and current `patterns/Atoms/**` token-source guidance.
- Recent: Rules tree audit pass: aligned `memory-bank.mdc` PRD path with actual location, resolved deprecated "glitch" references in web/docs, and generated remaining standards decisions.
- Recent: Legacy docs/pattern cleanup: removed obsolete UI components (`MediaMockup`, `CaptureForm`, `Masthead`, `ColorScheme`), updated docs style-guide pages to migration placeholders, fixed docs font parity by loading the same Google fonts as web, and added `apps/docs/STYLE_GUIDE_PATTERN_LAB_REBUILD_PLAN.md`.
- Recent: Docs atomic cleanup: converted style-guide layout/pages away from inline styles into SCSS-module-backed structure (`layout`, `default-styles`, `colors`, `patterns`, `spacing`, `ComponentShowcase`, logo docs page), and moved web slug error boundary styles to a module.
- Recent: Added reusable docs components (`SectionIntro`, `CodeExampleBlock`, `TokenCard`) and integrated them into style-guide pages to reduce page-level duplication and move toward atomic composition.
- Recent: Replaced web placeholder hero with full `HomePage` organism (split hero, mission w/ accent underline, three pillar cards, 100-year roadmap strip); `Button` gained `outline-on-light`; placeholders via placehold.co; doc `apps/web/HOMEPAGE_CONTENT.md` lists suggested CTA/link defaults.
- Recent: `ConnectFooterSection` moved to **web** and **docs** root layouts (`app/layout.tsx`, `app/docs/layout.tsx`) with shared `defaultConnect`; no longer part of `HomePage`.
- Recent: Fixed **TS path aliases** for `@repo/ui/atoms|molecules|organisms|templates` in `typescript-config/nextjs.json` + web/docs tsconfigs (was pointing at `src/*` instead of `patterns/*`, causing missing `BlogShowcase` in the IDE). Docs app added **`app/page.tsx`** → `redirect('/docs/')` so **standalone Vercel preview root `/`** no longer 404s; see `apps/docs/DEPLOYMENT.md`.
- Recent: **Docs landing page** — **`HomePage`** + `docsHomeDefaults.ts` (same template as portfolio; docs copy bundle); `apps/docs/app/docs/page.tsx` + `NEXT_PUBLIC_PORTFOLIO_ORIGIN` for portfolio CTA. Storybook: **`DocsLandingPreview`** under `HomePage.stories.tsx`.
- Recent: **Storybook sidebar** — `main.ts` indexes only `packages/ui/src/patterns`; all `title` removed from story meta; `preview.ts` `storySort` orders Atoms → Molecules → Organisms → Templates; ESLint + `.cursor/rules/storybook.mdc` guard against manual titles.
- Recent: **Storybook rules vs repo** — `storybook.mdc` documents DisplayAtoms/LayoutAtoms/EnvironmentalAtoms; BlogCard story uses `assets/storybook/` featured SVG; Button stories use typed `ButtonVariant` list; `@repo/ui` lint passes.
- Recent: **Web blog routes** — `/blog/`, `/blog/category/[slug]/`, `/blog/post/[slug]/` use **`ShowcaseTemplate`** + boxed **`ReadBootBand`** (optional CTA) + **`BlogCategoryNav`** + **`Showcase`** (data from **`getPosts`** in page RSCs) / **`BlogArticleLayout`** + `WPContent`; copy in **`apps/web/content/blogPage.ts`**; **`BlogCard`** CTA label from **`blogCardDefaults`**. Removed **`BlogShowcase`** (thin `getPosts` + `Showcase` wrapper); apps fetch posts and pass **`items`** / **`type="blog"`** / **`title`**.
- Recent: **Blog post sidebar** — **`BlogSidebar`** organism; **`getPostBySlug`** returns categories (`edges.isPrimary`, `node.slug/name`); **`getPosts`** supports **`excludePostId`** (GraphQL `notIn` + client filter fallback); post page reads **`searchParams.from`**, resolves category (`resolveSidebarCategory`), grid + rail when related posts exist; category **`Showcase`** passes **`blogFromCategorySlug`** for **`?from=`** on card links; **`metadataBase`** + canonical clean URL in **`generateMetadata`**.
- Recent: **GitHub CI** — lint, typecheck, Storybook static build on main/PRs; a11y strict in Storybook preview; dedicated `assets/storybook/` SVG for blog card featured mock (logo not reused as article art).
- Recent: **CI Part 1** — workflow runs **guardrails** (`ripgrep` via apt), **Prettier** (`format:check`), then lint/types/Storybook build; `.prettierignore` added; repo formatted; `check:all` includes guardrails + format:check + lint + types.
- Recent: **Storybook backlog** — `apps/storybook/STORYBOOK_BACKLOG.md` tracks Phase 1–4 (fix stories, deepen coverage, new stories); `.cursor/memory/progress.md` links to it.
- Recent: **Storybook Phase 1** — NavigationMenu href fix; Alert border `#36454F`; HomePage story comment; `storybookPathnameOverride` + `next-navigation-mock` for NavigationLink active state; LogoImage Small/Large/FillContainer enabled.
- Recent: **Storybook Phase 2a** — Button: `args`-based Primary, `AsChildWithLink`, `Disabled`, `WithAriaLabel`; BlogCard `PostPreviewNoFeaturedImage`; ProjectCard `LongTitleManyTags` (`STORYBOOK_BACKLOG.md` updated).
- Recent: **Storybook Phase 2b** — NavigationBar: `REALISTIC_LINKS` (`/`, `/blog/`, `/projects/`, `/docs/`); `Default` + `LinksOnlyAppDefaultLogo`; ThemeToggle: `parameters.docs.description.component` for `data-theme` + `localStorage` (`theme`).
- Recent: **Storybook Phase 2c** — Typography: `AllVariants` story for h1–h6, body + `<strong>`, caption, link; `Typography.module.scss` filled in (sizes, ink/action colors, link hover/focus); meta docs note (`as="a"` for link + `href`).
- Recent: **Storybook Phase 2d** — `SYSTEM_COLORS` in `colors-data.ts`; Primitives: `ReferenceTokens` + `SystemTokens` with `ColorSwatch`; Pairings: mixin line `@include colors.apply-pairing('…')`, 4px/12px frame; `parameters.docs` on Primitives + Pairings.
- Recent: **Storybook Phase 2e** — Standalone `TokensAndTypography` doc story **removed** (deferred); per-story `parameters.docs` on Colors/Pairings/Typography remains; sidebar order no longer includes a top-level **Docs** group.
- Recent: **Storybook Phase 3a** — Stories: Badge, Container, SectionLayout, ColorSwatch; `Container.module.scss` class `.container` (was `.viewport-container`); `Badge` `ghost` variant styles.
- Recent: **Storybook Phase 3b** — Stories: Hero (centered + split/asymmetrical/preview + media placeholder), Showcase (project/blog grids), ShowcaseTemplate, ConnectFooterSection (`defaultConnect` + custom).
- Recent: **Storybook Phase 3c** — Tier B homepage sections: `SplitHomeHero`, `MissionProvocation` (accent + no-accent), `FeaturedPillarsSection` (three + single pillar), `VisionRoadmapSection` (defaults + longer timeline); `STORYBOOK_BACKLOG.md` Tier B checked.
- Recent: **Menu link targets** — WPGraphQL `target` on menu items flows through `packages/wp-utils` (`getMenuData` → `NavItem`) into `NavigationMenu` / `NavigationLink`; `_blank` links get `rel="noopener noreferrer"`; `toWebHref` / `toDocsHref` stay at the data layer.
- Recent: **Blog index + category archive** — shared `BlogListingPage` (`ShowcaseTemplate` + band + nav + `Showcase` + optional back link); routes keep separate URLs and own data/metadata.

ReadBoot Progress

- [x] Turborepo boilerplate initialized.
- [x] SCSS Module architecture established in packages/ui.
- [x] ReadBoot "Futurist Carton" design tokens defined.
- [x] Shared Button component completed.
- [x] Button on docs and web home pages to verify SCSS setup.
- [x] Shared global SCSS module in packages/ui; docs and web import from @repo/ui.
- [x] All SCSS in packages/ui only; page styles in @repo/ui/styles/page; apps have no SCSS.
- [ ] Migrate Card component to packages/ui/src/components/Card.
- [ ] Migrate Code component to packages/ui/src/components/Code.
- [ ] Initialize apps/web layout using shared components.

Current Focus: Monorepo governance complete. Knip: wp-utils entry points protected with `!` suffix. Style guide: manual audit checklist at .cursor/memory/style-guide-audit-checklist.md; patterns page hardcoded HEX replaced with design tokens. LCP: LogoImage/LogoImageClient have priority; Hero homepage uses centered layout (no image). Next: Task 3 Programmatic SEO (sitemap.ts via wp-utils).
