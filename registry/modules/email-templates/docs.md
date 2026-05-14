# Email Templates Module

Transactional email template catalog with plain-text fallback guidance.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `apps/web/src/lib/email-templates.ts`
- `apps/web/src/app/(console)/admin/email-templates/page.tsx`

## Environment

No environment variables are required by default.

## Maintenance

- Keep the default module provider-neutral.
- Add provider adapters as separate modules.
- Verify install output with `stackfoundry add email-templates --target <app> --dry-run`.
