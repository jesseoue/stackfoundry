---
name: railway
description: Railway deployment guidance for installed deploy modules.
---

# Railway Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/railway/SKILL.md`
- Registry source: `registry/skills/railway/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Document services, variables, and environments.
- Keep project tokens out of source.
- Verify build/start commands and health checks.
- Record production URL and rollback notes.
