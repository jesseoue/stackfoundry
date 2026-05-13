import "server-only";

export type BackgroundJobInput = {
  name: string;
  payload?: Record<string, unknown>;
  maxAttempts?: number;
  runAfter?: Date;
};

export function createBackgroundJob(input: BackgroundJobInput) {
  return {
    name: input.name,
    payload: input.payload ?? {},
    maxAttempts: input.maxAttempts ?? 3,
    runAfter: input.runAfter ?? new Date(),
  };
}

export function shouldRetryJob(attempts: number, maxAttempts: number) {
  return attempts < maxAttempts;
}
