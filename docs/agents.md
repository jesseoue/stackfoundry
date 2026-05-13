# Agent Operating Instructions

Every module can include agent operating instructions in:

```text
registry/modules/<module>/skill/SKILL.md
```

These files teach maintainers and coding agents:

- which files own the module
- which environment variables matter
- what invariants must not be broken
- how to test changes
- how to remove or migrate the module

This is a core part of the product, not an afterthought.
