---
name: linear
description: Linear integration guidance for installed modules.
---

# Linear Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/linear/SKILL.md`
- Registry source: `registry/skills/linear/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep API keys and webhook secrets server-only.
- Document workspace, team, and project mappings.
- Verify webhook signatures when enabled.
- Test issue creation and sync idempotency.
