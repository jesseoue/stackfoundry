# Input Validation Module

Shared Zod validation helpers for server routes and forms.

## Owns

- `apps/web/src/lib/stackfoundry/input-validation.ts`
- `apps/web/src/app/(console)/admin/security/input-validation/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add input-validation --target /tmp/app --dry-run`.
