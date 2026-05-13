---
name: cloudflare-d1
description: Maintain the Cloudflare D1 vendor module installed by StackFoundry.
---

# Cloudflare D1 Maintenance Instructions

- Preserve the vendor boundary documented in `docs.md`.
- Keep example code compact and easy to replace with production logic.
- Never commit provider secrets, local tokens, or generated vendor state.
- Update `module.json` when dependencies, env vars, or install paths change.
