import "server-only";

import { Autumn } from "autumn-js";

type AttachAutumnPlanInput = {
  customerId: string;
  planId: string;
  featureQuantities?: Record<string, number>;
  checkoutSessionParams?: Record<string, unknown>;
};

function requireEnv(key: string) {
  const value = process.env[key];
  if (!value) throw new Error(`${key} is required.`);
  return value;
}

function getAutumn() {
  return new Autumn({ secretKey: requireEnv("AUTUMN_SECRET_KEY") });
}

export async function attachAutumnPlan(input: AttachAutumnPlanInput) {
  return getAutumn().billing.attach({
    customerId: input.customerId,
    planId: input.planId,
    featureQuantities: input.featureQuantities,
    checkoutSessionParams: input.checkoutSessionParams,
  });
}
