---
name: refunds-disputes
description: Maintain the Refunds and Disputes module installed by StackFoundry.
---

# Refunds and Disputes Skill

## Boundary

This module owns the Refunds and Disputes source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `packages/db/src/schema/refunds-disputes.ts`
- `apps/web/src/lib/stackfoundry/refunds-disputes.ts`
- `apps/web/src/app/(console)/billing/refunds/page.tsx`

## Dependencies

- Depends on `billing-core`
- Depends on `audit-log`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
