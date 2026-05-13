---
name: cloudflare-workers
description: Maintain the Cloudflare Workers vendor module installed by StackFoundry.
---

# Cloudflare Workers Maintenance Instructions

- Preserve the vendor boundary documented in `docs.md`.
- Keep example code compact and easy to replace with production logic.
- Never commit provider secrets, local tokens, or generated vendor state.
- Update `module.json` when dependencies, env vars, or install paths change.
