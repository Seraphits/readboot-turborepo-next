import styles from './GlitchHeader.module.scss';

interface GlitchHeaderProps {
  title: string;
  subhead: string;
}

export const GlitchHeader = ({ title, subhead }: GlitchHeaderProps) => {
  return (
    <div className={styles.headerGroup}>
      <h1 className={styles.glitchHeadline} data-text={title}>{title}</h1>
      <p className={styles.subheadline}>{subhead}</p>
    </div>
  );
};
