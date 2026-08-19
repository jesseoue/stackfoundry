export type IntegrationCardProps = {
  id: string;
  name: string;
  description: string;
  category: string;
  status: "connected" | "available" | "error";
  lastSyncedAt?: string | Date;
  onConnect?: () => void;
  onManage?: () => void;
};

const statusLabels = {
  connected: "Connected",
  available: "Available",
  error: "Needs attention",
} as const;

function formatDateTime(value: string | Date) {
  return new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

export function StackFoundryIntegrationCard({
  name,
  description,
  category,
  status,
  lastSyncedAt,
  onConnect,
  onManage,
}: Omit<IntegrationCardProps, "id">) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-lg border p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">{category}</p>
        </div>
        <span
          className={`rounded-full px-2 py-0.5 text-xs ${
            status === "connected" ? "bg-primary/10 text-primary" : status === "error" ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"
          }`}
        >
          {statusLabels[status]}
        </span>
      </div>

      <p className="text-sm text-muted-foreground">{description}</p>

      <div className="mt-auto space-y-3">
        {lastSyncedAt ? (
          <p className="text-xs text-muted-foreground">Last synced {formatDateTime(lastSyncedAt)}</p>
        ) : null}
        {status === "available" && onConnect ? (
          <button type="button" className="w-full rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground" onClick={onConnect}>
            Connect
          </button>
        ) : null}
        {status !== "available" && onManage ? (
          <button type="button" className="w-full rounded-md border px-3 py-2 text-sm" onClick={onManage}>
            Manage
          </button>
        ) : null}
      </div>
    </article>
  );
}
