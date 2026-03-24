import { ElementType, ReactNode } from 'react';
import { SectionLayout } from '../../Atoms/LayoutAtoms/SectionLayout/SectionLayout';
import { Button } from '../../Atoms/Interactive/Button/Button';
import styles from './Hero.module.scss';

export type HeroLayoutVariant = 'centered' | 'split' | 'asymmetrical' | 'preview';

export interface HeroProps<T extends ElementType = 'section'> {
  as?: T;
  layout?: HeroLayoutVariant;
  title: string;
  subhead?: string;
  ctaText?: string;
  imageNode?: ReactNode;
}

export const Hero = <T extends ElementType = 'section'>({
  as,
  layout = 'centered',
  title,
  subhead,
  ctaText = 'Get Started',
  imageNode,
  ...props
}: HeroProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof HeroProps<T>>) => {
  const Component = (as ?? 'section') as ElementType;

  return (
    <Component className={styles.heroRoot} {...props}>
      <SectionLayout variant={layout} bordered>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline} data-text={title}>
            {title}
          </h1>
          {subhead && <p className={styles.subheadline}>{subhead}</p>}
          <Button variant="action-on-light" className={styles.bouncyCta}>
            {ctaText}
          </Button>
        </div>

        {layout !== 'centered' && (
          <div className={styles.mediaSlot}>{imageNode}</div>
        )}
      </SectionLayout>
    </Component>
  );
};
