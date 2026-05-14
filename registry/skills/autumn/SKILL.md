---
name: autumn
description: Autumn billing and entitlement guidance for installed modules.
---

# Autumn Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/autumn/SKILL.md`
- Registry source: `registry/skills/autumn/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep provider keys server-only.
- Document entitlement names and metered features.
- Verify checks before gating user actions.
- Test plan changes, overages, and credit behavior.
