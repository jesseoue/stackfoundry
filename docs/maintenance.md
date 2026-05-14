# Maintenance Skills

Every module includes module-specific maintenance instructions in:

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

## Shared Provider And Technology Skills

Provider, framework, database, SDK, and platform guidance that applies to multiple modules lives in:

```text
registry/skills/<name>/SKILL.md
```

Reference shared skills from `module.json` in `maintenance.skills`:

```json
{
  "maintenance": {
    "skills": ["stripe-billing", "stripe", "drizzle", "nextjs"]
  }
}
```

By default, a skill named the same as the module is read from `skill/SKILL.md`. Other skill names are read from `registry/skills/<name>/SKILL.md`.

Module skills should not duplicate provider API guidance. They should point maintainers to the installed shared skill, for example `.stackfoundry/skills/stripe/SKILL.md`, and keep the module skill focused on ownership, installed files, environment variables, deployment checks, and module-specific invariants.

For modules that need a custom source or install location, use an object entry:

```json
[
  "stripe-billing",
  {
    "name": "stripe",
    "source": "skill/stripe-skill.md",
    "target": ".stackfoundry/skills/stripe/SKILL.md"
  }
]
```

## Installed Location

When a module is installed, module and shared skills are copied to:

```text
.stackfoundry/skills/<skill>/SKILL.md
```

Generated registry blocks also embed `maintenanceSkills`, so installs from `https://stackfoundry.dev/r/<module>.json` carry the same maintenance guidance as local module installs.

Module skills should explain the files owned by the module, required environment variables, deployment checks, and invariants that future maintainers must preserve. Shared skills should stay provider-, framework-, database-, SDK-, or platform-level and avoid repeating module-specific instructions.

## Provider Adapter Blocks

Provider adapter modules should include:

- source files owned by the integration
- runtime and development dependencies
- required environment variables
- preview and production deployment checks
- smoke-test routes or helpers when possible
- rules for keeping secrets server-only

Run `pnpm registry:doctor` to verify module skills, shared provider and technology skills, custom skill targets, and manifest references.
