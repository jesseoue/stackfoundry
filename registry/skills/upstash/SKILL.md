---
name: upstash
description: Upstash Redis guidance for installed cache/rate-limit modules.
---

# Upstash Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/upstash/SKILL.md`
- Registry source: `registry/skills/upstash/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep Redis URL and token server-only.
- Document region and durability assumptions.
- Use explicit key prefixes for tenant/user scope.
- Verify rate-limit and cache invalidation behavior.
