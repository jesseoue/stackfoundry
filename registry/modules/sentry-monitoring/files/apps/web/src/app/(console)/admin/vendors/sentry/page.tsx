const deployChecks = [
  "Create the vendor project and add production env vars",
  "Run the included smoke route after deploy",
  "Document alerting, retries, and rollback behavior",
];

export default function SentryMonitoringPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Sentry Monitoring</h1>
        <p className="text-muted-foreground">Error monitoring and release-aware diagnostics for Next.js deployments.</p>
      </div>
      <div className="grid gap-3">
        {deployChecks.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">{check}</div>
        ))}
      </div>
    </main>
  );
}
