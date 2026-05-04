"use client";
import NavigationLink from "../../Atoms/Interactive/NavigationLink/navigation-link";

import "./navigation-menu.scss";
// import Link from 'next/link';

export interface NavigationLinkItem {
  id?: string;
  label: string;
  href?: string;
  /** API returns url; component uses href ?? url */
  url?: string;
  /** WPGraphQL menu `target` — pass through for new-tab links (`_blank`). */
  target?: string | null;
  children?: NavigationLinkItem[];
}

export interface NavigationMenuProps {
  links: NavigationLinkItem[];
}

function getHref(item: NavigationLinkItem): string {
  return item.href ?? item.url ?? "#";
}

export default function NavigationMenu({ links }: NavigationMenuProps) {
  return (
    <ul className="NavigationMenu__List">
      {links.map((item) => (
        <li key={item.id ?? item.label} className="NavigationMenu__Item">
          <NavigationLink href={getHref(item)} target={item.target}>
            {item.label}
          </NavigationLink>

          {/* Recursive check for children */}
          {item.children && item.children.length > 0 && (
            <ul className="NavigationMenu__SubList">
              {item.children.map((child) => (
                <li
                  key={child.id ?? child.label}
                  className="NavigationMenu__SubItem"
                >
                  <NavigationLink href={getHref(child)} target={child.target}>
                    {child.label}
                  </NavigationLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
