export type CloudflareTerraformConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createCloudflareTerraformConfig(config: CloudflareTerraformConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const CloudflareTerraformChecklist = [
  "Keep Terraform state out of source",
  "Document provider account scope",
  "Plan before apply",
  "Review secret handling separately"
] as const;
