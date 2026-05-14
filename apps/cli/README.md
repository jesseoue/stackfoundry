# StackFoundry Command

The `stackfoundry` command is the local install engine for StackFoundry registry modules.

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
pnpm stackfoundry list
pnpm stackfoundry categories
pnpm stackfoundry list --category billing
pnpm stackfoundry search webhook
pnpm stackfoundry info stripe-billing
pnpm stackfoundry presets
pnpm stackfoundry recipes
pnpm stackfoundry recipe api-saas-starter
pnpm stackfoundry doctor
pnpm stackfoundry build
pnpm stackfoundry add api-keys --target /tmp/app --dry-run
pnpm stackfoundry add recipe api-saas-starter --target /tmp/app --dry-run
pnpm stackfoundry add preset provider-adapters --target /tmp/app --dry-run
pnpm stackfoundry add https://stackfoundry.dev/r/api-keys.json --target /tmp/app --dry-run
pnpm stackfoundry diff api-keys --target /tmp/app
```

## Quality Gate

Use the root check command:

```bash
pnpm check:registry
```
