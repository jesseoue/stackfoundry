export type CloudflareVectorizeConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createCloudflareVectorizeConfig(config: CloudflareVectorizeConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const CloudflareVectorizeChecklist = [
  "Define index dimensions and metric once",
  "Batch embedding writes",
  "Document namespace strategy",
  "Verify retrieval quality with fixtures"
] as const;
