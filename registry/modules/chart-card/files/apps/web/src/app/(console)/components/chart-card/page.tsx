import { StackFoundryChartCard } from "@/components/stackfoundry/chart-card";

const points = [
  { label: "Monday", value: 8200 },
  { label: "Tuesday", value: 11250 },
  { label: "Wednesday", value: 9840 },
  { label: "Thursday", value: 13480 },
  { label: "Friday", value: 15920 },
  { label: "Saturday", value: 11860 },
  { label: "Sunday", value: 12410 },
];

export default function ChartCardDemo() {
  return (
    <div className="grid gap-5">
      <StackFoundryChartCard
        title="API requests"
        description="Request volume across the last seven days"
        series={[{ id: "requests", label: "Requests", points }]}
        footer="Data refreshes hourly. Values are UTC."
      />
      <StackFoundryChartCard
        title="Active usage"
        description="Compact trend for compact dashboard headers"
        series={[{ id: "usage", label: "Active sessions", points: points.slice(2) }]}
        variant="sparkline"
      />
    </div>
  );
}
