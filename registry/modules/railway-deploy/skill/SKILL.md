---
name: railway-deploy
description: Maintain the Railway Deploy module installed by StackFoundry.
---

# Railway Deploy Maintenance Instructions

- Keep module ownership clear.
- Update docs with behavior changes.
- Add verification steps before release.
- Do not introduce provider lock-in outside the module boundary.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/railway/SKILL.md` (source: `registry/skills/railway/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

