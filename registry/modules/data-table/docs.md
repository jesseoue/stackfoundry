# Data Table Module

Typed table shell with empty/loading/error slots and row actions.

## Owns

- `apps/web/src/lib/stackfoundry/data-table.ts`
- `apps/web/src/components/stackfoundry/data-table.tsx`
- `apps/web/src/app/(console)/components/data-table/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm cli add data-table --target /tmp/app --dry-run`.
