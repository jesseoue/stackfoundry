export type ChartCardPoint = {
  label: string;
  value: number;
};

export type ChartCardSeries = {
  id: string;
  label: string;
  points: ChartCardPoint[];
};

export function getChartRange(series: ChartCardSeries[]) {
  const values = series.flatMap((entry) => entry.points.map((point) => point.value));
  const min = values.length > 0 ? Math.min(...values) : 0;
  const max = values.length > 0 ? Math.max(...values) : 0;
  const padding = (max - min) * 0.12;
  return {
    min: Number.isFinite(min) ? min - padding : 0,
    max: Number.isFinite(max) ? max + padding : 1,
  };
}

export function formatChartValue(value: number, options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
    notation: "compact",
    ...options,
  }).format(value);
}

export function toAccessibleSummary(series: ChartCardSeries[]) {
  return series
    .map((entry) => {
      const total = entry.points.reduce((sum, point) => sum + point.value, 0);
      const average = entry.points.length > 0 ? total / entry.points.length : 0;
      return `${entry.label}: ${formatChartValue(average)} average over ${entry.points.length} points`;
    })
    .join("; ");
}

export const chartCardChecks = [
  "Resolve chart data on the server before rendering",
  "Keep the SVG path deterministic for React server rendering",
  "Expose a text summary for assistive technology and no-visual contexts",
] as const;
