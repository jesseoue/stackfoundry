export type EmailTemplatesConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createEmailTemplatesConfig(config: EmailTemplatesConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const emailTemplatesProductionChecks = [
  "Confirm access control",
  "Record audit events for sensitive changes",
  "Document rollback or recovery steps",
] as const;
