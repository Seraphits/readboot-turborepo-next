export interface NavItem {
  id: string;
  parentId: string | null;
  label: string;
  href: string;
  children?: NavItem[];
}
