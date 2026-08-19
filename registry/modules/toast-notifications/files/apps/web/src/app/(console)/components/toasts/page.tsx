"use client";

import { StackFoundryToastProvider, notifySuccess } from "@/components/stackfoundry/toast-notifications";

export default function ToastNotificationsDemo() {
  return (
    <StackFoundryToastProvider>
      <section className="rounded-lg border p-6">
        <h2 className="font-semibold">Action feedback</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Toasts appear after the provider is mounted in your app layout.
        </p>
        <button
          type="button"
          className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
          onClick={() => notifySuccess({ title: "Saved", description: "Your changes are live." })}
        >
          Show success toast
        </button>
      </section>
    </StackFoundryToastProvider>
  );
}
