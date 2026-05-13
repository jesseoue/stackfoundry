"use client";

import { usePostHog } from "@posthog/next";

export function TrackButton() {
  const posthog = usePostHog();
  return <button onClick={() => posthog.capture("example_clicked")}>Track event</button>;
}
