# Modules

Modules are the unit of value in StackFoundry.

The first installable production modules were:

- `drizzle-postgres`
- `api-keys`
- `stripe-billing`

The registry now includes core modules, vendor examples, and registry-compatible public blocks. Each module should be installable into an existing app as editable source code. Presets are only bundles of modules.

## What a Module Includes

- `module.json`
- source files
- dependency metadata
- environment variable metadata
- docs
- verification checklist
- maintenance guidance
- install metadata for diff/update safety

## Planned Module Families

### Foundation

- `next-saas`
- `t3-env`
- `sidebar-shell`
- `geist-theme`
- `quality-tooling`
- `playwright-e2e`

### Data

- `drizzle-postgres`
- `drizzle-multitenancy`
- `drizzle-relations`
- `drizzle-audit-log`
- `drizzle-soft-delete`
- `neon-postgres`
- `supabase-postgres`

### Auth and Tenancy

- `clerk-auth`
- `orgs-rbac`
- `invites`
- `workspace-settings`
- `account-settings`
- `session-management`

### Billing

- `billing-core`
- `stripe-billing`
- `paddle-billing`
- `autumn-entitlements`
- `usage-metering`
- `trial-management`
- `plan-gating`

### Developer Platform

- `api-keys`
- `api-errors`
- `keyset-pagination`
- `unkey-api-keys`
- `unkey-rate-limits`
- `public-api-orpc`
- `webhook-inbox`
- `webhook-delivery`
- `developer-portal`

### Growth and Analytics

- `posthog-analytics`
- `plg-metrics`
- `aarrr-dashboard`
- `activation-onboarding`
- `lifecycle-email`
- `cohort-retention`
- `experiments`

### Operations

- `background-jobs`
- `rate-limits`
- `sentry-monitoring`
- `axiom-logging`
- `audit-log`
- `admin-console`
- `support-console`
- `system-health`
- `incident-management`
- `data-import-export`

### Vendor Examples

- `inngest-functions`
- `trigger-dev-jobs`
- `vercel-workflows`
- `upstash-redis`
- `resend-email`
- `posthog-analytics`
- `arcjet-security`

### Optional AI

- `ai-chat`
- `ai-artifacts`
- `ai-tools`
- `model-router`
- `prompt-library`
- `evals`
