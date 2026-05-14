# One-Shot Prompt: Ship a Complete Integration Marketplace

Use this prompt when an app needs a user-facing integration marketplace with connection, permissions, health, webhook, and sync visibility.

```text
You are taking this app to a completed integration marketplace endpoint with StackFoundry source modules.

Target outcome:
The app lets users connect external services, understand connection ownership and permissions, see integration health, review sync or webhook history, and operate adapter-specific flows without hardwiring providers into the base app.

Definition of done:
- A user or admin can find connected-account and integration adapter surfaces.
- OAuth/connection ownership and permission assumptions are explicit.
- Webhook/sync health and failure states have a visible operating path.
- Provider env vars are documented without committed values.
- Biome lint/format, TypeScript typecheck, tests, production build, responsive settings/admin checks, webhook/OAuth callback smoke checks, and provider dry-runs pass or have documented follow-up items.

Recommended Next.js App Router structure:
- Put user-facing integration settings under `apps/web/src/app/(app)/settings/integrations`.
- Put admin/provider health surfaces under `apps/web/src/app/(admin)/admin/integrations`.
- Put OAuth callbacks, provider webhooks, and sync Route Handlers under explicit `apps/web/src/app/api/integrations` paths.
- Keep provider adapters, permission mapping, sync logs, and webhook verification in `apps/web/src/lib/stackfoundry/integrations`.
- Use `apps/web/src/app/(app)/settings/integrations/[[...provider]]/page.tsx` only for one shared marketplace/detail renderer. Keep OAuth callbacks and webhooks explicit per provider when signatures or ownership rules differ.

Install workflow:
1. Inspect existing App Router groups, auth, account/workspace model, integrations, OAuth callbacks, webhook routes, email/analytics providers, and sync jobs.
2. Run `pnpm stackfoundry recipe integration-marketplace`.
3. Run `pnpm stackfoundry add recipe integration-marketplace --target ./my-app --dry-run`.
4. Summarize connection files, provider adapters, route handlers, env notes, ownership assumptions, webhook/sync paths, and path conflicts.
5. Ask before installing if the app already has OAuth callbacks, connected accounts, integration settings, or provider webhook code.
6. Install after approval and review the diff for leaked provider credentials, unsafe callback handling, missing ownership checks, and unclear permissions.
7. Run Biome lint/format, TypeScript typecheck, tests, production build, responsive settings/admin checks, OAuth/webhook smoke checks, and any provider-specific validation available.
8. Finish with an operator handoff: what integrations work, what provider setup is required, which callbacks/webhooks must be configured, and what remains before production.

Expected modules:
`connected-accounts`, `github-integration`, `resend-email`, and `posthog-analytics`.

Keep each provider an adapter. Do not make one integration provider a hidden dependency of the whole app.
```
