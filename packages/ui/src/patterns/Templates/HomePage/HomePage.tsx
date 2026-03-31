import type { StaticImageData } from "next/image";
import type { PillarItem } from "../../homeContentTypes";
import { FeaturedPillarsSection } from "../../Organisms/FeaturedPillarsSection/FeaturedPillarsSection";
import {
  type HomeHeroCopy,
  type HomeMissionCopy,
  type HomeVisionCopy,
  DEFAULT_PORTRAIT_PLACEHOLDER,
  defaultHomeHero,
  defaultMission,
  defaultPillars,
  defaultVision,
} from "./homePageDefaults";
import { ReadBootBand } from "../../Organisms/Hero/ReadBootBand";
import { MissionProvocation } from "../../Organisms/MissionProvocation/MissionProvocation";
import { VisionRoadmapSection } from "../../Organisms/VisionRoadmapSection/VisionRoadmapSection";
import styles from "./HomePage.module.scss";

export type HomePageProps = {
  portraitSrc?: string | StaticImageData;
  portraitAlt?: string;
  hero?: HomeHeroCopy;
  mission?: HomeMissionCopy;
  pillars?: PillarItem[];
  vision?: HomeVisionCopy;
};

export const HomePage = ({
  portraitSrc = DEFAULT_PORTRAIT_PLACEHOLDER,
  portraitAlt = "Portrait placeholder",
  hero = defaultHomeHero,
  mission = defaultMission,
  pillars = [...defaultPillars],
  vision = defaultVision,
}: HomePageProps) => {
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
} from "./homePageDefaults";
export type {
  HomeHeroCopy,
  HomeMissionCopy,
  HomeVisionCopy,
} from "./homePageDefaults";
export type { PillarItem } from "../../homeContentTypes";
