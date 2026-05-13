export interface Env {
  APP_NAME: string;
}

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return Response.json({ ok: true, app: env.APP_NAME });
    }

    return new Response("Not found", { status: 404 });
  },
};
