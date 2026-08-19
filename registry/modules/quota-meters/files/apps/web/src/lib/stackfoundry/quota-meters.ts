export type QuotaMetersConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createQuotaMetersConfig(config: QuotaMetersConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const quotaMetersChecks = [
  "Read quota values from the tenant-scoped usage service",
  "Never trust client-submitted usage for enforcement",
  "Keep meter labels synchronized with entitlement definitions",
] as const;
