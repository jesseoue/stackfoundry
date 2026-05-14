# AI Elements

Composable AI chat UI primitives inspired by Vercel AI Elements and shadcn/ui conventions.

Vercel AI Elements is a component library and registry built on shadcn/ui conventions for AI-native interfaces. This module brings a small source-owned subset into StackFoundry so teams can compose chat interfaces without taking a hard dependency on a specific provider UI.

## Owns

- `apps/web/src/components/ai-elements/conversation.tsx`
- `apps/web/src/components/ai-elements/message.tsx`
- `apps/web/src/components/ai-elements/prompt-input.tsx`
- `apps/web/src/components/ai-elements/status.tsx`
- `apps/web/src/components/ai-elements/index.ts`

## Maintenance

- Keep components provider-neutral.
- Render AI SDK UI message `parts`, not legacy content strings.
- Keep primitives composable so apps can replace styling or layout.
- Credit the Vercel AI Elements / shadcn-style pattern in docs when extending this module.
