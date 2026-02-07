// packages/ui/src/components/HeroHome.tsx
import React from 'react';
import styles from './HeroCentered.module.scss';

interface HeroHomeProps {
  title: string;
  subtitle: string;
  ctaText?: string; // Optional prop with a default value
}

export const HeroHome: React.FC<HeroHomeProps> = ({
  title,
  subtitle,
  ctaText = "Get Started"
}) => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        {/* The data-text attribute allows the glitch mixin to clone the text layers [Image 5] */}
        <h1 className={styles.glitchHeadline} data-text={title}>
          {title}
        </h1>
        <p className={styles.subheadline}>{subtitle}</p>
        <button className={styles.primaryCta}>{ctaText}</button>
      </div>
    </section>
  );
};
