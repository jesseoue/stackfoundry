---
name: lemon-squeezy-billing
description: Maintain the Lemon Squeezy Billing module installed by StackFoundry.
---

# Lemon Squeezy Billing Maintenance Instructions

- Keep module ownership clear.
- Update docs with behavior changes.
- Add verification steps before release.
- Do not introduce provider lock-in outside the module boundary.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/lemon-squeezy/SKILL.md` (source: `registry/skills/lemon-squeezy/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

