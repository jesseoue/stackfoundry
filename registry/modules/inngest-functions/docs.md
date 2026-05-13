# Inngest Functions Module

Inngest durable functions, event triggers, steps, and Next.js serve route.

## Owns

- `apps/web/src/inngest/client.ts`
- `apps/web/src/inngest/functions/user-onboarding.ts`
- `apps/web/src/app/api/inngest/route.ts`
- `apps/web/src/app/(console)/admin/workflows/inngest/page.tsx`

## Dependencies

`inngest`

## Environment

- `INNGEST_EVENT_KEY`
- `INNGEST_SIGNING_KEY`

## Maintenance

- Keep this module focused on the vendor integration boundary.
- Keep secrets in environment variables and never commit local credentials.
- Verify the example route or worker path before promoting this module beyond experimental.
- Update docs, checklist, and manifest metadata when vendor APIs change.
