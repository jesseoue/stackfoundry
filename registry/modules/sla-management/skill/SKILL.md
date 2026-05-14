---
name: sla-management
description: Maintain the SLA Management module installed by StackFoundry.
---

# SLA Management Skill

## Boundary

This module owns the SLA Management source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `apps/web/src/lib/stackfoundry/sla-management.ts`
- `apps/web/src/app/(console)/admin/operations/slas/page.tsx`

## Dependencies

- Depends on `support-console`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
