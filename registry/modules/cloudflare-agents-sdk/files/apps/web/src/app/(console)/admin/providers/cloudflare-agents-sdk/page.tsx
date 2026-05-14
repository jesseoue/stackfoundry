import { CloudflareAgentsSdkChecklist } from "@/lib/stackfoundry/providers/cloudflare-agents-sdk";

export default function CloudflareAgentsSdkPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Cloudflare Agents SDK</h1>
        <p className="text-muted-foreground">Stateful AI agents on Workers, React hooks, WebSocket/RPC surface.</p>
      </div>
      <div className="grid gap-3">
        {CloudflareAgentsSdkChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
