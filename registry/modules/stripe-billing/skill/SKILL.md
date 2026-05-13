---
name: stripe-billing
description: Maintain the Stripe billing module installed by StackFoundry.
---

# Stripe Billing Operating Instructions

- Verify all Stripe webhook signatures.
- Store and check webhook event ids for idempotency.
- Map Stripe subscription state into internal entitlement state.
- Do not trust client-provided price ids without validating them against server config.
- Keep checkout, portal, webhook, and entitlement changes documented together.
- Test subscription created, updated, canceled, payment failed, and checkout completed flows.
