# One-Shot Prompt: Ship a Complete AI SaaS Feature

Use this prompt when an app needs a complete AI product surface with cost and usage controls.

```text
You are taking this app to a completed AI SaaS endpoint with StackFoundry source modules.

Target outcome:
The app has an AI feature surface, chat primitives, model configuration, quota enforcement, usage metering, billing-ready cost controls, and optional AI discovery/edge building blocks. Expensive model calls are gated, observable, and safe to run behind auth.

Definition of done:
- A user can access the AI UI/route and receive a streamed or completed response through configured server-side model code.
- Quota and usage checks happen before expensive model calls.
- Model/provider secrets are never exposed to the browser.
- Usage records can connect to billing or entitlement decisions.
- Biome lint/format, TypeScript typecheck, tests, production build, route-handler smoke checks, responsive chat UI checks, and manual streaming checks pass or have documented follow-up items.

Recommended Next.js App Router structure:
- Put authenticated AI pages in `apps/web/src/app/(app)/ai` and marketing/demo pages in `apps/web/src/app/(marketing)` if demos are public.
- Put streaming and model Route Handlers under explicit `apps/web/src/app/api/ai` paths, separate from UI pages.
- Keep model routing, quota checks, usage capture, and prompt defaults in `apps/web/src/lib/stackfoundry/ai` so route handlers stay thin.
- Put shared AI UI primitives in `apps/web/src/components/stackfoundry/ai`.
- Use `apps/web/src/app/(app)/ai/[[...workspacePath]]/page.tsx` only when one AI workspace renderer handles nested threads/projects. Keep costly server routes explicit so auth, quota, and runtime choices are obvious.

Install workflow:
1. Inspect the app's Next.js App Router structure, existing AI SDK usage, provider keys, auth boundary, usage records, billing model, and deploy platform.
2. Run `pnpm stackfoundry recipe ai-saas-starter`.
3. Run `pnpm stackfoundry add recipe ai-saas-starter --target ./my-app --dry-run`.
4. Summarize model/provider assumptions, streamed routes, UI components, usage/cost controls, env vars, registry dependencies, and maintenance skills.
5. Ask before installing if the app already has AI routes, chat UI, usage billing, or provider routing.
6. Install after approval and review the diff for exposed provider keys, unbounded model calls, missing auth checks, and missing quota gates.
7. Run Biome lint/format, TypeScript typecheck, tests, production build, route-handler smoke checks, responsive chat UI checks, and a manual streaming check when available.
8. Finish with a cost-control handoff: what works, required provider env vars, which usage checks run, and what remains before production.

Expected modules:
`ai-sdk`, `ai-elements`, `ai-chat`, `ai-chatbot-sdk`, `usage-metering`, `quota-enforcement`, `cloudflare-agents-sdk`, `cloudflare-vectorize`, `cloudflare-kumo-ui`, and `ai-seo`.

Never expose secret provider keys to the browser. Put metering and quota checks before expensive model calls.
```
