# Settings Layout Module

Reusable settings shell for account, workspace, billing, and security pages.

## Owns

- `apps/web/src/lib/stackfoundry/settings-layout.ts`
- `apps/web/src/components/stackfoundry/settings-layout.tsx`
- `apps/web/src/app/(console)/components/settings-layout/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add settings-layout --target /tmp/app --dry-run`.
