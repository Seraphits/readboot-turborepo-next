import styles from './MediaMockup.module.scss';

export const MediaMockup = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.browserFrame}>
    <div className={styles.chromeToolbar} />
    <div className={styles.content}>{children}</div>
  </div>
);
