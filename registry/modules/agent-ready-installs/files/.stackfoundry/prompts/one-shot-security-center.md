# One-Shot Prompt: Ship a Complete Security Center

Use this prompt when a B2B SaaS app needs a visible security posture center and review workflow.

```text
You are taking this app to a completed security center endpoint with StackFoundry source modules.

Target outcome:
The app exposes workspace security posture, MFA expectations, browser/API protections, secrets hygiene, dependency audit visibility, data retention/export/deletion controls, and audit history. The result should support enterprise security reviews without hiding important controls in provider dashboards only.

Definition of done:
- Admins can find security posture, MFA, headers/CSRF/CORS, secrets, dependency audit, retention/export/deletion, and audit surfaces.
- Sensitive security and data lifecycle behavior is documented.
- Secrets are never committed and public env vars do not expose private values.
- Risky access/data flows are reviewed before install is accepted.
- Biome lint/format, TypeScript typecheck, tests, production build, migration review, responsive security-center checks, security header checks, and route smoke checks pass or have documented follow-up items.

Recommended Next.js App Router structure:
- Put security center UI under `apps/web/src/app/(admin)/admin/security` with shared admin layout and authorization.
- Keep user-facing security settings, if needed, under `apps/web/src/app/(app)/settings/security`.
- Put security Route Handlers under explicit `apps/web/src/app/api/security` paths and keep webhook/callback handlers separate when providers require unique verification.
- Keep policies, audit helpers, data lifecycle helpers, and secrets checks in `apps/web/src/lib/stackfoundry/security`.
- Use `apps/web/src/app/(admin)/admin/security/[[...section]]/page.tsx` for a DRY security section renderer only if every section shares the same authorization boundary. Keep account deletion, export, and audit APIs explicit.

Install workflow:
1. Inspect existing App Router groups, auth, workspace model, security headers, CSRF/CORS handling, secrets strategy, audit logs, data export/deletion, and dependency tooling.
2. Run `pnpm stackfoundry recipe security-center`.
3. Run `pnpm stackfoundry add recipe security-center --target ./my-app --dry-run`.
4. Summarize security files, data lifecycle files, env notes, route changes, policy assumptions, schema changes, and path conflicts.
5. Ask before installing if the app already has security center, compliance, audit, export, deletion, or security middleware code.
6. Install after approval and review the diff for unsafe defaults, missing authorization checks, leaked secrets, and duplicated security policies.
7. Run Biome lint/format, TypeScript typecheck, tests, production build, migration review, responsive security-center checks, security header checks, and any route/API smoke checks.
8. Finish with a security-readiness handoff: enabled controls, required policy decisions, env/config setup, checks run, and production blockers.

Expected modules:
`mfa-security`, `security-headers`, `csrf-protection`, `cors-policy`, `secrets-management`, `dependency-audit`, `data-retention`, `data-export`, `account-deletion`, and `audit-log`.

Prioritize correctness, explicit policy, and least privilege over broad UI coverage.
```
