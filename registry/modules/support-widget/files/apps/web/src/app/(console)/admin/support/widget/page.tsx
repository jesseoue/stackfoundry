const checklist = [
  "Confirm ownership boundaries",
  "Wire persistence and authorization",
  "Run smoke checks before production",
];

export default function SupportWidgetPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Support Widget</h1>
        <p className="text-muted-foreground">Embeddable support launcher and server-side submission route.</p>
      </div>
      <div className="grid gap-3">
        {checklist.map((item) => (
          <div key={item} className="rounded-lg border p-4 text-sm">{item}</div>
        ))}
      </div>
    </main>
  );
}
