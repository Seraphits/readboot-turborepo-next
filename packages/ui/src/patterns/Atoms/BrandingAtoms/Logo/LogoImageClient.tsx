"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getLogoData } from "@repo/wp-utils";
import type { LogoProps } from "@repo/wp-utils";

export interface LogoImageClientProps extends LogoProps {
  /** Static src for Storybook/mock contexts; skips fetch when provided with alt. */
  src?: string;
  /** Static alt for Storybook/mock contexts. */
  alt?: string;
}

/** Client-side logo for Storybook and other client contexts. */
export function LogoImageClient({
  width = "100%",
  height = "100%",
  className,
  src: staticSrc,
  alt: staticAlt,
}: LogoImageClientProps) {
  const [logo, setLogo] = useState<{ sourceUrl: string; altText: string } | null>(null);

  useEffect(() => {
    if (staticSrc && staticAlt) return;
    getLogoData()
      .then((data) => data && setLogo(data))
      .catch(() => setLogo(null));
  }, [staticSrc, staticAlt]);

  const sourceUrl = staticSrc ?? logo?.sourceUrl;
  const altText = staticAlt ?? logo?.altText ?? "";

  if (!sourceUrl) return <div style={{ width, height, background: "#eee" }}>Loading logo…</div>;

  return (
    <div className={className} style={{ position: "relative", width, height, display: "block" }}>
      <Image
        src={sourceUrl}
        alt={altText}
        fill
        style={{ objectFit: "contain" }}
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
