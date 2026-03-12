import { Post } from './post';

export interface ProjectIntelligence {
  lifecycleStatus: string;
  impactMetric: string; // GraphQL alias for primaryImpactMetric
  liveProjectLink: string;
  linkedBlogCategory?: {
    slug: string;
    name: string;
  };
}

export interface Project extends Post {
  projectIntelligence: ProjectIntelligence;
  tags: {
    nodes: { name: string }[];
  };
}
