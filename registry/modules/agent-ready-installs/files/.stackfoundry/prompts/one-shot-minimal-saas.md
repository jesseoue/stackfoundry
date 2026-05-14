# One-Shot Prompt: Ship a Complete Minimal SaaS

Use this prompt when an app needs the smallest complete SaaS foundation before heavier provider choices.

```text
You are taking this app to a completed minimal SaaS endpoint with StackFoundry source modules.

Target outcome:
The app has a usable product shell, settings structure, database conventions, auth boundary, billing path, pricing surface, invoices path, audit trail, health checks, and security headers. It should feel like a small real SaaS app that can be extended, not a placeholder template.

Definition of done:
- A maintainer can navigate the shell, settings, auth/account area, pricing/billing path, invoices path, health surface, and audit/security basics.
- The app keeps provider choices visible and replaceable.
- Env notes, schema/migration guidance, checklists, and maintenance skills are installed with the source.
- Existing app code is not overwritten without explicit approval.
- Biome lint/format, TypeScript typecheck, tests, production build, migration review, responsive checks, and smoke checks for shell/settings/billing/health pass or have documented follow-up items.

Recommended Next.js App Router structure:
- Keep public pages in `apps/web/src/app/(marketing)` and authenticated SaaS pages in `apps/web/src/app/(app)` so the shell, nav, and loading/error boundaries are shared at the right level.
- Put auth provider pages and callbacks in `apps/web/src/app/(auth)` or `apps/web/src/app/api/auth` depending on provider requirements.
- Put admin-only operations in `apps/web/src/app/(admin)/admin` and shared UI in `apps/web/src/components/stackfoundry`.
- Put reusable product config, navigation, and env helpers in `apps/web/src/lib/stackfoundry`, not inside route files.
- Use catch-all routes sparingly: `apps/web/src/app/(app)/settings/[[...section]]/page.tsx` is acceptable for a DRY settings renderer, but keep billing, auth, and health routes explicit when they have different authorization or runtime behavior.

Install workflow:
1. Inspect existing App Router groups, layouts, settings pages, auth provider, database package, and billing provider.
2. Run `pnpm stackfoundry recipe saas-starter-minimal`.
3. Run `pnpm stackfoundry add recipe saas-starter-minimal --target ./my-app --dry-run`.
4. Summarize the source files, env notes, dependencies, registry dependencies, and likely path conflicts.
5. Ask before installing if any shell, auth, billing, or database code already exists.
6. Install only after the dry-run is accepted.
7. Review the diff for duplicated shells, duplicate auth routes, misplaced database files, and provider assumptions.
8. Run Biome lint/format, TypeScript typecheck, tests, production build, migrations, responsive checks, and smoke checks for the shell, settings, billing, and health routes.
9. Finish with a concise launch-readiness summary: working surfaces, env/migrations required, verification run, and remaining blockers.

Expected modules:
`next-saas-shell`, `settings-layout`, `drizzle-postgres`, `tenant-context`, `auth-core`, `account-settings`, `account-modes`, `clerk-auth`, `billing-core`, `stripe-billing`, `pricing-page`, `invoices`, `audit-log`, `system-health`, and `security-headers`.

Keep the base scaffold small. Treat providers as adapters, not hard dependencies.
```
