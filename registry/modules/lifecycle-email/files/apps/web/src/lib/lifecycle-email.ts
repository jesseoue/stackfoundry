export type LifecycleEmailItem = {
  key: string;
  title: string;
  status?: "active" | "draft" | "archived";
  metadata?: Record<string, unknown>;
};

export function createLifecycleEmailItem(item: LifecycleEmailItem) {
  return {
    key: item.key,
    title: item.title,
    status: item.status ?? "active",
    metadata: item.metadata ?? {},
  };
}

export const lifecycleEmailChecklist = [
  "Confirm ownership boundaries",
  "Wire persistence or provider adapter",
  "Add audit events for sensitive changes",
] as const;
