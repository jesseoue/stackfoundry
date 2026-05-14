# Maintenance Instructions

Every module can include maintenance instructions in:

```text
registry/modules/<module>/skill/SKILL.md
```

These files teach maintainers:

- which files own the module
- which environment variables matter
- what invariants must not be broken
- how to test changes
- how to remove or migrate the module

This is a core part of the product, not an afterthought.

## Installed Location

When a module is installed, its skill is copied to:

```text
.agents/skills/<module>/SKILL.md
```

Skills are module-scoped. They should explain the files owned by the module, required environment variables, deployment checks, and invariants that future maintainers must preserve.

## Vendor Blocks

Vendor example blocks should include:

- source files owned by the integration
- runtime and development dependencies
- required environment variables
- preview and production deployment checks
- smoke-test routes or helpers when possible
- rules for keeping secrets server-only

Run `pnpm registry:doctor` to verify skills exist and match module manifests.
