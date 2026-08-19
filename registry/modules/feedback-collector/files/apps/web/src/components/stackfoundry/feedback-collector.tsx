"use client";

import { useState } from "react";

const satisfactionLabels = ["Very frustrated", "Frustrated", "Neutral", "Satisfied", "Very satisfied"] as const;
const satisfactionValues = [1, 2, 3, 4, 5] as const;

export function StackFoundryFeedbackCollector({
  onSubmit,
}: {
  onSubmit: (feedback: { score: (typeof satisfactionValues)[number]; message: string }) => Promise<void> | void;
}) {
  const [score, setScore] = useState<(typeof satisfactionValues)[number] | undefined>();
  const [message, setMessage] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "submitted" | "error">("idle");

  async function submit() {
    if (!score || state === "submitting") return;

    setState("submitting");
    try {
      await onSubmit({ score, message: message.trim() });
      setState("submitted");
    } catch {
      setState("error");
    }
  }

  if (state === "submitted") {
    return (
      <section className="rounded-lg border p-5">
        <h2 className="font-semibold">Thank you</h2>
        <p className="mt-2 text-sm text-muted-foreground">Your feedback was recorded for the product team.</p>
      </section>
    );
  }

  return (
    <section className="rounded-lg border p-5">
      <h2 className="font-semibold">How is StackFoundry working for you?</h2>

      <fieldset className="mt-4">
        <legend className="text-sm text-muted-foreground">Select a satisfaction score</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {satisfactionValues.map((value, index) => (
            <button
              key={value}
              type="button"
              aria-pressed={score === value}
              className={`size-10 rounded-md border text-sm ${score === value ? "border-primary bg-primary/10" : ""}`}
              onClick={() => setScore(value)}
              title={satisfactionLabels[index]}
            >
              {value}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="mt-4 block text-sm font-medium" htmlFor="feedback-message">
        What would make it better?
      </label>
      <textarea
        id="feedback-message"
        className="mt-2 min-h-24 w-full rounded-md border p-3 text-sm"
        maxLength={1000}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      {state === "error" ? <p className="mt-2 text-sm text-destructive">Unable to save feedback. Please try again.</p> : null}

      <button
        type="button"
        className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground disabled:opacity-50"
        disabled={!score || state === "submitting"}
        onClick={submit}
      >
        {state === "submitting" ? "Sending…" : "Send feedback"}
      </button>
    </section>
  );
}
