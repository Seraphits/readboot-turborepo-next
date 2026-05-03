# Style Guide Manual Audit Checklist

**Route:** `/docs/style-guide` (apps/docs)

**Before using this file:** Brand and layout direction = **`readboot-branding.mdc`** (magazine-leaning, full-bleed, light chrome; **colors** unchanged). **Token / folder SSOT** = **`readboot-scss-architecture.mdc`**. This checklist is a **manual QA** aid; rows below may still describe **legacy** surfaces until the docs style-guide is rebuilt.

Run this checklist when verifying ReadBoot visuals propagate correctly from `packages/ui` to the docs app.

---

## 1. Visual Guardrails

| Check                     | Expected                                                               | Location                                      |
| ------------------------- | ---------------------------------------------------------------------- | --------------------------------------------- |
| Borders / frames          | Intentional accents only—not universal 4px charcoal on every block (`readboot-branding.mdc`) | Buttons, cards, sections                      |
| Legacy boxed surfaces     | If still present in `patterns/` components, match existing tokens       | BlogCard, cards, band wrappers                |
| Corner radius             | 12px where rounding applies (`readboot-branding.mdc`)                   | Buttons, cards, media slots                   |

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
| Design token source | **Legacy:** `patterns/Atoms/...`. **Greenfield:** `packages/ui/src/tokens/**` when populated (`readboot-scss-architecture.mdc`). |
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
