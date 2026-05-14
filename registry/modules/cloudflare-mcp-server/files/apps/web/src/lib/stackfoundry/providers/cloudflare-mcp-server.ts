export type CloudflareMcpServerConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createCloudflareMcpServerConfig(config: CloudflareMcpServerConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const CloudflareMcpServerChecklist = [
  "Define MCP tools with narrow schemas",
  "Add auth before side effects",
  "Document OAuth/client registration",
  "Verify tool inputs and error handling"
] as const;
