# Feedback Collector Module

Satisfaction score and structured feedback form with submission states.

## Owns

- `apps/web/src/lib/stackfoundry/feedback-collector.ts`
- `apps/web/src/components/stackfoundry/feedback-collector.tsx`
- `apps/web/src/app/(console)/components/feedback-collector/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add feedback-collector --target /tmp/app --dry-run`.
