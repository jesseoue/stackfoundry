---
name: toast-notifications
description: Maintain the Toast Notifications module installed by StackFoundry.
---

# Toast Notifications Skill

## Boundary

This module owns the Toast Notifications source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `apps/web/src/lib/stackfoundry/toast-notifications.ts`
- `apps/web/src/components/stackfoundry/toast-notifications.tsx`
- `apps/web/src/app/(console)/components/toasts/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
