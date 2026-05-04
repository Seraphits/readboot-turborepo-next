import type { ReactNode } from "react";
import {
  NavigationMenu,
  ThemeToggle,
  type NavigationLinkItem,
} from "@repo/ui/molecules";
import { LogoImageClient } from "../../Atoms/Logo/LogoImageClient";
import "./index.scss";

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
    <header className="NavigationBar">
      <div className="NavigationBar__Logo">
        {logo ?? <LogoImageClient width="100%" height="100%" />}
      </div>
      <nav className="NavigationBar__Menu">
        <NavigationMenu links={links} />
      </nav>
      <div className="NavigationBar__Theme">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default NavigationBar;
