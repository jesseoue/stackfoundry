# Sidebar Navigation Module

Responsive shadcn-style console sidebar with grouped navigation, active state, and an accessible mobile sheet. Navigation remains server-derived, so adopting apps control authorization and route visibility.

## Owns

- `apps/web/src/lib/stackfoundry/sidebar-navigation.ts`
- `apps/web/src/components/stackfoundry/sidebar-navigation.tsx`
- `apps/web/src/app/(console)/components/sidebar-navigation/page.tsx`

## Safety Notes

- Resolve navigation items and authorization on the server.
- Hide inaccessible routes; disabled links leak surface area.
- Keep focus visible and keep the mobile panel keyboard reachable.
- Do not store user-specific navigation preferences in shared source.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add sidebar-navigation --target /tmp/app --dry-run`.
