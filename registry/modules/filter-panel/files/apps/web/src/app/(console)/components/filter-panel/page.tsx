import { StackFoundryFilterPanel } from "@/components/stackfoundry/filter-panel";

const fields = [
  { id: "query", label: "Search", type: "search" as const },
  {
    id: "status",
    label: "Status",
    type: "select" as const,
    options: [
      { value: "active", label: "Active" },
      { value: "paused", label: "Paused" },
      { value: "failed", label: "Failed" },
    ],
  },
  {
    id: "environment",
    label: "Environment",
    type: "select" as const,
    options: [
      { value: "production", label: "Production" },
      { value: "preview", label: "Preview" },
    ],
  },
];

export default function FilterPanelDemo() {
  return <StackFoundryFilterPanel fields={fields} onApply={() => undefined} />;
}
