import styles from './NavMenu.module.scss';
import Link from 'next/link';

export interface NavLinkItem {
  id?: string;
  label: string;
  href?: string;
  /** API returns url; component uses href ?? url */
  url?: string;
  children?: NavLinkItem[];
}

export interface NavMenuProps {
  links: NavLinkItem[];
}

function getHref(item: NavLinkItem): string {
  return item.href ?? item.url ?? '#';
}

export default function NavMenu({ links }: NavMenuProps) {
  return (
    <ul className={styles.NavMenu__List}>
      {links.map((item) => (
        <li key={item.id ?? item.label} className={styles.NavMenu__Item}>
          <Link href={getHref(item)}>{item.label}</Link>

          {/* Recursive check for children */}
          {item.children && item.children.length > 0 && (
            <ul className={styles.NavMenu__SubList}>
              {item.children.map((child) => (
                <li key={child.id ?? child.label} className={styles.NavMenu__SubItem}>
                  <Link href={getHref(child)}>{child.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}


