# Postmortem Runbook Module

Blameless postmortem template and incident follow-up checklist.

## Owns

- `apps/web/src/lib/stackfoundry/postmortem-runbook.ts`
- `apps/web/src/app/(console)/admin/operations/postmortems/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add postmortem-runbook --target /tmp/app --dry-run`.
