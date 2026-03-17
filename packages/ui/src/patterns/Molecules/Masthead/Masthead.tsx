import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import styles from './Masthead.module.scss';

interface MastheadProps {
  title: string;
  subhead: string;
}

export const Masthead = ({ title, subhead }: MastheadProps) => {
  return (
    <section className={styles.root} aria-label="Brand masthead">
      <div className={styles.toolbar}>
        <ThemeToggle />
      </div>
      <div className={styles.headerGroup}>
        <h1 className={styles.headline} data-text={title}>
          {title}
        </h1>
        <p className={styles.subheadline}>{subhead}</p>
      </div>
    </section>
  );
};
