# Status Page Module

Public component status and incident update page.

## Owns

- `apps/web/src/lib/status-page.ts`
- `apps/web/src/app/status/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add status-page --target <app> --dry-run`.
