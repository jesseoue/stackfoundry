"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useMemo, useState } from "react";

import { AIConversation, AIMessage, AIPromptInput, AIStatus } from "@/components/ai-elements";

export function ChatbotShell() {
  const [input, setInput] = useState("");
  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/ai/chat" }), []);
  const { messages, sendMessage, status } = useChat({ transport });
  const disabled = status === "submitted" || status === "streaming";

  function submit() {
    const text = input.trim();
    if (!text || disabled) return;
    sendMessage({ text });
    setInput("");
  }

  return (
    <AIConversation>
      {messages.map((message) => (
        <AIMessage key={message.id} message={message} />
      ))}
      <AIStatus status={status} />
      <AIPromptInput disabled={disabled} value={input} onSubmit={submit} onValueChange={setInput} />
    </AIConversation>
  );
}
