export type DomainVerificationConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createDomainVerificationConfig(config: DomainVerificationConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const domainVerificationChecks = [
  "Validate tenant and permission boundaries",
  "Record audit events for sensitive changes",
  "Document deployment and rollback behavior",
] as const;
