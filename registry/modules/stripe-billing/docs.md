# Stripe Billing Module

Adds Stripe checkout, customer portal, subscription sync, webhook handling, and entitlement mapping.

This is the first concrete payment-provider adapter for the source-owned billing modules. Keep it optional and isolated so teams can choose Stripe directly, Autumn on top of Stripe, or another billing adapter.

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
