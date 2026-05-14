# One-Shot Prompt: Ship a Complete Cloudflare SaaS

Use this prompt when an app needs a Cloudflare-native SaaS path with edge runtime, storage, queues, workflows, and security primitives.

```text
You are taking this app to a completed Cloudflare SaaS endpoint with StackFoundry source modules.

Target outcome:
The app has an intentional Cloudflare platform path: Workers/Pages runtime guidance, observability, D1/KV/R2/Hyperdrive data primitives, Queues/Workflows/Durable Objects coordination, Turnstile security, optional Workers AI/Vectorize/MCP pieces, and infrastructure notes. Bindings and provider setup should stay isolated and readable.

Definition of done:
- A maintainer can see where runtime, data, coordination, security, AI, and infrastructure pieces belong.
- Cloudflare bindings are documented and not hardcoded as secrets.
- Local development and deploy expectations are clear.
- Provider-specific setup remains isolated to adapter/source files.
- Biome lint/format, TypeScript typecheck, tests, production build, responsive checks for installed setup/admin surfaces, and any Wrangler/deploy dry-run checks pass or have documented follow-up items.

Recommended Next.js App Router structure:
- Keep the app's normal Next.js surfaces grouped as `apps/web/src/app/(marketing)`, `apps/web/src/app/(app)`, and `apps/web/src/app/(admin)` even when deploying through Cloudflare.
- Put Cloudflare platform demos and setup pages under `apps/web/src/app/(admin)/admin/platform/cloudflare`.
- Put Cloudflare-specific Route Handlers under explicit `apps/web/src/app/api/cloudflare` paths and keep bindings/adapters in `apps/web/src/lib/stackfoundry/providers/cloudflare`.
- Keep Durable Object, Queue, Workflow, storage, and binding helpers outside route files so runtime assumptions are easy to review.
- Use catch-all routes only for documentation/setup explorers such as `apps/web/src/app/(admin)/admin/platform/cloudflare/[[...section]]/page.tsx`. Do not hide queue consumers, webhooks, or security verification behind catch-all handlers.

Install workflow:
1. Inspect the App Router groups, deploy target, existing Cloudflare config, storage usage, background jobs, and secrets/bindings strategy.
2. Run `pnpm stackfoundry recipe cloudflare-saas`.
3. Run `pnpm stackfoundry add recipe cloudflare-saas --target ./my-app --dry-run`.
4. Summarize proposed runtime files, binding/env notes, storage modules, queues/workflows, security modules, infrastructure files, and path conflicts.
5. Ask before installing if the app already has Workers, Pages, D1, KV, R2, Durable Objects, Queues, or Wrangler config.
6. Install after approval, then review the diff for leaked secrets, global mutable state, unsafe bindings, and provider assumptions.
7. Run Biome lint/format, TypeScript typecheck, tests, production build, responsive checks for installed setup/admin surfaces, and any available Cloudflare validation or build command.
8. Finish with a deploy-readiness handoff: required bindings, local commands, deployment steps, checks run, and remaining blockers.

Expected modules:
`cloudflare-next-starter`, `cloudflare-workers`, `cloudflare-pages`, `cloudflare-observability`, `cloudflare-d1`, `cloudflare-kv`, `cloudflare-r2`, `cloudflare-hyperdrive`, `cloudflare-queues`, `cloudflare-workflows`, `cloudflare-durable-objects`, `cloudflare-turnstile`, `cloudflare-workers-ai`, `cloudflare-vectorize`, `cloudflare-mcp-server`, `cloudflare-terraform`, and `cloudflare-tunnel`.

Never commit Cloudflare tokens, account IDs that are meant to stay private, generated `.wrangler` state, or local deployment metadata.
```
