import Image from 'next/image';
import Link from 'next/link';
import type { PillarItem } from './homePageDefaults';
import styles from './FeaturedPillarsSection.module.scss';

const PILLAR_IMAGE = (seed: number) =>
  `https://placehold.co/600x340/FAF9F6/36454F/png?text=Project+${seed}`;

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
          {pillars.map((pillar, index) => (
            <article key={pillar.title} className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src={PILLAR_IMAGE(index + 1)}
                  alt={`Placeholder artwork for ${pillar.title}`}
                  width={600}
                  height={340}
                  sizes="(max-width: 900px) 100vw, 33vw"
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
