---
name: keyset-pagination
description: Maintain the Keyset Pagination module installed by StackFoundry.
---

# Keyset Pagination Maintenance Instructions

## Invariants

- Validate limits and cursors before querying.
- Keep list queries tenant-scoped.
- Return an opaque, stable `next_cursor`.
- Never leak total row counts when the product does not expose them.

## Maintenance

- Preserve the ownership and setup guidance in `docs.md`.
- Keep source templates small and provider-neutral.
- Update `tests/checklist.md` with behavior changes.
- Do not commit secrets, local state, or generated machine metadata.

## Shared Skills

When provider, framework, or database behavior changes, load the installed shared skill before editing implementation details:

- `.stackfoundry/skills/nextjs/SKILL.md` (source: `registry/skills/nextjs/SKILL.md`)

Keep this module skill focused on ownership, installed files, env vars, deployment checks, and module-specific invariants.
