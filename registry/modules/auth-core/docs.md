# Auth Core

Provider-neutral auth architecture, route layout, and provider selection guide for Clerk or Better Auth.

## Owns

- `apps/web/src/lib/stackfoundry/auth-options.ts`
- `apps/web/src/app/(console)/admin/auth/page.tsx`
- `docs/auth-architecture.md`

## Purpose

Use this module early in a SaaS app to decide the auth boundary before installing a provider adapter. It does not install an auth provider by itself.

## Recommended App Router Structure

```text
apps/web/src/app/
  (marketing)/           public pages
  (auth)/                sign-in, sign-up, callback, recovery
  (console)/             authenticated product app
    dashboard/
    settings/
    admin/
  api/
    webhooks/<provider>/ route handlers
apps/web/src/lib/
  stackfoundry/          product config and provider-neutral helpers
  clerk/                 Clerk adapter only if chosen
  auth.ts                Better Auth server config only if chosen
```

## Provider Options

- Install `clerk-auth` when you want managed auth, hosted auth UI, organizations, and webhook sync.
- Install `auth-better-auth` when you want a source-owned auth server, typed client, and app-owned auth UI.

## Verification

- Choose personal, team, or hybrid account mode.
- Pick exactly one primary auth adapter for the first production path.
- Document the session shape and route protection strategy.
- Verify sign-in, sign-up, sign-out, protected routes, webhook sync, and session expiry.
