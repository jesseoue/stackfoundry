# AI Chat Module

Adds a minimal Vercel AI SDK chat endpoint and client component using current `useChat` semantics.

This module credits Vercel AI SDK for the `useChat`, `DefaultChatTransport`, UI message parts, and `toUIMessageStreamResponse()` patterns.

## Owns

- `/api/ai/chat` route
- chat prompt component
- model/env helper
- prompt defaults

## Requirements

- `AI_GATEWAY_API_KEY`
- `AI_GATEWAY_MODEL`

## Verification

- API route returns a UI message stream.
- Client component sends messages with `DefaultChatTransport`.
- Missing model returns a readable error instead of a failed stream.
