import { redirect } from "next/navigation";

/**
 * Standalone docs deployment (e.g. Vercel preview URL root `/`) has no `app/page.tsx`
 * under this segment — all app lives under `app/docs/`. Production on readboot.com still
 * hits `/docs/...` via the web app rewrite. Send root visitors to the real docs entry.
 */
export default function DocsRootRedirect() {
  redirect("/docs/");
}
