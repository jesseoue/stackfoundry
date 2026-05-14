# GitHub Integration Module

GitHub App Octokit client, webhook route starter, and repository action example.

## Owns

- `apps/web/src/lib/github/app.ts`
- `apps/web/src/app/api/webhooks/github/route.ts`
- `apps/web/src/app/(console)/admin/providers/github/page.tsx`

## Dependencies

- `octokit`

## Environment

- `GITHUB_APP_ID`
- `GITHUB_PRIVATE_KEY`
- `GITHUB_WEBHOOK_SECRET`

## Deployment Notes

- Create the provider project/resource before deploying.
- Add the listed environment variables to preview and production.
- Smoke-test the included route or helper after deploy.
- Keep provider secrets out of client components and logs.

## Maintenance

- Keep this module focused on the provider adapter boundary.
- Update source examples when provider SDK APIs change.
- Record production-specific retry, alerting, and rollback behavior before marking stable.
