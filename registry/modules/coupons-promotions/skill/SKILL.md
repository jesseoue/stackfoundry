---
name: coupons-promotions
description: Maintain the Coupons Promotions module installed by StackFoundry.
---

# Coupons Promotions Skill

## Boundary

This module owns the Coupons Promotions source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `packages/db/src/schema/coupons-promotions.ts`
- `apps/web/src/lib/stackfoundry/coupons-promotions.ts`
- `apps/web/src/app/(console)/billing/coupons/page.tsx`

## Dependencies

- Depends on `billing-core`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
