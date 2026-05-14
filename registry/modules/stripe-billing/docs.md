# Stripe Billing Module

Adds Stripe checkout, customer portal, subscription sync, webhook handling, and entitlement mapping.

This is the first concrete payment-provider adapter for the source-owned billing modules. Keep it optional and isolated so teams can choose Stripe directly, Autumn on top of Stripe, or another billing adapter.

## Official Docs

- [Stripe Docs](https://stripe.com/docs)
- [Stripe Webhooks](https://stripe.com/docs/webhooks)
- [Stripe API Reference](https://stripe.com/docs/api)

## Owns

- billing tables
- Stripe client wrapper
- checkout and portal actions
- webhook route
- event dedupe
- plan/entitlement mapping

## Environment

Installing this module generates `.env.stackfoundry.stripe-billing.example` with:

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

Keep secret keys server-only and configure webhook secrets separately for preview and production.

## Rules

- Verify webhook signatures.
- Dedupe events before applying side effects.
- Never trust plan or price values from the client.
- Keep billing provider code behind `billing-core`.
