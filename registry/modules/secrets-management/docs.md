# Secrets Management Module

Secrets inventory, rotation checklist, and provider-neutral access pattern.

## Owns

- `apps/web/src/lib/stackfoundry/secrets-management.ts`
- `apps/web/src/app/(console)/admin/security/secrets/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm cli add secrets-management --target /tmp/app --dry-run`.
