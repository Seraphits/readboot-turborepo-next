# Style Guide + Pattern Lab Rebuild Plan

This document captures the agreed direction for rebuilding docs so we can return later without losing context.

## Goal

Rebuild the docs style guide and pattern lab using:

- WordPress backend for explanatory content and documentation copy.
- Storybook (portable stories) for live component previews.
- Shared UI styles from `@repo/ui/patterns/globals.scss` with SCSS token modules.

## Current Direction (Locked)

- Keep docs layout style (sidebar + content area) as the foundation.
- Retire static/legacy demo components that were only used for temporary experimentation.
- Prefer Storybook portable stories for interactive component examples in docs pages.
- Keep routing + nav data from WordPress (`getMenuData` + URL transforms).

## Rebuild Architecture

### 1) Content Source (WordPress)

Use WordPress pages or a dedicated content type for docs sections:

- Introduction
- Colors and tokens
- Patterns/components
- Spacing
- Motion
- Accessibility
- Iconography

Recommended data fields per section:

- `title`
- `slug`
- `introHtml` (rich text)
- `guidanceHtml` (do/don't, accessibility notes)
- `codeExample` (optional code block text)
- `storybookStories` (array of story keys)

### 2) Preview Source (Storybook Portable Stories)

For each docs section, map WP-provided story keys to local Storybook story modules.

Example idea:

- `atoms.button.primary`
- `molecules.blog-card.default`
- `organisms.navigation-bar.default`

Docs page renderer:

1. Fetch section content from WP.
2. Render copy blocks.
3. Render portable story components from mapped story keys.

### 3) Styling Contract

- Global docs/web styles load from `@repo/ui/patterns/globals.scss`.
- Component styles use SCSS token modules under `packages/ui/src/patterns/Atoms/**`.
- Avoid CSS variable usage (`var(--...)`) in docs/page inline styles where possible.

## Component Inventory for Rebuild

### Keep as Active Building Blocks

- `Button`
- `NavigationLink`
- `NavigationMenu`
- `NavigationBar`
- `ThemeToggle`
- `Alert`
- `BlogCard`
- `ProjectCard`
- `Hero`
- `Showcase`
- `ShowcaseTemplate`

### Retired/Removed Legacy Pieces

- `MediaMockup`
- `CaptureForm`
- `Masthead`
- `ColorScheme`

If needed later, reintroduce a replacement with clear product use and Storybook coverage.

## Migration Tasks (When Ready)

1. Create WP schema/content entries for docs sections and preview keys.
2. Implement docs content loader in `apps/docs` using `@repo/wp-utils`.
3. Build a story-key-to-portable-story registry in `apps/docs`.
4. Replace static style-guide page copy with WP-fetched content blocks.
5. Render story previews from the registry in each docs section page.
6. Add validation for unknown/missing story keys (safe fallback UI).
7. Add style regression checks:
   - `pnpm --filter docs build`
   - Storybook visual regression (Chromatic or screenshot tests)
   - Optional grep/lint checks for accidental `var(--...)` drift.

## Guardrails

- No cross-package deep imports (`@repo/*/src/...`).
- Use public subpaths (`@repo/ui/atoms`, `@repo/ui/molecules`, `@repo/ui/organisms`, `@repo/ui/templates`).
- WP-derived HTML must go through `WPContent`.
- Menu URLs must be transformed at fetch layer:
  - docs: `toDocsHref`
  - web: `toWebHref`

## Quick Start Checklist

When resuming this work, start here:

1. Confirm WordPress docs model fields are available.
2. Define first 3 story keys and registry mapping.
3. Convert `/docs/style-guide` intro page to WP copy + one portable story.
4. Verify docs font + global styles parity with web.
5. Expand one section at a time.
