# Agent Skills

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

## Shared Technology Skills

Technology guidance that applies to multiple modules lives in:

```text
registry/skills/<technology>/SKILL.md
```

Reference shared skills from `module.json` with `agents.skills`:

```json
{
  "agents": {
    "skills": ["stripe-billing", "stripe", "drizzle", "nextjs"]
  }
}
```

By default, a skill named the same as the module is read from `skill/SKILL.md`. Other skill names are read from `registry/skills/<name>/SKILL.md`.

For modules that need a custom source or install location, use an object entry:

```json
{
  "agents": {
    "skills": [
      "stripe-billing",
      {
        "name": "stripe",
        "source": "agent/stripe-skill.md",
        "target": ".agents/skills/stripe/SKILL.md"
      }
    ]
  }
}
```

## Installed Location

When a module is installed, module and technology skills are copied to:

```text
.agents/skills/<skill>/SKILL.md
```

Generated registry blocks also embed `agentSkills`, so installs from `https://stackfoundry.dev/r/<module>.json` carry the same maintenance guidance as local module installs.

Module skills should explain the files owned by the module, required environment variables, deployment checks, and invariants that future maintainers must preserve. Shared technology skills should stay provider- or framework-level and avoid repeating module-specific instructions.

## Vendor Blocks

Vendor example blocks should include:

- source files owned by the integration
- runtime and development dependencies
- required environment variables
- preview and production deployment checks
- smoke-test routes or helpers when possible
- rules for keeping secrets server-only

Run `pnpm registry:doctor` to verify module skills, shared technology skills, custom skill targets, and manifest references.
