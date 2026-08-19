export type ToastNotificationsConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createToastNotificationsConfig(config: ToastNotificationsConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const toastNotificationsChecks = [
  "Render the provider once in the app layout",
  "Keep API errors generic in user-facing messages",
  "Log detailed failures server-side without exposing secrets",
] as const;
