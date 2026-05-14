# Registry

StackFoundry modules are source-delivered capabilities.

Each module has:

- `module.json`
- `docs.md`
- `skill/SKILL.md`
- `tests/checklist.md`
- source files, once implemented

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
- `agents`: maintenance instruction metadata
- `status`: planned, experimental, stable

## Registry Model

StackFoundry follows a source registry pattern: source blocks are described by JSON, files are copied into the consumer app, and the consumer owns the result.

StackFoundry adapts that model for production SaaS systems instead of UI-only components. A block may include routes, server helpers, schema files, env examples, docs, tests/checklists, and maintainer skill guidance.

## Registry Principles

- Modules install source code, not opaque package wrappers.
- Presets only compose modules.
- Provider modules adapt services into shared domain systems.
- Installers must produce enough metadata for safe diff/update workflows.
- Public modules should avoid private assumptions about a single company or app.

## Safety

Installers must not overwrite modified user files silently. The installer should track file hashes and support diff/update flows.

## Local Prototype

```bash
pnpm registry:list
pnpm registry:presets
pnpm registry:doctor
pnpm registry:build
pnpm cli add drizzle-postgres --target /path/to/app
pnpm cli add preset next-saas --target /path/to/app
pnpm cli diff drizzle-postgres --target /path/to/app
```

## Public Build Output

The `build` command generates registry-compatible JSON files under:

```text
public/r/
  registry.json
  drizzle-postgres.json
  api-keys.json
  stripe-billing.json
  vendor-examples.json
  presets/
    next-saas.json
```

This mirrors the source-registry pattern: registry item JSON embeds file contents and target paths while module metadata stays in `registry/modules/<module>/module.json`.

Generated public items are registry-compatible `registry:block` files. Registry dependencies are emitted as absolute URLs so compatible registry clients can resolve StackFoundry dependencies.

The build writes canonical generated output to `public/r` and mirrors it to `apps/web/public/r`. Vercel serves `/r/*.json` directly from the Next app as static JSON; no redirect is required.
