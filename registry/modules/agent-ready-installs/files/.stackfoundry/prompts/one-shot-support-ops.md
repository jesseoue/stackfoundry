# One-Shot Prompt: Ship Complete Support Ops

Use this prompt when an app needs customer support, feedback, incident, on-call, and status workflows tied together.

```text
You are taking this app to a completed support operations endpoint with StackFoundry source modules.

Target outcome:
The app gives operators customer context, support surfaces, bug reports, feature requests, roadmap visibility, incident management, on-call escalation, postmortem workflows, public status updates, and system health signals. Support should connect to incidents and roadmap decisions instead of living as disconnected pages.

Definition of done:
- Operators can find support console/widget, bug reports, feature requests, roadmap, incidents, on-call, postmortems, status, and health surfaces.
- Customer context and escalation paths are clear.
- Incident/status workflows have visible ownership and update paths.
- No private customer data, provider credentials, or generated local metadata are committed.
- Biome lint/format, TypeScript typecheck, tests, production build, responsive support/status checks, route smoke checks, and incident/status workflow checks pass or have documented follow-up items.

Recommended Next.js App Router structure:
- Put operator support pages under `apps/web/src/app/(admin)/admin/support` and incident/status operations under `apps/web/src/app/(admin)/admin/operations`.
- Put customer-facing support widgets or public roadmap/status pages under `apps/web/src/app/(marketing)` when they are public.
- Put bug report, feature request, incident, and status Route Handlers under explicit `apps/web/src/app/api/support` or `apps/web/src/app/api/operations` paths.
- Keep escalation, status, customer context, and feedback helpers in `apps/web/src/lib/stackfoundry/support` and `apps/web/src/lib/stackfoundry/operations`.
- Use `apps/web/src/app/(admin)/admin/support/[[...queue]]/page.tsx` only for shared queue/detail rendering. Keep incident mutation APIs, status update APIs, and public status pages explicit.

Install workflow:
1. Inspect existing App Router groups, support pages, admin console, customer/account model, feedback channels, incident workflow, status page, monitoring, and health checks.
2. Run `pnpm stackfoundry recipe support-ops`.
3. Run `pnpm stackfoundry add recipe support-ops --target ./my-app --dry-run`.
4. Summarize support files, incident files, health/status files, env notes, ownership assumptions, and path conflicts.
5. Ask before installing if the app already has support, feedback, roadmap, incidents, status, or on-call code.
6. Install after approval and review the diff for private data leakage, missing authorization checks, duplicated support routes, and unclear escalation ownership.
7. Run Biome lint/format, TypeScript typecheck, tests, production build, responsive support/status checks, route smoke checks, and any status/incident workflow validation available.
8. Finish with an operations handoff: what support workflows work, which roles own them, which checks ran, and what remains before production.

Expected modules:
`support-console`, `support-widget`, `bug-reports`, `feature-requests`, `public-roadmap`, `incident-management`, `oncall-alerting`, `postmortem-runbook`, `status-page`, and `system-health`.

Keep customer context useful but minimal. Do not expose private customer data in logs, public status pages, or feedback surfaces.
```
