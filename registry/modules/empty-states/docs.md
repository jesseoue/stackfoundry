# Empty States Module

Reusable empty state component with action and guidance slots.

## Owns

- `apps/web/src/lib/stackfoundry/empty-states.ts`
- `apps/web/src/components/stackfoundry/empty-states.tsx`
- `apps/web/src/app/(console)/components/empty-states/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm cli add empty-states --target /tmp/app --dry-run`.
