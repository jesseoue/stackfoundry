# CORS Policy Module

Allowed origin configuration, preflight helpers, and deployment checklist.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `apps/web/src/lib/cors-policy.ts`
- `apps/web/src/app/(console)/admin/security/cors/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep the default module provider-neutral.
- Add provider adapters as separate modules.
- Verify install output with `stackfoundry add cors-policy --target <app> --dry-run`.
