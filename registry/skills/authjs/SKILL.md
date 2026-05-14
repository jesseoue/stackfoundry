---
name: authjs
description: Auth.js guidance for installed auth modules.
---

# Authjs Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/authjs/SKILL.md`
- Registry source: `registry/skills/authjs/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep auth configuration server-only.
- Use provider callbacks deliberately and document session shape.
- Do not expose OAuth client secrets to client code.
- Verify protected routes and sign-out behavior.
