export type VercelMarketplaceStorageConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createVercelMarketplaceStorageConfig(config: VercelMarketplaceStorageConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const VercelMarketplaceStorageChecklist = [
  "Choose storage by product need",
  "Document Marketplace integration ownership",
  "Pull provisioned env vars",
  "Verify preview and production env scopes"
] as const;
