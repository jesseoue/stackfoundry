---
name: billing-portal
description: Maintain the Billing Portal module installed by StackFoundry.
---

# Billing Portal Skill

## Boundary

This module owns the Billing Portal source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `apps/web/src/lib/stackfoundry/billing-portal.ts`
- `apps/web/src/app/(console)/billing/portal/page.tsx`

## Dependencies

- Depends on `billing-core`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
