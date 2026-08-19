import { formatTimelineTimestamp, sortTimelineEvents, type TimelineActivityEvent } from "@/lib/stackfoundry/timeline-activity";

const levelStyles: Record<NonNullable<TimelineActivityEvent["level"]>, string> = {
  info: "bg-primary",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-red-500",
};

export function StackFoundryTimelineActivity({
  title,
  events,
}: {
  title: string;
  events: TimelineActivityEvent[];
}) {
  const sortedEvents = sortTimelineEvents(events);

  return (
    <section className="rounded-xl border bg-card p-5 shadow-xs">
      <header className="border-b pb-4">
        <h2 className="text-base font-semibold tracking-tight">{title}</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          {sortedEvents.length} recent {sortedEvents.length === 1 ? "event" : "events"}
        </p>
      </header>

      {sortedEvents.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted-foreground">No activity yet.</p>
      ) : (
        <ol className="relative mt-5 space-y-6 before:absolute before:top-1 before:bottom-1 before:left-2 before:w-px before:bg-border">
          {sortedEvents.map((event) => (
            <li className="relative pl-8" key={event.id}>
              <span
                aria-hidden="true"
                className={`absolute top-1.5 left-0 size-4 rounded-full border-2 border-card ${levelStyles[event.level ?? "info"]}`}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-sm font-medium">
                  <span className="text-foreground">{event.actor}</span>{" "}
                  <span className="text-muted-foreground">{event.action}</span>
                </p>
                <time dateTime={event.timestamp} className="text-xs text-muted-foreground tabular-nums">
                  {formatTimelineTimestamp(event.timestamp)}
                </time>
              </div>
              {event.detail ? <p className="mt-2 text-sm text-muted-foreground">{event.detail}</p> : null}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
