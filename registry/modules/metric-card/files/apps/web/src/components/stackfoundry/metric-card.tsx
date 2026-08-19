import type { MetricCardMetric } from "@/lib/stackfoundry/metric-card";

const trendLabels = {
  up: "increased",
  down: "decreased",
  flat: "no change",
} as const;

export function StackFoundryMetricCard({ metric }: { metric: MetricCardMetric }) {
  const trend = metric.trend ?? "flat";
  const trendClass =
    trend === "up"
      ? "text-emerald-600 dark:text-emerald-400"
      : trend === "down"
        ? "text-red-600 dark:text-red-400"
        : "text-muted-foreground";

  return (
    <article className="group relative overflow-hidden rounded-xl border bg-card p-5 shadow-xs transition-colors hover:border-border-strong">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {metric.label}
          </p>
          <p className="mt-3 text-3xl font-semibold tracking-tight tabular-nums">{metric.value}</p>
        </div>
        {metric.delta ? (
          <p className={`text-sm font-medium tabular-nums ${trendClass}`}>
            <span aria-hidden="true">
              {trend === "up" ? "▲" : trend === "down" ? "▼" : "•"}
            </span>{" "}
            {metric.delta}
          </p>
        ) : null}
      </div>

      {(metric.comparison || metric.period) && (
        <p className="mt-4 text-xs text-muted-foreground">
          {metric.comparison}
          {metric.comparison && metric.period ? " · " : ""}
          {metric.period}
        </p>
      )}

      <span className="sr-only">
        {metric.label} {trendLabels[trend]} {metric.delta ? `by ${metric.delta}` : ""}
      </span>
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-border to-transparent opacity-70" />
    </article>
  );
}
