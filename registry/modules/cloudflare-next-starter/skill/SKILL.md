---
name: cloudflare-next-starter
description: Maintain the Cloudflare Next Starter module installed by StackFoundry.
---

# Cloudflare Next Starter Maintenance Instructions

- Keep Cloudflare deployment files scoped to consuming apps.
- Do not make Cloudflare the default deployment path for StackFoundry itself.
- Keep OpenNext and Wrangler config aligned with current Cloudflare guidance.
- Keep Cloudflare account IDs, API tokens, `.dev.vars`, and local Wrangler state out of source control.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/cloudflare/SKILL.md` (source: `registry/skills/cloudflare/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.
