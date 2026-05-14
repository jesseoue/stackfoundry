import type { ReactNode } from "react";

export function AIConversation({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-3 rounded-lg border p-4">{children}</div>;
}
