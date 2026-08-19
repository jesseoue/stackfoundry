import { StackFoundryMetricCard } from "@/components/stackfoundry/metric-card";

const metrics = [
  {
    label: "Monthly recurring revenue",
    value: "$84,250",
    delta: "+12.4%",
    trend: "up" as const,
    period: "Last 30 days",
    comparison: "vs. previous period",
  },
  {
    label: "Active workspaces",
    value: "1,204",
    delta: "-2.1%",
    trend: "down" as const,
    period: "Last 30 days",
    comparison: "vs. previous period",
  },
  {
    label: "API latency",
    value: "118 ms",
    delta: "+1.2%",
    trend: "flat" as const,
    period: "p95 · last hour",
  },
];

export default function MetricCardDemo() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {metrics.map((metric) => (
        <StackFoundryMetricCard key={metric.label} metric={metric} />
      ))}
    </section>
  );
}
