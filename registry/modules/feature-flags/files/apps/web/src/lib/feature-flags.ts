import "server-only";

export type FeatureFlag = {
  key: string;
  enabled: boolean;
  rules?: Array<{ organizationId?: string; percentage?: number }>;
};

export type FeatureFlagContext = {
  organizationId?: string;
  stableId?: string;
};

export function evaluateFeatureFlag(flag: FeatureFlag | undefined, context: FeatureFlagContext = {}) {
  if (!flag?.enabled) return false;
  if (!flag.rules?.length) return true;

  return flag.rules.some((rule) => {
    if (rule.organizationId) return rule.organizationId === context.organizationId;
    if (typeof rule.percentage === "number" && context.stableId) {
      return bucketStableId(context.stableId, flag.key) < rule.percentage;
    }
    return false;
  });
}

function bucketStableId(stableId: string, salt: string) {
  let hash = 0;
  for (const char of salt + ":" + stableId) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return hash % 100;
}
