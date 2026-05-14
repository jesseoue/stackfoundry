# Seat Management Module

Seat limits, assigned seats, and over-limit handling for B2B billing.

## Owns

- `packages/db/src/schema/seat-management.ts`
- `apps/web/src/lib/stackfoundry/seat-management.ts`
- `apps/web/src/app/(console)/billing/seats/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm cli add seat-management --target /tmp/app --dry-run`.
