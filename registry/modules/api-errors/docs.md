# API Errors Module

Machine-readable API error shape, code catalog, and response helpers.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `apps/web/src/lib/api-errors.ts`
- `apps/web/src/app/(console)/developers/errors/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep the default module provider-neutral.
- Add provider adapters as separate modules.
- Verify install output with `stackfoundry add api-errors --target <app> --dry-run`.
