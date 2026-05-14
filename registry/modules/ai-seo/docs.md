# AI SEO

`llms.txt`, `llms-full.txt`, and AI sitemap routes for AI-ready discovery.

## Owns

- `apps/web/src/lib/stackfoundry/ai-seo.ts`
- `apps/web/src/app/llms.txt/route.ts`
- `apps/web/src/app/llms-full.txt/route.ts`
- `apps/web/src/app/ai-sitemap.json/route.ts`

## Why This Exists

AI search and agent tools need concise, canonical context that is cheaper to parse than arbitrary HTML. This module publishes an opinionated index and expanded context file without claiming ranking guarantees.

## Environment

- `NEXT_PUBLIC_SITE_URL`

## Maintenance

- Keep page summaries short, factual, and canonical.
- Include only public pages and public machine-readable resources.
- Update `llms.txt`, `llms-full.txt`, sitemap, metadata, and docs together when routes change.
- Do not include private customer data, secrets, roadmap commitments, or internal-only implementation notes.
