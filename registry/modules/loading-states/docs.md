# Loading States Module

Skeleton and loading state components for async SaaS surfaces.

## Owns

- `apps/web/src/lib/stackfoundry/loading-states.ts`
- `apps/web/src/components/stackfoundry/loading-states.tsx`
- `apps/web/src/app/(console)/components/loading-states/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm cli add loading-states --target /tmp/app --dry-run`.
