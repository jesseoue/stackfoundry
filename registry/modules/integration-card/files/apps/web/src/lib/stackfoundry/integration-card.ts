export type IntegrationCardConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createIntegrationCardConfig(config: IntegrationCardConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const integrationCardChecks = [
  "Load connection state and credentials only on the server",
  "Scope every integration to the selected workspace",
  "Route OAuth and webhook secrets through the app's secrets manager",
] as const;
