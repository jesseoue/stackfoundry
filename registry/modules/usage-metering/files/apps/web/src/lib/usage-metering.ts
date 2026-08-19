import "server-only";

export type UsageEventInput = {
  organizationId: string;
  key: string;
  quantity: number;
  occurredAt?: Date;
  metadata?: Record<string, unknown>;
};

export type UsageEvent = {
  organizationId: string;
  key: string;
  quantity: number;
  occurredAt: Date;
  metadata: Record<string, unknown>;
};

export function createUsageEvent(input: UsageEventInput): UsageEvent {
  if (!input.organizationId) throw new Error("organizationId is required.");
  if (!input.key) throw new Error("Usage key is required.");
  if (!Number.isFinite(input.quantity) || input.quantity <= 0) {
    throw new Error("Usage quantity must be a positive number.");
  }

  return {
    organizationId: input.organizationId,
    key: input.key,
    quantity: input.quantity,
    occurredAt: input.occurredAt ?? new Date(),
    metadata: input.metadata ?? {},
  };
}

export function aggregateUsage(events: UsageEvent[]) {
  return events.reduce<Record<string, number>>((totals, event) => {
    totals[event.key] = (totals[event.key] ?? 0) + event.quantity;
    return totals;
  }, {});
}

export const usageMeteringChecklist = [
  "Write events with tenant scope and an idempotency key",
  "Aggregate usage outside the request path when volume is high",
  "Reconcile metered totals with billing before invoicing",
] as const;
