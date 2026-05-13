export type AdminConsoleItem = {
  key: string;
  title: string;
  status?: "active" | "draft" | "archived";
  metadata?: Record<string, unknown>;
};

export function createAdminConsoleItem(item: AdminConsoleItem) {
  return {
    key: item.key,
    title: item.title,
    status: item.status ?? "active",
    metadata: item.metadata ?? {},
  };
}

export const adminConsoleChecklist = [
  "Confirm ownership boundaries",
  "Wire persistence or provider adapter",
  "Add audit events for sensitive changes",
] as const;
