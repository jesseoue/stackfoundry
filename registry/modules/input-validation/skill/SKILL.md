---
name: input-validation
description: Maintain the Input Validation module installed by StackFoundry.
---

# Input Validation Skill

## Boundary

This module owns the Input Validation source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `apps/web/src/lib/stackfoundry/input-validation.ts`
- `apps/web/src/app/(console)/admin/security/input-validation/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
