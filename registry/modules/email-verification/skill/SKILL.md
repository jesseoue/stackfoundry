---
name: email-verification
description: Maintain the Email Verification module installed by StackFoundry.
---

# Email Verification Maintenance Instructions

- Preserve the ownership and setup guidance in `docs.md`.
- Keep source templates small and provider-neutral.
- Update `tests/checklist.md` with behavior changes.
- Do not commit secrets, local state, or generated machine metadata.
- Keep Drizzle schema exports synchronized with `module.json`.
