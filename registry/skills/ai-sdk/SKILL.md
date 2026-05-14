---
name: ai-sdk
description: AI SDK guidance for installed AI modules.
---

# Ai Sdk Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/ai-sdk/SKILL.md`
- Registry source: `registry/skills/ai-sdk/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep provider keys server-only.
- Stream responses deliberately and handle tool errors.
- Validate tool inputs and outputs.
- Document model ids, fallback behavior, and cost-sensitive paths.
