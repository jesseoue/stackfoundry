import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";

import { WelcomeEmail } from "@/emails/welcome-email";
import { resend } from "@/lib/resend/client";

export async function POST(request: Request) {
  let body: { email?: string; name?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body.email) return NextResponse.json({ error: "email is required" }, { status: 400 });

  const result = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "StackFoundry <onboarding@resend.dev>",
    to: [body.email],
    subject: "Welcome",
    react: WelcomeEmail({ name: body.name ?? "there", actionUrl: "/" }),
    headers: { "X-Entity-Ref-ID": randomUUID() },
  });

  return NextResponse.json(result);
}
