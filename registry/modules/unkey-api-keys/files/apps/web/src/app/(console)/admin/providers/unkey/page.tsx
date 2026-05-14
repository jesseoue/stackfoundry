const deployChecks = [
  "Create the provider project and add production env vars",
  "Run the included smoke route after deploy",
  "Document alerting, retries, and rollback behavior",
];

export default function UnkeyAPIKeysPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Unkey API Keys</h1>
        <p className="text-muted-foreground">Managed API key lifecycle and verification for developer platforms.</p>
      </div>
      <div className="grid gap-3">
        {deployChecks.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">{check}</div>
        ))}
      </div>
    </main>
  );
}
