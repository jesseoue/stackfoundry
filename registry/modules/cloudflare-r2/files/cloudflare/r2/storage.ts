export interface Env {
  FILES: R2Bucket;
}

export async function putObject(env: Env, key: string, body: ReadableStream | ArrayBuffer | string) {
  await env.FILES.put(key, body);
  return { key };
}

export async function getObject(env: Env, key: string) {
  const object = await env.FILES.get(key);
  if (!object) return new Response("Not found", { status: 404 });
  return new Response(object.body, { headers: object.httpMetadata });
}
