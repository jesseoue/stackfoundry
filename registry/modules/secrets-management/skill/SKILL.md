---
name: secrets-management
description: Maintain the Secrets Management module installed by StackFoundry.
---

# Secrets Management Skill

## Boundary

This module owns the Secrets Management source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `apps/web/src/lib/stackfoundry/secrets-management.ts`
- `apps/web/src/app/(console)/admin/security/secrets/page.tsx`

## Dependencies

- No registry dependencies.

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
