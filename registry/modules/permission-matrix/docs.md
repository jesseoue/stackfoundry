# Permission Matrix Module

Tenant-scoped permission catalog and UI review matrix.

## Owns

- `packages/db/src/schema/permission-matrix.ts`
- `apps/web/src/lib/stackfoundry/permission-matrix.ts`
- `apps/web/src/app/(console)/settings/workspace/permissions/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add permission-matrix --target /tmp/app --dry-run`.
