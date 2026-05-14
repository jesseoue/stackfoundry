---
name: convex
description: Convex backend guidance for installed realtime/backend modules.
---

# Convex Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/convex/SKILL.md`
- Registry source: `registry/skills/convex/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep Convex env and deployment ownership documented.
- Use generated types after schema/function changes.
- Document optimistic update and realtime assumptions.
- Verify deployed functions before wiring UI.
