import { CloudflareQueuesChecklist } from "@/lib/stackfoundry/providers/cloudflare-queues";

export default function CloudflareQueuesPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Cloudflare Queues</h1>
        <p className="text-muted-foreground">Async jobs, producer/consumer Workers, retries, and DLQ guidance.</p>
      </div>
      <div className="grid gap-3">
        {CloudflareQueuesChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
