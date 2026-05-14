# Recipes

Recipes are opinionated install paths through the registry. A recipe answers "what should I install together, and in what order?" Presets remain installable bundles; recipes explain the product architecture behind those bundles.

## Available Recipes

| Recipe | Purpose |
| --- | --- |
| `saas-starter-minimal` | Small SaaS foundation with shell, auth boundary, billing path, database, settings, and env conventions |
| `api-saas-starter` | API product path with keys, usage, quotas, docs, webhooks, credits, billing, and request visibility |
| `enterprise-saas` | Enterprise identity, access, security posture, auditability, SLAs, and support operations |
| `ai-saas-starter` | AI product path with chat, routing, prompts, evals, artifacts, RAG, quotas, and usage billing |
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
```

Recipe definitions live in `registry/recipes/*.json` and are mirrored to `public/r/recipes/*.json` for public inspection.

## Recipe Shape

Each recipe includes:

- `modules`: flattened module list
- `stages`: human-readable install order
- `outcomes`: what the installed architecture should let the team operate
- `status`: whether the recipe is ready, a stub, planned, experimental, stable, or deprecated

Recipes may include stub modules. Stub modules are intentional roadmap entries with maintenance guidance but no source payload yet.
