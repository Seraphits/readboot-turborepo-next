/**
 * Root barrel - prefer subpath imports for better tree-shaking:
 * import { Button } from '@repo/ui/atoms'
 * import { Alert, ProjectCard } from '@repo/ui/molecules'
 * import { ReadBootBand, BoxedFeatureHero, FullBleedHero } from '@repo/ui/organisms'
 * import { HomePage } from '@repo/ui/templates'
 */
export { Button } from "./patterns/Atoms/Interactive/Button/Button";
export { Alert } from "./patterns/Molecules/Alert/Alert";
export {
  ReadBootBand,
  BoxedFeatureHero,
  FullBleedHero,
} from "./patterns/Organisms/Hero/ReadBootBand";
