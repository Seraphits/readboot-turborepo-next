export const PROJECT_FIELDS = `
  fragment ProjectFields on Project {
    id
    title
    slug
    excerpt
    content
    projectIntelligence {
      lifecycleStatus
      impactMetric
      liveProjectLink
    }
    tags {
      nodes {
        name
      }
    }
  }
`;
