# AI SDK

Vercel AI SDK model configuration, streaming helpers, and gateway-ready defaults.

This module is inspired by Vercel's AI SDK guidance for model abstraction, UI message streaming, and gateway-based provider routing.

## Owns

- `apps/web/src/lib/ai/ai-sdk.ts`
- `apps/web/src/lib/ai/streaming.ts`

## Dependencies

- `ai`
- `@ai-sdk/gateway`

## Environment

- `AI_GATEWAY_API_KEY`
- `AI_GATEWAY_MODEL`

## Maintenance

- Keep provider keys server-only.
- Prefer AI SDK provider and gateway abstractions over direct provider SDK imports.
- Use UI message streams for chat surfaces.
- Document model IDs, fallback behavior, and cost-sensitive paths.
