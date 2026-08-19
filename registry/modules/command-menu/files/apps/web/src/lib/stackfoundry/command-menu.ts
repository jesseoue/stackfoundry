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
  "Build action lists from role-aware server data",
  "Avoid exposing commands the current user cannot execute",
  "Keep destructive actions behind explicit confirmation",
] as const;
