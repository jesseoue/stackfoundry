# Agent-Ready Installs

Prompt packs and context files for Cursor, Codex, Claude, and other coding agents to install SaaS infrastructure safely.

This module makes StackFoundry's source registry easier to operate from coding-agent environments. It gives agents a stable prompt pack, context JSON, and review checklist for dry-running, installing, and verifying infrastructure modules.

## Owns

- `.stackfoundry/context/agent-ready-installs.json`
- `.stackfoundry/prompts/install-api-saas.md`
- `.stackfoundry/prompts/review-stackfoundry-install.md`
- `docs/stackfoundry/agent-ready-installs.md`

## Best First Path

```bash
pnpm stackfoundry recipe api-saas-starter
pnpm stackfoundry add recipe api-saas-starter --target ./my-app --dry-run
```

## Maintenance

- Keep prompts product-focused and tool-neutral.
- Cursor, Codex, Claude, and similar agents should all be able to follow the same workflow.
- Keep the API SaaS recipe as the first install path.
- Never include secrets, user-specific metadata, or local provider state.
