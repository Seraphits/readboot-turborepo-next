import type { StaticImageData } from "next/image";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../Atoms/Interactive/Button/Button';
import { shouldSkipNextImageOptimization } from '../../../lib/remoteImageUtils';
import styles from './FullBleedHero.module.scss';

export type FullBleedHeroProps = {
  portraitSrc: string | StaticImageData;
  portraitAlt: string;
  /** Kicker / eyebrow (small line above the head). */
  eyebrow: string;
  headline: string;
  /** Deck / subdeck under the headline. */
  subheadline: string;
  /** Lead paragraph. */
  intro: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

/**
 * **Full-bleed** hero — portrait + copy on newsprint without a single outer rule
 * around the whole band (newspaper open layout). Distinct from `BoxedFeatureHero`.
 */
export const FullBleedHero = ({
  portraitSrc,
  portraitAlt,
  eyebrow,
  headline,
  subheadline,
  intro,
  primaryCta,
  secondaryCta,
}: FullBleedHeroProps) => {
  return (
    <section className={styles.root} aria-labelledby="full-bleed-hero-headline">
      <div className={styles.portraitFrame}>
        <Image
          src={portraitSrc}
          alt={portraitAlt}
          width={640}
          height={800}
          className={styles.portraitImage}
          priority
          sizes="(max-width: 900px) 100vw, 50vw"
          unoptimized={shouldSkipNextImageOptimization(
            typeof portraitSrc === "string" ? portraitSrc : portraitSrc.src,
          )}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 id="full-bleed-hero-headline" className={styles.headline}>
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
