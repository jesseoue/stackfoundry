# StackFoundry

Install production SaaS modules as editable source code.

StackFoundry is a source registry for full-stack app modules: auth, billing, API keys, webhooks, analytics, docs, Drizzle schemas, tests, and deployment workflows.

Every module ships with the code and the operating instructions needed to maintain it.

No black boxes. No locked framework. Copy the code. Own the code.

## Status

This repository is the public seed for StackFoundry. The product is the registry and module installer. Presets are only bundles of modules.

StackFoundry sits between three familiar ideas:

- source registries: copy code into your app so you own it
- stack builders: choose only the systems you need
- production SaaS kits: ship real auth, billing, database, analytics, docs, and operations surfaces

The difference is that StackFoundry modules include the implementation, the setup notes, the test checklist, and the maintenance guidance together.

## First Demo

Target workflow:

```bash
pnpm create stackfoundry my-app
cd my-app

pnpm dlx stackfoundry add drizzle-postgres
pnpm dlx stackfoundry add api-keys
pnpm dlx stackfoundry add stripe-billing
```

The demo should show each module adding:

- routes
- components
- database schema
- environment variables
- docs
- tests or verification checklist
- maintenance guidance
- install metadata for future diff/update safety

## V1 Golden Path

- `next-saas`
- `drizzle-postgres`
- `t3-env`
- `shadcn-sidebar-shell`
- `api-keys`
- `stripe-billing`
- `webhook-inbox`
- `audit-log`
- `posthog-analytics`
- `plg-metrics`
- `aarrr-dashboard`
- `activation-onboarding`
- `sentry-monitoring`
- `resend-email`

## Module Categories

StackFoundry is designed around production SaaS systems:

- foundation: Next.js App Router, shadcn-compatible source files, Sidebar shell, Geist theme, T3 env
- data: Drizzle, Postgres, migrations, audit log, soft delete, seed data
- auth and tenancy: Clerk, organizations, RBAC, invitations, workspace settings
- billing: Stripe, billing core, webhooks, entitlements, usage metering
- developer platform: API keys, scopes, public API, webhook delivery, developer portal
- growth: PostHog, PLG metrics, AARRR dashboards, onboarding, lifecycle email
- operations: admin console, support console, system health, Sentry, incident tools
- providers: Vercel, Neon, Supabase, Upstash, Cloudflare, Resend, PostHog, Sentry
- optional AI modules: AI chat, artifacts, model routing, prompt library

## Principles

- Registry is the product.
- Modules are the unit of value.
- Presets are bundles of modules.
- Base scaffold stays small.
- Provider modules are adapters around shared domain interfaces.
- Never overwrite modified user files silently.
- Track installed file hashes for diff/update safety.
- Each module teaches maintainers how to safely change it.

## Repository Layout

```text
apps/
  cli/                 # future CLI
  web/                 # future docs/registry site
packages/
  generator/           # renderer and install engine
  registry/            # registry loading and validation
  schema/              # zod schemas for modules/manifests
  utils/
registry/
  modules/             # source-delivered modules
  presets/             # curated module bundles
examples/
docs/
```

## Development

The current milestone is to make the first modules installable and safe to diff.

Current local prototype:

```bash
node apps/cli/src/cli.mjs list
node apps/cli/src/cli.mjs presets
node apps/cli/src/cli.mjs validate
node apps/cli/src/cli.mjs build
node apps/cli/src/cli.mjs add api-keys --target ../some-app --dry-run
node apps/cli/src/cli.mjs add preset next-saas --target ../some-app --dry-run
node apps/cli/src/cli.mjs diff api-keys --target ../some-app
```

## Roadmap

See [`ROADMAP.md`](./ROADMAP.md).
