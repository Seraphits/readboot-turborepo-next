"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getLogoData } from "@repo/wp-utils";
import type { LogoProps } from "@repo/wp-utils";

/** Client-side logo for Storybook and other client contexts. */
export function LogoImageClient({
  width = "100%",
  height = "100%",
  className,
}: LogoProps) {
  const [logo, setLogo] = useState<{ sourceUrl: string; altText: string } | null>(null);

  useEffect(() => {
    getLogoData()
      .then((data) => data && setLogo(data))
      .catch(() => setLogo(null));
  }, []);

  if (!logo?.sourceUrl) return <div style={{ width, height, background: "#eee" }}>Loading logo…</div>;

  return (
    <div className={className} style={{ position: "relative", width, height, display: "block" }}>
      <Image
        src={logo.sourceUrl}
        alt={logo.altText}
        fill
        style={{ objectFit: "contain" }}
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
