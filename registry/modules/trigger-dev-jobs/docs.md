# Trigger.dev Jobs Module

Trigger.dev task definitions, run triggering route, and job dashboard starter.

## Official Docs

- [Trigger.dev Docs](https://trigger.dev/docs)

## Owns

- `apps/web/src/trigger/example.ts`
- `apps/web/src/app/api/tasks/trigger-dev/route.ts`
- `trigger.config.ts`
- `apps/web/src/app/(console)/admin/workflows/trigger-dev/page.tsx`

## Dependencies

`@trigger.dev/sdk`

## Environment

- `TRIGGER_SECRET_KEY`
- `TRIGGER_PROJECT_ID`

## Maintenance

- Keep this module focused on the provider adapter boundary.
- Keep secrets in environment variables and never commit local credentials.
- Verify the example route or worker path before promoting this module beyond experimental.
- Update docs, checklist, and manifest metadata when provider APIs change.
