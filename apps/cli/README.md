# StackFoundry CLI

The CLI is the local install engine for StackFoundry registry modules.

## Responsibilities

- List modules and presets.
- Browse canonical categories and search modules.
- Validate registry source.
- Build registry-compatible output.
- Install modules or presets into a target app.
- Install generated registry block JSON from local files or StackFoundry registry URLs.
- Refuse to overwrite modified target files unless `--force` is explicit.
- Write install metadata for future diff/update workflows.

Shared logic is imported through workspace package aliases:

- `@stackfoundry/schema` for validation constants.
- `@stackfoundry/registry` for registry IO and hashing.
- `@stackfoundry/generator` for safe file writes.
- `@stackfoundry/utils` for small shared helpers.

## Useful Commands

```bash
pnpm cli list
pnpm cli categories
pnpm cli list --category billing
pnpm cli search webhook
pnpm cli info stripe-billing
pnpm cli presets
pnpm cli doctor
pnpm cli build
pnpm cli add api-keys --target /tmp/app --dry-run
pnpm cli add preset vendor-examples --target /tmp/app --dry-run
pnpm cli add https://stackfoundry.dev/r/api-keys.json --target /tmp/app --dry-run
pnpm cli diff api-keys --target /tmp/app
```

## Quality Gate

Use the root check command:

```bash
pnpm check:registry
```
