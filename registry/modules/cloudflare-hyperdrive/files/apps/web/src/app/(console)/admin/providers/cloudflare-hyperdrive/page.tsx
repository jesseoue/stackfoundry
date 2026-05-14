import { CloudflareHyperdriveChecklist } from "@/lib/stackfoundry/providers/cloudflare-hyperdrive";

export default function CloudflareHyperdrivePage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Cloudflare Hyperdrive</h1>
        <p className="text-muted-foreground">Postgres/MySQL connection acceleration for Workers.</p>
      </div>
      <div className="grid gap-3">
        {CloudflareHyperdriveChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
