import { LogoImage } from "@repo/ui/atoms";
import styles from './page.module.scss';

export default function LogoImagePage() {
  return (
    <section>
      <h1>Logo</h1>
      <p>The ReadBoot logo fetched from Headless WordPress.</p>
      <div className={styles.logoWrap}>
        <LogoImage />
      </div>
    </section>
  );
}
