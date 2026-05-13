export type QuotaEnforcementConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createQuotaEnforcementConfig(config: QuotaEnforcementConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const quotaEnforcementProductionChecks = [
  "Confirm access control",
  "Record audit events for sensitive changes",
  "Document rollback or recovery steps",
] as const;
