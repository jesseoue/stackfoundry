---
name: inngest
description: Inngest workflow guidance for installed job modules.
---

# Inngest Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/inngest/SKILL.md`
- Registry source: `registry/skills/inngest/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Keep event names stable and versioned.
- Make steps idempotent and retry-safe.
- Document signing keys and local dev commands.
- Verify function registration and replay behavior.
