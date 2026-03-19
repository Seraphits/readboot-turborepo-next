import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../Atoms/InteractiveAtoms/Button/Button';
import { shouldSkipNextImageOptimization } from '../../../lib/remoteImageUtils';
import styles from './SplitHomeHero.module.scss';

export type SplitHomeHeroProps = {
  portraitSrc: string;
  portraitAlt: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  intro: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const SplitHomeHero = ({
  portraitSrc,
  portraitAlt,
  eyebrow,
  headline,
  subheadline,
  intro,
  primaryCta,
  secondaryCta,
}: SplitHomeHeroProps) => {
  return (
    <section className={styles.root} aria-labelledby="home-hero-headline">
      <div className={styles.portraitFrame}>
        <Image
          src={portraitSrc}
          alt={portraitAlt}
          width={640}
          height={800}
          className={styles.portraitImage}
          priority
          sizes="(max-width: 900px) 100vw, 50vw"
          unoptimized={shouldSkipNextImageOptimization(portraitSrc)}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 id="home-hero-headline" className={styles.headline}>
          {headline}
        </h1>
        <p className={styles.subheadline}>{subheadline}</p>
        <p className={styles.intro}>{intro}</p>
        <div className={styles.ctaRow}>
          <Button variant="action-on-light" className={styles.cta} asChild>
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          <Button variant="outline-on-light" className={styles.cta} asChild>
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
