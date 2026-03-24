import type { ReactNode } from 'react';
import LogoImage from '../../Atoms/Branding/Logo/LogoImage';
import NavMenu, { type NavigationLinkItem } from '../../Molecules/NavigationMenu/navigation-menu';
import { ThemeToggle } from '../../Molecules/ThemeToggle/ThemeToggle';
import styles from './navigation-bar.module.scss';

export interface NavigationBarProps {
  links: NavigationLinkItem[];
  /** Optional logo slot for non-WordPress contexts (e.g. Storybook). */
  logo?: ReactNode;
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
