---
name: ai-sdk
description: Maintain the AI SDK module installed by StackFoundry.
---

# AI SDK Maintenance Instructions

- Keep provider keys server-only.
- Use AI SDK abstractions instead of importing provider SDKs directly.
- Keep model IDs, gateway routing, and fallback behavior documented.
- Re-run chat route and stream verification after changing model or streaming helpers.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.
