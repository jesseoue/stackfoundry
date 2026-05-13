const items = [
  { title: "Configure", description: "Set ownership, defaults, and permissions." },
  { title: "Operate", description: "Review status, recent activity, and unresolved work." },
  { title: "Verify", description: "Run the checklist before enabling this module in production." },
];

export default function MarketingPagesPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Marketing Pages</h1>
        <p className="text-muted-foreground">Landing page sections, social proof slots, and CTA patterns.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {items.map((item) => (
          <section key={item.title} className="rounded-lg border p-4">
            <h2 className="font-medium">{item.title}</h2>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
