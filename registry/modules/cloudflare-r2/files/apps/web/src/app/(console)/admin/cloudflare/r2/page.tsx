const checks = [
  "Install vendor package and configure env",
  "Run the local example path",
  "Add auth, retries, and audit events before production",
];

export default function CloudflareR2Page() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Cloudflare R2</h1>
        <p className="text-muted-foreground">Object storage adapter for files, exports, and generated assets.</p>
      </div>
      <div className="grid gap-3">
        {checks.map((check) => (
          <div key={check} className="rounded-lg border p-4 text-sm">{check}</div>
        ))}
      </div>
    </main>
  );
}
