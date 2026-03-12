export const PROJECT_FIELDS = `
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
      linkedBlogCategory {
        nodes {
          slug
          name
        }
      }
    }
    tags {
      nodes {
        name
      }
    }
  }
`;
