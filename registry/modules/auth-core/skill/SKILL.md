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
