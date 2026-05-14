---
name: plg-metrics
description: Maintain the PLG Metrics module installed by StackFoundry.
---

# PLG Metrics Maintenance Instructions

- Keep event names stable, namespaced, and documented.
- Keep provider ingestion separate from source-owned metric definitions.
- Keep tenant and actor scope explicit.
- Avoid private customer data in event metadata.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/drizzle/SKILL.md` (source: `registry/skills/drizzle/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.
