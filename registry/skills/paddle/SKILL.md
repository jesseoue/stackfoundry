---
name: paddle
description: Paddle billing guidance for installed billing modules.
---

# Paddle Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/paddle/SKILL.md`
- Registry source: `registry/skills/paddle/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Verify webhook signatures.
- Keep product and price ids server-owned.
- Document merchant-of-record tax assumptions.
- Test subscription, payment failed, refund, and cancellation events.
