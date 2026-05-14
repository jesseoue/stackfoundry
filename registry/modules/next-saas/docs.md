# Next SaaS

Provider-neutral Next.js SaaS app shell with product config, navigation, launch page, and dashboard starter.

## Owns

- `apps/web/src/lib/stackfoundry/app-config.ts`
- `apps/web/src/lib/stackfoundry/app-navigation.ts`
- `apps/web/src/components/stackfoundry/app-shell.tsx`
- `apps/web/src/app/(marketing)/launch/page.tsx`
- `apps/web/src/app/(console)/dashboard/page.tsx`

## What It Gives You

- a small product config object
- a dashboard shell and navigation model
- a public launch page
- an authenticated dashboard starter surface
- a production checklist for choosing account mode, envs, migrations, and module rollout

## Boundaries

This module is intentionally provider-neutral. It does not install auth, billing, database, analytics, or email by itself. The `next-saas` preset composes this shell with those modules.

## Verification

- Run `pnpm cli add next-saas --target /tmp/stackfoundry-next-saas --dry-run`.
- Confirm no file collisions with the broader `next-saas` preset.
- Confirm `/launch` and `/dashboard` are the intended target routes in the consuming app.
