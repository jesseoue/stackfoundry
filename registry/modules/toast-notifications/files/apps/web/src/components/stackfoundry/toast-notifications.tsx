"use client";

import { Toaster, toast } from "sonner";

type ToastInput = {
  title: string;
  description?: string;
};

export function StackFoundryToastProvider({
  position = "bottom-right",
}: {
  position?: "bottom-left" | "bottom-center" | "bottom-right";
}) {
  return <Toaster position={position} />;
}

export function notifySuccess({ title, description }: ToastInput) {
  toast.success(title, { description });
}

export function notifyError({ title, description }: ToastInput) {
  toast.error(title, { description });
}

export function notifyInfo({ title, description }: ToastInput) {
  toast(title, { description });
}
