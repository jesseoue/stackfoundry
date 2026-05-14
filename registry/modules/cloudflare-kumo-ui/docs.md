# Cloudflare Kumo UI

Cloudflare Kumo component-library building blocks for teams that want provider-grade UI primitives.

This module credits Cloudflare Kumo as an optional component library for React, Base UI, and Tailwind CSS applications. It stays optional so StackFoundry's base scaffold remains small.

## Owns

- `apps/web/src/lib/ui/cloudflare-kumo.ts`

## Dependency

- `@cloudflare/kumo`

## Usage

Use this module when a project wants Cloudflare-style building blocks for actions, forms, data display, feedback, layout, or navigation.

Helpful commands:

```sh
pnpm dlx @cloudflare/kumo ls
pnpm dlx @cloudflare/kumo doc Button
pnpm dlx @cloudflare/kumo blocks
```

## Maintenance

- Keep Kumo optional and provider-scoped.
- Document theme and Tailwind impact before adopting many components.
- Do not replace existing app UI primitives unless a project explicitly chooses this provider UI path.
