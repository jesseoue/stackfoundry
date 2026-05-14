---
name: meilisearch
description: Meilisearch guidance for installed search modules.
---

# Meilisearch Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/meilisearch/SKILL.md`
- Registry source: `registry/skills/meilisearch/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep master/admin keys server-only.
- Document index and filterable attribute setup.
- Use scoped search keys where applicable.
- Verify indexing, deletion, and search latency.
