create table if not exists companies(id uuid primary key default gen_random_uuid(),name text,slug text unique,created_at timestamptz default now());
create table if not exists services(id uuid primary key default gen_random_uuid(),company_id uuid,name text,created_at timestamptz default now());
create table if not exists bookings(id uuid primary key default gen_random_uuid(),company_id uuid,customer_name text,customer_phone text,booking_date date,booking_time time,status text default 'new',created_at timestamptz default now());
