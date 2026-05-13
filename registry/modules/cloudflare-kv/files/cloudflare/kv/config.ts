export interface Env {
  CONFIG: KVNamespace;
}

export async function getConfigValue(env: Env, key: string) {
  return env.CONFIG.get(key, "json");
}

export async function setConfigValue(env: Env, key: string, value: unknown) {
  await env.CONFIG.put(key, JSON.stringify(value));
}
