export type CustomDomainsConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createCustomDomainsConfig(config: CustomDomainsConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const customDomainsChecks = [
  "Validate tenant and permission boundaries",
  "Record audit events for sensitive changes",
  "Document deployment and rollback behavior",
] as const;
