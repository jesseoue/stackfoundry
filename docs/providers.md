# Providers

Provider modules adapt external services into StackFoundry systems.

## Default Path

- Deploy: Vercel for the hosted site and Next.js examples
- Database: Postgres + Drizzle as the first data module
- Billing: Stripe as the first billing module
- API keys: local hashed keys first, with Unkey as a managed adapter
- Entitlements: local first, with Autumn as a managed adapter
- Email, analytics, and observability: provider modules stay optional adapters

## Adapter Rule

Providers map into shared domain systems. They should not become one-off code islands.

## Provider Families

### Deploy and Hosting

- Vercel first for Next.js applications
- Cloudflare Workers as an optional edge deployment path through installable registry modules
- Railway, Fly, and Render as optional deploy adapters

Use `cloudflare-next-starter` when a consuming Next.js app should deploy to Cloudflare Workers with OpenNext and Wrangler.

```bash
pnpm stackfoundry add cloudflare-next-starter --target ./my-app --dry-run
```

This installs Cloudflare deployment config into the target app. StackFoundry's own hosted site remains configured as a standard Next.js app for Vercel.

### Database and Storage

- Postgres + Drizzle as the default data model
- Neon and Supabase as managed Postgres providers
- Vercel Blob and S3/R2 for object storage
- Upstash Redis for cache, queues, and rate-limit support

### Billing and Entitlements

- Stripe as the default payment provider
- Paddle for Merchant of Record workflows
- Autumn for pricing, entitlements, credits, and usage control

### Product and Operations

- PostHog for product analytics and feature flags
- Sentry for error monitoring
- Resend for transactional email
- Unkey for managed API keys and rate limits

### Optional AI

- Vercel AI SDK, AI Gateway, and AI Elements for source-owned chatbot modules
- Cloudflare Workers AI, Agents SDK, Vectorize, and Kumo UI as optional Cloudflare building blocks
- Provider model routing belongs behind module adapters
