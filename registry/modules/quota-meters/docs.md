# Quota Meters Module

Progressive usage meters for API, seat, and storage entitlements.

## Owns

- `apps/web/src/lib/stackfoundry/quota-meters.ts`
- `apps/web/src/components/stackfoundry/quota-meters.tsx`
- `apps/web/src/app/(console)/components/quota-meters/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add quota-meters --target /tmp/app --dry-run`.
