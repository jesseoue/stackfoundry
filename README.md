# StackFoundry

Install production SaaS modules as editable source code.

[![CI](https://github.com/jesseoue/stackfoundry/actions/workflows/ci.yml/badge.svg)](https://github.com/jesseoue/stackfoundry/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Status: Experimental](https://img.shields.io/badge/status-experimental-orange.svg)](./ROADMAP.md)

StackFoundry is a source registry for production SaaS systems. It publishes installable modules for common product capabilities, provider adapters, docs, tests, and deployment workflows.

Every module is expected to include the source files and operating context needed to maintain it:

- implementation files
- package dependency metadata
- environment variable notes
- setup and ownership docs
- verification checklists
- module-scoped maintainer skills
- install metadata for future diff/update safety

No black boxes. No locked framework. Copy the code. Own the code.

## Why This Exists

Most SaaS teams rebuild the same production plumbing: billing, auth, database wiring, API keys, webhooks, analytics, file storage, background jobs, rate limits, admin tools, and provider adapters.

StackFoundry turns that work into a public source registry. Modules are the product. Presets are just bundles of modules.

The registry publishes JSON-described source blocks with dependencies, file contents, and target paths. StackFoundry applies that model to full-stack SaaS capabilities instead of package-only dependencies.

## Links

- Website: [stackfoundry.dev](https://stackfoundry.dev)
- Registry index: [stackfoundry.dev/r/registry.json](https://stackfoundry.dev/r/registry.json)
- GitHub: [github.com/jesseoue/stackfoundry](https://github.com/jesseoue/stackfoundry)
- Issues: [github.com/jesseoue/stackfoundry/issues](https://github.com/jesseoue/stackfoundry/issues)

## Install Modules

From this repository, use the StackFoundry CLI when you want install metadata and future diff safety:

```bash
pnpm stackfoundry add api-keys --target ./my-app
pnpm stackfoundry add preset next-saas --target ./my-app
pnpm stackfoundry diff api-keys --target ./my-app
```

The CLI can also install generated public registry JSON:

```bash
pnpm stackfoundry add https://stackfoundry.dev/r/api-keys.json --target ./my-app
pnpm stackfoundry add https://stackfoundry.dev/r/vendor-examples.json --target ./my-app
pnpm stackfoundry diff https://stackfoundry.dev/r/api-keys.json --target ./my-app
```

## What Is In The Registry

StackFoundry includes 160+ module definitions. The first production modules are `drizzle-postgres`, `api-keys`, and `stripe-billing`; the broader registry is organized across:

- foundation: Next.js, app shell, quality tooling, env validation
- data: Drizzle, Postgres, relations, soft delete, audit schemas
- auth and tenancy: Clerk, Better Auth, organizations, RBAC, invites, account settings
- billing: Stripe, billing core, entitlements, invoices, trials, usage metering
- developer platform: API keys, public API, webhooks, docs, SDK snippets, developer portal
- operations: admin console, support console, system health, incidents, backups, maintenance mode
- growth and analytics: PostHog, lifecycle email, surveys, cohorts, AARRR dashboards
- provider adapters and examples: Vercel, Neon, Supabase, Upstash, Resend, Sentry, Axiom, Unkey, Cloudflare, Trigger.dev, Inngest
- optional AI modules: chat, artifacts, model routing, tools, RAG, prompts, evals

## Presets

Presets compose modules into common installation paths:

- `next-saas`
- `b2b-saas`
- `developer-platform`
- `ai-saas`
- `internal-admin`
- `free-tier-saas`
- `vercel-native`
- `cloudflare-native`
- `vendor-examples`

List them locally:

```bash
pnpm registry:presets
```

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
```

Public registry output is generated into `public/r/`:

```text
public/r/
  registry.json
  api-keys.json
  stripe-billing.json
  vendor-examples.json
  presets/
```

Generated items are registry-compatible `registry:block` files with:

- `dependencies`
- `devDependencies`
- `registryDependencies`
- `files[].content`
- `files[].target`
- `envVars`
- `docs`
- `meta`

Do not edit `public/r` by hand. Update source modules and run `pnpm registry:build`.

## Repository Layout

```text
apps/
  cli/                 # StackFoundry CLI
  web/                 # public site and registry host
docs/                  # product, registry, and maintainer docs
examples/              # reproducible install walkthroughs
packages/              # reserved package boundaries
registry/              # source modules and presets
scripts/               # standalone maintenance scripts
public/r/              # generated registry output
```

See [`docs/repository.md`](./docs/repository.md) for ownership rules.

## Commands

```bash
pnpm dev                 # run the website
pnpm build               # build the website
pnpm check               # full verification

pnpm registry:list       # list modules
pnpm registry:categories # list canonical module categories
pnpm registry:presets    # list presets
pnpm registry:doctor     # validate registry source
pnpm registry:build      # generate public/r
pnpm registry:compat     # verify registry-compatible output

pnpm test:registry:dry      # dry-run install checks
pnpm test:registry:install  # real preset install smoke tests
```

`pnpm check` runs registry validation, CLI syntax checks, dry-run installs, real install smoke tests, registry generation, compatibility verification, and the web build.

## Documentation

- [Registry](./docs/registry.md)
- [Modules](./docs/modules.md)
- [Providers](./docs/providers.md)
- [Maintenance skills](./docs/maintenance.md)
- [Repository map](./docs/repository.md)
- [Registry compatibility](./docs/registry-compat.md)

## Status

StackFoundry is experimental. The registry, CLI prototype, public registry output, and website are active. Module APIs and file targets can still change while the registry is being shaped.

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md). Module requests and provider examples are welcome through GitHub issues.

## Security

See [`SECURITY.md`](./SECURITY.md). Do not open public issues for vulnerabilities or include secrets, provider tokens, private customer data, or local environment files in reports.

## License

MIT. See [`LICENSE`](./LICENSE).
