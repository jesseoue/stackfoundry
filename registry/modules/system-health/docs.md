# System Health Module

Health checks, dependency status, and incident readiness UI.

## Owns

- `apps/web/src/lib/system-health.ts`
- `apps/web/src/app/(console)/admin/system-health/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module provider-neutral unless a provider adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add system-health --target <app> --dry-run`.
