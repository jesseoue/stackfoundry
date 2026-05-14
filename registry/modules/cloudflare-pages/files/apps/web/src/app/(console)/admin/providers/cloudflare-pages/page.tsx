import { CloudflarePagesChecklist } from "@/lib/stackfoundry/providers/cloudflare-pages";

export default function CloudflarePagesPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Cloudflare Pages</h1>
        <p className="text-muted-foreground">Alternate deploy path for static and edge-friendly apps.</p>
      </div>
      <div className="grid gap-3">
        {CloudflarePagesChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
