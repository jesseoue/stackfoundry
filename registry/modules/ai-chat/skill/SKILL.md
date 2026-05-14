---
name: ai-chat
description: Maintain the AI Chat module installed by StackFoundry.
---

# AI Chat Maintenance Instructions

- Keep provider/model selection server-controlled.
- Use `DefaultChatTransport` with manually managed input state.
- Return UI message streams from server routes.
- Keep prompt defaults in `lib/ai/prompts.ts`.
- Do not hardcode a long-lived provider key in source.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/ai-sdk/SKILL.md` (source: `registry/skills/ai-sdk/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

