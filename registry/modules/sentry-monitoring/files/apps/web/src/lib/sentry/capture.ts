export async function captureProviderException(error: unknown, context?: Record<string, unknown>) {
  const Sentry = await import("@sentry/nextjs");
  Sentry.captureException(error, { extra: context });
}
