# Quota Enforcement Module

Plan quota definitions, usage checks, and limit messaging.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `apps/web/src/lib/quota-enforcement.ts`
- `apps/web/src/app/(console)/billing/quotas/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep the default module provider-neutral.
- Add provider-specific adapters as separate modules.
- Verify install output with `stackfoundry add quota-enforcement --target <app> --dry-run`.
