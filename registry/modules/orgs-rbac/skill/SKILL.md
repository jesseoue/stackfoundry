---
name: orgs-rbac
description: Maintain the Organizations RBAC module installed by StackFoundry.
---

# Organizations RBAC Maintenance Instructions

- Keep role and permission checks tenant-scoped.
- Keep default roles small and explicit.
- Add audit events before using this module for sensitive role changes.
- Update docs, checklist, schema, and helpers together when permissions change.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/drizzle/SKILL.md` (source: `registry/skills/drizzle/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.
