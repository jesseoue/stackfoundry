export type QuotaMeterItem = {
  id: string;
  label: string;
  used: number;
  limit: number;
  unit?: string;
};

function formatValue(value: number, unit?: string) {
  return unit ? `${value.toLocaleString()} ${unit}` : value.toLocaleString();
}

export function StackFoundryQuotaMeters({ items }: { items: QuotaMeterItem[] }) {
  return (
    <section className="rounded-lg border p-5">
      <h2 className="font-semibold">Usage</h2>
      <dl className="mt-4 space-y-4">
        {items.map((item) => {
          const percentage = item.limit > 0 ? Math.min(100, Math.round((item.used / item.limit) * 100)) : 0;
          const tone =
            percentage >= 90 ? "bg-destructive" : percentage >= 75 ? "bg-warning" : "bg-primary";

          return (
            <div key={item.id}>
              <div className="flex items-center justify-between text-sm">
                <dt>{item.label}</dt>
                <dd className="text-muted-foreground">
                  {formatValue(item.used, item.unit)} / {formatValue(item.limit, item.unit)}
                </dd>
              </div>
              <div
                className="mt-2 h-2 overflow-hidden rounded-full bg-muted"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={item.limit}
                aria-valuenow={item.used}
                aria-label={`${item.label} usage`}
              >
                <div className={`h-full ${tone}`} style={{ width: `${percentage}%` }} />
              </div>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
