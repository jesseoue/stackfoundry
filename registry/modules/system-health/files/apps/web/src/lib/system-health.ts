import "server-only";

export type HealthDependency = {
  name: string;
  status: "healthy" | "degraded" | "down";
  latencyMs?: number;
  required: boolean;
};

export type HealthCheckResult = {
  status: "healthy" | "degraded" | "down";
  dependencies: HealthDependency[];
  checkedAt: string;
};

export function summarizeHealth(dependencies: HealthDependency[]): HealthCheckResult {
  const checkedAt = new Date().toISOString();
  if (dependencies.some((dependency) => dependency.required && dependency.status === "down")) {
    return { status: "down", dependencies, checkedAt };
  }
  if (dependencies.some((dependency) => dependency.status !== "healthy")) {
    return { status: "degraded", dependencies, checkedAt };
  }
  return { status: "healthy", dependencies, checkedAt };
}

export function healthStatus(result: HealthCheckResult) {
  return result.status === "healthy" ? 200 : result.status === "degraded" ? 200 : 503;
}

export const systemHealthChecklist = [
  "Check every required dependency before reporting healthy",
  "Keep dependency latency and failure status tenant-safe",
  "Alert before required dependencies report down",
] as const;
