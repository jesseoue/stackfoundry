export type OneTimePurchase = {
  provider: string;
  providerOrderId: string;
  productKey: string;
  amount: number;
  currency: string;
  status?: "pending" | "paid" | "failed" | "refunded" | "disputed";
  fulfillmentStatus?: "pending" | "fulfilled" | "failed";
  metadata?: Record<string, unknown>;
};

export function createOneTimePurchase(purchase: OneTimePurchase) {
  if (!Number.isInteger(purchase.amount) || purchase.amount < 0) {
    throw new Error("Purchase amount must be a non-negative integer in the smallest currency unit.");
  }

  return {
    ...purchase,
    status: purchase.status ?? "pending",
    fulfillmentStatus: purchase.fulfillmentStatus ?? "pending",
    metadata: purchase.metadata ?? {},
  };
}

export function canFulfillPurchase(purchase: OneTimePurchase) {
  return purchase.status === "paid" && (purchase.fulfillmentStatus ?? "pending") === "pending";
}
