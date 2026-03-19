import styles from './TokenCard.module.scss';

interface TokenCardProps {
  label: string;
  token: string;
  previewClassName: string;
}

export function TokenCard({ label, token, previewClassName }: TokenCardProps) {
  return (
    <div className={styles.card}>
      <div className={`${styles.preview} ${previewClassName}`} />
      <div className={styles.label}>{label}</div>
      <code className={styles.token}>{token}</code>
    </div>
  );
}
