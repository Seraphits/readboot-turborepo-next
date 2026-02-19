'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavLink.module.scss';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${styles.NavLink} ${isActive? styles['NavLink--active'] : ''}`}
      aria-current={isActive? 'page' : undefined}
    >
      {children}
    </Link>
  );
};

export default NavLink;
