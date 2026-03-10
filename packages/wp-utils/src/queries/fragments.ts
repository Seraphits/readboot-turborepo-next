import { gql } from '@apollo/client';

export const CORE_PAGE_FIELDS = gql`
  fragment CorePageFields on Page {
    title
    content
    editorBlocks {
      name
      renderedHtml
    }
  }
`;

export const PROJECT_FIELDS = gql`
  fragment ProjectFields on Project {
    id
    title
    slug
    excerpt
    content
    projectIntelligence {
      lifecycleStatus
      impactMetric: primaryImpactMetric
      liveProjectLink
    }
    tags {
      nodes {
        name
      }
    }
  }
`;
