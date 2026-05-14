export const accountModeValues = ["personal", "team", "hybrid"] as const;

export type AccountMode = (typeof accountModeValues)[number];

export type AccountModeConfig = {
  accountId: string;
  mode: AccountMode;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createAccountModeConfig(config: AccountModeConfig) {
  return {
    accountId: config.accountId,
    mode: config.mode,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export function supportsOrganizations(mode: AccountMode) {
  return mode === "team" || mode === "hybrid";
}

export function supportsPersonalWorkspace(mode: AccountMode) {
  return mode === "personal" || mode === "hybrid";
}
