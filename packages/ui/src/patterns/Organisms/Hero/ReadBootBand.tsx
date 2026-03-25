import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import {
  type ElementType,
  type ReactElement,
  type ReactNode,
} from 'react';
import { SectionLayout } from '../../Atoms/LayoutAtoms/SectionLayout/SectionLayout';
import { Button } from '../../Atoms/Interactive/Button/Button';
import { shouldSkipNextImageOptimization } from '../../../lib/remoteImageUtils';
import boxedStyles from './BoxedFeatureHero.module.scss';
import openStyles from './FullBleedHero.module.scss';

/** Newspaper surface: ruled inset vs open band on newsprint (see `readboot-layout-model.mdc`). */
export type BandSurface = 'boxed' | 'open';

/** Layout variants inside the boxed (ruled) shell. */
export type BoxedFeatureHeroLayoutVariant = 'centered' | 'split' | 'asymmetrical' | 'preview';

type BoxedFields<T extends ElementType = 'section'> = {
  as?: T;
  layout?: BoxedFeatureHeroLayoutVariant;
  title: string;
  subhead?: string;
  ctaText?: string;
  imageNode?: ReactNode;
};

export type OpenBandFields = {
  portraitSrc: string | StaticImageData;
  portraitAlt: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  intro: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type BoxedBandProps<T extends ElementType = 'section'> = { surface: 'boxed' } & BoxedFields<T>;

export type OpenBandProps = { surface: 'open' } & OpenBandFields;

export type ReadBootBandProps<T extends ElementType = 'section'> =
  | (BoxedBandProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof BoxedBandProps<T>>)
  | OpenBandProps;

export type BoxedFeatureHeroProps<T extends ElementType = 'section'> = BoxedFields<T>;

export type FullBleedHeroProps = OpenBandFields;

function BoxedBand<T extends ElementType = 'section'>({
  as,
  layout = 'centered',
  title,
  subhead,
  ctaText = 'Get Started',
  imageNode,
  ...props
}: BoxedBandProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof BoxedBandProps<T>>) {
  const Component = (as ?? 'section') as ElementType;

  return (
    <Component className={boxedStyles.heroRoot} {...props}>
      <SectionLayout variant={layout} bordered>
        <div className={boxedStyles.heroContent}>
          <h1 className={boxedStyles.heroHeadline} data-text={title}>
            {title}
          </h1>
          {subhead && <p className={boxedStyles.subheadline}>{subhead}</p>}
          <Button variant="action-on-light" className={boxedStyles.bouncyCta}>
            {ctaText}
          </Button>
        </div>

        {layout !== 'centered' && (
          <div className={boxedStyles.mediaSlot}>{imageNode}</div>
        )}
      </SectionLayout>
    </Component>
  );
}

function OpenBand({
  portraitSrc,
  portraitAlt,
  eyebrow,
  headline,
  subheadline,
  intro,
  primaryCta,
  secondaryCta,
}: OpenBandProps) {
  return (
    <section className={openStyles.root} aria-labelledby="read-boot-band-open-headline">
      <div className={openStyles.portraitFrame}>
        <Image
          src={portraitSrc}
          alt={portraitAlt}
          width={640}
          height={800}
          className={openStyles.portraitImage}
          priority
          sizes="(max-width: 900px) 100vw, 50vw"
          unoptimized={shouldSkipNextImageOptimization(
            typeof portraitSrc === 'string' ? portraitSrc : portraitSrc.src,
          )}
        />
      </div>
      <div className={openStyles.content}>
        <p className={openStyles.eyebrow}>{eyebrow}</p>
        <h1 id="read-boot-band-open-headline" className={openStyles.headline}>
          {headline}
        </h1>
        <p className={openStyles.subheadline}>{subheadline}</p>
        <p className={openStyles.intro}>{intro}</p>
        <div className={openStyles.ctaRow}>
          <Button variant="action-on-light" className={openStyles.cta} asChild>
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          <Button variant="outline-on-light" className={openStyles.cta} asChild>
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/**
 * Unified **hero band**: **`surface="boxed"`** (ruled `SectionLayout` inset) or **`surface="open"`**
 * (portrait + copy on newsprint, no outer band rule). See `readboot-layout-model.mdc`.
 */
export function ReadBootBand<T extends ElementType = 'section'>(
  props: ReadBootBandProps<T>,
): ReactElement {
  if (props.surface === 'open') {
    return <OpenBand {...props} />;
  }
  return <BoxedBand {...(props as BoxedBandProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof BoxedBandProps<T>>)} />;
}

/** Preset: `ReadBootBand` with `surface="boxed"`. */
export const BoxedFeatureHero = <T extends ElementType = 'section'>(
  props: BoxedFeatureHeroProps<T> &
    Omit<React.ComponentPropsWithoutRef<T>, keyof BoxedFeatureHeroProps<T>>,
): ReactElement => (
  <ReadBootBand {...({ ...props, surface: 'boxed' } as ReadBootBandProps<T>)} />
);

/** Preset: `ReadBootBand` with `surface="open"`. */
export const FullBleedHero = (props: FullBleedHeroProps): ReactElement => (
  <ReadBootBand {...({ ...props, surface: 'open' } as ReadBootBandProps<'section'>)} />
);
