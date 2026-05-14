export type CloudflareTurnstileConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createCloudflareTurnstileConfig(config: CloudflareTurnstileConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const CloudflareTurnstileChecklist = [
  "Protect signup/contact/waitlist first",
  "Keep secret key server-only",
  "Verify token server-side",
  "Document failure and fallback UX"
] as const;
