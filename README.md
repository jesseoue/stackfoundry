# StackFoundry

Install production SaaS and AI features as editable source code.

StackFoundry is a source registry for full-stack app modules: auth, billing, API keys, webhooks, AI chat, agents, analytics, docs, Drizzle schemas, tests, and deployment workflows.

Every module ships with the code and the agent operating instructions needed to maintain it.

No black boxes. No locked framework. Copy the code. Own the code.

## Status

This repository is the public seed for StackFoundry. The product direction is the registry and module installer.

## First Demo

Target workflow:

```bash
pnpm create stackfoundry my-app
cd my-app

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
- `.agents/skills/<module>/SKILL.md`
- `AGENTS.md` guidance

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

## Principles

- Registry is the product.
- Modules are the unit of value.
- Presets are bundles of modules.
- Base scaffold stays small.
- Provider modules are adapters around shared domain interfaces.
- Never overwrite modified user files silently.
- Track installed file hashes for diff/update safety.
- Each module teaches maintainers and coding agents how to safely change it.

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

The next milestone is to build `stackfoundry add` for the first production modules.

Current local prototype:

```bash
node apps/cli/src/cli.mjs list
node apps/cli/src/cli.mjs validate
node apps/cli/src/cli.mjs add api-keys --target ../some-app --dry-run
node apps/cli/src/cli.mjs diff api-keys --target ../some-app
```

## Roadmap

See [`ROADMAP.md`](./ROADMAP.md).
