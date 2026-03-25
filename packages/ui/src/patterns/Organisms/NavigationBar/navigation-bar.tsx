import type { ReactNode } from 'react';
import { LogoImageClient } from '../../Atoms/Branding/Logo/LogoImageClient';
import NavMenu, { type NavigationLinkItem } from '../../Molecules/NavigationMenu/navigation-menu';
import { ThemeToggle } from '../../Molecules/ThemeToggle/ThemeToggle';
import styles from './navigation-bar.module.scss';

export interface NavigationBarProps {
  links: NavigationLinkItem[];
  /**
   * Optional logo slot. When omitted, **`LogoImageClient`** (bundled mark; optional WP via
   * `useWordPressLogo` on the client) — not async **`LogoImage`**, so Storybook and RSC layouts both work.
   */
  logo?: ReactNode;
}

const NavigationBar = ({ links, logo }: NavigationBarProps) => {
  return (
    <header className={styles.NavigationBar}>
      <div className={styles.NavigationBar__Logo}>
        {logo ?? <LogoImageClient width="100%" height="100%" />}
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
