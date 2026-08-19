# Security Activity Module

Security event timeline with severity, actor, and timestamp display.

## Owns

- `apps/web/src/lib/stackfoundry/security-activity.ts`
- `apps/web/src/components/stackfoundry/security-activity.tsx`
- `apps/web/src/app/(console)/components/security-activity/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add security-activity --target /tmp/app --dry-run`.
