import "server-only";

import { Autumn } from "autumn-js";

type CheckAutumnFeatureInput = {
  customerId: string;
  featureId: string;
  requiredBalance?: number;
  sendEvent?: boolean;
};

type TrackAutumnUsageInput = {
  customerId: string;
  featureId: string;
  value?: number;
  idempotencyKey?: string;
  properties?: Record<string, unknown>;
};

function requireEnv(key: string) {
  const value = process.env[key];
  if (!value) throw new Error(`${key} is required.`);
  return value;
}

function getAutumn() {
  return new Autumn({ secretKey: requireEnv("AUTUMN_SECRET_KEY") });
}

export async function checkAutumnFeature(input: CheckAutumnFeatureInput) {
  return getAutumn().check({
    customerId: input.customerId,
    featureId: input.featureId,
    requiredBalance: input.requiredBalance,
    sendEvent: input.sendEvent,
  });
}

export async function trackAutumnUsage(input: TrackAutumnUsageInput) {
  return getAutumn().track({
    customerId: input.customerId,
    featureId: input.featureId,
    value: input.value ?? 1,
    idempotencyKey: input.idempotencyKey,
    properties: input.properties,
  });
}
