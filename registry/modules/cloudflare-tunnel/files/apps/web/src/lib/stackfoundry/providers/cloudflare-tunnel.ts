export type CloudflareTunnelConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createCloudflareTunnelConfig(config: CloudflareTunnelConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const CloudflareTunnelChecklist = [
  "Use named tunnels and scoped routes",
  "Document connector ownership",
  "Keep tunnel tokens secret",
  "Verify zero-trust access policy"
] as const;
