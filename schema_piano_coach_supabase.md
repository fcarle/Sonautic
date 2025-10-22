
# Piano Coach – Supabase Database Schema
**Version:** 1.0 • **Date:** 2025-10-22

This document describes the full database schema for the Piano Coach app (Supabase/Postgres), including tables, columns, data types, constraints, relationships, indexes, and privacy policies (RLS). It mirrors the SQL used to create the schema so an AI agent or developer can understand the data model quickly.

---

## Overview

**Domains covered:**
- Core (users, profiles, songs, assets)
- Curriculum (units, lessons, lesson_songs, exercises)
- Practice & Scoring (sessions, notes, aggregates, coach_events)
- Progress & Motivation (progress, xp_events, streaks, achievements, user_achievements)

**Privacy & Access Model:**
- Public content (songs, curriculum) is readable by all authenticated users; writes restricted to server role.
- User-owned data (sessions, notes, aggregates, coach_events, progress, xp_events, streaks, user_achievements) is protected by Row-Level Security (RLS): users can only read/write their own rows (user_id = auth.uid()).
- We keep an application-level `users` table (separate from `auth.users`). On sign-up, set `users.id = auth.uid()` and `users.email = auth.email()`.

**Conventions:**
- Primary keys: `uuid` with `gen_random_uuid()` unless otherwise noted.
- Timestamps: `timestamptz` with `default now()` when created/updated automatically.
- JSON config/prefs stored as `jsonb` with `{}` default.

---

## Enums

### `input_mode`
- Values: `'midi' | 'mic'`
- Used by: `sessions.input_mode`

### `lesson_status`
- Values: `'locked' | 'unlocked' | 'passed' | 'mastered'`
- Used by: `progress.status`

---

## Tables (by area)

### 1) Core

#### `users` (PK: `id`)
- `id` (uuid, pk) — **must equal** `auth.uid()` on sign-up
- `email` (text, unique)
- `display_name` (text)
- `level` (int) — learner level 1–10
- `created_at` (timestamptz, default now())

**Indexes & Constraints:**
- unique(email)

**RLS:** enabled; user can select/update/insert **only** their own row (`id = auth.uid()`).

---

#### `profiles` (PK: `user_id`, FK → `users.id`, on delete cascade)
- `user_id` (uuid, pk, fk) — owner (same as `users.id`)
- `avatar_url` (text)
- `instrument` (text) — e.g., "acoustic", "digital"
- `prefs` (jsonb, default '{}'`) — UI/a11y settings, etc.
- `updated_at` (timestamptz, default now())

**RLS:** enabled; user can select/insert/update **only** where `user_id = auth.uid()`.

---

#### `songs` (PK: `id`)
- `id` (uuid, pk)
- `title` (text, not null)
- `composer` (text)
- `difficulty` (int, check 1..10)
- `tempo_bpm` (int)
- `time_sig` (text) — e.g., "4/4"
- `key_sig` (text) — e.g., "Cmaj"
- `metadata` (jsonb, default '{}')
- `created_at` (timestamptz, default now())

**RLS:** enabled; **read for all authenticated**. Writes limited to `service_role` (server).

---

#### `assets` (PK: `id`, FK → `songs.id`, on delete cascade)
- `id` (uuid, pk)
- `song_id` (uuid, fk) — parent song
- `type` (text, not null, in `'midi' | 'musicxml' | 'audio' | 'preview'`)
- `url` (text, not null) — storage URL
- `hash` (text) — file integrity hash
- `duration_ms` (int)
- `created_at` (timestamptz, default now())

**Indexes:** `assets_song_id_idx (song_id)`  
**RLS:** enabled; **read for all authenticated**. Writes limited to `service_role`.

---

### 2) Curriculum (Duolingo-style)

#### `units` (PK: `id`)
- `id` (uuid, pk)
- `title` (text, not null)
- `order_idx` (int, default 0)

**RLS:** enabled; **read for all authenticated**. Writes limited to `service_role`.

---

#### `lessons` (PK: `id`, FK → `units.id`, on delete cascade)
- `id` (uuid, pk)
- `unit_id` (uuid, fk) — parent unit
- `title` (text, not null)
- `description` (text)
- `target_skill` (text) — e.g., "timing", "dynamics", "pedal"
- `order_idx` (int, default 0)

**Indexes:** `lessons_unit_id_idx (unit_id)`  
**RLS:** enabled; **read for all authenticated**. Writes limited to `service_role`.

---

#### `lesson_songs` (PK: `(lesson_id, song_id)`, FKs → `lessons.id`, `songs.id`)
- `lesson_id` (uuid, fk) — lesson
- `song_id` (uuid, fk) — song
- `mode` (text, in `'hands_right' | 'hands_left' | 'both' | 'slow'`)

**Indexes:** `lesson_songs_song_id_idx (song_id)`  
**RLS:** enabled; **read for all authenticated**. Writes limited to `service_role`.

---

#### `exercises` (PK: `id`, FK → `lessons.id`, on delete cascade)
- `id` (uuid, pk)
- `lesson_id` (uuid, fk) — parent lesson
- `type` (text, in `'follow_score' | 'loop_bars' | 'metronome'`)
- `config` (jsonb, default '{}') — e.g., `{"bars":[8,10],"tempo":72}`
- `order_idx` (int, default 0)

**Indexes:** `exercises_lesson_id_idx (lesson_id)`  
**RLS:** enabled; **read for all authenticated**. Writes limited to `service_role`.

---

### 3) Practice & Scoring

#### `sessions` (PK: `id`, FKs → `users.id`, `songs.id`)
- `id` (uuid, pk)
- `user_id` (uuid, fk) — owner
- `song_id` (uuid, fk) — practiced song
- `input_mode` (`input_mode`, not null) — "midi" or "mic"
- `started_at` (timestamptz, default now())
- `duration_ms` (int)
- `avg_latency_ms` (int)
- `device_info` (jsonb, default '{}')

**Indexes:** `sessions_user_id_idx (user_id)`, `sessions_song_id_idx (song_id)`  
**RLS:** enabled; user can select/insert/update **only** their own sessions (`user_id = auth.uid()`).

---

#### `notes` (PK: `(session_id, idx)`, FK → `sessions.id`, on delete cascade)
- `session_id` (uuid, fk) — parent session
- `idx` (int) — running index within session
- `pitch` (int, 0..127)
- `onset_ms` (int, not null)
- `dur_ms` (int)
- `vel` (int, 0..127) — MIDI velocity or loudness proxy
- `correct` (boolean)
- `delta_ms` (int) — early/late vs reference
- `pedal` (boolean)

**Indexes:** `notes_session_id_idx (session_id)`  
**RLS:** enabled; read/write allowed only if parent session belongs to `auth.uid()`.

---

#### `aggregates` (PK: `session_id`, FK → `sessions.id`, on delete cascade)
- `session_id` (uuid, pk, fk) — one summary row per session
- `accuracy` (numeric, 0..1)
- `timing_stability` (numeric) — lower is better
- `dynamics_score` (numeric)
- `pedal_score` (numeric)
- `weak_bars` (int[]) — e.g., `{8,9,22}`

**RLS:** enabled; read/write allowed only if parent session belongs to `auth.uid()`.

---

#### `coach_events` (PK: `id`, FK → `sessions.id`, on delete cascade)
- `id` (uuid, pk)
- `session_id` (uuid, fk) — parent session
- `t_ms` (int, not null) — timestamp in ms within session
- `type` (text, not null) — e.g., "tip", "pause", "loop", "tempo"
- `payload` (jsonb, default '{}') — details

**Indexes:** `coach_events_session_id_idx (session_id)`  
**RLS:** enabled; read/write allowed only if parent session belongs to `auth.uid()`.

---

### 4) Progress & Motivation

#### `progress` (PK: `(user_id, lesson_id)`, FKs → `users.id`, `lessons.id`)
- `user_id` (uuid, fk) — owner
- `lesson_id` (uuid, fk) — lesson being tracked
- `status` (`lesson_status`, default 'locked')
- `stars` (int, 0..3, default 0)
- `best_accuracy` (numeric)
- `updated_at` (timestamptz, default now())

**Indexes:** `progress_lesson_id_idx (lesson_id)`  
**RLS:** enabled; user can read/write rows where `user_id = auth.uid()`.

---

#### `xp_events` (PK: `id`, FK → `users.id`)
- `id` (uuid, pk)
- `user_id` (uuid, fk) — owner
- `source` (text, not null) — e.g., "session", "streak", "challenge"
- `amount` (int, not null)
- `created_at` (timestamptz, default now())

**Indexes:** `xp_events_user_id_idx (user_id)`  
**RLS:** enabled; user can read/write rows where `user_id = auth.uid()`.

---

#### `streaks` (PK: `user_id`, FK → `users.id`)
- `user_id` (uuid, pk, fk) — owner
- `current_days` (int, default 0)
- `best_days` (int, default 0)
- `updated_on` (date, default current_date)

**RLS:** enabled; user can read/write their own row (`user_id = auth.uid()`).

---

#### `achievements` (PK: `id`)
- `id` (uuid, pk)
- `code` (text, unique, not null) — e.g., "FIRST_SESSION", "100_NOTES"
- `title` (text, not null)
- `descr` (text)

**RLS:** enabled; read for all authenticated. Writes typically server/admin only.

---

#### `user_achievements` (PK: `(user_id, achievement_id)`, FKs → `users.id`, `achievements.id`)
- `user_id` (uuid, fk) — owner
- `achievement_id` (uuid, fk) — earned badge
- `earned_at` (timestamptz, default now())

**Indexes:** `user_achievements_user_id_idx (user_id)`  
**RLS:** enabled; user can read/write rows where `user_id = auth.uid()`.

---

## Relationships (FK → PK)
- `profiles.user_id` → `users.id`
- `assets.song_id` → `songs.id`
- `lessons.unit_id` → `units.id`
- `lesson_songs.lesson_id` → `lessons.id`
- `lesson_songs.song_id` → `songs.id`
- `exercises.lesson_id` → `lessons.id`
- `sessions.user_id` → `users.id`
- `sessions.song_id` → `songs.id`
- `notes.session_id` → `sessions.id`
- `aggregates.session_id` → `sessions.id`
- `coach_events.session_id` → `sessions.id`
- `progress.user_id` → `users.id`
- `progress.lesson_id` → `lessons.id`
- `xp_events.user_id` → `users.id`
- `streaks.user_id` → `users.id`
- `user_achievements.user_id` → `users.id`
- `user_achievements.achievement_id` → `achievements.id`

---

## Indexes (named)
- `assets_song_id_idx (assets.song_id)`
- `lessons_unit_id_idx (lessons.unit_id)`
- `lesson_songs_song_id_idx (lesson_songs.song_id)`
- `exercises_lesson_id_idx (exercises.lesson_id)`
- `sessions_user_id_idx (sessions.user_id)`
- `sessions_song_id_idx (sessions.song_id)`
- `notes_session_id_idx (notes.session_id)`
- `coach_events_session_id_idx (coach_events.session_id)`
- `progress_lesson_id_idx (progress.lesson_id)`
- `xp_events_user_id_idx (xp_events.user_id)`
- `user_achievements_user_id_idx (user_achievements.user_id)`

---

## Privacy Policies (RLS Summary)

**Public-ish content (read-only for authenticated users):**
- Tables: `songs`, `assets`, `units`, `lessons`, `lesson_songs`, `exercises`, `achievements`
- Policies: `select` allowed to `authenticated` role; writes restricted to `service_role`.

**User-owned data (read/write own):**
- Tables: `users`, `profiles`, `sessions`, `notes`, `aggregates`, `coach_events`, `progress`, `xp_events`, `streaks`, `user_achievements`
- Policies: allow `select/insert/update` (and delete where relevant) **only** when `user_id = auth.uid()` or parent relation resolves to their user_id (for child tables).

---

## Full SQL (reference)

```sql
-- Enums
create type input_mode as enum ('midi','mic');
create type lesson_status as enum ('locked','unlocked','passed','mastered');

-- Core
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text unique,
  display_name text,
  level int,
  created_at timestamptz not null default now()
);
create table if not exists profiles (
  user_id uuid primary key references users(id) on delete cascade,
  avatar_url text,
  instrument text,
  prefs jsonb default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
create table if not exists songs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  composer text,
  difficulty int check (difficulty between 1 and 10),
  tempo_bpm int,
  time_sig text,
  key_sig text,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create table if not exists assets (
  id uuid primary key default gen_random_uuid(),
  song_id uuid not null references songs(id) on delete cascade,
  type text not null check (type in ('midi','musicxml','audio','preview')),
  url text not null,
  hash text,
  duration_ms int,
  created_at timestamptz not null default now()
);
create index if not exists assets_song_id_idx on assets(song_id);

-- Curriculum
create table if not exists units (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  order_idx int not null default 0
);
create table if not exists lessons (
  id uuid primary key default gen_random_uuid(),
  unit_id uuid not null references units(id) on delete cascade,
  title text not null,
  description text,
  target_skill text,
  order_idx int not null default 0
);
create index if not exists lessons_unit_id_idx on lessons(unit_id);

create table if not exists lesson_songs (
  lesson_id uuid not null references lessons(id) on delete cascade,
  song_id uuid not null references songs(id) on delete cascade,
  mode text check (mode in ('hands_right','hands_left','both','slow')),
  primary key (lesson_id, song_id)
);
create index if not exists lesson_songs_song_id_idx on lesson_songs(song_id);

create table if not exists exercises (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid not null references lessons(id) on delete cascade,
  type text not null check (type in ('follow_score','loop_bars','metronome')),
  config jsonb not null default '{}'::jsonb,
  order_idx int not null default 0
);
create index if not exists exercises_lesson_id_idx on exercises(lesson_id);

-- Practice & Scoring
create table if not exists sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  song_id uuid not null references songs(id) on delete restrict,
  input_mode input_mode not null,
  started_at timestamptz not null default now(),
  duration_ms int,
  avg_latency_ms int,
  device_info jsonb default '{}'::jsonb
);
create index if not exists sessions_user_id_idx on sessions(user_id);
create index if not exists sessions_song_id_idx on sessions(song_id);

create table if not exists notes (
  session_id uuid not null references sessions(id) on delete cascade,
  idx int not null,
  pitch int not null check (pitch between 0 and 127),
  onset_ms int not null,
  dur_ms int,
  vel int check (vel between 0 and 127),
  correct boolean,
  delta_ms int,
  pedal boolean,
  primary key (session_id, idx)
);
create index if not exists notes_session_id_idx on notes(session_id);

create table if not exists aggregates (
  session_id uuid primary key references sessions(id) on delete cascade,
  accuracy numeric,
  timing_stability numeric,
  dynamics_score numeric,
  pedal_score numeric,
  weak_bars int[]
);

create table if not exists coach_events (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references sessions(id) on delete cascade,
  t_ms int not null,
  type text not null,
  payload jsonb not null default '{}'::jsonb
);
create index if not exists coach_events_session_id_idx on coach_events(session_id);

-- Progress & Motivation
create table if not exists progress (
  user_id uuid not null references users(id) on delete cascade,
  lesson_id uuid not null references lessons(id) on delete cascade,
  status lesson_status not null default 'locked',
  stars int not null default 0 check (stars between 0 and 3),
  best_accuracy numeric,
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);
create index if not exists progress_lesson_id_idx on progress(lesson_id);

create table if not exists xp_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  source text not null,
  amount int not null,
  created_at timestamptz not null default now()
);
create index if not exists xp_events_user_id_idx on xp_events(user_id);

create table if not exists streaks (
  user_id uuid primary key references users(id) on delete cascade,
  current_days int not null default 0,
  best_days int not null default 0,
  updated_on date not null default current_date
);

create table if not exists achievements (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  title text not null,
  descr text
);

create table if not exists user_achievements (
  user_id uuid not null references users(id) on delete cascade,
  achievement_id uuid not null references achievements(id) on delete cascade,
  earned_at timestamptz not null default now(),
  primary key (user_id, achievement_id)
);
create index if not exists user_achievements_user_id_idx on user_achievements(user_id);

-- RLS enable
alter table songs enable row level security;
alter table assets enable row level security;
alter table units enable row level security;
alter table lessons enable row level security;
alter table lesson_songs enable row level security;
alter table exercises enable row level security;

alter table users enable row level security;
alter table profiles enable row level security;
alter table sessions enable row level security;
alter table notes enable row level security;
alter table aggregates enable row level security;
alter table coach_events enable row level security;
alter table progress enable row level security;
alter table xp_events enable row level security;
alter table streaks enable row level security;
alter table user_achievements enable row level security;
alter table achievements enable row level security;

-- Public read (authenticated) + admin/server writes
create policy "read_songs"        on songs        for select to authenticated using (true);
create policy "read_assets"       on assets       for select to authenticated using (true);
create policy "read_units"        on units        for select to authenticated using (true);
create policy "read_lessons"      on lessons      for select to authenticated using (true);
create policy "read_lesson_songs" on lesson_songs for select to authenticated using (true);
create policy "read_exercises"    on exercises    for select to authenticated using (true);
create policy "achievements_read" on achievements for select to authenticated using (true);

create policy "admin_write_songs"        on songs        for all to service_role using (true) with check (true);
create policy "admin_write_assets"       on assets       for all to service_role using (true) with check (true);
create policy "admin_write_units"        on units        for all to service_role using (true) with check (true);
create policy "admin_write_lessons"      on lessons      for all to service_role using (true) with check (true);
create policy "admin_write_lesson_songs" on lesson_songs for all to service_role using (true) with check (true);
create policy "admin_write_exercises"    on exercises    for all to service_role using (true) with check (true);

-- User-owned data RLS
create policy "me_read_users" on users for select to authenticated
  using (id = auth.uid());
create policy "me_upsert_users" on users for insert to authenticated
  with check (id = auth.uid());
create policy "me_update_users" on users for update to authenticated
  using (id = auth.uid())
  with check (id = auth.uid());

create policy "me_read_profiles" on profiles for select to authenticated
  using (user_id = auth.uid());
create policy "me_upsert_profiles" on profiles for insert to authenticated
  with check (user_id = auth.uid());
create policy "me_update_profiles" on profiles for update to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "me_sessions_read" on sessions for select to authenticated
  using (user_id = auth.uid());
create policy "me_sessions_insert" on sessions for insert to authenticated
  with check (user_id = auth.uid());
create policy "me_sessions_update" on sessions for update to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "me_notes_all" on notes for all to authenticated
  using (exists (select 1 from sessions s where s.id = notes.session_id and s.user_id = auth.uid()))
  with check (exists (select 1 from sessions s where s.id = notes.session_id and s.user_id = auth.uid()));

create policy "me_aggregates_all" on aggregates for all to authenticated
  using (exists (select 1 from sessions s where s.id = aggregates.session_id and s.user_id = auth.uid()))
  with check (exists (select 1 from sessions s where s.id = aggregates.session_id and s.user_id = auth.uid()));

create policy "me_coach_events_all" on coach_events for all to authenticated
  using (exists (select 1 from sessions s where s.id = coach_events.session_id and s.user_id = auth.uid()))
  with check (exists (select 1 from sessions s where s.id = coach_events.session_id and s.user_id = auth.uid()));

create policy "me_progress_all" on progress for all to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "me_xp_events_all" on xp_events for all to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "me_streaks_all" on streaks for all to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "me_user_achievements_all" on user_achievements for all to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());
```

---

## Implementation Notes

- **Sign-up hook:** after auth sign-up, insert into `public.users` with `id = auth.uid()` and `email = auth.email()`.
- **Admin writes:** do content management (songs, units, lessons, etc.) from server using `service_role` key to bypass RLS write restrictions.
- **Data retention:** by default, we store session note-level data; if privacy concerns, you can toggle to keep only `aggregates` and delete `notes` after review.
- **PII:** keep PII minimal in `users` (email + display name). Avoid storing raw audio; store derived notes/features only unless the user opts in.
