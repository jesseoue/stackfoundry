export type TimelineActivityLevel = "info" | "success" | "warning" | "danger";

export type TimelineActivityEvent = {
  id: string;
  actor: string;
  action: string;
  timestamp: string;
  level?: TimelineActivityLevel;
  detail?: string;
};

export function sortTimelineEvents(events: TimelineActivityEvent[]) {
  return [...events].sort((left, right) => right.timestamp.localeCompare(left.timestamp));
}

export function formatTimelineTimestamp(timestamp: string) {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return timestamp;
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export const timelineActivityChecks = [
  "Resolve events from a tenant-scoped server query",
  "Authorize the actor and object before rendering sensitive context",
  "Avoid exposing raw payloads, tokens, or request bodies in activity detail",
] as const;
