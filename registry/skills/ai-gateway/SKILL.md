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
- Configure `AI_GATEWAY_BASE_URL` only when overriding the current AI Gateway endpoint.
- Prefer `createGateway` or a gateway model string such as `openai/gpt-5.4`.
- On Vercel, OIDC can authenticate model requests without a local API key.
- Define deterministic model IDs and fallback order before adding runtime model choice.
- Keep provider/model complexity hidden from product UI.

## Cost and safety

- Track tokens and spend by tenant when usage affects billing.
- Use a server-side allowlist for user-selectable models.
- Fail closed when routing or provider configuration is missing.
- Verify primary, fallback, and error paths before release.
