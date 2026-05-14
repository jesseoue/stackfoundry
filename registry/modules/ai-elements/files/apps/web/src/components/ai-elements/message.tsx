import type { UIMessage } from "ai";

export function AIMessage({ message }: { message: UIMessage }) {
  return (
    <article className="rounded-md bg-muted p-3 text-sm">
      <div className="mb-1 font-medium capitalize">{message.role}</div>
      {message.parts.map((part, index) =>
        part.type === "text" ? <p key={index}>{part.text}</p> : null,
      )}
    </article>
  );
}
