# Account Settings Module

Profile, security, sessions, and notification preference pages.

## Owns

- `apps/web/src/app/(console)/settings/account/page.tsx`
- `apps/web/src/lib/account-settings.ts`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added as a separate module.
- Update the manifest when source files, schema exports, dependencies, or environment variables change.
- Verify install output with `stackfoundry add account-settings --target <app> --dry-run` before promoting status.
