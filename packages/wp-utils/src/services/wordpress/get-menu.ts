import { getWordPressData } from './client';
import { GET_MENU_QUERY } from '../../queries/menu';
import { buildMenuTree } from '../../utils/menu-builder';
import type { NavItem } from '../../types';

const DEFAULT_MENU_REVALIDATE = 60;

export interface GetMenuDataOptions {
  /** Menu location (e.g. WEB_TOPNAV, DOCS_TOPNAV) */
  location: string;
  /** Optional href transformer (e.g. toDocsHref for docs app) */
  transformHref?: (url: string) => string;
  /** Next.js revalidation period in seconds. Default: 60 */
  revalidate?: number | false;
}

/**
 * Fetches menu items by location and returns a hierarchical tree.
 * Uses the centralized WordPress client (timeout, revalidation, env).
 */
export async function getMenuData(options: GetMenuDataOptions): Promise<NavItem[]> {
  const { location, transformHref, revalidate = DEFAULT_MENU_REVALIDATE } = options;

  try {
    const data = (await getWordPressData(GET_MENU_QUERY, { location }, { revalidate })) as
      | { menuItems?: { nodes?: Array<{ id: string; parentId: string | null; label: string; url?: string }> } }
      | undefined;

    const nodes = data?.menuItems?.nodes ?? [];

    const navItems: NavItem[] = nodes.map((item) => ({
      id: item.id,
      parentId: item.parentId,
      label: item.label,
      href: transformHref ? transformHref(item.url ?? '') : (item.url ?? '#'),
    }));

    return buildMenuTree(navItems);
  } catch {
    return [];
  }
}
