/**
 * Type definitions for logo-related GraphQL responses and component props.
 */

/** GraphQL response shape for the GetLogo query (siteSettings.siteSettings.headerLogo) */
export interface LogoResponse {
  siteSettings: {
    siteSettings: {
      headerLogo: {
        sourceUrl: string;
        altText: string;
      };
    };
  };
}

/** Parsed logo data returned by getLogoData */
export interface LogoData {
  sourceUrl: string;
  altText: string;
}

/** Props for LogoImage and LogoImageClient components */
export interface LogoProps {
  /** Optional override for width (e.g. '200px' or '100%') */
  width?: string | number;
  /** Optional override for height (e.g. '100px' or '100%') */
  height?: string | number;
  /** For passing Tailwind classes or custom SCSS from the Pattern Lab */
  className?: string;
}
