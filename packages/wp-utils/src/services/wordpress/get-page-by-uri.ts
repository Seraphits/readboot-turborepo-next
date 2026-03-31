import { getWordPressData } from "./client";
import { GET_PAGE_QUERY } from "../../queries/page";
import type { PageData } from "../../types";

/**
 * Fetches a WordPress page by URI (e.g. /about-us/).
 * WPGraphQL expects URIs without trailing slash for internal matching.
 */
export async function getPageByUri(uri: string): Promise<PageData | null> {
  const normalizedUri = uri.startsWith("/") ? uri : `/${uri}`;
  const uriForApi = normalizedUri.replace(/\/$/, ""); // No trailing slash for API

  const data = (await getWordPressData(
    GET_PAGE_QUERY,
    { uri: uriForApi },
    {
      revalidate: 60,
    },
  )) as { page?: PageData } | undefined;

  return data?.page ?? null;
}
