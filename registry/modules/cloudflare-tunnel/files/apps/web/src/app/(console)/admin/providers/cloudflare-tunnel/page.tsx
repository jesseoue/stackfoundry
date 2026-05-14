import { CloudflareTunnelChecklist } from "@/lib/stackfoundry/providers/cloudflare-tunnel";

export default function CloudflareTunnelPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Cloudflare Tunnel</h1>
        <p className="text-muted-foreground">Secure tunnel module for exposing local/internal services.</p>
      </div>
      <div className="grid gap-3">
        {CloudflareTunnelChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
