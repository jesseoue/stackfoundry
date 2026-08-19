export type OnboardingChecklistConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createOnboardingChecklistConfig(config: OnboardingChecklistConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const onboardingChecklistChecks = [
  "Resolve completion state from tenant-specific product data",
  "Keep next-best actions tied to the current account role",
  "Never expose another workspace's onboarding state",
] as const;
