import { StackFoundrySecurityActivity } from "@/components/stackfoundry/security-activity";

const events = [
  {
    id: "event-1",
    title: "New API key created",
    description: "Scoped key for production integrations.",
    occurredAt: new Date("2026-08-19T15:30:00Z"),
    severity: "info",
    actor: "jesse@example.com",
  },
  {
    id: "event-2",
    title: "MFA enabled",
    occurredAt: new Date("2026-08-19T14:00:00Z"),
    severity: "info",
  },
  {
    id: "event-3",
    title: "Repeated failed sign-in attempts",
    description: "Challenge was required before the next attempt.",
    occurredAt: new Date("2026-08-18T22:12:00Z"),
    severity: "warning",
  },
];

export default function SecurityActivityDemo() {
  return <StackFoundrySecurityActivity events={events} />;
}
