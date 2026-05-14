---
name: ai-gateway
description: AI Gateway guidance for installed model routing modules.
---

# Ai Gateway Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/ai-gateway/SKILL.md`
- Registry source: `registry/skills/ai-gateway/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Document model routing and provider fallback rules.
- Keep gateway and provider credentials server-only.
- Track cost-sensitive calls.
- Verify fallback and error handling paths.
