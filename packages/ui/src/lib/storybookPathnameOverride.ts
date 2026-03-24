/**
 * Storybook-only: lets `next/navigation` mock return a pathname so nav “active” states work.
 * Used by `NavigationLink` stories and `apps/storybook/.storybook/next-navigation-mock.ts`.
 */
let pathnameOverride: string | null = null;

export function setStorybookPathnameOverride(path: string | null) {
  pathnameOverride = path;
}

export function getStorybookPathnameOverride(): string | null {
  return pathnameOverride;
}
