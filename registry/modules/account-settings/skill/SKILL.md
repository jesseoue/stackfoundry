---
name: account-settings
description: Maintain the Account Settings module installed by StackFoundry.
---

# Account Settings Maintenance Instructions

- Preserve the module boundary described in `docs.md`.
- Keep public APIs small and typed.
- Update tests/checklist.md when behavior changes.
- Do not introduce secrets, generated machine metadata, or provider lock-in.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

