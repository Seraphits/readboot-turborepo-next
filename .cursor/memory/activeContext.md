Active Context: ReadBoot Shared UI
- Current Objective: Building the shared "Futurist Carton" component library in packages/ui.
- Active Task: Migrating basic components (Button, Card, Code) to use the new SCSS Module architecture.
- Status: Button is complete. Card and Code are pending migration.
- Recent: Fixed Vercel build timeout on /blog: (1) increased wp-utils fetch timeout 8s→25s; (2) added force-dynamic to /blog, /blog/category/[slug], /blog/post/[slug], /projects, /projects/[slug] so WordPress-dependent pages render on demand instead of at build time. Web build passes.

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

Current Focus: Storybook Portable Stories in Docs. Fixed: (1) document is not defined — removed StorybookSetup that imported .storybook/setup during SSR; (2) NextjsRouterMocksNotAvailable — switched ComponentShowcase to use composeStories from @storybook/react instead of @storybook/nextjs. Next: Verify style guide page loads at /docs/style-guide.
