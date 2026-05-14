---
name: dependency-audit
description: Maintain the Dependency Audit module installed by StackFoundry.
---

# Dependency Audit Skill

## Boundary

This module owns the Dependency Audit source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `apps/web/src/lib/stackfoundry/dependency-audit.ts`
- `apps/web/src/app/(console)/admin/security/dependencies/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
