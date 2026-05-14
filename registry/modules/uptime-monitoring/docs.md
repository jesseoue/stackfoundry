# Uptime Monitoring Module

Public endpoint checks, SLA targets, and status escalation notes.

## Owns

- `apps/web/src/lib/stackfoundry/uptime-monitoring.ts`
- `apps/web/src/app/(console)/admin/operations/uptime/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add uptime-monitoring --target /tmp/app --dry-run`.
