---
name: fly
description: Fly.io deployment guidance for installed deploy modules.
---

# Fly Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/fly/SKILL.md`
- Registry source: `registry/skills/fly/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Document app names, regions, volumes, and secrets.
- Keep deploy tokens out of source.
- Verify health checks and rollback path.
- Record production URL and region choices.
