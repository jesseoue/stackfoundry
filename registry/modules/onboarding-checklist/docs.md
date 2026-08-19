# Onboarding Checklist Module

Progress checklist with next-best actions and completion state.

## Owns

- `apps/web/src/lib/stackfoundry/onboarding-checklist.ts`
- `apps/web/src/components/stackfoundry/onboarding-checklist.tsx`
- `apps/web/src/app/(console)/components/onboarding-checklist/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add onboarding-checklist --target /tmp/app --dry-run`.
