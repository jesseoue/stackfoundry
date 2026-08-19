export type SecurityActivityConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createSecurityActivityConfig(config: SecurityActivityConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const securityActivityChecks = [
  "Render only the current account's security events",
  "Redact tokens, IP-level identity data, and personal data before display",
  "Preserve audit-log immutability in the backing event store",
] as const;
