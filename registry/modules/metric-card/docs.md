# Metric Card Module

Production KPI card for console surfaces, with an accessible trend statement, comparison context, and a restrained shadcn-compatible visual system.

## Owns

- `apps/web/src/lib/stackfoundry/metric-card.ts`
- `apps/web/src/components/stackfoundry/metric-card.tsx`
- `apps/web/src/app/(console)/components/metric-card/page.tsx`

## Safety Notes

- Resolve metric values and comparison windows on the server.
- Define metric definitions before rendering directional language.
- Use neutral styling when a higher or lower number is not universally better.
- Keep this block stateless; product-specific metric logic belongs in the adopting app.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add metric-card --target /tmp/app --dry-run`.
