export type CouponsPromotionsConfig = {
  key: string;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createCouponsPromotionsConfig(config: CouponsPromotionsConfig) {
  return {
    key: config.key,
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const couponsPromotionsChecks = [
  "Validate tenant and permission boundaries",
  "Record audit events for sensitive changes",
  "Document deployment and rollback behavior",
] as const;
