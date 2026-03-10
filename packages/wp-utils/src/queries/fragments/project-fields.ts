import { gql } from '@apollo/client';

export const PROJECT_FIELDS = gql`
  fragment ProjectFields on Project {
    id
    title
    slug
    excerpt
    content
    projectIntelligence {
      lifecycleStatus
      impactMetric
    }
    tags {
      nodes {
        name
      }
    }
  }
`;
