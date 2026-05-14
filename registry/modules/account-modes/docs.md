# Account Modes

Personal, team, and hybrid account mode configuration for SaaS apps.

## Owns

- `packages/db/src/schema/account-modes.ts`
- `apps/web/src/lib/stackfoundry/account-modes.ts`
- `apps/web/src/app/(console)/settings/account/modes/page.tsx`

## Invariants

- Every data access path must know whether it is scoped to a user or organization.
- Billing ownership must match the active account mode.
- Invitations and roles should be disabled or hidden when the app is personal-only.
- Account switching should never leak data between personal and organization scopes.
