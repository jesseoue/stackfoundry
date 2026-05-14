import { CloudflareTurnstileChecklist } from "@/lib/stackfoundry/providers/cloudflare-turnstile";

export default function CloudflareTurnstilePage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Cloudflare Turnstile</h1>
        <p className="text-muted-foreground">Bot protection for signup, contact, waitlist, and abuse-sensitive forms.</p>
      </div>
      <div className="grid gap-3">
        {CloudflareTurnstileChecklist.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">
            {check}
          </div>
        ))}
      </div>
    </main>
  );
}
