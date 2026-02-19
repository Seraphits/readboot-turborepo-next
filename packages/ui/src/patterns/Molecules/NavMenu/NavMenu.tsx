import NavLink from '../../Atoms/NavLink/NavLink';
import styles from './NavMenu.module.scss';

export interface NavLinkItem {
  id?: string;
  label: string;
  href: string;
  children?: NavLinkItem[];
}

export interface NavMenuProps {
  links: NavLinkItem[];
}

const NavMenu = ({ links }: NavMenuProps) => {
  return (
    <nav className={styles.NavMenu}>
      <ul className={styles.NavMenu__List}>
       {links.map((link) => (
  <li key={link.id ?? `${link.href}-${link.label}`} className={styles.NavMenu__Item}>
    <NavLink href={link.href}>{link.label}</NavLink>

    {/* This creates the "layers" */}
    {link.children && link.children.length > 0 && (
      <ul className={styles.NavMenu__SubList}>
        <NavMenu links={link.children} />
      </ul>
    )}
  </li>
))}
      </ul>
    </nav>
  );
};

export default NavMenu;
