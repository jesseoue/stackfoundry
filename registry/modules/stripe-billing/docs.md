# Stripe Billing Module

Adds Stripe checkout, customer portal, subscription sync, webhook handling, and entitlement mapping.

## Owns

- billing tables
- Stripe client wrapper
- checkout and portal actions
- webhook route
- event dedupe
- plan/entitlement mapping

## Rules

- Verify webhook signatures.
- Dedupe events before applying side effects.
- Never trust plan or price values from the client.
- Keep billing provider code behind `billing-core`.
