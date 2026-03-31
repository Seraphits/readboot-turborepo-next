# Style Guide Manual Audit Checklist

**Route:** `/docs/style-guide` (apps/docs)

Run this checklist when verifying the "Futurist Carton" aesthetic is correctly propagated from `packages/ui` to the docs app.

---

## 1. Visual Guardrails

| Check                     | Expected                                                               | Location                                      |
| ------------------------- | ---------------------------------------------------------------------- | --------------------------------------------- |
| Button borders            | 4px solid charcoal (`$ref-color-charcoal` / `var(--sys-color-border)`) | Button component, Component Library page      |
| Card / primary containers | 4px solid charcoal borders                                             | BlogCard, ColorScheme, any card-like surfaces |
| Corner radius             | 12px (`var(--sys-radius-primary)`)                                     | Buttons, cards, media slots                   |

---

## 2. Typography

| Check              | Expected                                         |
| ------------------ | ------------------------------------------------ |
| Headlines          | Baloo 2, font-weight 700                         |
| Body text          | Inter                                            |
| Verify in DevTools | `--sys-font-headline`, `--sys-font-body` applied |

---

## 3. SCSS Variable Injection

| Check               | Action                                                                                                    |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| No hardcoded HEX    | Search codebase for `#` in component styles; replace with `var(--sys-*)` tokens                           |
| Design token source | `packages/ui/src/patterns/Atoms/Branding/Colors/_colors-variables.scss`                                   |
| Config              | `next.config.mts` in apps/docs and apps/web must list `transpilePackages: ["@repo/ui", "@repo/wp-utils"]` |

---

## 4. Interactive State (Imagine Playground)

| Check            | Expected                                                       |
| ---------------- | -------------------------------------------------------------- |
| nuqs URL sync    | Toggle changes in UI → browser address bar updates immediately |
| Playground route | `/docs/style-guide/...` (when Imagine feature exists)          |

---

## 5. LCP Optimization (Completed)

| Asset           | Status                                              |
| --------------- | --------------------------------------------------- |
| LogoImage       | `priority` on `next/image` ✓                        |
| LogoImageClient | `priority` on `next/image` ✓                        |
| Hero (homepage) | Centered layout, no image; no LCP image to optimize |
| Layout shift    | Logo uses `fill` with explicit parent dimensions ✓  |

---

## Quick Commands

```bash
# Run docs app for manual audit
pnpm --filter docs dev

# Search for hardcoded HEX in UI package
rg '#' packages/ui/src --glob '*.scss' --glob '*.tsx'
```
