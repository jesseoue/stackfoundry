---
name: postmortem-runbook
description: Maintain the Postmortem Runbook module installed by StackFoundry.
---

# Postmortem Runbook Skill

## Boundary

This module owns the Postmortem Runbook source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `apps/web/src/lib/stackfoundry/postmortem-runbook.ts`
- `apps/web/src/app/(console)/admin/operations/postmortems/page.tsx`

## Dependencies

- Depends on `incident-management`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
