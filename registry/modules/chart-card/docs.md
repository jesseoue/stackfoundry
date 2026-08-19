# Chart Card Module

Dependency-free chart container with accessible area and Sparkline rendering. It gives apps the shadcn dashboard chart structure without forcing a charting runtime; adopting apps can swap the SVG renderer for Recharts while preserving the card contract.

## Owns

- `apps/web/src/lib/stackfoundry/chart-card.ts`
- `apps/web/src/components/stackfoundry/chart-card.tsx`
- `apps/web/src/app/(console)/components/chart-card/page.tsx`

## Safety Notes

- Resolve chart data on the server and render deterministic paths.
- Keep charts readable without color alone.
- Provide text alternatives and exact values where decisions are made.
- Keep this block stateless; interactive drilldowns belong in the adopting app.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add chart-card --target /tmp/app --dry-run`.
