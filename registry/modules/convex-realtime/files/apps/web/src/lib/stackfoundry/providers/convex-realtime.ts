export type ConvexRealtimeConfig = {
  enabled?: boolean;
  environment?: "development" | "preview" | "production";
  metadata?: Record<string, unknown>;
};

export function createConvexRealtimeConfig(config: ConvexRealtimeConfig = {}) {
  return {
    enabled: config.enabled ?? true,
    environment: config.environment ?? "development",
    metadata: config.metadata ?? {},
  };
}

export const ConvexRealtimeChecklist = [
  "Use Convex live queries for realtime state",
  "Keep optimistic updates reversible",
  "Document subscription ownership",
  "Verify disconnected and reconnect states"
] as const;
