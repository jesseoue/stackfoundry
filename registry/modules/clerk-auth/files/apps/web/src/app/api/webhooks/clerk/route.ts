export async function POST(request: Request) {
  const signature = request.headers.get("svix-signature");
  if (!signature) return new Response("Missing signature", { status: 400 });

  const payload = await request.text();
  console.log("verify Clerk webhook before processing", payload.length);

  return new Response("ok");
}
