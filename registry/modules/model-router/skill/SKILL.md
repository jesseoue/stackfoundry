---
name: model-router
description: Maintain the Model Router module installed by StackFoundry.
---

# Model Router Maintenance Instructions

- Keep module ownership clear.
- Update docs with behavior changes.
- Add verification steps before release.
- Do not introduce provider lock-in outside the module boundary.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/ai-sdk/SKILL.md` (source: `registry/skills/ai-sdk/SKILL.md`)
- `.stackfoundry/skills/ai-gateway/SKILL.md` (source: `registry/skills/ai-gateway/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

