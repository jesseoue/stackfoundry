---
name: sanity
description: Sanity CMS guidance for installed content modules.
---

# Sanity Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/sanity/SKILL.md`
- Registry source: `registry/skills/sanity/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep write tokens server-only.
- Document dataset, project id, and preview behavior.
- Use typed queries or schema-generated types where possible.
- Verify draft and published content paths.
