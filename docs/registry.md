# Registry

StackFoundry modules are source-delivered capabilities.

Each module has:

- `module.json`
- `docs.md`
- `skill/SKILL.md`
- `tests/checklist.md`
- source files, once implemented

Recipes live in `registry/recipes/*.json` and describe install order across modules. Presets install bundles; recipes explain the architecture.

## Manifest Fields

- `name`: stable module id
- `type`: module, integration, or page
- `category`: high-level grouping
- `dependencies`: runtime packages
- `devDependencies`: development packages
- `registryDependencies`: other modules/items required first
- `env`: required environment variables
- `files`: files installed into the target app
- `drizzle`: schema/migration metadata
- `maintenance`: maintenance skill and review metadata
- `status`: ready, stub, planned, experimental, stable, or deprecated

## Registry Model

StackFoundry follows a source registry pattern: source blocks are described by JSON, files are copied into the consumer app, and the consumer owns the result.

The model is inspired by the shadcn registry/source-block approach, then extended for production SaaS modules with routes, server helpers, schema files, env notes, docs, verification checklists, and maintenance skills.

StackFoundry adapts that model for production SaaS systems instead of UI-only components. A block may include routes, server helpers, schema files, env examples, docs, tests/checklists, and maintainer skill guidance.

## Registry Principles

- Modules install source code, not opaque package wrappers.
- Presets only compose modules.
- Provider modules adapt services into shared domain systems.
- Recipes define complete workflow paths across modules.
- Installers must produce enough metadata for safe diff/update workflows.
- Public modules should avoid private assumptions about a single company or app.

## Safety

Installers must not overwrite modified user files silently. The installer should track file hashes and support diff/update flows.

## Local Prototype

```bash
pnpm registry:list
pnpm registry:presets
pnpm stackfoundry recipes
pnpm stackfoundry recipe api-saas-starter
pnpm registry:doctor
pnpm registry:build
pnpm stackfoundry add drizzle-postgres --target /path/to/app
pnpm stackfoundry add recipe api-saas-starter --target /path/to/app --dry-run
pnpm stackfoundry diff drizzle-postgres --target /path/to/app
```

## Public Build Output

The `build` command generates registry-compatible JSON files under:

```text
public/r/
  registry.json            # registry index
  drizzle-postgres.json
  api-keys.json
  stripe-billing.json
  provider-adapters.json     # installable aggregate preset block
  presets/
    next-saas.json         # StackFoundry preset manifest
  recipes/
    api-saas-starter.json  # human-readable recipe and install order
```

This mirrors the source-registry pattern: `/r/registry.json` is the registry index, while registry item JSON embeds file contents and target paths. Module metadata stays in `registry/modules/<module>/module.json`.

Generated public module and aggregate preset items are registry-compatible `registry:block` files using the shadcn registry item schema. Registry dependencies are emitted as absolute URLs so compatible registry clients can resolve StackFoundry dependencies.

Files under `/r/presets/*.json` are StackFoundry preset manifests for tooling and inspection. They are not installable registry item payloads; use `/r/<preset>.json` to install a preset bundle.

Files under `/r/recipes/*.json` are StackFoundry recipe manifests for human-readable architecture, outcomes, and staged install order. Recipes can also be installed through the StackFoundry command with `stackfoundry add recipe <name>`.

The build writes canonical generated output to `public/r` and mirrors it to `apps/web/public/r`. Vercel serves `/r/*.json` directly from the Next app as static JSON; no redirect is required.
