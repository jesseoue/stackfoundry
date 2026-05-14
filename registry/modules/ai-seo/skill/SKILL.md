---
name: ai-seo
description: Maintain the AI SEO module installed by StackFoundry.
---

# AI SEO Skill

- Treat `llms.txt` as AI-discovery infrastructure, not a guaranteed ranking signal.
- Keep `llms.txt` concise: canonical links with short descriptions.
- Keep `llms-full.txt` factual and free of secrets, private customer data, and internal-only claims.
- Update AI sitemap entries when public routes, docs, or registry surfaces change.
- Verify `/llms.txt`, `/llms-full.txt`, `/ai-sitemap.json`, `/robots.txt`, and `/sitemap.xml` before release.
- Keep `NEXT_PUBLIC_SITE_URL` accurate before trusting absolute URLs.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)
- `.stackfoundry/skills/docs-hosting/SKILL.md` (source: `registry/skills/docs-hosting/SKILL.md`)
- `.stackfoundry/skills/ai-sdk/SKILL.md` (source: `registry/skills/ai-sdk/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

