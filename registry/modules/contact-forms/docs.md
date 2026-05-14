# Contact Forms Module

Contact form submissions, spam review, and routing workflow.

## Why This Exists

This is a common launch-readiness component for production SaaS applications.

## Owns

- `packages/db/src/schema/contact-forms.ts`
- `apps/web/src/lib/contact-forms.ts`
- `apps/web/src/app/(console)/admin/contact-forms/page.tsx`

## Environment

Requires `DATABASE_URL` through the `drizzle-postgres` dependency.

## Maintenance

- Keep the default module provider-neutral.
- Add provider adapters as separate modules.
- Verify install output with `stackfoundry add contact-forms --target <app> --dry-run`.
