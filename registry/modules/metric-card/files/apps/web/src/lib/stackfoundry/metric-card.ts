export type MetricTrend = "up" | "down" | "flat";

export type MetricCardMetric = {
  label: string;
  value: string;
  delta?: string;
  trend?: MetricTrend;
  period?: string;
  comparison?: string;
};

export function formatMetricDelta(delta: number, precision = 1) {
  const formatted = Math.abs(delta).toFixed(precision);
  if (delta > 0) return `+${formatted}%`;
  if (delta < 0) return `-${formatted}%`;
  return `${formatted}%`;
}

export const metricCardChecks = [
  "Resolve values on the server before rendering the console page",
  "Define the metric time window and comparison baseline explicitly",
  "Use neutral styling for metrics where higher is not always better",
] as const;
