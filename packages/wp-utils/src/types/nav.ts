export interface NavItem {
  id: string;
  parentId: string | null;
  label: string;
  href: string;
  /** WPGraphQL `MenuItem.target` — `"_blank"` when “Open in new tab” is set; otherwise `null`. */
  target?: string | null;
  children?: NavItem[];
}
