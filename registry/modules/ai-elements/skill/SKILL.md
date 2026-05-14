---
name: ai-elements
description: Maintain the AI Elements module installed by StackFoundry.
---

# AI Elements Maintenance Instructions

- Keep components provider-neutral and composable.
- Preserve AI SDK `UIMessage.parts` rendering.
- Avoid coupling UI primitives to one model provider or gateway.
- Keep accessibility labels and status announcements intact.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/ai-sdk/SKILL.md` (source: `registry/skills/ai-sdk/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.
