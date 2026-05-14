import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";

import { WelcomeEmail } from "@/emails/welcome-email";
import { resend } from "@/lib/resend/client";

export async function POST(request: Request) {
  const { email, name = "there" } = await request.json();
  if (!email) return NextResponse.json({ error: "email is required" }, { status: 400 });

  const result = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "StackFoundry <onboarding@resend.dev>",
    to: [email],
    subject: "Welcome",
    react: WelcomeEmail({ name, actionUrl: "/" }),
    headers: { "X-Entity-Ref-ID": randomUUID() },
  });

  return NextResponse.json(result);
}
