export type FlyDeployConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createFlyDeployConfig(config: FlyDeployConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const FlyDeployChecklist = [
  "Choose primary region intentionally",
  "Document app name and machines config",
  "Keep tokens out of source",
  "Verify health checks and rollback path"
] as const;
