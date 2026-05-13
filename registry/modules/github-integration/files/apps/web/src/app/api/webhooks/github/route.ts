export async function POST(request: Request) {
  const event = request.headers.get("x-github-event");
  const delivery = request.headers.get("x-github-delivery");
  const payload = await request.text();

  console.log("verify GitHub webhook before processing", { event, delivery, bytes: payload.length });

  return new Response("ok");
}
