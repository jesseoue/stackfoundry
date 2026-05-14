---
name: custom-roles
description: Maintain the Custom Roles module installed by StackFoundry.
---

# Custom Roles Skill

## Boundary

This module owns the Custom Roles source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `packages/db/src/schema/custom-roles.ts`
- `apps/web/src/lib/stackfoundry/custom-roles.ts`
- `apps/web/src/app/(console)/settings/workspace/roles/page.tsx`

## Dependencies

- Depends on `permission-matrix`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
