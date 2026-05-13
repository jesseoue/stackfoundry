import "server-only";

export type AuditLogEventInput = {
  actorId?: string | null;
  actorType?: "user" | "system" | "service";
  action: string;
  resourceType: string;
  resourceId?: string | null;
  organizationId?: string | null;
  metadata?: Record<string, unknown>;
};

export function buildAuditLogEvent(input: AuditLogEventInput) {
  return {
    actorId: input.actorId ?? null,
    actorType: input.actorType ?? "user",
    action: input.action,
    resourceType: input.resourceType,
    resourceId: input.resourceId ?? null,
    organizationId: input.organizationId ?? null,
    metadata: input.metadata ?? {},
  };
}

export function assertAuditAction(action: string) {
  if (!/^[a-z]+(?:\.[a-z]+)+$/.test(action)) {
    throw new Error("Audit actions should use a namespaced form like billing.subscription_updated");
  }
}
