# CSRF Protection Module

CSRF token helpers and unsafe-method protection checklist.

## Owns

- `apps/web/src/lib/stackfoundry/csrf-protection.ts`
- `apps/web/src/app/(console)/admin/security/csrf/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm cli add csrf-protection --target /tmp/app --dry-run`.
