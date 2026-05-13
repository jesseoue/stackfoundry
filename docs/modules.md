# Modules

Modules are the unit of value in StackFoundry.

The first production modules are:

- `drizzle-postgres`
- `api-keys`
- `stripe-billing`

Each module should be installable into an existing app as editable source code. Presets are only bundles of modules.

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
- `shadcn-sidebar-shell`
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

- `sentry-monitoring`
- `audit-log`
- `admin-console`
- `support-console`
- `system-health`
- `incident-management`
- `data-import-export`

### Optional AI

- `ai-chat`
- `ai-artifacts`
- `ai-tools`
- `model-router`
- `prompt-library`
- `evals`
