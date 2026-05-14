---
name: dunning-recovery
description: Maintain the Dunning Recovery module installed by StackFoundry.
---

# Dunning Recovery Skill

## Boundary

This module owns the Dunning Recovery source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `packages/db/src/schema/dunning-recovery.ts`
- `apps/web/src/lib/stackfoundry/dunning-recovery.ts`
- `apps/web/src/app/(console)/billing/dunning/page.tsx`

## Dependencies

- Depends on `billing-core`
- Depends on `notifications`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
