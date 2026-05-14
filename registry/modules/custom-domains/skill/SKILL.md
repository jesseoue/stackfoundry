---
name: custom-domains
description: Maintain the Custom Domains module installed by StackFoundry.
---

# Custom Domains Skill

## Boundary

This module owns the Custom Domains source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `packages/db/src/schema/custom-domains.ts`
- `apps/web/src/lib/stackfoundry/custom-domains.ts`
- `apps/web/src/app/(console)/admin/tenancy/custom-domains/page.tsx`

## Dependencies

- Depends on `drizzle-postgres`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
