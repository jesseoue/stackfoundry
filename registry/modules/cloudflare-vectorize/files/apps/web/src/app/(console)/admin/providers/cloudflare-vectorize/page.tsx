import { CloudflareVectorizeChecklist } from "@/lib/stackfoundry/providers/cloudflare-vectorize";

export default function CloudflareVectorizePage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Cloudflare Vectorize</h1>
        <p className="text-muted-foreground">Vector search and RAG provider module.</p>
      </div>
      <div className="grid gap-3">
        {CloudflareVectorizeChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
