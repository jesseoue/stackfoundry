const rules = [
  { key: "api.public", limit: 120, window: "60 seconds" },
  { key: "auth.login", limit: 10, window: "5 minutes" },
];

export default function RateLimitsPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Rate Limits</h1>
        <p className="text-muted-foreground">Define and review request limits for product and API surfaces.</p>
      </div>
      <div className="grid gap-3">
        {rules.map((rule) => (
          <div key={rule.key} className="rounded-lg border p-4">
            <p className="font-medium">{rule.key}</p>
            <p className="text-sm text-muted-foreground">{rule.limit} requests per {rule.window}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
