export type CloudflareAgentsSdkConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createCloudflareAgentsSdkConfig(config: CloudflareAgentsSdkConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const CloudflareAgentsSdkChecklist = [
  "Use Agents SDK for stateful AI interactions",
  "Document agent state schema",
  "Keep callable methods explicit",
  "Verify WebSocket/RPC behavior before launch"
] as const;
