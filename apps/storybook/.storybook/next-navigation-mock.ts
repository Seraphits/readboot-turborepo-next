/**
 * Mock for next/navigation used in Storybook (react-vite framework).
 * Provides no-op/safe values when Next.js router context is unavailable.
 */
export function usePathname() {
  return '';
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
