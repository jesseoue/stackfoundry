# Timeline Activity Module

General activity timeline for accounts, records, integrations, and operational objects. It is distinct from security-specific event streams: this block focuses on readable object history with tenant-safe presentation.

## Owns

- `apps/web/src/lib/stackfoundry/timeline-activity.ts`
- `apps/web/src/components/stackfoundry/timeline-activity.tsx`
- `apps/web/src/app/(console)/components/timeline-activity/page.tsx`

## Safety Notes

- Resolve events from a tenant-scoped server query.
- Authorize access to actors, objects, and contextual detail.
- Redact secrets, raw payloads, and sensitive request bodies.
- Use a stable event identifier and UTC timestamp.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add timeline-activity --target /tmp/app --dry-run`.
