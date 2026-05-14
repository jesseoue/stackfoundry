---
name: cloudflare-kumo-ui
description: Maintain the Cloudflare Kumo UI module installed by StackFoundry.
---

# Cloudflare Kumo UI Maintenance Instructions

- Keep the dependency optional and scoped to projects that explicitly choose Kumo.
- Check Kumo docs before adding component imports or theme configuration.
- Document Tailwind, CSS, and theme changes in the module docs.
- Preserve accessibility behavior when wrapping Kumo primitives.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.
