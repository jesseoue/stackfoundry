---
name: empty-states
description: Maintain the Empty States module installed by StackFoundry.
---

# Empty States Skill

## Boundary

This module owns the Empty States source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `apps/web/src/lib/stackfoundry/empty-states.ts`
- `apps/web/src/components/stackfoundry/empty-states.tsx`
- `apps/web/src/app/(console)/components/empty-states/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
