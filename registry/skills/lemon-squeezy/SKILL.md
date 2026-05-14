---
name: lemon-squeezy
description: Lemon Squeezy billing guidance for installed billing modules.
---

# Lemon Squeezy Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/lemon-squeezy/SKILL.md`
- Registry source: `registry/skills/lemon-squeezy/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Verify webhook signatures.
- Keep store, product, variant, and license ids server-owned.
- Document checkout and license behavior.
- Test purchase, subscription, refund, and cancellation flows.
