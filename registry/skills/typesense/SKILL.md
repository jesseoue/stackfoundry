---
name: typesense
description: Typesense guidance for installed search modules.
---

# Typesense Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/typesense/SKILL.md`
- Registry source: `registry/skills/typesense/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep admin keys server-only.
- Document collection schema and searchable fields.
- Use search-only keys on the client.
- Verify collection migration and reindex paths.
