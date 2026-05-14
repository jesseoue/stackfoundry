"use client";

import { KnockFeedProvider, KnockProvider } from "@knocklabs/react";
import type { ReactNode } from "react";

type KnockInboxProviderProps = {
  userId: string;
  children: ReactNode;
};

export function KnockInboxProvider({ userId, children }: KnockInboxProviderProps) {
  const apiKey = process.env.NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY;
  const feedId = process.env.NEXT_PUBLIC_KNOCK_FEED_CHANNEL_ID;

  if (!apiKey || !feedId) {
    return children;
  }

  return (
    <KnockProvider apiKey={apiKey} user={{ id: userId }}>
      <KnockFeedProvider feedId={feedId}>{children}</KnockFeedProvider>
    </KnockProvider>
  );
}
