import "server-only";

import { Autumn } from "autumn-js";

type AttachAutumnPlanInput = {
  customerId: string;
  planId: string;
  featureQuantities?: Record<string, number>;
  checkoutSessionParams?: Record<string, unknown>;
};

function getAutumn() {
  return new Autumn({ secretKey: process.env.AUTUMN_SECRET_KEY! });
}

export async function attachAutumnPlan(input: AttachAutumnPlanInput) {
  return getAutumn().billing.attach({
    customerId: input.customerId,
    planId: input.planId,
    featureQuantities: input.featureQuantities,
    checkoutSessionParams: input.checkoutSessionParams,
  });
}
