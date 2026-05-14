---
name: vercel-marketplace-storage
description: Maintain the Vercel Marketplace Storage module installed by StackFoundry.
---

# Vercel Marketplace Storage Maintenance Instructions

- Keep module ownership clear.
- Update docs with behavior changes.
- Add verification steps before release.
- Do not introduce provider lock-in outside the module boundary.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/vercel/SKILL.md` (source: `registry/skills/vercel/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

