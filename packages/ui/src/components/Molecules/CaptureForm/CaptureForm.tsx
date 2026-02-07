import { Button } from '../../../components/Atoms/Button/button';
import styles from './CaptureForm.module.scss';

export const CaptureForm = ({ ctaText }: { ctaText: string }) => (
  <form className={styles.formGroup}>
    <input type="email" placeholder="Enter your email" className={styles.input} />
    <Button className={styles.bouncyButton}>{ctaText}</Button>
  </form>
);
