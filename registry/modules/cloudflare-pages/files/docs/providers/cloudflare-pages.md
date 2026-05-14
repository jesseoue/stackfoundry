# Cloudflare Pages

Alternate deploy path for static and edge-friendly apps.

## Owns

- `apps/web/src/lib/stackfoundry/providers/cloudflare-pages.ts`
- `apps/web/src/app/(console)/admin/providers/cloudflare-pages/page.tsx`

## Setup Checklist

- Choose Pages only when the app is edge/static compatible
- Document build command and output directory
- Bind preview and production vars separately
- Verify custom domains and Functions compatibility

## Provider Boundary

This module documents the provider setup and app integration boundary. Keep product logic in source-owned modules and use this module when the team explicitly chooses this provider or deployment target.
