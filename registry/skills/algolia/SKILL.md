---
name: algolia
description: Algolia search guidance for installed search modules.
---

# Algolia Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/algolia/SKILL.md`
- Registry source: `registry/skills/algolia/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep admin keys server-only.
- Use search-only keys on the client.
- Document index names and object id strategy.
- Verify indexing, deletion, and relevance behavior.
