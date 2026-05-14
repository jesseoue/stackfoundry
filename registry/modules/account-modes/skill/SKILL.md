---
name: account-modes
description: Maintain the Account Modes module installed by StackFoundry.
---

# Account Modes Skill

- Do not mix personal and organization data without an explicit active account context.
- Hide organization invitations, roles, and seat billing when the app is personal-only.
- Keep billing customer ownership aligned with the active account mode.
- Make account switching explicit and auditable.
- Update onboarding, navigation, and settings together when the account mode changes.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)
- `.stackfoundry/skills/drizzle/SKILL.md` (source: `registry/skills/drizzle/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

