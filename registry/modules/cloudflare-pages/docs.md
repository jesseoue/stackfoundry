# Cloudflare Pages

Alternate deploy path for static and edge-friendly apps.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-pages.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-pages/page.tsx`
- `docs/providers/cloudflare-pages.md`

## Setup Checklist

- Choose Pages only when the app is edge/static compatible
- Document build command and output directory
- Bind preview and production vars separately
- Verify custom domains and Functions compatibility

## Maintenance

- Keep provider setup separate from product domain logic.
- Do not commit provider credentials or generated deployment state.
- Update docs, checklist, and source files together when provider behavior changes.
- Verify with `pnpm cli add cloudflare-pages --target /tmp/stackfoundry-cloudflare-pages --dry-run`.
