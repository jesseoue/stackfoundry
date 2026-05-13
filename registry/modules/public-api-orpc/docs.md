# Public API Module

Versioned API response helpers, errors, and pagination primitives.

## Owns

- `apps/web/src/lib/public-api-orpc.ts`
- `apps/web/src/app/(console)/developers/api/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module provider-neutral unless a provider-specific adapter is added separately.
- Update source templates, manifest files, and generated registry output together.
- Add audit events around sensitive changes before promoting this module beyond experimental.
- Verify with `stackfoundry add public-api-orpc --target <app> --dry-run`.
