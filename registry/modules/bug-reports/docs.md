# Bug Reports Module

Bug report intake, severity, reproduction steps, and triage workflow.

## Owns

- `packages/db/src/schema/bug-reports.ts`
- `apps/web/src/lib/stackfoundry/bug-reports.ts`
- `apps/web/src/app/(console)/admin/support/bug-reports/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm cli add bug-reports --target /tmp/app --dry-run`.
