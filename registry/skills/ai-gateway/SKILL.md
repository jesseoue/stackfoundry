---
name: ai-gateway
description: Vercel AI Gateway guidance for installed routing, fallback, and cost controls.
---

# AI Gateway Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/ai-gateway/SKILL.md`
- Registry source: `registry/skills/ai-gateway/SKILL.md`

Load this skill before changing installed model routing or gateway configuration.

## Routing rules

- Keep `AI_GATEWAY_API_KEY` server-only.
- Configure `AI_GATEWAY_BASE_URL` only when routing through a gateway endpoint.
- Define deterministic model IDs and fallback order before adding runtime model choice.
- Keep provider/model complexity hidden from product UI.

## Cost and safety

- Track tokens and spend by tenant when usage affects billing.
- Use a server-side allowlist for user-selectable models.
- Fail closed when routing or provider configuration is missing.
- Verify primary, fallback, and error paths before release.
