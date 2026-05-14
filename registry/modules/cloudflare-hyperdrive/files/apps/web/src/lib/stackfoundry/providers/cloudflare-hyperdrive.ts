export type CloudflareHyperdriveConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createCloudflareHyperdriveConfig(config: CloudflareHyperdriveConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const CloudflareHyperdriveChecklist = [
  "Bind Hyperdrive explicitly",
  "Document origin database ownership",
  "Keep DATABASE_URL server-only",
  "Verify query latency from Workers"
] as const;
