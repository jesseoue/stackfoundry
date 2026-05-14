# Next SaaS Example

This example documents the golden-path install for the `next-saas` preset.

The example is command-driven so it stays reproducible and does not duplicate a generated app in this repository.

## Smoke Install

```bash
rm -rf /tmp/stackfoundry-next-saas
mkdir -p /tmp/stackfoundry-next-saas
pnpm stackfoundry add preset next-saas --target /tmp/stackfoundry-next-saas
```

## Dry Run

```bash
pnpm stackfoundry add preset next-saas --target /tmp/stackfoundry-next-saas --dry-run
```

## What This Proves

- Registry dependencies install before dependent modules.
- Source files land in canonical app paths.
- `.stackfoundry/skills/*` maintenance guidance is installed.
- `.env.stackfoundry.*.example` files are generated for modules with env vars.
- Existing files are not overwritten silently.

## Related Checks

```bash
pnpm test:registry:install
```
