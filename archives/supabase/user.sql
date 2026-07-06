-- supabase/schemas/0001_initial_users.sql
-- Creates the core users table with identity provider support and basic authentication data.

-- NOTE: We create in 'public' schema, not 'auth', because 'auth' is a system schema we cannot modify directly via migrations.
Create table if not exists public.users (
  id uuid primary key,
  
  -- Core Identity Fields (mirroring auth.users structure)
  email text unique not null,
  email_verified boolean default false,
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  
  -- Optional Metadata fields for extensibility
  display_name text,
  avatar_url text
);

-- Create an index on email for faster lookups (optional but recommended)
Create index if not exists idx_users_email on public.users (email);

-- Enable Row Level Security (RLS) and allow everyone to read their own data using auth.uid()
Alter table public.users enable row level security;
Alter table public.users add constraint users_pkey_uk fk_auth_user_id_to_users using (id = id);
Create policy "Users can view own data" on public.users for select using (auth.uid() = id);

-- Allow admin-like access for now (adjust as needed)
-- Create policy "Everyone can see everyone's data" on auth.users for select using (true);