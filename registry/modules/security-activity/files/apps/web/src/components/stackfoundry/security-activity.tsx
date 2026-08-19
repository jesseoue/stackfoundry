export type SecurityActivityEvent = {
  id: string;
  title: string;
  description?: string;
  occurredAt: string | Date;
  severity: "info" | "warning" | "critical";
  actor?: string;
};

const severityLabels = {
  info: "Information",
  warning: "Warning",
  critical: "Critical",
} as const;

function formatDateTime(value: string | Date) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function StackFoundrySecurityActivity({ events }: { events: SecurityActivityEvent[] }) {
  return (
    <section className="rounded-lg border p-5">
      <h2 className="font-semibold">Security activity</h2>

      {events.length === 0 ? (
        <p className="mt-3 text-sm text-muted-foreground">No recent security events.</p>
      ) : (
        <ol className="mt-4 space-y-4">
          {events.map((event) => (
            <li key={event.id} className="relative border-l pl-4">
              <span
                aria-hidden="true"
                className={`absolute -left-[5px] top-1.5 size-2.5 rounded-full ${
                  event.severity === "critical" ? "bg-destructive" : event.severity === "warning" ? "bg-warning" : "bg-primary"
                }`}
              />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-medium">{event.title}</h3>
                <span className={`text-xs ${event.severity === "critical" ? "text-destructive" : "text-muted-foreground"}`}>
                  {severityLabels[event.severity]}
                </span>
              </div>
              {event.description ? <p className="mt-1 text-sm text-muted-foreground">{event.description}</p> : null}
              <p className="mt-1 text-xs text-muted-foreground">
                {formatDateTime(event.occurredAt)}
                {event.actor ? ` • ${event.actor}` : ""}
              </p>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
