export type CreditLedgerEntry = {
  direction: "grant" | "consume" | "refund" | "expire";
  amount: number;
  reason: string;
  idempotencyKey?: string;
  metadata?: Record<string, unknown>;
};

export function createCreditLedgerEntry(entry: CreditLedgerEntry) {
  if (!Number.isInteger(entry.amount) || entry.amount <= 0) {
    throw new Error("Credit ledger amount must be a positive integer.");
  }

  return {
    direction: entry.direction,
    amount: entry.amount,
    reason: entry.reason,
    idempotencyKey: entry.idempotencyKey,
    metadata: entry.metadata ?? {},
  };
}

export function calculateCreditBalance(entries: CreditLedgerEntry[]) {
  return entries.reduce((balance, entry) => {
    if (entry.direction === "grant" || entry.direction === "refund") return balance + entry.amount;
    return balance - entry.amount;
  }, 0);
}

export function assertSufficientCredits(balance: number, amount: number) {
  if (balance < amount) {
    throw new Error("Insufficient credits.");
  }
}
