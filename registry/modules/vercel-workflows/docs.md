# Vercel Workflows Module

Vercel Workflow DevKit durable workflow and Next.js route starter.

## Owns

- `apps/web/src/workflows/welcome.ts`
- `apps/web/src/app/api/workflows/welcome/route.ts`
- `apps/web/src/app/(console)/admin/workflows/vercel/page.tsx`

## Dependencies

`workflow`

## Environment

No environment variables are required by default.

## Maintenance

- Keep this module focused on the vendor integration boundary.
- Keep secrets in environment variables and never commit local credentials.
- Verify the example route or worker path before promoting this module beyond experimental.
- Update docs, checklist, and manifest metadata when vendor APIs change.
