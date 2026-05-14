---
name: oncall-alerting
description: Maintain the On-call Alerting module installed by StackFoundry.
---

# On-call Alerting Skill

## Boundary

This module owns the On-call Alerting source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `apps/web/src/lib/stackfoundry/oncall-alerting.ts`
- `apps/web/src/app/(console)/admin/operations/on-call/page.tsx`

## Dependencies

- Depends on `incident-management`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
