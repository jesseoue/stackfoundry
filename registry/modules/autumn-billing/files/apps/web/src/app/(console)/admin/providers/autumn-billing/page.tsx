const deployChecks = [
  "Create Autumn products, plans, and features before wiring production actions",
  "Set AUTUMN_SECRET_KEY in preview and production environments",
  "Validate checkout redirects and saved-payment flows against sandbox customers",
  "Keep plan ids and price decisions in server-owned configuration",
];

export default function AutumnBillingPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Autumn Billing</h1>
        <p className="text-muted-foreground">
          Optional Autumn adapter for plan attach, checkout redirects, usage billing, and plan changes.
        </p>
      </div>
      <div className="grid gap-3">
        {deployChecks.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
