---
name: ai-chatbot-sdk
description: Maintain the AI Chatbot SDK module installed by StackFoundry.
---

# AI Chatbot SDK Maintenance Instructions

- Keep chat state on the client and model routing on the server.
- Use AI SDK UI messages and render `parts`.
- Keep UI built from `ai-elements` primitives so teams can replace styling without rewriting chat logic.
- Verify streaming after any route, model, or transport change.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/ai-sdk/SKILL.md` (source: `registry/skills/ai-sdk/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.
