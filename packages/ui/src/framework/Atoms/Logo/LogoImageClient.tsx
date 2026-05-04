"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { shouldSkipNextImageOptimization } from "../../../../lib/remoteImageUtils";
import { getLogoData } from "@repo/wp-utils";
import type { LogoProps } from "@repo/wp-utils";
import { READBOOT_LOGO, READBOOT_LOGO_ALT } from "../../../../assets/branding";
import styles from "./LogoImage.module.scss";

export interface LogoImageClientProps extends LogoProps {
  /** Explicit image URL (e.g. Storybook or tests). */
  src?: string;
  alt?: string;
  /** When true, load logo from WordPress site settings instead of the bundled asset. */
  useWordPressLogo?: boolean;
}

/** Client-side logo — bundled asset by default; optional WordPress or explicit `src`. */
export function LogoImageClient({
  width = "100%",
  height = "100%",
  className,
  src: staticSrc,
  alt: staticAlt,
  useWordPressLogo = false,
}: LogoImageClientProps) {
  const [wpLogo, setWpLogo] = useState<{
    sourceUrl: string;
    altText: string;
  } | null>(null);

  useEffect(() => {
    if (!useWordPressLogo) return;
    if (staticSrc) return;
    getLogoData()
      .then((data) => data && setWpLogo(data))
      .catch(() => setWpLogo(null));
  }, [staticSrc, useWordPressLogo]);

  if (staticSrc) {
    const altText = staticAlt ?? READBOOT_LOGO_ALT;
    return (
      <div
        className={`${styles.container} ${className ?? ""}`.trim()}
        style={{ width, height }}
      >
        <Image
          src={staticSrc}
          alt={altText}
          fill
          style={{ objectFit: "contain" }}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized={shouldSkipNextImageOptimization(staticSrc)}
        />
      </div>
    );
  }

  if (useWordPressLogo) {
    const sourceUrl = wpLogo?.sourceUrl;
    const altText = wpLogo?.altText ?? READBOOT_LOGO_ALT;

    if (!sourceUrl) {
      return (
        <div
          className={styles.loading}
          style={{
            width,
            height,
          }}
          aria-busy="true"
        >
          Loading logo...
        </div>
      );
    }

    return (
      <div
        className={`${styles.container} ${className ?? ""}`.trim()}
        style={{ width, height }}
      >
        <Image
          src={sourceUrl}
          alt={altText}
          fill
          style={{ objectFit: "contain" }}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized={shouldSkipNextImageOptimization(sourceUrl)}
        />
      </div>
    );
  }

  return (
    <div
      className={`${styles.container} ${className ?? ""}`.trim()}
      style={{ width, height }}
    >
      <Image
        src={READBOOT_LOGO}
        alt={READBOOT_LOGO_ALT}
        fill
        style={{ objectFit: "contain" }}
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
