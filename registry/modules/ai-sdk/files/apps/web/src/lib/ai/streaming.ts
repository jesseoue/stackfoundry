import { convertToModelMessages, streamText, type UIMessage } from "ai";

import { getAIGatewayModel } from "@/lib/ai/ai-sdk";

export function streamChatMessages({
  messages,
  model,
  system,
}: {
  messages: UIMessage[];
  model?: string;
  system: string;
}) {
  return streamText({
    model: getAIGatewayModel(model),
    system,
    messages: convertToModelMessages(messages),
  });
}
