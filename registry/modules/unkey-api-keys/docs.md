# Unkey API Keys Module

Optional Unkey adapter for managed API key creation, verification, permissions, and metadata.

Use the source-owned `api-keys` module when you want local hashed key storage by default. Add this module when you want Unkey to manage key issuance and verification behind a provider boundary.

## Owns

- `apps/web/src/lib/unkey/client.ts`
- `apps/web/src/lib/unkey/api-keys.ts`
- `apps/web/src/app/api/providers/unkey/verify/route.ts`
- `apps/web/src/app/(console)/admin/providers/unkey/page.tsx`

## Dependencies

- `@unkey/api`

## Environment

- `UNKEY_ROOT_KEY`
- `UNKEY_API_ID`

## Deployment Notes

- Create the Unkey API and root key before deploying.
- Add the listed environment variables to preview and production.
- Smoke-test the included route or helper after deploy.
- Keep provider secrets out of client components and logs.
- The helper uses `create` for issuing keys and `verifyKey` for request-time verification. Keep permission and role checks server-side.
- If you prefer framework middleware, Unkey also provides framework-specific wrappers such as `@unkey/nextjs`; keep that as an app choice rather than a hard dependency of this adapter.

## Maintenance

- Keep this module focused on the provider adapter boundary.
- Update source examples when provider SDK APIs change.
- Preserve the source-owned `api-keys` module as the default path in base presets.
- Record production-specific retry, alerting, and rollback behavior before marking stable.
