export type CloudflareWorkersAiConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createCloudflareWorkersAiConfig(config: CloudflareWorkersAiConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const CloudflareWorkersAiChecklist = [
  "Keep model ids explicit",
  "Document prompt and safety boundaries",
  "Track usage and failures",
  "Verify fallback behavior"
] as const;
