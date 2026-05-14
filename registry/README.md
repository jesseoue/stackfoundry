# Registry Source

This directory is the product source for StackFoundry.

- `modules/` contains individual source-delivered capabilities.
- `presets/` contains curated bundles of modules.
- `skills/` contains shared provider, framework, database, SDK, and platform skills copied to `.stackfoundry/skills/<name>/SKILL.md` when referenced by a module.

Do not edit `public/r` or `apps/web/public/r` by hand. Run `pnpm registry:build` to generate public registry output from this source.

The generated output follows the registry block format so StackFoundry modules can be installed as owned source by compatible registry clients.

## Quality Gate

```bash
pnpm registry:doctor
pnpm registry:build
```
