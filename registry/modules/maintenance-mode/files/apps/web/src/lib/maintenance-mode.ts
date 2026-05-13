export type MaintenanceModeConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createMaintenanceModeConfig(config: MaintenanceModeConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const maintenanceModeProductionChecks = [
  "Confirm access control",
  "Record audit events for sensitive changes",
  "Document rollback or recovery steps",
] as const;
