/**
 * GraphQL query for fetching a documentation page by URI.
 * Uses custom "doc" type (WPGraphQL custom post type).
 */
export const GET_DOC_QUERY = `
  query GetDoc($id: ID!) {
    doc(id: $id, idType: URI) {
      title
      content
      documentationPages {
        notes
      }
    }
  }
`;
