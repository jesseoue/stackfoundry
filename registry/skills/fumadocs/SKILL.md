---
name: fumadocs
description: Fumadocs guidance for installed docs modules.
---

# Fumadocs Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/fumadocs/SKILL.md`
- Registry source: `registry/skills/fumadocs/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Use Fumadocs for in-app Next.js docs.
- Merge MDX config into existing Next config.
- Inspect root layout before adding providers.
- Verify docs routes, sitemap, and build output.
