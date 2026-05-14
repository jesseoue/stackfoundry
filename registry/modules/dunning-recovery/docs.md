# Dunning Recovery Module

Failed payment recovery sequence with email and in-app notices.

## Owns

- `packages/db/src/schema/dunning-recovery.ts`
- `apps/web/src/lib/stackfoundry/dunning-recovery.ts`
- `apps/web/src/app/(console)/billing/dunning/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm cli add dunning-recovery --target /tmp/app --dry-run`.
