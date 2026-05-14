# Repository Map

StackFoundry is a source registry. Every directory should either own product source, registry source, generated output, examples, or documentation.

## Root

- `apps/` contains runnable applications.
- `docs/` contains product and maintainer documentation.
- `examples/` contains install targets and walkthroughs used to prove registry modules in realistic app shapes.
- `packages/` is reserved for extracted library packages when CLI, registry loading, schema validation, and shared utilities outgrow `apps/cli`.
- `public/r/` contains generated shadcn-compatible registry output. Do not edit it by hand.
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

Generated registry items are shadcn-compatible `registry:block` JSON files. They include file contents, target paths, package dependencies, registry dependency URLs, environment variables, docs, and metadata.

## Verification

Run:

```bash
pnpm check
```

This runs registry validation, CLI syntax checks, dry-run installs, real install smoke tests, registry generation, shadcn output verification, and the web build.
