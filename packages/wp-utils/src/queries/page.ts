/**
 * GraphQL query for fetching a WordPress page by URI.
 */
export const GET_PAGE_QUERY = `
  query GetPage($uri: ID!) {
    page(id: $uri, idType: URI) {
      title
      content
    }
  }
`;
