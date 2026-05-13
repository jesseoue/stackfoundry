---
name: data-retention
description: Maintain the Data Retention module installed by StackFoundry.
---

# Data Retention Maintenance Instructions

- Preserve the module ownership described in `docs.md`.
- Keep default source templates compact, typed, and provider-neutral.
- Update `tests/checklist.md` when behavior changes.
- Do not commit secrets, local state, or generated machine metadata.
- Keep Drizzle schema exports synchronized with `module.json`.
