import type { StaticImageData } from "next/image";
import type { PillarItem } from '../../homeContentTypes';
import { FeaturedPillarsSection } from '../../Organisms/FeaturedPillarsSection/FeaturedPillarsSection';
import type { DocsHomeHeroCopy, DocsMissionCopy, DocsVisionCopy } from './docsHomeDefaults';
import {
  DOCS_PORTRAIT_PLACEHOLDER,
  defaultDocsHomeHero,
  defaultDocsMission,
  defaultDocsPillars,
  defaultDocsVision,
} from './docsHomeDefaults';
import { ReadBootBand } from '../../Organisms/Hero/ReadBootBand';
import { MissionProvocation } from '../../Organisms/MissionProvocation/MissionProvocation';
import { VisionRoadmapSection } from '../../Organisms/VisionRoadmapSection/VisionRoadmapSection';
import styles from './HomePage.module.scss';

export type DocsHomePageProps = {
  portraitSrc?: string | StaticImageData;
  portraitAlt?: string;
  hero?: DocsHomeHeroCopy;
  mission?: DocsMissionCopy;
  pillars?: PillarItem[];
  vision?: DocsVisionCopy;
};

export const DocsHomePage = ({
  portraitSrc = DOCS_PORTRAIT_PLACEHOLDER,
  portraitAlt = 'Documentation portal placeholder',
  hero = defaultDocsHomeHero,
  mission = defaultDocsMission,
  pillars = [...defaultDocsPillars],
  vision = defaultDocsVision,
}: DocsHomePageProps) => {
  return (
    <div className={styles.stack}>
      <ReadBootBand
        surface="open"
        portraitSrc={portraitSrc}
        portraitAlt={portraitAlt}
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        subheadline={hero.subheadline}
        intro={hero.intro}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
      />
      <MissionProvocation
        title={mission.title}
        accentWord={mission.accentWord}
        paragraphs={mission.paragraphs}
      />
      <FeaturedPillarsSection pillars={pillars} />
      <VisionRoadmapSection title={vision.title} body={vision.body} generations={vision.generations} />
    </div>
  );
};

export type { DocsHomeHeroCopy, DocsMissionCopy, DocsVisionCopy } from './docsHomeDefaults';
export {
  DOCS_PORTRAIT_PLACEHOLDER,
  defaultDocsHomeHero,
  defaultDocsMission,
  defaultDocsPillars,
  defaultDocsPortfolioOrigin,
  defaultDocsVision,
} from './docsHomeDefaults';
