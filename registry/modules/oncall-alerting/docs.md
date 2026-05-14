# On-call Alerting Module

Alert routing, severity taxonomy, and escalation schedule starter.

## Owns

- `apps/web/src/lib/stackfoundry/oncall-alerting.ts`
- `apps/web/src/app/(console)/admin/operations/on-call/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add oncall-alerting --target /tmp/app --dry-run`.
