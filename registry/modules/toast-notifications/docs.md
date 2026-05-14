# Toast Notifications Module

Accessible toast queue component for action feedback.

## Owns

- `apps/web/src/lib/stackfoundry/toast-notifications.ts`
- `apps/web/src/components/stackfoundry/toast-notifications.tsx`
- `apps/web/src/app/(console)/components/toasts/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add toast-notifications --target /tmp/app --dry-run`.
