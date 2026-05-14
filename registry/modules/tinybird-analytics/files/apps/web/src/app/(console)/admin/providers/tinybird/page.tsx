const checks = [
  "Create a Tinybird data source for analytics events.",
  "Use an ingest token scoped to that data source.",
  "Batch newline-delimited JSON events for high-volume paths.",
  "Keep event names and identifier fields stable.",
  "Exclude secrets, raw prompts, and private customer data.",
];

export default function TinybirdAnalyticsPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Tinybird Analytics</h1>
        <p className="text-muted-foreground">
          High-volume product, usage, and AI analytics ingestion through Tinybird Events API.
        </p>
      </div>
      <div className="grid gap-3">
        {checks.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
