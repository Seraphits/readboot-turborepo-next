"use client";

import React, { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toDocsHref } from "../utils/url-transform";

interface EditorBlock {
  name?: string;
  renderedHtml?: string;
}

interface WPContentProps {
  data: {
    title: string;
    content?: string;
    editorBlocks?: EditorBlock[] | null;
  } | null;
  className?: string;
  renderTitle?: boolean;
}

function getWpHostname(): string | null {
  const siteUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL ??
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  if (!siteUrl) return null;
  try {
    return new URL(siteUrl.replace(/\/graphql\/?$/, "")).hostname;
  } catch {
    return null;
  }
}

export const WPContent = ({
  data,
  className,
  renderTitle = true,
}: WPContentProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const inDocsApp = pathname?.startsWith("/docs") ?? false;

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      // Only handle plain left-clicks with no modifier keys.
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#" || href === "") return;

      // Respect new-tab and non-http intents.
      if (anchor.target === "_blank") return;
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (href.startsWith("javascript:")) return;

      // If we're in the docs app, map any WP-ish URLs into `/docs/...`.
      if (inDocsApp) {
        try {
          const mapped = toDocsHref(href);
          if (mapped.startsWith("/")) {
            e.preventDefault();
            router.push(mapped);
          }
        } catch {
          // If env config is missing/misconfigured, fall back to default browser navigation.
        }
        return;
      }

      // Web app: intercept only relative links and WP-origin absolute links.
      const url = new URL(href, window.location.href);
      const wpHostname = getWpHostname();
      const isInternal =
        href.startsWith("/") ||
        (wpHostname ? url.hostname === wpHostname : false);

      if (!isInternal) return;

      e.preventDefault();
      router.push(url.pathname + url.search + url.hash);
    },
    [inDocsApp, router],
  );

  if (!data) return <p>No content found.</p>;

  return (
    <section
      className={`wp-content-block${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      {renderTitle && <h1>{data.title}</h1>}

      {data.editorBlocks?.length ? (
        <div className="wp-blocks">
          {data.editorBlocks
            .filter((block) => block.renderedHtml)
            .map((block, i) => (
              <div
                key={i}
                className={`wp-block wp-block-${block.name || "unknown"}`}
                dangerouslySetInnerHTML={{ __html: block.renderedHtml! }}
              />
            ))}
        </div>
      ) : (
        data.content && (
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        )
      )}
    </section>
  );
};
