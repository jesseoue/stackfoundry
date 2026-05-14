export type ConvexIntegrationConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createConvexIntegrationConfig(config: ConvexIntegrationConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const ConvexIntegrationChecklist = [
  "Link the target Convex project",
  "Record dashboard and deployment URLs",
  "Document schema ownership",
  "Verify preview and production deployments separately"
] as const;
