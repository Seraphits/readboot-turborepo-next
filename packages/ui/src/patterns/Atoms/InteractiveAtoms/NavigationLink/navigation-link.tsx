'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navigation-link.module.scss';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavigationLink = ({ href, children }: NavigationLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${styles.NavigationLink} ${isActive? styles['NavigationLink--active'] : ''}`}
      aria-current={isActive? 'page' : undefined}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
