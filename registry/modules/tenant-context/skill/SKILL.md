---
name: tenant-context
description: Maintain the Tenant Context module installed by StackFoundry.
---

# Tenant Context Skill

## Boundary

This module owns the Tenant Context source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `packages/db/src/schema/tenant-context.ts`
- `apps/web/src/lib/stackfoundry/tenant-context.ts`
- `apps/web/src/app/(console)/admin/tenancy/context/page.tsx`

## Dependencies

- Depends on `drizzle-postgres`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
