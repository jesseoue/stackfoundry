# Enterprise SSO Module

SAML/OIDC connection metadata, enforcement policy, and setup checklist.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `packages/db/src/schema/enterprise-sso.ts`
- `apps/web/src/lib/enterprise-sso.ts`
- `apps/web/src/app/(console)/settings/workspace/sso/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep the default module provider-neutral.
- Add provider adapters as separate modules.
- Verify install output with `stackfoundry add enterprise-sso --target <app> --dry-run`.
