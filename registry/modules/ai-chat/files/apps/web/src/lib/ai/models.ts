import { getAIGatewayModel } from "@/lib/ai/ai-sdk";

export function getSelectedModel(model?: string) {
  return getAIGatewayModel(model);
}
