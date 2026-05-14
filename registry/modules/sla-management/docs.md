# SLA Management Module

Customer SLA tiers, response targets, and escalation policies.

## Owns

- `apps/web/src/lib/stackfoundry/sla-management.ts`
- `apps/web/src/app/(console)/admin/operations/slas/page.tsx`

## Safety Notes

- Keep tenant, permission, and billing boundaries explicit.
- Validate all server inputs before side effects.
- Record audit events for sensitive state changes.
- Do not commit secrets, credentials, local caches, or provider tokens.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm cli add sla-management --target /tmp/app --dry-run`.
