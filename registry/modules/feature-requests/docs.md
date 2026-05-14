# Feature Requests Module

Feature request intake, status, votes, and roadmap handoff.

## Owns

- `packages/db/src/schema/feature-requests.ts`
- `apps/web/src/lib/stackfoundry/feature-requests.ts`
- `apps/web/src/app/(console)/admin/support/feature-requests/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add feature-requests --target /tmp/app --dry-run`.
