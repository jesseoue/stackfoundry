# Error Boundaries Module

React error boundary and fallback component for product pages.

## Owns

- `apps/web/src/lib/stackfoundry/error-boundaries.ts`
- `apps/web/src/components/stackfoundry/error-boundaries.tsx`
- `apps/web/src/app/(console)/components/error-boundaries/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm cli add error-boundaries --target /tmp/app --dry-run`.
