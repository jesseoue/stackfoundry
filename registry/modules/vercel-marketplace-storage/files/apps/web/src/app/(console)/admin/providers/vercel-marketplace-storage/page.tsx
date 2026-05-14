import { VercelMarketplaceStorageChecklist } from "@/lib/stackfoundry/providers/vercel-marketplace-storage";

export default function VercelMarketplaceStoragePage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Vercel Marketplace Storage</h1>
        <p className="text-muted-foreground">Guided setup for Neon, Supabase, Upstash, AWS, and marketplace integrations.</p>
      </div>
      <div className="grid gap-3">
        {VercelMarketplaceStorageChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
