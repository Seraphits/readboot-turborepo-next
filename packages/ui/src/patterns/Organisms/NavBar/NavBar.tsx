import LogoImage from '../../Atoms/Logo/LogoImage';
import NavMenu from '../../Molecules/NavMenu/NavMenu';
import type { NavLinkItem } from '../../Molecules/NavMenu/NavMenu';
import styles from './NavBar.module.scss';

export interface NavBarProps {
  links: NavLinkItem[];
  /** Optional logo slot for Storybook/client contexts (avoids async Server Component) */
  logo?: React.ReactNode;
}

const NavBar = ({ links, logo }: NavBarProps) => {
  return (
    <header className={styles.NavBar}>
      <div className={styles.NavBar__Logo}>
        {logo ?? <LogoImage />}
      </div>
      <div className={styles.NavBar__Menu}>
        <NavMenu links={links} />
      </div>
    </header>
  );
};

export default NavBar;
