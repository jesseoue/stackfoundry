---
name: support-widget
description: Maintain the Support Widget module installed by StackFoundry.
---

# Support Widget Skill

## Boundary

This module owns the Support Widget source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `packages/db/src/schema/support-widget.ts`
- `apps/web/src/lib/stackfoundry/support-widget.ts`
- `apps/web/src/app/(console)/admin/support/widget/page.tsx`

## Dependencies

- Depends on `support-console`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
