---
name: agent-ready-installs
description: Maintain agent-ready StackFoundry install prompt packs and context files.
---

# Agent-Ready Installs Maintenance Instructions

- Keep prompts focused on dry-run, install, review, and verification workflows.
- Keep tool references compatible with generic coding assistants and avoid tool-specific assumptions.
- Do not add secrets, user-specific paths, local provider metadata, or generated caches.
- Keep `api-saas-starter` as the default first path unless public positioning changes.
- Update docs, prompt files, module manifests, and context JSON together.
- One-shot prompts must map to real `registry/recipes/*.json` files and should name the expected modules.
- Each one-shot prompt should define the completed SaaS endpoint, tell the agent to inspect first, dry-run before writing, ask before install when boundaries are unclear, review the diff, run the target app's checks, and finish with a production-readiness handoff.
- Each one-shot prompt should include a Next.js App Router structure section with route groups, explicit `app/api` Route Handler guidance, shared `src/lib/stackfoundry` ownership, and careful catch-all usage.
- Verification guidance should explicitly include Biome lint/format, TypeScript typecheck, tests, production build, and responsive smoke checks.

## Verification

- `pnpm registry:doctor`
- `pnpm stackfoundry add agent-ready-installs --target /tmp/stackfoundry-agent-ready --dry-run`
- Confirm installed prompt files are generic and safe to commit.
