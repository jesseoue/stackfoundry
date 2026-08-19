import { StackFoundryDataTable } from "@/components/stackfoundry/data-table";

const rows = [
  { id: "1", name: "Acme", plan: "Pro", requests: "842,500" },
  { id: "2", name: "Globex", plan: "Team", requests: "128,300" },
];

const columns = [
  { accessorKey: "name", header: "Workspace" },
  { accessorKey: "plan", header: "Plan" },
  { accessorKey: "requests", header: "API requests" },
];

export default function DataTableDemo() {
  return <StackFoundryDataTable rows={rows} columns={columns} />;
}
