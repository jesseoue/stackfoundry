import { CloudflareObservabilityChecklist } from "@/lib/stackfoundry/providers/cloudflare-observability";

export default function CloudflareObservabilityPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Cloudflare Observability</h1>
        <p className="text-muted-foreground">Workers logs, traces, analytics, and tail workers.</p>
      </div>
      <div className="grid gap-3">
        {CloudflareObservabilityChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
