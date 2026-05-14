---
name: statsig
description: Statsig flag and experiment guidance for installed modules.
---

# Statsig Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/statsig/SKILL.md`
- Registry source: `registry/skills/statsig/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep server secrets server-only.
- Document gates, experiments, and layers.
- Avoid leaking private targeting traits.
- Verify exposure logging and fallback behavior.
