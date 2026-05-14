# Billing Reconciliation Module

Provider/database drift checks and reconciliation job status.

## Owns

- `packages/db/src/schema/billing-reconciliation.ts`
- `apps/web/src/lib/stackfoundry/billing-reconciliation.ts`
- `apps/web/src/app/(console)/billing/reconciliation/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm cli add billing-reconciliation --target /tmp/app --dry-run`.
