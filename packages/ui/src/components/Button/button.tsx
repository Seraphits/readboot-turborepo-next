import styles from './button.module.scss';

export function Button({ children }: { children: React.ReactNode }) {
  return <button className={styles.buttonAction} type="button">{children}</button>;
}
