# Stepper Flow Module

Progress surface for onboarding, setup, migration, and checkout flows. The component communicates progress; the adopting app owns state persistence and server-side transition validation.

## Owns

- `apps/web/src/lib/stackfoundry/stepper-flow.ts`
- `apps/web/src/components/stackfoundry/stepper-flow.tsx`
- `apps/web/src/app/(console)/components/stepper-flow/page.tsx`

## Safety Notes

- Validate step transitions on the server.
- Persist completed work before paid or destructive transitions.
- Keep progress readable through text, order, and semantic state.
- Keep the display block stateless and derive it from server-resolved state.

## Maintenance

- Update `module.json`, `docs.md`, `skill/SKILL.md`, and `tests/checklist.md` together.
- Verify install output with `pnpm stackfoundry add stepper-flow --target /tmp/app --dry-run`.
