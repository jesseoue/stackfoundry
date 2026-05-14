---
name: trigger-dev
description: Trigger.dev job guidance for installed task modules.
---

# Trigger Dev Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/trigger-dev/SKILL.md`
- Registry source: `registry/skills/trigger-dev/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep task ids stable.
- Make task runs idempotent and retry-safe.
- Document secrets and deployment commands.
- Verify local and deployed task execution.
