# Support Widget Module

Embeddable support launcher and server-side submission route.

## Owns

- `packages/db/src/schema/support-widget.ts`
- `apps/web/src/lib/stackfoundry/support-widget.ts`
- `apps/web/src/app/(console)/admin/support/widget/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm cli add support-widget --target /tmp/app --dry-run`.
