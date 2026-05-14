# Recipes

Recipes are opinionated install paths through the registry. A recipe answers "what should I install together, and in what order?" Modules are the product, recipes are the guided path, and presets remain convenience bundles.

The front-door recipe is `api-saas-starter`: API keys, usage tracking, quotas, credits, Stripe billing, docs, webhooks, and request visibility for API-first SaaS products.

## Available Recipes

| Recipe | Purpose |
| --- | --- |
| `saas-starter-minimal` | Small SaaS foundation with shell, auth boundary, billing path, database, settings, and env conventions |
| `api-saas-starter` | API product path with keys, usage, quotas, credits, Stripe billing, docs, webhooks, and request visibility |
| `enterprise-saas` | Enterprise identity, access, security posture, auditability, SLAs, and support operations |
| `ai-saas-starter` | AI product path with Vercel AI SDK chat, AI Elements, quotas, usage billing, and optional Cloudflare AI building blocks |
| `cloudflare-saas` | Cloudflare-native path across Workers, storage, queues, workflows, Durable Objects, Hyperdrive, and Turnstile |
| `support-ops` | Operator and support path for customer context, tickets, incidents, on-call, postmortems, and replay |
| `security-center` | Unified security posture path for access reviews, API key risk, secrets, MFA, and security events |
| `integration-marketplace` | Integration UX path for catalog, connection flow, health, permissions, webhooks, and sync logs |
| `customer-intelligence` | Customer 360 path for usage, billing, support, health, risk, expansion, and adoption signals |

## Commands

```bash
pnpm stackfoundry recipes
pnpm stackfoundry recipe api-saas-starter
pnpm stackfoundry add recipe api-saas-starter --target ./my-app --dry-run
pnpm stackfoundry add recipe api-saas-starter --target ./my-app
```

Recipe definitions live in `registry/recipes/*.json` and are mirrored to `public/r/recipes/*.json` for public inspection.

The most product-ready path today is `api-saas-starter`, which ties together identity, API keys, usage metering, quotas, credits, docs, webhooks, Stripe billing, and request visibility. Recipes only reference published modules. Future workflow ideas belong in module/provider requests or roadmap docs until source payloads are ready.

## Recipe Shape

Each recipe includes:

- `modules`: flattened module list
- `stages`: human-readable install order
- `outcomes`: what the installed architecture should let the team operate
- `status`: whether the recipe is ready, planned, experimental, stable, or deprecated

Recipes should reference published registry modules only. Proposal ideas should be submitted as proposals until they include source files and can be promoted into the registry.
