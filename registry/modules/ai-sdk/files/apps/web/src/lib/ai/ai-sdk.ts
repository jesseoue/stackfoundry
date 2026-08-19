import { createOpenAI } from "@ai-sdk/gateway";

const gateway = createOpenAI({
  apiKey: process.env.AI_GATEWAY_API_KEY,
  baseURL: process.env.AI_GATEWAY_BASE_URL,
});

export function getAIGatewayModel(model?: string) {
  return gateway(process.env.AI_GATEWAY_MODEL || model || "gpt-5");
}

export function assertAIGatewayConfigured() {
  if (!process.env.AI_GATEWAY_API_KEY) {
    throw new Error("AI_GATEWAY_API_KEY is not set.");
  }
}
