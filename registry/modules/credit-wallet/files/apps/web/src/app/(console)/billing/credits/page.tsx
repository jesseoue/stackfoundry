const checklist = [
  "Grant credits through checkout, admin action, or promotion.",
  "Consume credits with an idempotency key for every billable action.",
  "Block usage before a balance can become negative.",
  "Show low-balance and upgrade prompts before users get stuck.",
];

export default function CreditWalletPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Credit Wallet</h1>
        <p className="text-muted-foreground">Prepaid credit ledger for AI, usage, and credit-pack billing.</p>
      </div>
      <div className="grid gap-3">
        {checklist.map((item) => (
          <div key={item} className="rounded-lg border p-4 text-sm">{item}</div>
        ))}
      </div>
    </main>
  );
}
const checklist = [
  "Grant credits through checkout, admin action, or promotion.",
  "Consume credits with an idempotency key for every billable action.",
  "Block usage before a balance can become negative.",
  "Show low-balance and upgrade prompts before users get stuck.",
];

export default function CreditWalletPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Credit Wallet</h1>
        <p className="text-muted-foreground">Prepaid credit ledger for AI, usage, and credit-pack billing.</p>
      </div>
      <div className="grid gap-3">
        {checklist.map((item) => (
          <div key={item} className="rounded-lg border p-4 text-sm">
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}
