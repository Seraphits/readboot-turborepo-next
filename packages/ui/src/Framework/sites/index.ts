/**
 * Greenfield Next apps (`apps/readboot`, `apps/trappsystems`): import from here
 * so the bundle never loads the legacy `patterns/` Organisms barrel.
 */
export { default as NavigationBar } from "../Organisms/NavigationBar/navigation-bar";
export type { NavigationBarProps } from "../Organisms/NavigationBar/navigation-bar";
