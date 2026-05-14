---
name: render
description: Render deployment guidance for installed deploy modules.
---

# Render Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/render/SKILL.md`
- Registry source: `registry/skills/render/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Document services, env groups, and build/start commands.
- Keep API keys out of source.
- Verify health checks and deploy logs.
- Record production URL and rollback notes.
