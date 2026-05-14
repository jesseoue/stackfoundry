---
name: error-boundaries
description: Maintain the Error Boundaries module installed by StackFoundry.
---

# Error Boundaries Skill

## Boundary

This module owns the Error Boundaries source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `apps/web/src/lib/stackfoundry/error-boundaries.ts`
- `apps/web/src/components/stackfoundry/error-boundaries.tsx`
- `apps/web/src/app/(console)/components/error-boundaries/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
