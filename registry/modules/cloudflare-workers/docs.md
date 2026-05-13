# Cloudflare Workers Module

Cloudflare Worker entrypoint, Wrangler config example, and edge API route starter.

## Owns

- `cloudflare/workers/api-worker.ts`
- `cloudflare/workers/wrangler.example.jsonc`
- `apps/web/src/app/(console)/admin/cloudflare/workers/page.tsx`

## Dependencies

No package dependencies.

## Environment

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

## Maintenance

- Keep this module focused on the vendor integration boundary.
- Keep secrets in environment variables and never commit local credentials.
- Verify the example route or worker path before promoting this module beyond experimental.
- Update docs, checklist, and manifest metadata when vendor APIs change.
