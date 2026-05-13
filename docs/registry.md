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
- `type`: module, preset, integration, schema, skill, component, block, page
- `category`: high-level grouping
- `dependencies`: runtime packages
- `devDependencies`: development packages
- `registryDependencies`: other modules/items required first
- `env`: required environment variables
- `files`: files installed into the target app
- `drizzle`: schema/migration metadata
- `agents`: maintenance instruction metadata
- `status`: planned, experimental, stable

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
node apps/cli/src/cli.mjs list
node apps/cli/src/cli.mjs validate
node apps/cli/src/cli.mjs build
node apps/cli/src/cli.mjs add drizzle-postgres --target /path/to/app
node apps/cli/src/cli.mjs diff drizzle-postgres --target /path/to/app
```

## Public Build Output

The `build` command generates registry-compatible JSON files under:

```text
public/r/
  registry.json
  drizzle-postgres.json
  api-keys.json
  stripe-billing.json
```

This mirrors the source-registry pattern: the registry item JSON embeds file contents while module metadata stays in `registry/modules/<module>/module.json`.
