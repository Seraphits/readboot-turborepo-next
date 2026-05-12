export interface LibraryOption {
  value: string;
  label: string;
}

export type ArticleTypeOption = LibraryOption;

export type TheoryOption = LibraryOption;

export interface LibraryImage {
  src: string;
  alt: string;
}

export interface LibraryEntry {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  contentHtml?: string;
  date: string;
  image?: LibraryImage;
  articleType: ArticleTypeOption;
  theories: TheoryOption[];
}

export interface LibraryFilterOption extends LibraryOption {
  count: number;
}

export interface LibraryFilters {
  types: string[];
  theories: string[];
}

export interface LibraryCategoryNode {
  name: string;
  slug: string;
}

export interface LibraryFeaturedImageNode {
  sourceUrl?: string | null;
  altText?: string | null;
}

export interface LibraryPostFields {
  articleType?: string | null;
  theory?: string[] | string | null;
}

export interface LibraryWordPressPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt?: string | null;
  content?: string | null;
  featuredImage?: {
    node?: LibraryFeaturedImageNode | null;
  } | null;
  categories?: {
    nodes?: LibraryCategoryNode[] | null;
  } | null;
  postFields?: LibraryPostFields | null;
}
