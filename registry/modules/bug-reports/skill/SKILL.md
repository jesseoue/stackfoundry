---
name: bug-reports
description: Maintain the Bug Reports module installed by StackFoundry.
---

# Bug Reports Skill

## Boundary

This module owns the Bug Reports source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `packages/db/src/schema/bug-reports.ts`
- `apps/web/src/lib/stackfoundry/bug-reports.ts`
- `apps/web/src/app/(console)/admin/support/bug-reports/page.tsx`

## Dependencies

- Depends on `support-console`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
