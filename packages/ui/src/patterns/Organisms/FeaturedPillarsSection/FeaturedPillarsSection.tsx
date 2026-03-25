import Image from 'next/image';
import Link from 'next/link';
import {
  pillarPlaceholder,
  placeholderSrc,
} from '../../../assets/storybook/placeholders';
import type { PillarItem } from '../../homeContentTypes';
import { shouldSkipNextImageOptimization } from '../../../lib/remoteImageUtils';
import styles from './FeaturedPillarsSection.module.scss';

export type FeaturedPillarsSectionProps = {
  pillars: PillarItem[];
};

export const FeaturedPillarsSection = ({ pillars }: FeaturedPillarsSectionProps) => {
  return (
    <section className={styles.root} aria-labelledby="pillars-heading">
      <div className={styles.inner}>
        <h2 id="pillars-heading" className={styles.sectionTitle}>
          Featured work
        </h2>
        <div className={styles.grid}>
          {pillars.map((pillar) => (
            <article key={pillar.title} className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src={pillarPlaceholder}
                  alt={`Placeholder artwork for ${pillar.title}`}
                  width={600}
                  height={340}
                  sizes="(max-width: 900px) 100vw, 33vw"
                  unoptimized={shouldSkipNextImageOptimization(
                    placeholderSrc(pillarPlaceholder),
                  )}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.tagline}>{pillar.tagline}</p>
                <p className={styles.summary}>{pillar.summary}</p>
                <Link href={pillar.href} className={styles.cardAction}>
                  {pillar.actionLabel} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
