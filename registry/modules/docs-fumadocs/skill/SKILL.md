---
name: docs-fumadocs
description: Maintain the Fumadocs Docs module installed by StackFoundry.
---

# Fumadocs Docs Maintenance Instructions

- Use this module when docs should live inside the Next.js app.
- Inspect the target app's `next.config.*`, root layout, and existing docs setup before wiring Fumadocs.
- Install `fumadocs-core`, `fumadocs-ui`, and `fumadocs-mdx` only when the app is ready for the adapter.
- Keep docs route metadata and sitemap entries in sync with public docs routes.
- Verify local docs navigation, `pnpm build`, and the deployed docs URL.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/fumadocs/SKILL.md` (source: `registry/skills/fumadocs/SKILL.md`)
- `.stackfoundry/skills/docs-hosting/SKILL.md` (source: `registry/skills/docs-hosting/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

