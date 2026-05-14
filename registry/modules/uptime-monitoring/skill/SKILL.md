---
name: uptime-monitoring
description: Maintain the Uptime Monitoring module installed by StackFoundry.
---

# Uptime Monitoring Skill

## Boundary

This module owns the Uptime Monitoring source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `apps/web/src/lib/stackfoundry/uptime-monitoring.ts`
- `apps/web/src/app/(console)/admin/operations/uptime/page.tsx`

## Dependencies

- Depends on `system-health`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
