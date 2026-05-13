-- Enable RLS on exposed tables and write policies for your real access model.
-- Do not authorize from user-editable metadata. Prefer app metadata or app-owned tables.

alter table if exists public.workspace_members enable row level security;
