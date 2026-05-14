---
name: mintlify
description: Mintlify guidance for installed docs modules.
---

# Mintlify Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/mintlify/SKILL.md`
- Registry source: `registry/skills/mintlify/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Use Mintlify for hosted docs workspaces.
- Run mint dev from the docs.json directory.
- Keep navigation aligned with MDX files.
- Record production docs URL and custom domain settings.
