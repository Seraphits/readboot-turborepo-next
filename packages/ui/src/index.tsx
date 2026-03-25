/**
 * Root barrel - prefer subpath imports for better tree-shaking:
 * import { Button } from '@repo/ui/atoms'
 * import { Alert } from '@repo/ui/molecules'
 * import { BoxedFeatureHero, FullBleedHero } from '@repo/ui/organisms'
 * import { HomePage } from '@repo/ui/templates'
 */
export { Button } from './patterns/Atoms/Interactive/Button/Button';
export { Alert } from './patterns/Molecules/Alert/Alert';
export { BoxedFeatureHero, Hero } from './patterns/Organisms/Hero/BoxedFeatureHero';
export { FullBleedHero } from './patterns/Organisms/Hero/FullBleedHero';
