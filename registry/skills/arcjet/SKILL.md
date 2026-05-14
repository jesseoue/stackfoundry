---
name: arcjet
description: Arcjet security guidance for installed protection modules.
---

# Arcjet Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/arcjet/SKILL.md`
- Registry source: `registry/skills/arcjet/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Protect expensive and abuse-sensitive routes first.
- Keep keys server-only.
- Document bot, shield, and rate-limit decisions.
- Verify allow/deny behavior with safe test requests.
