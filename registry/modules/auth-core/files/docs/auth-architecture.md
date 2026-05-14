# Auth Architecture

Use this document before installing an auth provider.

## Recommended App Router Structure

```text
apps/web/src/app/
  (marketing)/           public pages
  (auth)/                sign-in, sign-up, callback, recovery
  (console)/             authenticated app
    dashboard/
    settings/
    admin/
  api/
    webhooks/<provider>/ route handlers
```

## Choose A Provider

Choose `clerk-auth` when you want:

- managed auth
- hosted UI
- organizations
- webhook-based user and organization sync
- a fast B2B path

Choose `auth-better-auth` when you want:

- source-owned auth configuration
- app-owned UI
- typed auth client code
- fewer managed provider assumptions

## Production Checks

- Document the selected account mode.
- Document session shape and authorization assumptions.
- Protect server routes before reading tenant data.
- Verify sign-in, sign-up, sign-out, protected routes, webhook sync, and session expiry.
- Keep provider SDK code inside the provider adapter module.
