"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type Toast = { id: string; title: string; description?: string };
type ToastContextValue = { toasts: Toast[]; notify: (toast: Omit<Toast, "id">) => void; dismiss: (id: string) => void };

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function StackFoundryToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const value = useMemo(() => ({
    toasts,
    notify: (toast: Omit<Toast, "id">) => setToasts((items) => [...items, { ...toast, id: crypto.randomUUID() }]),
    dismiss: (id: string) => setToasts((items) => items.filter((toast) => toast.id !== id)),
  }), [toasts]);

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export function useStackFoundryToasts() {
  const value = useContext(ToastContext);
  if (!value) throw new Error("useStackFoundryToasts must be used within StackFoundryToastProvider");
  return value;
}
