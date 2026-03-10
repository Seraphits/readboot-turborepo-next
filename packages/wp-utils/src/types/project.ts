import { Post, Category } from './post';

export interface ProjectIntelligence {
  lifecycleStatus: string;
  primaryImpactMetric: string;
  liveProjectLink: string;
  linkedBlogCategory?: Category;
}

export interface Project extends Post {
  projectIntelligence: ProjectIntelligence;
  tags: {
    nodes: { name: string }[];
  };
}
