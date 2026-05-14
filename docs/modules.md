# Modules

Modules are the unit of value in StackFoundry. Recipes are the workflow layer that explains how modules fit together. Presets are convenience bundles.

The sharpest public wedge is API SaaS: install API keys, usage tracking, quotas, credits, Stripe billing, docs, and webhooks into an existing app as editable source.

The first installable production modules were:

- `drizzle-postgres`
- `api-keys`
- `stripe-billing`

The registry now includes ready source modules, proposal-backed roadmap ideas, provider adapter examples, agent-ready install prompts, recipes, and registry-compatible public blocks. Each ready module should be installable into an existing app as editable source code. Presets are bundles of modules; recipes are opinionated architecture paths.

Use [Recipes](./recipes.md) and [Install order](./install-order.md) when you want a complete workflow instead of individual blocks. Start with `api-saas-starter` before browsing the broader catalog.

## What a Module Includes

- `module.json`
- source files
- dependency metadata
- environment variable metadata
- docs
- verification checklist
- maintenance guidance
- prompt/context files when a module supports coding-agent workflows
- install metadata for diff/update safety

Module-specific skills stay focused on ownership, installed files, environment variables, deployment checks, and invariants. Provider, framework, database, SDK, and platform guidance lives in shared skills such as `.stackfoundry/skills/stripe/SKILL.md`, copied from `registry/skills/stripe/SKILL.md` during install.

See [Readiness](./readiness.md) for the meaning of `ready`, `planned`, `experimental`, `stable`, and `deprecated`.

## Module Families

### Foundation

- `next-saas-shell`
- `t3-env`
- `sidebar-shell`
- `geist-nova-theme`
- `quality-tooling`
- `playwright-e2e`

### Interface Grammar

- `metric-card-grid`
- `kpi-trend-card`
- `activity-feed`
- `timeline`
- `resource-header`
- `filter-bar`
- `saved-views`
- `bulk-actions-bar`
- `status-badge-system`
- `danger-zone-card`

### Data

- `drizzle-postgres`
- `drizzle-multitenancy`
- `drizzle-relations`
- `drizzle-audit-log`
- `drizzle-soft-delete`
- `neon-postgres`
- `supabase-postgres`

### Auth and Tenancy

- `auth-core`
- `clerk-auth`
- `auth-better-auth`
- `orgs-rbac`
- `invites`
- `workspace-settings`
- `account-settings`
- `session-management`
- `account-modes`

### Billing

- `billing-core`
- `stripe-billing`
- `paddle-billing`
- `autumn-entitlements`
- `usage-metering`
- `one-time-purchases`
- `credit-wallet`
- `trial-management`
- `plan-gating`

### Developer Platform

- `api-saas-starter`
- `agent-ready-installs`
- `api-keys`
- `api-errors`
- `keyset-pagination`
- `unkey-api-keys`
- `unkey-rate-limits`
- `public-api-orpc`
- `webhook-inbox`
- `webhook-delivery`
- `developer-portal`
- `api-playground`
- `request-log-explorer`
- `usage-event-explorer`
- `webhook-delivery-detail`

### Growth and Analytics

- `posthog-analytics`
- `tinybird-analytics`
- `plg-metrics`
- `aarrr-dashboard`
- `activation-onboarding`
- `lifecycle-email`
- `product-announcements`
- `public-roadmap`
- `cohort-retention`
- `experiments`

### Docs and SEO

- `docs-fumadocs`
- `docs-mintlify`
- `docs-help-center`
- `api-docs`
- `seo`
- `ai-seo`

### Operations

- `background-jobs`
- `rate-limits`
- `operator-dashboard`
- `customer-360`
- `account-health`
- `customer-timeline`
- `sentry-monitoring`
- `axiom-logging`
- `audit-log`
- `admin-console`
- `support-console`
- `system-health`
- `incident-management`
- `data-import-export`
- `replay-center`
- `job-run-detail`

### Provider Adapter Examples

- `inngest-functions`
- `trigger-dev-jobs`
- `vercel-workflows`
- `upstash-redis`
- `knock-notifications`
- `resend-email`
- `tinybird-analytics`
- `posthog-analytics`
- `arcjet-security`

### Integration Marketplace

- `integration-catalog`
- `integration-detail-page`
- `integration-install-flow`
- `integration-health`
- `integration-sync-logs`

### Security And Compliance

- `security-center`
- `security-scorecard`
- `security-events`
- `access-review`
- `api-key-risk-review`
- `trusted-devices`

### Conventions

- `schema-conventions`
- `event-taxonomy`
- `tenant-isolation-policy`
- `money-and-credits-conventions`

### Optional AI

- `ai-sdk`
- `ai-elements`
- `ai-chat`
- `ai-chatbot-sdk`
- `cloudflare-agents-sdk`
- `cloudflare-kumo-ui`
