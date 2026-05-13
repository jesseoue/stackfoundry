"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { ArrowUpIcon, SquareIcon } from "lucide-react";
import { useMemo, useState } from "react";

export function ChatBox() {
  const [input, setInput] = useState("");
  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/ai/chat" }), []);
  const { messages, sendMessage, status, stop } = useChat({ transport });
  const running = status === "submitted" || status === "streaming";

  function submit() {
    const text = input.trim();
    if (!text || running) return;
    sendMessage({ text });
    setInput("");
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg border p-4">
      <div className="flex flex-col gap-3">
        {messages.map((message) => (
          <div key={message.id} className="rounded-md bg-muted p-3 text-sm">
            <div className="mb-1 font-medium">{message.role}</div>
            {message.parts.map((part, index) =>
              part.type === "text" ? <p key={index}>{part.text}</p> : null,
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <textarea
          className="min-h-24 flex-1 rounded-md border bg-background p-3 text-sm"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask a question..."
        />
        {running ? (
          <button className="rounded-md border px-3" type="button" onClick={stop}>
            <SquareIcon />
          </button>
        ) : (
          <button className="rounded-md border px-3" type="button" onClick={submit}>
            <ArrowUpIcon />
          </button>
        )}
      </div>
    </div>
  );
}
