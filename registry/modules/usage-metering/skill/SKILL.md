---
name: usage-metering
description: Maintain the Usage Metering module installed by StackFoundry.
---

# Usage Metering Maintenance Instructions

- Preserve the module ownership described in `docs.md`.
- Keep default source templates compact, typed, and provider-neutral.
- Update `tests/checklist.md` when behavior changes.
- Do not commit secrets, local state, or generated machine metadata.
- Keep Drizzle schema exports synchronized with `module.json`.
