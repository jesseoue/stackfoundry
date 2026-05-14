---
name: better-auth
description: Better Auth guidance for installed auth modules.
---

# Better Auth Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/better-auth/SKILL.md`
- Registry source: `registry/skills/better-auth/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep auth server config isolated from UI code.
- Document session, organization, and adapter assumptions.
- Do not mix provider behavior into shared auth modules.
- Verify protected routes and account lifecycle flows.
