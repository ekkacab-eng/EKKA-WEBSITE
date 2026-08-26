-- Ekka waitlist table.
-- Run this once in the Supabase SQL editor (Dashboard -> SQL Editor -> New query).

create table if not exists public.waitlist (
  id           uuid primary key default gen_random_uuid(),
  contact      text not null check (char_length(contact) between 5 and 254),
  contact_type text not null check (contact_type in ('email', 'phone')),
  source       text,
  created_at   timestamptz not null default now()
);

-- One row per person. A repeat signup collides here instead of duplicating,
-- and the site treats that collision as "you are already on the list".
create unique index if not exists waitlist_contact_key
  on public.waitlist (contact);

-- ---------------------------------------------------------------------------
-- Row Level Security. This is the important part.
--
-- The anon key ships inside the browser bundle, so anyone can read it out of
-- the page. RLS is the only thing standing between that key and the data.
-- The policy below grants INSERT and nothing else: visitors can add
-- themselves, and nobody can list, read, edit, or delete signups with the
-- anon key. Reading the list is done from the dashboard, or with the service
-- role key, which must never appear in client code.
-- ---------------------------------------------------------------------------

alter table public.waitlist enable row level security;

drop policy if exists "anon can join the waitlist" on public.waitlist;
create policy "anon can join the waitlist"
  on public.waitlist
  for insert
  to anon
  with check (true);

-- Deliberately NO select / update / delete policy for anon.
-- Do not add one: a select policy would expose every signup's phone number
-- and email address to anyone who opens the site and reads the network tab.
