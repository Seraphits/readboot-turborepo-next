'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navigation-link.module.scss';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  /** WP menu `target` (e.g. `_blank`); omit or null for same-tab. */
  target?: string | null;
}

function normalizePath(path: string): string {
  if (!path) return '/';
  if (path === '/') return '/';
  return path.replace(/\/+$/, '');
}

function isActivePath(currentPathname: string, rawHref: string): boolean {
  // Ignore non-route hrefs.
  if (!rawHref || rawHref === '#') return false;
  if (rawHref.startsWith('http') || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:')) {
    return false;
  }

  const pathname = normalizePath(currentPathname);
  const href = normalizePath(rawHref);

  // Root-like entries should be exact only.
  if (href === '/' || href === '/docs') {
    return pathname === href;
  }

  // Segment-aware child route matching.
  return pathname === href || pathname.startsWith(`${href}/`);
}

const NavigationLink = ({ href, children, target }: NavigationLinkProps) => {
  const pathname = usePathname();
  const isActive = isActivePath(pathname, href);
  const openNewTab = target === '_blank';

  return (
    <Link
      href={href}
      target={openNewTab ? '_blank' : undefined}
      rel={openNewTab ? 'noopener noreferrer' : undefined}
      className={`${styles.NavigationLink} ${isActive? styles['NavigationLink--active'] : ''}`}
      aria-current={isActive? 'page' : undefined}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
