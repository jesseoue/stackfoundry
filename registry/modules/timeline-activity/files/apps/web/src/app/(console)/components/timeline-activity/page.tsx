import { StackFoundryTimelineActivity } from "@/components/stackfoundry/timeline-activity";

const events = [
  {
    id: "1",
    actor: "Ana Ortiz",
    action: "created an API key",
    timestamp: "2026-08-19T14:12:00.000Z",
    level: "info" as const,
    detail: "Key scoped to production read access.",
  },
  {
    id: "2",
    actor: "Billing system",
    action: "renewed the subscription",
    timestamp: "2026-08-19T12:00:00.000Z",
    level: "success" as const,
  },
  {
    id: "3",
    actor: "Ops automation",
    action: "rotated provider credentials",
    timestamp: "2026-08-18T22:30:00.000Z",
    level: "warning" as const,
    detail: "Rotation completed; no failed requests recorded.",
  },
];

export default function TimelineActivityDemo() {
  return <StackFoundryTimelineActivity title="Account activity" events={events} />;
}
