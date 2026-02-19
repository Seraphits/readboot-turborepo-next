import NavigationLink from 'src/patterns/Atoms/NavigationLink/navigation-link';
import styles from './navigation-menu.module.scss';
// import Link from 'next/link';


export interface NavigationLinkItem {
  id?: string;
  label: string;
  href?: string;
  /** API returns url; component uses href ?? url */
  url?: string;
  children?: NavigationLinkItem[];
}

export interface NavigationMenuProps {
  links: NavigationLinkItem[];
}

function getHref(item: NavigationLinkItem): string {
  return item.href ?? item.url ?? '#';
}

export default function NavigationMenu({ links }: NavigationMenuProps) {
  return (
    <ul className={styles.NavigationMenu__List}>
      {links.map((item) => (
        <li key={item.id ?? item.label} className={styles.NavigationMenu__Item}>
          <NavigationLink href={getHref(item)}>{item.label}</NavigationLink>

          {/* Recursive check for children */}
          {item.children && item.children.length > 0 && (
            <ul className={styles.NavigationMenu__SubList}>
              {item.children.map((child) => (
                <li key={child.id ?? child.label} className={styles.NavigationMenu__SubItem}>
                  <NavigationLink href={getHref(child)}>{child.label}</NavigationLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}


