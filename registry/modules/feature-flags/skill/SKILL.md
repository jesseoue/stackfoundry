---
name: feature-flags
description: Maintain the Feature Flags module installed by StackFoundry.
---

# Feature Flags Maintenance Instructions

- Preserve the module boundary described in `docs.md`.
- Keep public APIs small and typed.
- Update tests/checklist.md when behavior changes.
- Do not introduce secrets, generated machine metadata, or provider lock-in.
- Keep Drizzle schema exports documented in module.json.
