export interface NavItem {
  id: string;
  parentId: string | null;
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
  content: string;
}

export interface Category {
  name: string;
  slug: string;
  posts: {
    nodes: Post [];
  };
}

export interface Project extends Post {
  projectIntelligence: {
    lifecycleStatus: string;
    impactMetric: string;
    liveProjectLink: string;
    linkedBlogCategory: Category;
  };
  tags: {
    nodes: { name: string }[];
  };
}
