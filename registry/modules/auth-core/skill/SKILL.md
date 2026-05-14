---
name: auth-core
description: Maintain the Auth Core module installed by StackFoundry.
---

# Auth Core Skill

- Choose one primary auth adapter before production: `clerk-auth` or `auth-better-auth`.
- Keep provider-neutral account mode and route layout decisions in this module.
- Keep provider SDK code inside the provider adapter module.
- Protect server code first; do not rely on client-only checks for authorization.
- Document session shape, user id, organization id, role, and permission assumptions.
- Verify sign-in, sign-up, sign-out, protected routes, webhook sync, and session expiry.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

