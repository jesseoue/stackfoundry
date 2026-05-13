---
name: audit-log
description: Maintain the Audit Log module installed by StackFoundry.
---

# Audit Log Maintenance Instructions

- Preserve the module boundary described in `docs.md`.
- Keep public APIs small and typed.
- Update tests/checklist.md when behavior changes.
- Do not introduce secrets, generated machine metadata, or provider lock-in.
- Keep Drizzle schema exports documented in module.json.
