---
name: drizzle-postgres
description: Maintain the Drizzle Postgres module installed by StackFoundry.
---

# Drizzle Postgres Operating Instructions

- Keep DB access server-only.
- Add tables under the schema directory and export them from the schema barrel.
- Generate and commit migration SQL when schema changes are intended.
- Do not import DB helpers from Client Components.
- Include tenant/user/org scope in cached query tags when data is user-specific.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/drizzle/SKILL.md` (source: `registry/skills/drizzle/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

