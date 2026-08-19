export type WorkspaceSwitcherConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createWorkspaceSwitcherConfig(config: WorkspaceSwitcherConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const workspaceSwitcherChecks = [
  "Resolve workspaces from the authenticated tenant context",
  "Verify the user can access every workspace returned by the server",
  "Audit workspace switches when cross-workspace history is sensitive",
] as const;
