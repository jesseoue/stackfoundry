# Agent-Ready StackFoundry Installs

StackFoundry modules are designed for code review and coding-agent workflows. Coding assistants can inspect recipes, dry-run installs, review generated diffs, and keep the installed source maintainable.

## Default Flow

```bash
pnpm stackfoundry recipe api-saas-starter
pnpm stackfoundry add recipe api-saas-starter --target ./my-app --dry-run
pnpm stackfoundry add recipe api-saas-starter --target ./my-app
pnpm stackfoundry diff api-keys --target ./my-app
```

## What Agents Should Read

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
- module docs in `.stackfoundry/skills/**/SKILL.md`
- module checklists in installed `tests/checklist.md` files

## Safety Rules

- Dry-run before writing files.
- Review all source files, dependency metadata, env notes, and maintenance skills.
- Keep provider adapters explicit.
- Never commit secrets, `.env.local`, provider credentials, generated caches, or local provider metadata.
- Run Biome lint/format, TypeScript typecheck, tests, production build, responsive smoke checks, and migration review after install.

## Best First Path

Use `api-saas-starter` first. It maps to the most concrete SaaS pain: API keys, usage tracking, quotas, credits, billing, docs, webhooks, and request visibility as editable source.

## One-Shot Prompts

Use these prompts when a maintainer asks a coding agent to run a complete recipe workflow and finish with a working SaaS endpoint:

- `one-shot-api-saas.md`: front-door API SaaS path.
- `one-shot-minimal-saas.md`: compact app foundation.
- `one-shot-enterprise-saas.md`: enterprise identity, compliance, support, and incident path.
- `one-shot-ai-saas.md`: AI product surface with metering and quota controls.
- `one-shot-customer-intelligence.md`: analytics, event ingestion, usage, and account intelligence.
- `one-shot-cloudflare-saas.md`: Cloudflare runtime, storage, queues, workflows, security, and deploy path.
- `one-shot-integration-marketplace.md`: connected accounts, provider adapters, permissions, health, and sync visibility.
- `one-shot-security-center.md`: security posture, data lifecycle, controls, secrets, and audit center.
- `one-shot-support-ops.md`: support, feedback, incidents, on-call, postmortems, status, and health workflows.

Each prompt tells the agent to inspect the target app, run the recipe inspection command, dry-run before writing, summarize risks, ask before install, review the diff, run the target app's checks, and finish with a handoff that says what works and what remains before production.

## App Router Structure Rules

- Use route groups such as `(marketing)`, `(auth)`, `(app)`, and `(admin)` to share layouts without changing URLs.
- Keep public Route Handlers under `app/api`; do not place `route.ts` next to `page.tsx` in the same segment.
- Keep reusable product logic in `src/lib/stackfoundry` and schema in `packages/db/src/schema`.
- Use `[[...slug]]` or `[...path]` only when one renderer or dispatcher owns nested paths with the same auth/runtime boundary.
- Keep billing webhooks, OAuth callbacks, deletion/export APIs, and provider-specific signature verification explicit.
