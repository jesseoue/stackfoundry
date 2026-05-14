export type CloudflareDurableObjectsConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createCloudflareDurableObjectsConfig(config: CloudflareDurableObjectsConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const CloudflareDurableObjectsChecklist = [
  "Use Durable Objects for per-entity coordination",
  "Keep object ids stable",
  "Document storage and alarm behavior",
  "Test concurrent requests and reconnects"
] as const;
