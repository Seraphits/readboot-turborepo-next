'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './BlogCategoryNav.module.scss';

export type BlogCategoryItem = { slug: string; name: string };

export interface BlogCategoryNavProps {
  categories: BlogCategoryItem[];
  allLabel: string;
  ariaLabel: string;
}

function normalizePath(path: string): string {
  if (!path) return '/';
  if (path === '/') return '/';
  return path.replace(/\/+$/, '') || '/';
}

export function BlogCategoryNav({ categories, allLabel, ariaLabel }: BlogCategoryNavProps) {
  const pathname = normalizePath(usePathname() ?? '/');
  const blogIndex = normalizePath('/blog/');

  const isAllActive = pathname === blogIndex;

  return (
    <nav className={styles.root} aria-label={ariaLabel}>
      <Link
        href="/blog/"
        className={clsx(styles.link, isAllActive && styles.linkActive)}
        aria-current={isAllActive ? 'page' : undefined}
      >
        {allLabel}
      </Link>
      {categories.map((cat) => {
        const href = `/blog/category/${cat.slug}/`;
        const catPath = normalizePath(href);
        const isActive = pathname === catPath || pathname.startsWith(`${catPath}/`);
        return (
          <Link
            key={cat.slug}
            href={href}
            className={clsx(styles.link, isActive && styles.linkActive)}
            aria-current={isActive ? 'page' : undefined}
          >
            {cat.name}
          </Link>
        );
      })}
    </nav>
  );
}
