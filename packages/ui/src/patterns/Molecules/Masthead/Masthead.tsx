import styles from './Masthead.module.scss';

interface MastheadProps {
  title: string;
  subhead: string;
}

export const Masthead = ({ title, subhead }: MastheadProps) => {
  return (
    <div className={styles.headerGroup}>
      <h1 className={styles.headline} data-text={title}>
        {title}
      </h1>
      <p className={styles.subheadline}>{subhead}</p>
    </div>
  );
};
