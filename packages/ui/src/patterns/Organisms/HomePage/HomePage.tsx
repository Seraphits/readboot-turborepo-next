import { FeaturedPillarsSection } from './FeaturedPillarsSection';
import {
  DEFAULT_PORTRAIT_PLACEHOLDER,
  defaultConnect,
  defaultHomeHero,
  defaultMission,
  defaultPillars,
  defaultVision,
  type PillarItem,
} from './homePageDefaults';
import { MissionProvocation } from './MissionProvocation';
import { SplitHomeHero } from './SplitHomeHero';
import { VisionRoadmapSection } from './VisionRoadmapSection';
import styles from './HomePage.module.scss';

export type HomePageProps = {
  portraitSrc?: string;
  portraitAlt?: string;
  hero?: typeof defaultHomeHero;
  mission?: typeof defaultMission;
  pillars?: PillarItem[];
  vision?: typeof defaultVision;
};

export const HomePage = ({
  portraitSrc = DEFAULT_PORTRAIT_PLACEHOLDER,
  portraitAlt = 'Portrait placeholder',
  hero = defaultHomeHero,
  mission = defaultMission,
  pillars = [...defaultPillars],
  vision = defaultVision,
}: HomePageProps) => {
  return (
    <div className={styles.stack}>
      <SplitHomeHero
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
      <VisionRoadmapSection
        title={vision.title}
        body={vision.body}
        generations={vision.generations}
      />
    </div>
  );
};

export {
  DEFAULT_PORTRAIT_PLACEHOLDER,
  defaultConnect,
  defaultHomeHero,
  defaultMission,
  defaultPillars,
  defaultVision,
} from './homePageDefaults';
export type { PillarItem } from './homePageDefaults';
