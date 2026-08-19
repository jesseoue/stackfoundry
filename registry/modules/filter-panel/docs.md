# Filter Panel Module

Operational filter panel for data tables, event streams, and support queues. The UI encodes user intent; the adopting app validates it on the server and composes it with tenant scope.

## Owns

- `apps/web/src/lib/stackfoundry/filter-panel.ts`
- `apps/web/src/components/stackfoundry/filter-panel.tsx`
- `apps/web/src/app/(console)/components/filter-panel/page.tsx`

## Safety Notes

- Validate every filter server-side before it reaches a query.
- Keep authorization and tenant scopes separate from user filters.
- Keep filter state in the URL for shareable and restorable views.
- Do not use client filters as an authorization boundary.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add filter-panel --target /tmp/app --dry-run`.
