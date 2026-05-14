export type ProductEventInput = {
  eventType: string;
  actorId?: string;
  organizationId?: string;
  source?: string;
  metadata?: Record<string, unknown>;
};

export function createProductEvent(input: ProductEventInput) {
  return {
    eventType: input.eventType,
    actorId: input.actorId,
    organizationId: input.organizationId,
    source: input.source ?? "app",
    metadata: input.metadata ?? {},
  };
}

export const activationEventTypes = [
  "workspace.created",
  "api_key.created",
  "first_request.succeeded",
  "billing.checkout_started",
] as const;
