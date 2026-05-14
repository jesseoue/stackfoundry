---
name: ai-seo
description: Guide maintainers of AI discovery, llms.txt, and AI sitemap surfaces.
---

# AI SEO Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/ai-seo/SKILL.md`
- Registry source: `registry/skills/ai-seo/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Prefer factual canonical summaries over marketing claims.
- Keep `llms.txt` short enough for quick agent routing.
- Use `llms-full.txt` for expanded public context that can be fetched in one request.
- Keep absolute URLs based on the production site URL.
- Exclude secrets, private customer data, unpublished roadmap commitments, and private app routes.
- Verify AI-facing files whenever public routes, docs, registry URLs, or metadata change.
