---
name: csrf-protection
description: Maintain the CSRF Protection module installed by StackFoundry.
---

# CSRF Protection Skill

## Boundary

This module owns the CSRF Protection source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `apps/web/src/lib/stackfoundry/csrf-protection.ts`
- `apps/web/src/app/(console)/admin/security/csrf/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
