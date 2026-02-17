import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavLink.module.scss';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const { asPath } = useRouter();
  const isActive = asPath === href;

  return (
    <Link
      href={href}
      // Apply the base class and the active modifier based on current path
      className={`${styles.NavLink} ${isActive? styles['NavLink--active'] : ''}`}
      aria-current={isActive? 'page' : undefined} // Critical for A11y
    >
      {children}
    </Link>
  );
};

export default NavLink;
