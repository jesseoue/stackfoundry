export interface Env {
  DB: D1Database;
}

export async function listAuditEvents(env: Env) {
  return env.DB.prepare("select id, action, created_at from audit_events order by created_at desc limit 50").all();
}
