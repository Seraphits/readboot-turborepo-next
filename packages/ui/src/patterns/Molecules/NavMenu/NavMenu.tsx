import NavLink from '../../Atoms/NavLink/NavLink';
import styles from './NavMenu.module.scss';

export interface NavMenuProps {
  links: { label: string; href: string }[];
}

const NavMenu = ({ links }: NavMenuProps) => {
  return (
    <nav className={styles.NavMenu}>
      <ul className={styles.NavMenu__List}>
        {links.map((link) => (
          <li key={link.href} className={styles.NavMenu__Item}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
