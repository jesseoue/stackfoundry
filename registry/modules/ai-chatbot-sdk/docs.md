# AI Chatbot SDK

Vercel AI SDK and AI Elements chatbot shell for a source-owned conversational interface.

This module credits and follows Vercel's AI SDK `useChat` / UI message streaming patterns and the Vercel AI Elements approach of small, composable shadcn-style building blocks.

## Owns

- `apps/web/src/components/ai/chatbot-shell.tsx`
- `apps/web/src/app/(console)/ai/chatbot/page.tsx`

## Installs With

- `ai-chat` for the API route and prompt/model helpers
- `ai-elements` for composable chat UI primitives

## Environment

- `AI_GATEWAY_API_KEY`
- `AI_GATEWAY_MODEL`

## Verification

- Chat page renders.
- Submitting a prompt calls `/api/ai/chat`.
- Streamed responses render from AI SDK UI message `parts`.
- Provider keys stay server-only.
