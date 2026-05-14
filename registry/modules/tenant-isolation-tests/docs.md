# Tenant Isolation Tests Module

Test helpers and checklist for cross-tenant isolation assertions.

## Owns

- `apps/web/src/lib/stackfoundry/tenant-isolation-tests.ts`
- `apps/web/src/app/(console)/admin/tenancy/isolation-tests/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add tenant-isolation-tests --target /tmp/app --dry-run`.
