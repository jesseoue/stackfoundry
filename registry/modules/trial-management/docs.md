# Trial Management Module

Trial windows, conversion state, and expiry handling.

## Owns

- `apps/web/src/lib/trial-management.ts`
- `apps/web/src/app/(console)/billing/trials/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add trial-management --target <app> --dry-run`.
