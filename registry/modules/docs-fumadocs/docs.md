# Fumadocs Docs

In-app Next.js documentation starter with Fumadocs setup and deployment guidance.

Use this module when product docs should live inside the app and deploy with the same Next.js host.

## Owns

- `apps/web/src/lib/docs/fumadocs.ts`
- `apps/web/src/app/(marketing)/docs/page.tsx`
- `docs/fumadocs-deployment.md`

## Setup

Install the dependencies declared by this module, then merge the MDX and provider changes into the target app after inspecting its current `next.config.*` and root layout.

## Verification

- Run `pnpm registry:doctor` after editing the module.
- Run `pnpm cli add docs-fumadocs --target /tmp/stackfoundry-docs-fumadocs --dry-run`.
- Verify `/docs`, sitemap behavior, metadata, and the deployment guide before marking stable.
