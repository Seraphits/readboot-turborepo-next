import { gql } from '@apollo/client';

// 1. Keep your interface for TypeScript support
export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText?: string;
    };
  };
}

// 2. Add and export the actual GraphQL fragment
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
