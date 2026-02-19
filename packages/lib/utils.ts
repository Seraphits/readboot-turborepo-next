// packages/lib/utils.ts

export interface MenuTreeItem {
  id: string;
  parentId?: string | null;
  label: string;
  url?: string;
  href?: string;
  children?: MenuTreeItem[];
}

export function buildMenuTree(data: MenuTreeItem[] = []): MenuTreeItem[] {
  const tree: MenuTreeItem[] = [];
  const childrenOf: Record<string, MenuTreeItem[]> = {};

  data.forEach((item: MenuTreeItem) => {
    const newItem: MenuTreeItem = { ...item, children: [] };
    const { id, parentId } = newItem;

    childrenOf[id] = childrenOf[id] ?? [];
    newItem.children = childrenOf[id];

    // If it has a parent, push to parent's children array,
    // otherwise it's a root level item
    if (parentId) {
      childrenOf[parentId] = childrenOf[parentId] ?? [];
      childrenOf[parentId].push(newItem);
    } else {
      tree.push(newItem);
    }
  });

  return tree;
}
