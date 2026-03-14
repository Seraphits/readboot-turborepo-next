/**
 * GraphQL query for fetching the header logo from WordPress site settings.
 * Used by LogoImage (server) and LogoImageClient (client) branding components.
 */
export const GET_LOGO_QUERY = `
  query GetLogo {
    siteSettings {
      siteSettings {
        headerLogo {
          sourceUrl
          altText
        }
      }
    }
  }
`;
