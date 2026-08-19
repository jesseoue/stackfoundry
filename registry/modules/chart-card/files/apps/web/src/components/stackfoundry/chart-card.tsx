import { getChartRange, toAccessibleSummary, type ChartCardSeries } from "@/lib/stackfoundry/chart-card";

type ChartCardProps = {
  title: string;
  description?: string;
  series: ChartCardSeries[];
  variant?: "sparkline" | "area";
  footer?: React.ReactNode;
};

function createPath(values: number[], min: number, max: number) {
  const range = max - min || 1;
  return values
    .map((value, index) => {
      const x = (index / Math.max(values.length - 1, 1)) * 100;
      const y = 100 - ((value - min) / range) * 100;
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
}

export function StackFoundryChartCard({
  title,
  description,
  series,
  variant = "area",
  footer,
}: ChartCardProps) {
  const { min, max } = getChartRange(series);
  const primary = series[0];
  const values = primary?.points.map((point) => point.value) ?? [];
  const linePath = values.length > 1 ? createPath(values, min, max) : undefined;
  const areaPath =
    linePath && variant === "area" ? `${linePath} L100,100 L0,100 Z` : undefined;

  return (
    <section className="overflow-hidden rounded-xl border bg-card shadow-xs">
      <header className="flex flex-col gap-1 border-b p-5">
        <h2 className="text-base font-semibold tracking-tight">{title}</h2>
        {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      </header>

      <div className="p-5">
        <figure className="m-0">
          <svg
            className={`h-56 w-full ${variant === "sparkline" ? "opacity-90" : ""}`}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            role="img"
            aria-label={`${title}. ${toAccessibleSummary(series)}`}
          >
            <defs>
              <linearGradient id="stackfoundry-chart-fill" x1="0" x2="0" y1="0" y2="1">
                <stop className="stop-color-primary" offset="0" stopOpacity="0.24" />
                <stop className="stop-color-primary" offset="1" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            {areaPath ? <path d={areaPath} fill="url(#stackfoundry-chart-fill)" /> : null}
            {linePath ? (
              <path
                d={linePath}
                className="stroke-primary"
                fill="none"
                strokeWidth={variant === "sparkline" ? 2 : 1.5}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            ) : null}
          </svg>
          <figcaption className="sr-only">{toAccessibleSummary(series)}</figcaption>
        </figure>

        {series.length > 1 ? (
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {series.map((entry) => (
              <li className="flex items-center gap-2 text-xs text-muted-foreground" key={entry.id}>
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary" />
                {entry.label}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {footer ? <footer className="border-t p-5 text-xs text-muted-foreground">{footer}</footer> : null}
    </section>
  );
}
