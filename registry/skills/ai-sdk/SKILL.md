---
name: ai-sdk
description: Vercel AI SDK 5 guidance for installed model routing and streaming modules.
---

# AI SDK Guidance

## Installed Location

- Installed target: `.stackfoundry/skills/ai-sdk/SKILL.md`
- Registry source: `registry/skills/ai-sdk/SKILL.md`

Load this skill before changing installed model, chat, tool, or streaming code.

## Model and transport rules

- Keep model construction server-only and keys out of `NEXT_PUBLIC_`.
- Use AI SDK 5 message APIs (`UIMessage`, `convertToModelMessages`, `toUIMessageStreamResponse`) consistently.
- Configure model providers once in a shared server helper; do not duplicate provider credentials in route handlers.
- Prefer AI Gateway model IDs and centralized routing for provider fallback and cost control.
- Validate request bodies before creating a model or streaming a response.

## Streaming and errors

- Return `400` for invalid JSON before model invocation.
- Handle tool-call errors explicitly and avoid leaking provider stack traces.
- Document model IDs, expected latency, token cost, and fallback behavior.
- Test streaming success, invalid JSON, provider errors, and tool failures.

## Ownership boundaries

- Keep UI components provider-agnostic.
- Keep provider-specific transport and credentials in server-only helpers.
- Record cost-sensitive calls and audit autonomous actions.
