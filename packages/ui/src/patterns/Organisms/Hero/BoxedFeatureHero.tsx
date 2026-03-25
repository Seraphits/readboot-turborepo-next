import { ElementType, ReactNode } from 'react';
import { SectionLayout } from '../../Atoms/LayoutAtoms/SectionLayout/SectionLayout';
import { Button } from '../../Atoms/Interactive/Button/Button';
import styles from './BoxedFeatureHero.module.scss';

/** Layout variants inside the boxed (ruled) shell. */
export type BoxedFeatureHeroLayoutVariant = 'centered' | 'split' | 'asymmetrical' | 'preview';

/** @deprecated Use `BoxedFeatureHeroLayoutVariant` */
export type HeroLayoutVariant = BoxedFeatureHeroLayoutVariant;

export interface BoxedFeatureHeroProps<T extends ElementType = 'section'> {
  as?: T;
  layout?: BoxedFeatureHeroLayoutVariant;
  title: string;
  subhead?: string;
  ctaText?: string;
  imageNode?: ReactNode;
}

/** @deprecated Use `BoxedFeatureHeroProps` */
export type HeroProps<T extends ElementType = 'section'> = BoxedFeatureHeroProps<T>;

/**
 * **Boxed feature** hero — a rule wraps the entire module (newspaper inset).
 * Headline + optional deck + CTA; non-centered layouts expose a media slot.
 */
export const BoxedFeatureHero = <T extends ElementType = 'section'>({
  as,
  layout = 'centered',
  title,
  subhead,
  ctaText = 'Get Started',
  imageNode,
  ...props
}: BoxedFeatureHeroProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof BoxedFeatureHeroProps<T>>) => {
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

/** @deprecated Use `BoxedFeatureHero` — newspaper name: boxed feature. */
export const Hero = BoxedFeatureHero;
