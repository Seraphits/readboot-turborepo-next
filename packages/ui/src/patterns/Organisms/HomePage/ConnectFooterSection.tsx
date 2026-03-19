import Link from 'next/link';
import styles from './ConnectFooterSection.module.scss';

export type ConnectLink = { label: string; href: string };

export type ConnectFooterSectionProps = {
  title: string;
  links: readonly ConnectLink[];
  copyright: string;
};

export const ConnectFooterSection = ({ title, links, copyright }: ConnectFooterSectionProps) => {
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.linkList}>
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className={styles.link} rel="noopener noreferrer">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className={styles.copyright}>{copyright}</p>
      </div>
    </footer>
  );
};
