---
name: tax-vat
description: Maintain the Tax and VAT module installed by StackFoundry.
---

# Tax and VAT Skill

## Boundary

This module owns the Tax and VAT source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `packages/db/src/schema/tax-vat.ts`
- `apps/web/src/lib/stackfoundry/tax-vat.ts`
- `apps/web/src/app/(console)/billing/tax/page.tsx`

## Dependencies

- Depends on `billing-core`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
