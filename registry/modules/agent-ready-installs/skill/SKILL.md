---
name: agent-ready-installs
description: Maintain agent-ready StackFoundry install prompt packs and context files.
---

# Agent-Ready Installs Maintenance Instructions

- Keep prompts focused on dry-run, install, review, and verification workflows.
- Keep tool references compatible with Cursor, Codex, Claude, and similar coding agents.
- Do not add secrets, user-specific paths, local provider metadata, or generated caches.
- Keep `api-saas-starter` as the default first path unless public positioning changes.
- Update docs, prompt files, and context JSON together.

## Verification

- `pnpm registry:doctor`
- `pnpm stackfoundry add agent-ready-installs --target /tmp/stackfoundry-agent-ready --dry-run`
- Confirm installed prompt files are generic and safe to commit.
