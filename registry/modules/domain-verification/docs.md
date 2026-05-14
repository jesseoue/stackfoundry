# Domain Verification Module

DNS TXT/CNAME verification state for tenant domains.

## Owns

- `apps/web/src/lib/stackfoundry/domain-verification.ts`
- `apps/web/src/app/(console)/admin/tenancy/domain-verification/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add domain-verification --target /tmp/app --dry-run`.
