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
- `agents`: agent operating instructions metadata
- `status`: planned, experimental, stable

## Safety

Installers must not overwrite modified user files silently. The installer should track file hashes and support diff/update flows.
