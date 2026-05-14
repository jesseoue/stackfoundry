export type PermissionMatrixConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createPermissionMatrixConfig(config: PermissionMatrixConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const permissionMatrixChecks = [
  "Validate tenant and permission boundaries",
  "Record audit events for sensitive changes",
  "Document deployment and rollback behavior",
] as const;
