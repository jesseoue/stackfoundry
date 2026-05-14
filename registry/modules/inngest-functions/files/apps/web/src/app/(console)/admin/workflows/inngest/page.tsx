const checks = [
  "Install provider package and configure env",
  "Run the local example path",
  "Add auth, retries, and audit events before production",
];

export default function InngestFunctionsPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Inngest Functions</h1>
        <p className="text-muted-foreground">Durable event-driven functions with steps, retries, and scheduled work.</p>
      </div>
      <div className="grid gap-3">
        {checks.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">{check}</div>
        ))}
      </div>
    </main>
  );
}
