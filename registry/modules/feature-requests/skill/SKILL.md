---
name: feature-requests
description: Maintain the Feature Requests module installed by StackFoundry.
---

# Feature Requests Skill

## Boundary

This module owns the Feature Requests source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `packages/db/src/schema/feature-requests.ts`
- `apps/web/src/lib/stackfoundry/feature-requests.ts`
- `apps/web/src/app/(console)/admin/support/feature-requests/page.tsx`

## Dependencies

- Depends on `support-console`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
