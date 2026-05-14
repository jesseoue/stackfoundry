import { ChatbotShell } from "@/components/ai/chatbot-shell";

export default function AIChatbotPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-6 p-6">
      <div>
        <p className="text-sm font-medium text-muted-foreground">AI</p>
        <h1 className="text-3xl font-semibold tracking-tight">Chatbot</h1>
        <p className="mt-2 text-muted-foreground">
          A Vercel AI SDK chat surface built from source-owned AI Elements primitives.
        </p>
      </div>
      <ChatbotShell />
    </main>
  );
}
