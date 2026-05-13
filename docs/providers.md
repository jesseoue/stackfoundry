# Providers

Provider modules adapt external services into StackFoundry systems.

## Defaults

- Deploy: Vercel
- Database: Postgres + Drizzle
- Email: Resend
- Analytics: PostHog
- Observability: Sentry
- Billing: Stripe
- API keys: local hashed keys first, Unkey as managed provider
- Entitlements: local first, Autumn as managed provider

## Adapter Rule

Providers map into shared domain systems. They should not become one-off code islands.
