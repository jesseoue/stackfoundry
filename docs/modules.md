# Modules

Modules are the unit of value in StackFoundry. Recipes are the workflow layer that explains how modules fit together. Presets are convenience bundles.

The sharpest public wedge is API SaaS: install API keys, usage tracking, quotas, credits, Stripe billing, docs, and webhooks into an existing app as editable source.

The first installable production modules were:

- `drizzle-postgres`
- `api-keys`
- `stripe-billing`

The registry now includes ready source modules, provider adapter examples, agent-ready install prompts, recipes, and registry-compatible public blocks. Each ready module should be installable into an existing app as editable source code. Presets are bundles of modules; recipes are opinionated architecture paths.

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
- `settings-layout`
- `command-menu`
- `data-table`
- `loading-states`
- `empty-states`
- `error-boundaries`

### Data

- `drizzle-postgres`
- `neon-postgres`
- `supabase-postgres`
- `cloudflare-d1`
- `cloudflare-kv`
- `convex-backend`
- `convex-realtime`

### Auth and Tenancy

- `auth-core`
- `clerk-auth`
- `auth-better-auth`
- `orgs-rbac`
- `invites`
- `workspace-settings`
- `account-settings`
- `account-modes`
- `login-activity`
- `mfa-security`

### Billing

- `billing-core`
- `stripe-billing`
- `autumn-billing`
- `autumn-entitlements`
- `entitlements`
- `usage-metering`
- `one-time-purchases`
- `credit-wallet`
- `trial-management`
- `plan-gating`
- `tax-vat`
- `refunds-disputes`
- `dunning-recovery`

### Developer Platform

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
- `api-docs`
- `api-usage-dashboard`

### Growth and Analytics

- `posthog-analytics`
- `tinybird-analytics`
- `plg-metrics`
- `feature-flags`
- `lifecycle-email`
- `product-announcements`
- `public-roadmap`
- `newsletter-signups`
- `pricing-page`

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
- `sentry-monitoring`
- `axiom-logging`
- `audit-log`
- `admin-console`
- `support-console`
- `support-widget`
- `system-health`
- `incident-management`
- `status-page`
- `oncall-alerting`
- `postmortem-runbook`
- `backup-restore`

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
- `github-integration`
- `convex-integration`

### Integration Marketplace

- `connected-accounts`
- `github-integration`
- `resend-email`
- `posthog-analytics`

### Security And Compliance

- `security-headers`
- `csrf-protection`
- `cors-policy`
- `input-validation`
- `secrets-management`
- `dependency-audit`
- `data-retention`
- `data-export`
- `account-deletion`

### Optional AI

- `ai-sdk`
- `ai-elements`
- `ai-chat`
- `ai-chatbot-sdk`
- `cloudflare-agents-sdk`
- `cloudflare-workers-ai`
- `cloudflare-vectorize`
- `cloudflare-mcp-server`
- `cloudflare-kumo-ui`
