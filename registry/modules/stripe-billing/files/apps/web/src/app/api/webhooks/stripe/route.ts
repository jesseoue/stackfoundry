import { headers } from "next/headers";

import { getStripe } from "@/lib/stripe/client";

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return Response.json({ error: "STRIPE_WEBHOOK_SECRET is not set." }, { status: 500 });
  }

  const signature = (await headers()).get("stripe-signature");
  if (!signature) {
    return Response.json({ error: "Missing stripe-signature header." }, { status: 400 });
  }

  const body = await request.text();
  const event = getStripe().webhooks.constructEvent(body, signature, webhookSecret);

  // TODO: Dedupe event.id before applying side effects.
  return Response.json({ received: true, id: event.id, type: event.type });
}
