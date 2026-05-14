# Repository Map

StackFoundry is a source registry. Every directory should either own product source, registry source, generated output, examples, or documentation.

## Root

- `apps/` contains runnable applications.
- `docs/` contains product and maintainer documentation.
- `examples/` contains install targets and walkthroughs used to prove registry modules in realistic app shapes.
- `packages/` is reserved for extracted library packages when CLI, registry loading, schema validation, and shared utilities outgrow `apps/cli`.
- `public/r/` contains generated registry output. Do not edit it by hand.
- `registry/` contains source modules and presets. This is the product surface.
- `scripts/` is reserved for standalone maintenance scripts that should not live inside the CLI.

## Applications

- `apps/cli/` owns the `stackfoundry` command.
- `apps/web/` owns the public website and registry hosting surface.

## Registry Source

- `registry/modules/<module>/module.json` declares the module contract.
- `registry/modules/<module>/files/` contains installable source files.
- `registry/modules/<module>/docs.md` explains setup and ownership.
- `registry/modules/<module>/skill/SKILL.md` gives maintainer guidance.
- `registry/modules/<module>/tests/checklist.md` defines verification expectations.
- `registry/presets/*.json` composes modules into installable bundles.

## Generated Output

Run `pnpm registry:build` to regenerate `public/r`.

`public/r/registry.json` is the shadcn-compatible registry index and is not an installable item. Generated module files such as `public/r/api-keys.json` are `registry:block` item JSON files. They include file contents, target paths, package dependencies, registry dependency URLs, environment variables, docs, and metadata.

Generated aggregate preset blocks live at `public/r/<preset>.json`. Raw preset manifests live under `public/r/presets/*.json` for StackFoundry tooling and are not shadcn registry item documents.

## Verification

Run:

```bash
pnpm check
```

This runs registry validation, CLI syntax checks, dry-run installs, real install smoke tests, registry generation, compatibility verification, and the web build.
