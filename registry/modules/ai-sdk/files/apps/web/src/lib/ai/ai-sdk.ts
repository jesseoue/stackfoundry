import { createGateway } from "ai";

const gateway = createGateway({
  baseURL: process.env.AI_GATEWAY_BASE_URL || "https://ai-gateway.vercel.sh/v4/ai",
});

export function getAIGatewayModel(model?: string) {
  const selected = process.env.AI_GATEWAY_MODEL || model;
  if (!selected) throw new Error("AI_GATEWAY_MODEL or a model argument is required.");
  return gateway(selected);
}

export function assertAIGatewayConfigured() {
  if (!process.env.AI_GATEWAY_API_KEY) {
    throw new Error("AI_GATEWAY_API_KEY is not set.");
  }
}
