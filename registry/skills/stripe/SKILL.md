---
name: stripe
description: Maintain Stripe integrations installed by StackFoundry modules.
---

# Stripe Operating Instructions

- Verify webhook signatures before reading event payloads.
- Persist webhook event ids and make handlers idempotent.
- Treat prices, products, customer ids, and subscription ids as server-owned state.
- Never trust client-provided price ids without validating them against server configuration.
- Test checkout completed, subscription updated, subscription canceled, and payment failed flows.
