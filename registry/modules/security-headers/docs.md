# Security Headers Module

Content security policy, frame, referrer, and transport header helpers.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `apps/web/src/lib/security-headers.ts`
- `apps/web/src/app/(console)/admin/security/headers/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep the default module provider-neutral.
- Add provider adapters as separate modules.
- Verify install output with `stackfoundry add security-headers --target <app> --dry-run`.
