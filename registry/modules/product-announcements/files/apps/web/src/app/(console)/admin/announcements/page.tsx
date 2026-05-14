const checklist = [
  "Choose audience and channel.",
  "Preview in-app, banner, and email variants.",
  "Respect notification preferences.",
  "Coordinate with changelog and roadmap updates.",
];

export default function ProductAnnouncementsPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Product Announcements</h1>
        <p className="text-muted-foreground">Launch, release, and maintenance notices across product channels.</p>
      </div>
      <div className="grid gap-3">
        {checklist.map((item) => (
          <div key={item} className="rounded-lg border p-4 text-sm">
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}
