import styles from './Alert.module.scss';

export const Alert = () => {
  return (
    <aside className={styles.banner} aria-label="Engineering Status">
      🛠️ Status: Live Engineering Lab. This portfolio is being architected in public using Next.js Turborepo and headless WordPress. Follow the blog to see the system&apos;s evolution.
    </aside>
  );
};
