export const DEFAULT_AI_MODEL = process.env.AI_GATEWAY_MODEL;

export function getSelectedModel(model?: string) {
  const selected = model || DEFAULT_AI_MODEL;
  if (!selected) {
    throw new Error("AI_GATEWAY_MODEL is not set.");
  }
  return selected;
}
