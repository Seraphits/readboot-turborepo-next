"use client"

import LogoImage from '../../Atoms/BrandingAtoms/Logo/LogoImage';
import NavMenu from '../../Molecules/NavigationMenu/navigation-menu';
import { ThemeToggle } from '../../Molecules/ThemeToggle/ThemeToggle';
import { NavigationLinkItem } from '../../Molecules/NavigationMenu/navigation-menu';
import styles from './navigation-bar.module.scss';

export interface NavigationBarProps {
  links: NavigationLinkItem[];
  /** Optional logo slot for Storybook/client contexts (avoids async Server Component) */
  logo?: React.ReactNode;
}

const NavigationBar = ({ links, logo }: NavigationBarProps) => {
  return (
    <header className={styles.NavigationBar}>
      <div className={styles.NavigationBar__Logo}>
        {logo ?? <LogoImage />}
      </div>
      <nav className={styles.NavigationBar__Menu}>
        <NavMenu links={links} />
      </nav>
      <div className={styles.NavigationBar__Theme}>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default NavigationBar;
