export type CloudflareObservabilityConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createCloudflareObservabilityConfig(config: CloudflareObservabilityConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const CloudflareObservabilityChecklist = [
  "Enable logs/traces before production",
  "Avoid logging secrets or customer data",
  "Document dashboard and alert ownership",
  "Verify deploy log access"
] as const;
