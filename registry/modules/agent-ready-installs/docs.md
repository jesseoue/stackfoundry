# Agent-Ready Installs

Prompt packs and context files for coding agents to install SaaS infrastructure safely.

This module makes StackFoundry's source registry easier to operate from coding-agent environments. It gives agents a stable prompt pack, context JSON, and review checklist for dry-running, installing, and verifying infrastructure modules.

## Owns

- `.stackfoundry/context/agent-ready-installs.json`
- `.stackfoundry/prompts/install-api-saas.md`
- `.stackfoundry/prompts/one-shot-api-saas.md`
- `.stackfoundry/prompts/one-shot-cloudflare-saas.md`
- `.stackfoundry/prompts/one-shot-minimal-saas.md`
- `.stackfoundry/prompts/one-shot-enterprise-saas.md`
- `.stackfoundry/prompts/one-shot-ai-saas.md`
- `.stackfoundry/prompts/one-shot-customer-intelligence.md`
- `.stackfoundry/prompts/one-shot-integration-marketplace.md`
- `.stackfoundry/prompts/one-shot-security-center.md`
- `.stackfoundry/prompts/one-shot-support-ops.md`
- `.stackfoundry/prompts/review-stackfoundry-install.md`
- `docs/stackfoundry/agent-ready-installs.md`

## Best First Path

```bash
pnpm stackfoundry recipe api-saas-starter
pnpm stackfoundry add recipe api-saas-starter --target ./my-app --dry-run
```

## One-Shot SaaS Prompts

Use the one-shot prompts when a maintainer wants an agent to execute a whole recipe workflow with the right boundaries and a completed SaaS endpoint:

- `one-shot-api-saas.md`: complete API keys, usage, quotas, credits, billing, docs, and webhooks.
- `one-shot-minimal-saas.md`: complete small app shell, settings, database, auth, billing, health, and security.
- `one-shot-enterprise-saas.md`: complete SSO, SCIM, RBAC, audit, retention, support, incidents, and status.
- `one-shot-ai-saas.md`: complete AI SDK routes, chat UI, metering, quota enforcement, and cost controls.
- `one-shot-customer-intelligence.md`: complete analytics, large event ingestion, usage, and account health.
- `one-shot-cloudflare-saas.md`: complete Cloudflare runtime, storage, queues, workflows, security, and deploy path.
- `one-shot-integration-marketplace.md`: complete connected accounts, adapters, permissions, health, and sync visibility.
- `one-shot-security-center.md`: complete security posture, controls, data lifecycle, and audit center.
- `one-shot-support-ops.md`: complete support, feedback, incidents, on-call, postmortems, status, and health workflows.

Each prompt includes Next.js App Router structure guidance. Route groups such as `(marketing)`, `(auth)`, `(app)`, and `(admin)` keep layouts DRY without changing URLs. Catch-all routes are recommended only for shared renderers or dispatchers with the same auth and runtime boundary; high-risk handlers stay explicit under `app/api`.

Each prompt also asks the installer to run Biome lint/format, TypeScript typecheck, tests, production build, and responsive smoke checks after source lands.

## Maintenance

- Keep prompts product-focused and tool-neutral.
- Coding assistants should all be able to follow the same workflow without tool-specific assumptions.
- Keep the API SaaS recipe as the first install path.
- Never include secrets, user-specific metadata, or local provider state.
