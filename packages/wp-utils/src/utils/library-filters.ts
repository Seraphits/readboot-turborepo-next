import type {
  LibraryEntry,
  LibraryFilterOption,
  LibraryFilters,
} from "../types";
import { toLibraryOptionValue } from "./normalize-library-entry";

function toFilterValues(
  value: string | string[] | undefined,
): string[] {
  const values = Array.isArray(value) ? value : value ? [value] : [];

  return Array.from(
    new Set(
      values
        .map((item) => item.trim())
        .filter(Boolean)
        .map((item) => toLibraryOptionValue(item)),
    ),
  );
}

function sortOptions(options: LibraryFilterOption[]): LibraryFilterOption[] {
  return options.sort((a, b) =>
    a.label.localeCompare(b.label, undefined, { sensitivity: "base" }),
  );
}

export function parseLibraryFilters(input: {
  type?: string | string[];
  theory?: string | string[];
}): LibraryFilters {
  return {
    types: toFilterValues(input.type),
    theories: toFilterValues(input.theory),
  };
}

export function buildLibraryFilterOptions(entries: LibraryEntry[]): {
  articleTypes: LibraryFilterOption[];
  theories: LibraryFilterOption[];
} {
  const articleTypes = new Map<string, LibraryFilterOption>();
  const theories = new Map<string, LibraryFilterOption>();

  for (const entry of entries) {
    const existingArticleType = articleTypes.get(entry.articleType.value);
    if (existingArticleType) {
      existingArticleType.count += 1;
    } else {
      articleTypes.set(entry.articleType.value, {
        ...entry.articleType,
        count: 1,
      });
    }

    for (const theory of entry.theories) {
      const existingTheory = theories.get(theory.value);
      if (existingTheory) {
        existingTheory.count += 1;
      } else {
        theories.set(theory.value, {
          ...theory,
          count: 1,
        });
      }
    }
  }

  return {
    articleTypes: sortOptions(Array.from(articleTypes.values())),
    theories: sortOptions(Array.from(theories.values())),
  };
}

export function filterLibraryEntries(
  entries: LibraryEntry[],
  filters: LibraryFilters,
): LibraryEntry[] {
  return entries.filter((entry) => {
    const matchesType =
      filters.types.length === 0 ||
      filters.types.includes(entry.articleType.value);

    const matchesTheory =
      filters.theories.length === 0 ||
      entry.theories.some((theory) => filters.theories.includes(theory.value));

    return matchesType && matchesTheory;
  });
}
