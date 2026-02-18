// packages/ui/src/patterns/Atoms/NavLink/NavLink.tsx
'use client'; // 1. Add this directive [10, 9]

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 2. Change import to next/navigation [7, 8]
import styles from './NavLink.module.scss';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname(); // 3. Use usePathname for active states [9, 11]
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
