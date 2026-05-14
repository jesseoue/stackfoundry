# Install Order

Install order keeps source modules from becoming a pile of unrelated files. Start with foundations, then add product systems, then adapters.

## Foundation

```text
next-saas-shell
  -> theme-system
  -> settings-layout
  -> t3-env
  -> drizzle-postgres
  -> tenant-context
```

## Identity

```text
auth-core
  -> account-modes
  -> clerk-auth / auth-better-auth
  -> orgs-rbac
  -> invites
  -> permission-matrix
```

## Monetization

```text
billing-core
  -> stripe-billing
  -> entitlements
  -> plan-gating
  -> usage-metering
  -> quota-enforcement
  -> credit-wallet
  -> billing-ledger / credit-ledger
```

## Developer Platform

```text
api-keys
  -> api-errors
  -> rate-limits
  -> usage-metering
  -> api-docs
  -> request-log-explorer
  -> webhook-delivery
  -> api-playground
```

## Operations

```text
admin-console
  -> customer-360
  -> audit-log
  -> support-console
  -> system-health
  -> incident-management
  -> replay-center
```

## Provider Adapters

Provider adapters are installed after the source-owned domain module they adapt:

```text
billing-core -> stripe-billing / autumn-billing / paddle-billing
api-keys -> unkey-api-keys
rate-limits -> unkey-rate-limits
email-templates -> resend-email
feature-flags -> posthog-analytics / openfeature-flags
file-uploads -> vercel-blob / cloudflare-r2
```

When in doubt, inspect a recipe first:

```bash
pnpm stackfoundry recipe api-saas-starter
```
