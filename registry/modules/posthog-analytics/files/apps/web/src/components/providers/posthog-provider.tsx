"use client";

import { PostHogPageView, PostHogProvider as Provider } from "@posthog/next";
import posthog from "posthog-js";

if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://app.posthog.com",
    capture_pageview: false,
  });
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider client={posthog}>
      <PostHogPageView />
      {children}
    </Provider>
  );
}
