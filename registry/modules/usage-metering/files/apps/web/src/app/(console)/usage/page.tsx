const metrics = [
  { key: "api_requests", quantity: "842,500", window: "Current billing period" },
  { key: "api_errors", quantity: "1,204", window: "Current billing period" },
  { key: "webhook_deliveries", quantity: "38,910", window: "Current billing period" },
];

export default function UsageMeteringPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Usage</h1>
        <p className="text-muted-foreground">Usage event capture, aggregation helpers, and billing-ready usage UI.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {metrics.map((metric) => (
          <section key={metric.key} className="rounded-lg border p-4">
            <h2 className="font-mono text-xs text-muted-foreground">{metric.key}</h2>
            <p className="mt-2 text-2xl font-semibold">{metric.quantity}</p>
            <p className="text-sm text-muted-foreground">{metric.window}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
