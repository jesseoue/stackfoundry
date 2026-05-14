---
name: domain-verification
description: Maintain the Domain Verification module installed by StackFoundry.
---

# Domain Verification Skill

## Boundary

This module owns the Domain Verification source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `apps/web/src/lib/stackfoundry/domain-verification.ts`
- `apps/web/src/app/(console)/admin/tenancy/domain-verification/page.tsx`

## Dependencies

- Depends on `custom-domains`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
