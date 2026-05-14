---
name: command-menu
description: Maintain the Command Menu module installed by StackFoundry.
---

# Command Menu Skill

## Boundary

This module owns the Command Menu source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `apps/web/src/lib/stackfoundry/command-menu.ts`
- `apps/web/src/components/stackfoundry/command-menu.tsx`
- `apps/web/src/app/(console)/components/command-menu/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
