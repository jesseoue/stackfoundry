---
name: neon
description: Neon Postgres guidance for installed database modules.
---

# Neon Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/neon/SKILL.md`
- Registry source: `registry/skills/neon/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep DATABASE_URL server-only.
- Document branch, pooling, and migration behavior.
- Run migrations against the intended branch only.
- Verify connection behavior in preview and production.
