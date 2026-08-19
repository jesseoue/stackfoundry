# Workspace Switcher Module

Accessible workspace selector with tenant-safe switch behavior.

## Owns

- `apps/web/src/lib/stackfoundry/workspace-switcher.ts`
- `apps/web/src/components/stackfoundry/workspace-switcher.tsx`
- `apps/web/src/app/(console)/components/workspace-switcher/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add workspace-switcher --target /tmp/app --dry-run`.
