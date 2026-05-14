export type ConvexBackendConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createConvexBackendConfig(config: ConvexBackendConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const ConvexBackendChecklist = [
  "Create a Convex project",
  "Set CONVEX_DEPLOYMENT and NEXT_PUBLIC_CONVEX_URL",
  "Generate Convex types after schema/function changes",
  "Deploy functions before enabling UI paths"
] as const;
