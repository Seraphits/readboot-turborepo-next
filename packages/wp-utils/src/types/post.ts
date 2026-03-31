/** Category edge from WPGraphQL (Yoast `isPrimary` on edge when available). */
export interface PostCategoryEdge {
  isPrimary?: boolean;
  node: {
    slug: string;
    name: string;
  };
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText?: string;
    };
  };
  categories?: {
    edges: PostCategoryEdge[];
  };
}

export interface Category {
  name: string;
  slug: string;
  posts: {
    nodes: Post[];
  };
}
