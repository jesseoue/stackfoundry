"use client";

import type { FormEvent } from "react";

export function AIPromptInput({
  disabled,
  onSubmit,
  onValueChange,
  value,
}: {
  disabled?: boolean;
  onSubmit: () => void;
  onValueChange: (value: string) => void;
  value: string;
}) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form className="flex gap-2" onSubmit={submit}>
      <textarea
        className="min-h-24 flex-1 rounded-md border bg-background p-3 text-sm"
        disabled={disabled}
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
        placeholder="Ask a question..."
      />
      <button className="rounded-md border px-3 text-sm" disabled={disabled} type="submit">
        Send
      </button>
    </form>
  );
}
