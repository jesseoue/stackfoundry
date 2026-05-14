---
name: email-postmark
description: Maintain the Postmark Email module installed by StackFoundry.
---

# Postmark Email Maintenance Instructions

- Keep module ownership clear.
- Update docs with behavior changes.
- Add verification steps before release.
- Do not introduce provider lock-in outside the module boundary.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/postmark/SKILL.md` (source: `registry/skills/postmark/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

