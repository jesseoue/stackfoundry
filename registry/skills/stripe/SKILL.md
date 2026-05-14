---
name: stripe
description: Maintain Stripe integrations installed by StackFoundry modules.
---

# Stripe Operating Instructions

## Installed Location

- Installed target: `.stackfoundry/skills/stripe/SKILL.md`
- Registry source: `registry/skills/stripe/SKILL.md`

Agents maintaining an installed module should load this shared skill from the installed target when provider, framework, database, SDK, or platform behavior is involved. Keep provider-specific API details here instead of duplicating them inside module maintenance skills.

- Verify webhook signatures before reading event payloads.
- Persist webhook event ids and make handlers idempotent.
- Treat prices, products, customer ids, and subscription ids as server-owned state.
- Never trust client-provided price ids without validating them against server configuration.
- Test checkout completed, subscription updated, subscription canceled, and payment failed flows.
