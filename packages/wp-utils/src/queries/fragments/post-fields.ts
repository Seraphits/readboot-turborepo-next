import { gql } from '@apollo/client';

// GraphQL fragment for Post fields (Post type lives in @repo/wp-utils types)
export const POST_FIELDS = gql`
  fragment PostFields on Post {
    id
    title
    slug
    date
    excerpt
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
  }
`;
