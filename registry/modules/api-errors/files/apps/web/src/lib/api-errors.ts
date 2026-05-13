export type ApiErrorsConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createApiErrorsConfig(config: ApiErrorsConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const apiErrorsProductionChecks = [
  "Confirm access control",
  "Record audit events for sensitive changes",
  "Document rollback or recovery steps",
] as const;
