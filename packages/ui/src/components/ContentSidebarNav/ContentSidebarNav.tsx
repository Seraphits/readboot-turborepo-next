import Link from "next/link";
import styles from "./ContentSidebarNav.module.scss";

export interface ContentSidebarNavItem {
  id: string;
  title: string;
  href: string;
  isCurrent?: boolean;
}

export interface ContentSidebarNavProps {
  heading: string;
  items: ContentSidebarNavItem[];
  ariaLabel?: string;
}

export function ContentSidebarNav({
  heading,
  items,
  ariaLabel,
}: ContentSidebarNavProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <aside className={styles.root}>
      <h2 className={styles.heading}>{heading}</h2>
      <nav
        className={styles.nav}
        aria-label={ariaLabel ?? heading}
      >
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <Link
                href={item.href}
                aria-current={item.isCurrent ? "page" : undefined}
                className={`${styles.link}${item.isCurrent ? ` ${styles.current}` : ""}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
