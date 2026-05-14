const checklist = [
  "Create orders server-side before redirecting to checkout.",
  "Mark orders paid from verified provider events.",
  "Fulfill each paid order once.",
  "Link refunds and disputes back to the original order.",
];

export default function OneTimePurchasesPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">One-Time Purchases</h1>
        <p className="text-muted-foreground">One-off payments, add-ons, lifetime deals, and fulfillment tracking.</p>
      </div>
      <div className="grid gap-3">
        {checklist.map((item) => (
          <div key={item} className="rounded-lg border p-4 text-sm">{item}</div>
        ))}
      </div>
    </main>
  );
}
