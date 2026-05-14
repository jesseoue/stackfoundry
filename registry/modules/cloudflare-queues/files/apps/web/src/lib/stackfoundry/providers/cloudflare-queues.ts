export type CloudflareQueuesConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createCloudflareQueuesConfig(config: CloudflareQueuesConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const CloudflareQueuesChecklist = [
  "Define producer and consumer ownership",
  "Document retry and dead-letter behavior",
  "Keep message payloads bounded",
  "Verify idempotent consumers"
] as const;
