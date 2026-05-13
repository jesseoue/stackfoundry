# StackFoundry

Install production SaaS modules as editable source code.

[![CI](https://github.com/jesseoue/stackfoundry/actions/workflows/ci.yml/badge.svg)](https://github.com/jesseoue/stackfoundry/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Status: Experimental](https://img.shields.io/badge/status-experimental-orange.svg)](./ROADMAP.md)

StackFoundry is a source registry for full-stack app modules: auth, billing, API keys, webhooks, analytics, docs, Drizzle schemas, tests, and deployment workflows.

Every module ships with the code and the operating instructions needed to maintain it.

No black boxes. No locked framework. Copy the code. Own the code.

## Status

StackFoundry is experimental. The current repository contains the registry, the first installable modules, and a local CLI prototype. Presets are bundles of modules; modules are the product.

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

## What Works Today

```bash
node apps/cli/src/cli.mjs list
node apps/cli/src/cli.mjs presets
node apps/cli/src/cli.mjs validate
node apps/cli/src/cli.mjs build
node apps/cli/src/cli.mjs add api-keys --target ../some-app --dry-run
node apps/cli/src/cli.mjs add preset next-saas --target ../some-app --dry-run
node apps/cli/src/cli.mjs diff api-keys --target ../some-app
```

Current installable modules:

- `drizzle-postgres`
- `api-keys`
- `stripe-billing`
- `ai-chat`

Current presets:

- `next-saas`
- `developer-platform`
- `b2b-saas`
- `ai-saas`
- `internal-admin`
- `free-tier-saas`
- `vercel-native`
- `cloudflare-native`

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

## Registry Output

The registry build writes public item JSON to:

```text
public/r/
  registry.json
  api-keys.json
  drizzle-postgres.json
  stripe-billing.json
  presets/
```

## Development

The current milestone is to make the first modules installable and safe to diff.

Current local prototype:

```bash
pnpm check
```

Website:

```bash
pnpm dev:web
```

Production build:

```bash
pnpm build:web
```

The website lives in `apps/web` and is configured for Vercel through the root `vercel.json`.
Set `NEXT_PUBLIC_SITE_URL` when deploying a custom domain so metadata, sitemap, and Open Graph
URLs resolve to the canonical production origin.

## Roadmap

See [`ROADMAP.md`](./ROADMAP.md).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md). Module requests are welcome through GitHub issues.

## Security

See [`SECURITY.md`](./SECURITY.md).
