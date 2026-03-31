import Link from "next/link";
import { SectionLayout } from "../../Atoms/LayoutAtoms/SectionLayout/SectionLayout";
import { Typography } from "../../Atoms/Branding/Typography/Typography";
import styles from "./BlogSidebar.module.scss";
import clsx from "clsx";

export interface BlogSidebarItem {
  href: string;
  title: string;
}

export interface BlogSidebarProps {
  title: string;
  items: BlogSidebarItem[];
  className?: string;
}

/**
 * Rail of links (e.g. other posts in the same category). Empty lists should not be rendered by the caller.
 */
export function BlogSidebar({ title, items, className }: BlogSidebarProps) {
  if (items.length === 0) return null;

  return (
    <aside className={clsx(styles.root, className)} aria-label={title}>
      <SectionLayout variant="centered" bordered className={styles.shell}>
        <Typography variant="h2" className={styles.heading}>
          {title}
        </Typography>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.href} className={styles.item}>
              <Link href={item.href} className={styles.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </SectionLayout>
    </aside>
  );
}
