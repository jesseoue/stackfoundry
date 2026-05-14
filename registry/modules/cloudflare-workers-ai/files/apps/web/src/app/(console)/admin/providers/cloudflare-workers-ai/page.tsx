import { CloudflareWorkersAiChecklist } from "@/lib/stackfoundry/providers/cloudflare-workers-ai";

export default function CloudflareWorkersAiPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Cloudflare Workers AI</h1>
        <p className="text-muted-foreground">Workers AI inference, embeddings, and image generation examples.</p>
      </div>
      <div className="grid gap-3">
        {CloudflareWorkersAiChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
