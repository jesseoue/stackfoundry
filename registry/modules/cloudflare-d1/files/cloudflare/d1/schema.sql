create table if not exists audit_events (
  id text primary key,
  action text not null,
  created_at text not null default current_timestamp
);
