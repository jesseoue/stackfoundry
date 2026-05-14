# One-Shot Prompt: Ship Complete Enterprise SaaS Controls

Use this prompt when a team needs a complete enterprise SaaS control layer.

```text
You are taking this app to a completed enterprise SaaS endpoint with StackFoundry source modules.

Target outcome:
The app can support enterprise procurement with stronger access controls, SSO/SCIM boundaries, auditability, retention/export/deletion policies, SLA workflows, support operations, incident response, and public status communication. The result should be reviewable source code with clear auth and compliance boundaries.

Definition of done:
- Admins can find enterprise identity, roles/permissions, MFA/security, audit, retention/export/deletion, SLA/support, incident, and status surfaces.
- Protected routes, server actions, and route handlers have explicit authorization expectations.
- Compliance-sensitive data flows are documented and do not commit customer data or secrets.
- Provider setup remains adapter-based and is not hidden in the base scaffold.
- Biome lint/format, TypeScript typecheck, tests, production build, migration review, responsive admin checks, auth smoke tests, and support/status route checks pass or have documented follow-up items.

Recommended Next.js App Router structure:
- Keep enterprise admin surfaces under `apps/web/src/app/(admin)/admin` with a shared admin layout and explicit authorization checks.
- Keep workspace user surfaces under `apps/web/src/app/(app)` and avoid mixing procurement/admin-only controls into ordinary dashboard pages.
- Put SSO, SCIM, MFA, and lifecycle Route Handlers under explicit `apps/web/src/app/api` paths such as `api/scim`, `api/sso`, and `api/webhooks`.
- Keep role, permission, audit, retention, and export logic in `apps/web/src/lib/stackfoundry/security` and `packages/db/src/schema`.
- Use catch-all routes only for policy/document viewers such as `apps/web/src/app/(admin)/admin/security/policies/[[...slug]]/page.tsx`. Do not collapse SSO, SCIM, deletion, export, or webhook handlers into a catch-all.

Install workflow:
1. Inspect existing App Router groups, auth, org/workspace model, roles, audit logs, support tooling, and incident/status surfaces.
2. Run `pnpm stackfoundry recipe enterprise-saas`.
3. Run `pnpm stackfoundry add recipe enterprise-saas --target ./my-app --dry-run`.
4. Summarize route additions, schema slices, env notes, provider adapters, access-control assumptions, and checklist coverage.
5. Ask before installing if the app already has SSO, SCIM, RBAC, audit, support, or status-page code.
6. Install after approval, then review every protected route and server action for authorization boundaries.
7. Verify that no secrets, customer data, local provider metadata, or generated caches were added.
8. Run Biome lint/format, TypeScript typecheck, tests, production build, migration review, responsive admin checks, auth smoke tests, and any support/status route checks.
9. Finish with a security-focused handoff: what works, what still needs provider setup, which checks ran, and which controls need human policy decisions.

Expected modules:
`auth-core`, `custom-roles`, `permission-matrix`, `enterprise-sso`, `scim-provisioning`, `mfa-security`, `audit-log`, `data-retention`, `data-export`, `account-deletion`, `secrets-management`, `sla-management`, `support-console`, `incident-management`, `status-page`, and `postmortem-runbook`.

Prioritize authorization correctness and compliance notes over UI polish.
```
