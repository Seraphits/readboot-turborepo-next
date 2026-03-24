import { getStorybookPathnameOverride } from "../../../packages/ui/src/lib/storybookPathnameOverride";

/**
 * Mock for next/navigation used in Storybook (react-vite framework).
 * Provides no-op/safe values when Next.js router context is unavailable.
 *
 * Stories set `parameters.nextNavigation.pathname`; `NavigationLink` stories use
 * `setStorybookPathnameOverride` from `@repo/ui` (see `storybookPathnameOverride.ts`).
 */
export function usePathname() {
  const fromStory = getStorybookPathnameOverride();
  if (fromStory !== null) return fromStory;
  return "";
}

export function useRouter() {
  return {
    push: () => {},
    replace: () => {},
    prefetch: () => {},
    back: () => {},
    forward: () => {},
    refresh: () => {},
  };
}

export function useSearchParams() {
  return new URLSearchParams();
}

export function useParams() {
  return {};
}
