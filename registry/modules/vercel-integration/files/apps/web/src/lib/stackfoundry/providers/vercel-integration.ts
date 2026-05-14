export type VercelIntegrationConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createVercelIntegrationConfig(config: VercelIntegrationConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const VercelIntegrationChecklist = [
  "Document Vercel project and team ownership",
  "Pull envs only after linking",
  "Record preview and production URLs",
  "Use inspect/logs for failed deploys"
] as const;
