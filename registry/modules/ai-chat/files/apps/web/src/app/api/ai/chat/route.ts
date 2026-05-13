import { convertToModelMessages, streamText, type UIMessage } from "ai";

import { getSelectedModel } from "@/lib/ai/models";
import { chatSystemPrompt } from "@/lib/ai/prompts";

export const maxDuration = 60;

type ChatRequest = {
  messages?: UIMessage[];
  message?: UIMessage;
  model?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ChatRequest;
  const messages = body.messages ?? (body.message ? [body.message] : []);

  try {
    const result = streamText({
      model: getSelectedModel(body.model),
      system: chatSystemPrompt,
      messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Unable to start chat stream." },
      { status: 400 },
    );
  }
}
