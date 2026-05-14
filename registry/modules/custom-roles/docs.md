# Custom Roles Module

Custom role definitions, role cloning, and permission assignment boundaries.

## Owns

- `packages/db/src/schema/custom-roles.ts`
- `apps/web/src/lib/stackfoundry/custom-roles.ts`
- `apps/web/src/app/(console)/settings/workspace/roles/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add custom-roles --target /tmp/app --dry-run`.
