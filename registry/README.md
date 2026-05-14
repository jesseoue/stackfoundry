# Registry Source

This directory is the product source for StackFoundry.

- `modules/` contains individual source-delivered capabilities.
- `presets/` contains curated bundles of modules.

Do not edit `public/r` by hand. Run `pnpm registry:build` to generate public registry output from this source.

The generated output follows the shadcn registry format (`registry:block`) so StackFoundry modules can be installed as owned source by compatible registry clients.

## Quality Gate

```bash
pnpm registry:doctor
pnpm registry:build
```
