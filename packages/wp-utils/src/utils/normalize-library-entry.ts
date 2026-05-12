import type {
  ArticleTypeOption,
  LibraryEntry,
  LibraryOption,
  LibraryWordPressPost,
  TheoryOption,
} from "../types";

const WHITESPACE_RE = /\s+/g;
const NON_WORD_RE = /[^a-z0-9]+/g;

function hasText(value: string | null | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function toLibraryOptionValue(label: string): string {
  return label
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(WHITESPACE_RE, " ")
    .replace(NON_WORD_RE, "-")
    .replace(/^-+|-+$/g, "");
}

export function toLibraryOption(label: string): LibraryOption {
  return {
    label: label.trim(),
    value: toLibraryOptionValue(label),
  };
}

export function normalizeArticleType(
  articleType: string | null | undefined,
): ArticleTypeOption | null {
  if (!hasText(articleType)) {
    return null;
  }

  return toLibraryOption(articleType);
}

export function normalizeTheories(
  theories: string[] | string | null | undefined,
): TheoryOption[] {
  const values = Array.isArray(theories)
    ? theories
    : hasText(theories)
      ? [theories]
      : [];

  const seen = new Set<string>();

  return values
    .filter(hasText)
    .map((value) => toLibraryOption(value))
    .filter((option) => {
      if (seen.has(option.value)) {
        return false;
      }

      seen.add(option.value);
      return true;
    });
}

export function isInLibraryCategory(
  post: Pick<LibraryWordPressPost, "categories">,
  categorySlug = "readboot",
): boolean {
  const nodes = post.categories?.nodes ?? [];
  return nodes.some((category) => category.slug === categorySlug);
}

export function normalizeLibraryEntry(
  post: LibraryWordPressPost,
  categorySlug = "readboot",
): LibraryEntry | null {
  if (!isInLibraryCategory(post, categorySlug)) {
    return null;
  }

  const articleType = normalizeArticleType(post.postFields?.articleType);
  const theories = normalizeTheories(post.postFields?.theory);

  if (!articleType || theories.length === 0) {
    return null;
  }

  const sourceUrl = post.featuredImage?.node?.sourceUrl;
  const altText = post.featuredImage?.node?.altText;

  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: hasText(post.excerpt) ? post.excerpt : undefined,
    contentHtml: hasText(post.content) ? post.content : undefined,
    date: post.date,
    image: hasText(sourceUrl)
      ? {
          src: sourceUrl,
          alt: hasText(altText) ? altText : post.title,
        }
      : undefined,
    articleType,
    theories,
  };
}
