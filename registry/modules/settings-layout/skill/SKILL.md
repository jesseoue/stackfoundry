---
name: settings-layout
description: Maintain the Settings Layout module installed by StackFoundry.
---

# Settings Layout Skill

## Boundary

This module owns the Settings Layout source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `apps/web/src/lib/stackfoundry/settings-layout.ts`
- `apps/web/src/components/stackfoundry/settings-layout.tsx`
- `apps/web/src/app/(console)/components/settings-layout/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
