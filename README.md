# StackFoundry

Install production SaaS modules as editable source code.

[![CI](https://github.com/jesseoue/stackfoundry/actions/workflows/ci.yml/badge.svg)](https://github.com/jesseoue/stackfoundry/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Status: Experimental](https://img.shields.io/badge/status-experimental-orange.svg)](./ROADMAP.md)

StackFoundry is a public source registry for the product plumbing most SaaS teams rebuild: billing, auth, API keys, webhooks, docs, analytics, notifications, operations, provider adapters, and launch readiness.

Modules install as source files in your app. You review the code, own the code, and keep the maintenance context that ships with it.

> [!NOTE]
> The registry is the product. Presets are only curated bundles of modules.

## Why Use It

| Problem | StackFoundry gives you |
| --- | --- |
| Rebuilding the same SaaS systems | Installable source modules for common production capabilities |
| Black-box starter lock-in | Normal files, routes, schemas, docs, checklists, and maintenance skills |
| Provider sprawl | Optional adapters around shared product concepts |
| Unsafe copy/paste snippets | Manifests, env metadata, dependency metadata, and registry validation |
| Hard-to-review upgrades | Dry runs, diff commands, tracked install metadata, and generated examples |

## Quick Start

```bash
corepack enable
pnpm install

pnpm registry:doctor
pnpm registry:categories
pnpm registry:list

pnpm stackfoundry add api-keys --target ./my-app --dry-run
pnpm stackfoundry add preset next-saas --target ./my-app --dry-run
```

Install from the public registry URL when you want to consume generated registry items:

```bash
pnpm stackfoundry add https://stackfoundry.dev/r/api-keys.json --target ./my-app
pnpm stackfoundry add https://stackfoundry.dev/r/vendor-examples.json --target ./my-app
pnpm stackfoundry diff https://stackfoundry.dev/r/api-keys.json --target ./my-app
```

## What Installs

Every module is expected to include:

- source files in canonical app/package paths
- runtime and dev dependency metadata
- registry dependency metadata
- environment variable metadata and generated `.env.stackfoundry.*.example` files
- setup, ownership, and deployment docs
- verification checklists
- maintenance skills under `.stackfoundry/skills`
- install metadata for future diff/update safety

## Registry Coverage

Current source registry coverage:

| Area | Examples |
| --- | --- |
| Foundation | `next-saas`, `sidebar-shell`, `t3-env`, `quality-tooling`, `theme-system` |
| Database | `drizzle-postgres`, `drizzle-relations`, `neon-postgres`, `supabase-postgres`, `cloudflare-d1` |
| Auth and tenancy | `clerk-auth`, `orgs-rbac`, `account-modes`, `invites`, `enterprise-sso`, `scim-provisioning` |
| Billing | `stripe-billing`, `billing-core`, `entitlements`, `credit-wallet`, `one-time-purchases`, `tax-vat` |
| API product | `api-keys`, `public-api-orpc`, `webhook-inbox`, `webhook-delivery`, `api-docs` |
| Operations | `audit-log`, `background-jobs`, `system-health`, `incident-management`, `status-page`, `oncall-alerting` |
| Analytics and growth | `posthog-analytics`, `tinybird-analytics`, `feature-flags`, `experiments`, `lifecycle-email` |
| Notifications and comms | `notifications`, `notification-center`, `knock-notifications`, `resend-email`, `product-announcements` |
| Docs and SEO | `docs-fumadocs`, `docs-mintlify`, `docs-help-center`, `seo`, `ai-seo` |
| Security | `arcjet-security`, `security-headers`, `csrf-protection`, `input-validation`, `secrets-management` |
| Storage and infra | `vercel-blob`, `vercel-edge-config`, `cloudflare-r2`, `upstash-redis`, `docker-compose-local` |
| Optional AI | `ai-chat`, `model-router`, `ai-tools`, `rag-starter`, `evals`, `cloudflare-agents-sdk` |

<details>
<summary>Current scale</summary>

- 200+ module manifests
- 36 canonical categories
- 9 preset bundles
- provider adapters for Vercel, Cloudflare, Clerk, Supabase, Neon, Upstash, Resend, PostHog, Sentry, Axiom, Unkey, Knock, Tinybird, Trigger.dev, Inngest, GitHub, and more

</details>

## Presets

| Preset | Intended path |
| --- | --- |
| `next-saas` | Broad app foundation with database, billing, account surfaces, docs, ops, security, and growth modules |
| `b2b-saas` | Team workspaces, tenant controls, RBAC, auditability, SSO, and SCIM |
| `developer-platform` | API keys, public APIs, webhooks, docs, SDK snippets, and developer portal modules |
| `ai-saas` | Optional AI product modules for chat, model routing, prompts, quotas, RAG, and metering |
| `internal-admin` | Operator consoles, support, health, incidents, jobs, backup, and maintenance controls |
| `free-tier-saas` | Practical baseline for a free-tier product launch |
| `vercel-native` | Vercel deployment, storage, workflows, edge config, and observability path |
| `cloudflare-native` | Workers, D1, R2, KV, Queues, Workflows, Turnstile, and Cloudflare-native adapters |
| `vendor-examples` | Concrete optional provider adapter examples |

```bash
pnpm registry:presets
pnpm stackfoundry add preset next-saas --target ./my-app --dry-run
```

## CLI

The CLI intentionally stays on Node + pnpm. It is a small registry/install engine, not an interactive component wizard.

```bash
pnpm cli categories
pnpm cli list --category billing
pnpm cli list --status experimental
pnpm cli search webhook
pnpm cli info stripe-billing
pnpm cli add api-keys --target ./my-app --dry-run
pnpm cli diff api-keys --target ./my-app
pnpm cli build
pnpm cli doctor
```

Why Node instead of Bun or a larger CLI framework:

- the repository already targets Node `>=22 <25`
- Vercel builds use Node and pnpm cleanly
- the CLI surface is validation, discovery, install, diff, and build
- avoiding another runtime keeps module consumption simpler

## Registry Model

Source lives in `registry/`:

```text
registry/
  modules/
    <module>/
      module.json
      docs.md
      files/
      skill/SKILL.md
      tests/checklist.md
  presets/
    <preset>.json
  skills/
    <technology>/SKILL.md
```

Generated public output lives in `public/r/`:

```text
public/r/
  registry.json              # registry index
  api-keys.json              # installable registry item
  stripe-billing.json        # installable registry item
  vendor-examples.json       # installable aggregate preset block
  presets/
    next-saas.json           # StackFoundry preset manifest for tooling/inspection
```

Generated installable items are `registry:block` payloads with:

- package dependencies
- registry dependencies
- file targets and embedded file contents
- empty env placeholders in `envVars`
- docs
- metadata
- embedded maintenance skills

> [!IMPORTANT]
> Do not edit `public/r` by hand. Update `registry/modules`, `registry/presets`, or `registry/skills`, then run `pnpm registry:build`.

## Safety And Quality Gates

StackFoundry currently checks:

- registry manifest shape
- canonical categories
- unknown dependencies
- duplicate preset entries
- preset file collisions
- undeclared files
- env var naming and public env safety
- generated registry compatibility
- generated registry mirrors
- branded smoke output
- dry-run installs
- real installs into temporary targets
- route handlers that parse JSON handle malformed bodies
- installable source does not contain `TODO` / `FIXME`
- installable source avoids non-null `process.env.X!` assertions
- web lint, typecheck, and production build

Run everything:

```bash
pnpm check
```

Focused checks:

```bash
pnpm registry:doctor
pnpm registry:compat
pnpm test:brand
pnpm test:registry
pnpm lint:web
pnpm typecheck:web
pnpm build:web
```

## Public Machine-Readable Surfaces

| URL | Purpose |
| --- | --- |
| [`/r/registry.json`](https://stackfoundry.dev/r/registry.json) | public registry index |
| [`/llms.txt`](https://stackfoundry.dev/llms.txt) | concise AI-readable site map |
| [`/llms-full.txt`](https://stackfoundry.dev/llms-full.txt) | expanded public AI context |
| [`/ai-sitemap.json`](https://stackfoundry.dev/ai-sitemap.json) | JSON summary of AI-discoverable pages |

## Repository Layout

```text
apps/
  cli/                 # StackFoundry CLI
  web/                 # public site and registry host
docs/                  # product, registry, and maintainer docs
examples/              # reproducible install walkthroughs
packages/              # schema, registry, generator, and utility packages
registry/              # source modules, skills, and presets
scripts/               # standalone checks
public/r/              # generated registry output
```

See [`docs/repository.md`](./docs/repository.md) for ownership rules.

## Documentation

- [Registry](./docs/registry.md)
- [Modules](./docs/modules.md)
- [Providers](./docs/providers.md)
- [Maintenance skills](./docs/maintenance.md)
- [Repository map](./docs/repository.md)
- [Registry compatibility](./docs/registry-compat.md)

## Where This Is Going

- More modules graduating from planned to installable source payloads
- Better diff/update workflows for installed modules
- More provider adapters without making providers base dependencies
- More production smoke paths for presets
- Stronger docs around migration, removal, and maintenance ownership

## Status

StackFoundry is experimental. The registry, CLI, public registry output, and website are active. Module APIs and file targets can still change while the registry is being shaped.

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md). Module requests and provider examples are welcome through GitHub issues.

## Security

See [`SECURITY.md`](./SECURITY.md). Do not open public issues for vulnerabilities or include secrets, provider tokens, private customer data, or local environment files in reports.

## License

MIT. See [`LICENSE`](./LICENSE).
