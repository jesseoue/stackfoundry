# Command Menu Module

Keyboard-first command menu component for SaaS navigation and actions.

## Owns

- `apps/web/src/lib/stackfoundry/command-menu.ts`
- `apps/web/src/components/stackfoundry/command-menu.tsx`
- `apps/web/src/app/(console)/components/command-menu/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add command-menu --target /tmp/app --dry-run`.
