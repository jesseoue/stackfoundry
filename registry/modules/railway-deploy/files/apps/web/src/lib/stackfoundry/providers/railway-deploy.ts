export type RailwayDeployConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createRailwayDeployConfig(config: RailwayDeployConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const RailwayDeployChecklist = [
  "Document Railway project and service names",
  "Configure build/start commands",
  "Scope variables by environment",
  "Verify health checks and rollback path"
] as const;
