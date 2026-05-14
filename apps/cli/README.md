# StackFoundry CLI

The CLI is the local install engine for StackFoundry registry modules.

## Responsibilities

- List modules and presets.
- Validate registry source.
- Build shadcn-compatible registry output.
- Install modules or presets into a target app.
- Refuse to overwrite modified target files unless `--force` is explicit.
- Write install metadata for future diff/update workflows.

## Useful Commands

```bash
pnpm cli list
pnpm cli presets
pnpm cli doctor
pnpm cli build
pnpm cli add api-keys --target /tmp/app --dry-run
pnpm cli add preset vendor-examples --target /tmp/app --dry-run
pnpm cli diff api-keys --target /tmp/app
```

## Quality Gate

Use the root check command:

```bash
pnpm check:registry
```
