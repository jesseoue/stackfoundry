# One-Shot Prompt: Ship Complete Customer Intelligence

Use this prompt when a team needs complete customer health, adoption, usage, and risk visibility.

```text
You are taking this app to a completed customer intelligence endpoint with StackFoundry source modules.

Target outcome:
The app can connect product analytics, large event ingestion, usage data, and account intelligence into customer health, risk, adoption, and expansion signals. Event capture should be intentional, privacy-aware, and usable by operators.

Definition of done:
- Operators can identify customer usage, adoption, health, and risk signals from installed source surfaces or helpers.
- Analytics and large-event ingestion paths avoid secrets, raw private customer data, and unbounded payloads.
- Event names and payload shapes are documented well enough to maintain.
- Provider env vars are documented without committed values.
- Biome lint/format, TypeScript typecheck, tests, production build, responsive dashboard checks, ingestion smoke checks, and analytics/provider validation pass or have documented follow-up items.

Recommended Next.js App Router structure:
- Put operator dashboards under `apps/web/src/app/(admin)/admin/customers` and authenticated account-level views under `apps/web/src/app/(app)`.
- Put ingestion Route Handlers under explicit `apps/web/src/app/api/analytics` or provider-specific webhook paths.
- Keep event schemas, capture helpers, customer health scoring, and provider clients in `apps/web/src/lib/stackfoundry/analytics` and `apps/web/src/lib/stackfoundry/customers`.
- Keep database schema slices in `packages/db/src/schema`.
- Use `apps/web/src/app/(admin)/admin/customers/[[...view]]/page.tsx` only for one DRY customer intelligence dashboard renderer. Keep event ingestion and provider callbacks explicit.

Install workflow:
1. Inspect existing App Router groups, analytics providers, event naming, account/workspace model, billing usage records, support surfaces, and data retention expectations.
2. Run `pnpm stackfoundry recipe customer-intelligence`.
3. Run `pnpm stackfoundry add recipe customer-intelligence --target ./my-app --dry-run`.
4. Summarize event flows, provider adapters, env vars, data ownership, privacy notes, and dashboard/source files.
5. Ask before installing if analytics, warehouse, customer health, or billing usage models already exist.
6. Install after approval, then review the diff for PII leakage, unbounded event payloads, duplicate event names, and missing consent notes.
7. Run Biome lint/format, TypeScript typecheck, tests, production build, responsive dashboard checks, ingestion smoke checks, and any analytics provider dry-run or validation command.
8. Finish with a data-quality handoff: what signals work, which env vars are required, what privacy checks were made, and what remains before production.

Expected modules:
`posthog-analytics`, `tinybird-analytics`, and `usage-metering`.

Keep event payloads intentional. Do not send secrets, private customer data, or raw provider credentials through analytics ingestion.
```
