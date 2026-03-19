/**
 * Root barrel - prefer subpath imports for better tree-shaking:
 * import { Button } from '@repo/ui/atoms'
 * import { Alert } from '@repo/ui/molecules'
 * import { Hero } from '@repo/ui/organisms'
 */
export { Button } from './patterns/Atoms/InteractiveAtoms/Button/Button';
export { Alert } from './patterns/Molecules/Alert/Alert';
export { Hero } from './patterns/Organisms/Hero/Hero';
