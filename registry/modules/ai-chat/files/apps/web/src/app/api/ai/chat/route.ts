import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from "ai";

import { getSelectedModel } from "@/lib/ai/models";
import { chatSystemPrompt } from "@/lib/ai/prompts";

export const maxDuration = 60;

type ChatRequest = {
  messages?: UIMessage[];
  message?: UIMessage;
  model?: string;
};

export async function POST(request: Request) {
  let body: ChatRequest;

  try {
    body = (await request.json()) as ChatRequest;
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const messages = body.messages ?? (body.message ? [body.message] : []);

  try {
    const result = streamText({
      model: getSelectedModel(body.model),
      instructions: chatSystemPrompt,
      messages: convertToModelMessages(messages),
    });

    return createUIMessageStreamResponse({
      stream: toUIMessageStream({ stream: result.stream }),
    });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Unable to start chat stream." },
      { status: 400 },
    );
  }
}
