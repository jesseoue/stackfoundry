import { StackFoundryQuotaMeters } from "@/components/stackfoundry/quota-meters";

const items = [
  { id: "requests", label: "API requests", used: 842_500, limit: 1_000_000, unit: "requests" },
  { id: "seats", label: "Team seats", used: 18, limit: 25 },
  { id: "storage", label: "File storage", used: 64, limit: 100, unit: "GB" },
];

export default function QuotaMetersDemo() {
  return <StackFoundryQuotaMeters items={items} />;
}
