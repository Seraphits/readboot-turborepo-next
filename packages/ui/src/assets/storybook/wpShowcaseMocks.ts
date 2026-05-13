import type { Post, Project } from "@repo/wp-utils";
import { blogFeaturedPlaceholder, placeholderSrc } from "./placeholders";

export const mockProject = (
  id: string,
  title: string,
  slug: string,
): Project => ({
  id,
  title,
  slug,
  date: "2026-03-01",
  content: "",
  excerpt: "<p>Excerpt for Storybook grid.</p>",
  projectIntelligence: {
    lifecycleStatus: "Active",
    impactMetric: "3 teams",
    liveProjectLink: "https://example.com",
    linkedBlogCategory: { slug: "engineering", name: "Engineering" },
  },
  tags: { nodes: [{ name: "Design" }] },
});

export const mockPost = (id: string, title: string, slug: string): Post => ({
  id,
  title,
  slug,
  date: "2026-03-16",
  content: "",
  excerpt: "Short excerpt for the showcase grid.",
  featuredImage: {
    node: {
      sourceUrl: placeholderSrc(blogFeaturedPlaceholder),
      altText: "Featured image",
    },
  },
});

export const MOCK_PROJECTS: Project[] = [
  mockProject("p1", "Showcase project A", "showcase-project-a"),
  mockProject("p2", "Showcase project B", "showcase-project-b"),
];

export const MOCK_POSTS: Post[] = [
  mockPost("b1", "Showcase post A", "showcase-post-a"),
  mockPost("b2", "Showcase post B", "showcase-post-b"),
];
