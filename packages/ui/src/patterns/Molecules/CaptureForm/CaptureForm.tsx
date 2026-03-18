import { Button } from '../../Atoms/InteractiveAtoms/Button/button';
import styles from './CaptureForm.module.scss';

export const CaptureForm = ({ ctaText }: { ctaText: string }) => (
  <form className={styles.formGroup}>
    <input type="email" placeholder="Enter your email" className={styles.input} />
    <Button variant="action-on-light">{ctaText}</Button>
  </form>
);
