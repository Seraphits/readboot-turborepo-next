export const PROJECT_FIELDS = `
  fragment ProjectFields on Project {
    id
    title
    slug
    excerpt
    content
    projectIntelligence {
      lifecycleStatus
      primaryImpactMetric
      liveProjectLink
    }
    tags {
      nodes {
        name
      }
    }
  }
`;
