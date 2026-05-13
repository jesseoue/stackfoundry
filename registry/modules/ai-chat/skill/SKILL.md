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
