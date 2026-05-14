# Refunds and Disputes Module

Refund request, dispute status, and support handoff workflow.

## Owns

- `packages/db/src/schema/refunds-disputes.ts`
- `apps/web/src/lib/stackfoundry/refunds-disputes.ts`
- `apps/web/src/app/(console)/billing/refunds/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add refunds-disputes --target /tmp/app --dry-run`.
