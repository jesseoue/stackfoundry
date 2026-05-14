---
name: unkey
description: Unkey guidance for installed API key and rate-limit modules.
---

# Unkey Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/unkey/SKILL.md`
- Registry source: `registry/skills/unkey/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep root keys server-only.
- Hash or delegate secret storage; never log plaintext keys.
- Document key scopes and rate-limit namespaces.
- Verify revoke, rotate, and limit paths.
