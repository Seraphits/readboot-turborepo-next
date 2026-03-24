import Image from "next/image";
import { shouldSkipNextImageOptimization } from "../../../../lib/remoteImageUtils";
import { getLogoData } from "@repo/wp-utils";
import type { LogoProps } from "@repo/wp-utils";
import { READBOOT_LOGO, READBOOT_LOGO_ALT } from "../../../../assets/branding";

export interface LogoImageProps extends LogoProps {
  /** When true, load logo from WordPress site settings instead of the bundled asset. */
  useWordPressLogo?: boolean;
}

/**
 * ReadBoot Logo Atom — defaults to the bundled brandmark; optional WordPress override.
 */
export default async function LogoImage({
  width = "100%",
  height = "100%",
  className,
  useWordPressLogo = false,
}: LogoImageProps) {
  if (useWordPressLogo) {
    const logo = await getLogoData({ revalidate: 3600 });
    if (!logo?.sourceUrl) return null;

    return (
      <div
        className={className}
        style={{
          position: "relative",
          width,
          height,
          display: "block",
        }}
      >
        <Image
          src={logo.sourceUrl}
          alt={logo.altText}
          fill
          style={{ objectFit: "contain" }}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized={shouldSkipNextImageOptimization(logo.sourceUrl)}
        />
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width,
        height,
        display: "block",
      }}
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
