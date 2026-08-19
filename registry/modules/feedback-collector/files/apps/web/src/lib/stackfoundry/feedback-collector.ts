export type FeedbackCollectorConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createFeedbackCollectorConfig(config: FeedbackCollectorConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const feedbackCollectorChecks = [
  "Persist feedback through an authenticated tenant-scoped server action",
  "Rate-limit submissions before writing to storage",
  "Never include secrets or unrelated customer data in free-text feedback",
] as const;
