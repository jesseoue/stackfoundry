# One-Shot Prompt: Ship a Complete API SaaS

Use this prompt when a maintainer asks for a complete API-first SaaS workflow in an existing app.

```text
You are taking this app to a completed API SaaS endpoint with StackFoundry source modules.

Target outcome:
The app can onboard a developer, issue and verify API keys, meter usage, enforce quotas, manage credits, connect Stripe billing and entitlements, publish API docs, receive and deliver webhooks, and show request visibility. The result must be editable source in the target app, not a black-box starter or hidden generator output.

Definition of done:
- A maintainer can run the app and find the API key, usage, billing, docs, webhook, and request visibility surfaces.
- Required env vars are documented in example/env notes without committed values.
- Database/schema changes are reviewed and paired with migration guidance.
- Provider adapters are explicit choices and do not become hidden base dependencies.
- Biome lint/format, TypeScript typecheck, tests, production build, migration review, API/webhook smoke checks, and responsive UI checks pass or have documented follow-up items.

Recommended Next.js App Router structure:
- Keep customer-facing pages in `apps/web/src/app/(marketing)` and authenticated product pages in `apps/web/src/app/(app)` so layouts stay DRY without changing URLs.
- Put operator-only surfaces in `apps/web/src/app/(admin)/admin`, not mixed into user dashboard routes.
- Put public API and webhook Route Handlers under `apps/web/src/app/api`, never in the same segment as a `page.tsx`.
- Prefer feature code in `apps/web/src/lib/stackfoundry/api`, `apps/web/src/lib/stackfoundry/billing`, and `packages/db/src/schema` instead of duplicating logic inside route files.
- Use `apps/web/src/app/(marketing)/docs/[[...slug]]/page.tsx` for docs when the docs renderer owns multiple nested docs pages.
- Use `apps/web/src/app/api/v1/[[...path]]/route.ts` only for a shared public API dispatcher that validates method, auth, scope, quota, and path. Keep high-risk billing and webhook handlers explicit.

Install workflow:
1. Inspect the app structure, App Router groups, package manager, database ownership, auth boundary, and existing billing/webhook/API code.
2. Run `pnpm stackfoundry recipe api-saas-starter`.
3. Run `pnpm stackfoundry add recipe api-saas-starter --target ./my-app --dry-run`.
4. Summarize proposed files, dependencies, env vars, registry dependencies, schema changes, docs, checklists, maintenance skills, and any path conflicts.
5. Ask before writing files unless the user already approved the install.
6. Install with `pnpm stackfoundry add recipe api-saas-starter --target ./my-app`.
7. Review the diff and keep provider adapters explicit. Do not commit secrets, `.env.local`, provider credentials, generated caches, or local metadata.
8. Run the app's Biome lint/format, TypeScript typecheck, tests, production build, migration review, API/webhook smoke checks, and responsive UI checks.
9. Finish with a short handoff: what works, what env vars must be set, what migrations/checks were run, and what remains before production.

Expected modules:
`auth-core`, `tenant-context`, `api-keys`, `api-errors`, `rate-limits`, `usage-metering`, `quota-enforcement`, `credit-wallet`, `api-docs`, `webhook-inbox`, `webhook-delivery`, `billing-core`, `stripe-billing`, `plan-gating`, and `entitlements`.

Stop and ask if auth, database, package manager, deploy target, billing provider, or target paths are unclear.
```
