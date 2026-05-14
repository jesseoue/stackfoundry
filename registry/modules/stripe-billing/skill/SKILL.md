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

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/stripe/SKILL.md` (source: `registry/skills/stripe/SKILL.md`)
- `.stackfoundry/skills/drizzle/SKILL.md` (source: `registry/skills/drizzle/SKILL.md`)
- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.

