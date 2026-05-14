export type CloudflarePagesConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createCloudflarePagesConfig(config: CloudflarePagesConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const CloudflarePagesChecklist = [
  "Choose Pages only when the app is edge/static compatible",
  "Document build command and output directory",
  "Bind preview and production vars separately",
  "Verify custom domains and Functions compatibility"
] as const;
