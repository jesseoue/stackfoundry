---
name: tenant-isolation-tests
description: Maintain the Tenant Isolation Tests module installed by StackFoundry.
---

# Tenant Isolation Tests Skill

## Boundary

This module owns the Tenant Isolation Tests source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `apps/web/src/lib/stackfoundry/tenant-isolation-tests.ts`
- `apps/web/src/app/(console)/admin/tenancy/isolation-tests/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
