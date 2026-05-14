# Registry Source

This directory is the product source for StackFoundry.

- `modules/` contains individual source-delivered capabilities.
- `presets/` contains curated bundles of modules.

Do not edit `public/r` by hand. Run `pnpm registry:build` to generate public shadcn-compatible registry output from this source.

## Quality Gate

```bash
pnpm registry:doctor
pnpm registry:build
```
