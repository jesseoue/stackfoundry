export type CommandMenuConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createCommandMenuConfig(config: CommandMenuConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const commandMenuChecks = [
  "Validate tenant and permission boundaries",
  "Record audit events for sensitive changes",
  "Document deployment and rollback behavior",
] as const;
