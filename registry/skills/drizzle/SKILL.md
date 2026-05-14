---
name: drizzle
description: Maintain Drizzle ORM and Postgres code installed by StackFoundry modules.
---

# Drizzle Operating Instructions

## Installed Location

- Installed target: `.stackfoundry/skills/drizzle/SKILL.md`
- Registry source: `registry/skills/drizzle/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep database access in server-only code.
- Add schema changes under `packages/db/src/schema` and export shared tables from the schema barrel.
- Generate and commit migrations when schema changes are intended.
- Use typed query helpers instead of raw SQL unless the query needs a documented escape hatch.
- Include tenant, organization, or user scope in queries and cache tags whenever data is not global.
