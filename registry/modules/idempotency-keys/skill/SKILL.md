---
name: idempotency-keys
description: Maintain the Idempotency Keys module installed by StackFoundry.
---

# Idempotency Keys Skill

## Boundary

This module owns the Idempotency Keys source block and its safety checklist. Keep business-specific behavior outside the reusable block until an app adopts it.

## Source Files

- `packages/db/src/schema/idempotency-keys.ts`
- `apps/web/src/lib/stackfoundry/idempotency-keys.ts`
- `apps/web/src/app/(console)/developers/idempotency/page.tsx`

## Dependencies

- Depends on `drizzle-postgres`

## Maintenance Rules

- Preserve tenant, permission, and data-safety boundaries.
- Keep examples small, typed, and replaceable.
- Update docs and checklist with behavior changes.
- Do not add secrets, credentials, or generated machine metadata.
