export interface NavItem {
  id: string;
  parentId: string | null;
  label: string;
  href: string;
  children?: NavItem[];
}

/** Build a tree from flat WordPress menu items using parentId. */
export function buildMenuTree(items: NavItem[]): NavItem[] {
  const rootItems: NavItem[] = [];
  const lookup: Record<string, NavItem> = {};

  for (const item of items) {
    lookup[item.id] = { ...item, children: [] };
  }

  for (const item of items) {
    const node = lookup[item.id];
    if (!node) continue;
    const parentId = item.parentId;
    const isRoot = !parentId || parentId === "0" || !lookup[parentId];
    if (isRoot) {
      rootItems.push(node);
    } else {
      const parent = lookup[parentId];
      if (parent) {
        parent.children = parent.children ?? [];
        parent.children.push(node);
      } else {
        rootItems.push(node);
      }
    }
  }

  return rootItems;
}
