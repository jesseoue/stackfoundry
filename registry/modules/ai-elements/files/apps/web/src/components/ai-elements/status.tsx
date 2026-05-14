type AIChatStatus = "submitted" | "streaming" | "ready" | "error";

export function AIStatus({ status }: { status: AIChatStatus }) {
  if (status === "ready") return null;

  return (
    <p className="text-sm text-muted-foreground" role="status">
      {status === "submitted" ? "Thinking..." : "Streaming response..."}
    </p>
  );
}
