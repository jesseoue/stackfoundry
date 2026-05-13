export type LoginActivityConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createLoginActivityConfig(config: LoginActivityConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const loginActivityProductionChecks = [
  "Confirm access control",
  "Record audit events for sensitive changes",
  "Document rollback or recovery steps",
] as const;
