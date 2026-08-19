import type { ColumnDef, SortingState } from "@tanstack/react-table";

export type DataTableConfig<T> = {
  key: string;
  columns: Array<ColumnDef<T>>;
  initialSorting?: SortingState;
  enabled?: boolean;
  metadata?: Record<string, unknown>;
};

export function createDataTableConfig<T>(config: DataTableConfig<T>) {
  return {
    key: config.key,
    columns: config.columns,
    initialSorting: config.initialSorting ?? [],
    enabled: config.enabled ?? true,
    metadata: config.metadata ?? {},
  };
}

export const dataTableChecks = [
  "Resolve rows with tenant-scoped server queries",
  "Authorize row-level actions separately from table visibility",
  "Record audit events for sensitive row operations",
] as const;
