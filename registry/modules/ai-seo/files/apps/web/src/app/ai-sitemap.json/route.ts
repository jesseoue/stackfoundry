import { getAiSitemap } from "@/lib/stackfoundry/ai-seo";

export const dynamic = "force-static";

export function GET() {
  return Response.json(getAiSitemap(), {
    headers: {
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
