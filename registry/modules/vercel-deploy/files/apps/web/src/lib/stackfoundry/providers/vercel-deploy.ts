export type VercelDeployConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createVercelDeployConfig(config: VercelDeployConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const VercelDeployChecklist = [
  "Link the Vercel project before pulling env",
  "Use preview deployments for review",
  "Promote production intentionally",
  "Record rollback and inspect commands"
] as const;
