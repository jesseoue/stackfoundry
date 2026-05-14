# Custom Domains Module

Custom domain records, status, and tenant-owned routing controls.

## Owns

- `packages/db/src/schema/custom-domains.ts`
- `apps/web/src/lib/stackfoundry/custom-domains.ts`
- `apps/web/src/app/(console)/admin/tenancy/custom-domains/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm cli add custom-domains --target /tmp/app --dry-run`.
