import { roadmapStatusLabels, type RoadmapItem } from "@/lib/stackfoundry/public-roadmap";

const items: RoadmapItem[] = [
  {
    title: "Team controls",
    description: "Richer member roles, invitations, and audit visibility.",
    status: "in-progress",
  },
  {
    title: "Usage insights",
    description: "Better visibility into usage, limits, and billing impact.",
    status: "planned",
  },
  {
    title: "Public changelog",
    description: "Customer-facing release notes for shipped improvements.",
    status: "shipped",
  },
];

export default function RoadmapPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight">Roadmap</h1>
        <p className="mt-3 text-muted-foreground">What is planned, in progress, and recently shipped.</p>
      </div>
      <div className="grid gap-4">
        {items.map((item) => (
          <section key={item.title} className="rounded-lg border p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {roadmapStatusLabels[item.status]}
            </p>
            <h2 className="mt-2 font-medium">{item.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
