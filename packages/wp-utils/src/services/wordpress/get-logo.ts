import { getWordPressData } from './client';
import { GET_LOGO_QUERY } from '../../queries/logo';
import type { LogoData, LogoResponse } from '../../types';

/**
 * Fetches the header logo from WordPress site settings.
 * Used by LogoImage (server) and LogoImageClient (client) components.
 */
export async function getLogoData(options?: { revalidate?: number | false }): Promise<LogoData | null> {
  try {
    const data = (await getWordPressData(GET_LOGO_QUERY, {}, {
      revalidate: options?.revalidate ?? 3600,
    })) as LogoResponse | undefined;

    const logo = data?.siteSettings?.siteSettings?.headerLogo;
    if (!logo?.sourceUrl) return null;

    return {
      sourceUrl: logo.sourceUrl,
      altText: logo.altText || 'ReadBoot Logo',
    };
  } catch {
    return null;
  }
}
