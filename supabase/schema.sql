-- Natariya Chemicals Industries Pvt. Ltd.
-- Run this entire file in Supabase SQL Editor.

create extension if not exists "pgcrypto";

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name_en text not null,
  name_hi text not null,
  category_en text not null,
  category_hi text not null,
  short_description_en text not null default '',
  short_description_hi text not null default '',
  description_en text not null default '',
  description_hi text not null default '',
  image_url text,
  featured boolean not null default false,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.gallery (
  id uuid primary key default gen_random_uuid(),
  title_en text not null,
  title_hi text not null,
  image_url text not null,
  sort_order integer not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role_en text not null,
  role_hi text not null,
  bio_en text not null default '',
  bio_hi text not null default '',
  phone text,
  email text,
  image_url text,
  sort_order integer not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists products_updated_at on public.products;
create trigger products_updated_at
before update on public.products
for each row execute procedure public.set_updated_at();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admin_users
    where user_id = auth.uid()
  );
$$;

alter table public.admin_users enable row level security;
alter table public.products enable row level security;
alter table public.gallery enable row level security;
alter table public.team_members enable row level security;
alter table public.contact_messages enable row level security;

drop policy if exists "Public can read published products" on public.products;
create policy "Public can read published products"
on public.products for select
using (published = true or public.is_admin());

drop policy if exists "Admins manage products" on public.products;
create policy "Admins manage products"
on public.products for all
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Public can read published gallery" on public.gallery;
create policy "Public can read published gallery"
on public.gallery for select
using (published = true or public.is_admin());

drop policy if exists "Admins manage gallery" on public.gallery;
create policy "Admins manage gallery"
on public.gallery for all
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Public can read published team" on public.team_members;
create policy "Public can read published team"
on public.team_members for select
using (published = true or public.is_admin());

drop policy if exists "Admins manage team" on public.team_members;
create policy "Admins manage team"
on public.team_members for all
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Anyone can submit contact message" on public.contact_messages;
create policy "Anyone can submit contact message"
on public.contact_messages for insert
with check (true);

drop policy if exists "Admins read contact messages" on public.contact_messages;
create policy "Admins read contact messages"
on public.contact_messages for select
using (public.is_admin());

drop policy if exists "Admins manage admin users" on public.admin_users;
create policy "Admins manage admin users"
on public.admin_users for all
using (public.is_admin())
with check (public.is_admin());

-- Public storage bucket.
insert into storage.buckets (id, name, public)
values ('website-media', 'website-media', true)
on conflict (id) do update set public = true;

drop policy if exists "Public can view website media" on storage.objects;
create policy "Public can view website media"
on storage.objects for select
using (bucket_id = 'website-media');

drop policy if exists "Admins upload website media" on storage.objects;
create policy "Admins upload website media"
on storage.objects for insert
with check (bucket_id = 'website-media' and public.is_admin());

drop policy if exists "Admins update website media" on storage.objects;
create policy "Admins update website media"
on storage.objects for update
using (bucket_id = 'website-media' and public.is_admin())
with check (bucket_id = 'website-media' and public.is_admin());

drop policy if exists "Admins delete website media" on storage.objects;
create policy "Admins delete website media"
on storage.objects for delete
using (bucket_id = 'website-media' and public.is_admin());

-- Demo content.
insert into public.products
(name_en, name_hi, category_en, category_hi, short_description_en, short_description_hi, description_en, description_hi, image_url, featured)
select * from (values
(
 'NPK Granules','NPK ग्रैन्यूल्स','Fertilizers','उर्वरक',
 'Balanced nutrition for stronger crops and better yield.','बेहतर फसल और उपज के लिए संतुलित पोषण।',
 'A balanced NPK formulation designed to support healthy plant growth and crop development.','स्वस्थ पौधों की वृद्धि और फसल विकास के लिए संतुलित NPK फॉर्मूलेशन।',
 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80', true
),
(
 'CropShield Insecticide','क्रॉपशील्ड कीटनाशक','Insecticides','कीटनाशक',
 'Targeted protection against common crop insects.','फसलों को सामान्य कीटों से लक्षित सुरक्षा।',
 'A crop-protection solution developed for responsible and effective insect management.','जिम्मेदार और प्रभावी कीट प्रबंधन के लिए विकसित फसल सुरक्षा समाधान।',
 'https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=900&q=80', true
),
(
 'GreenGuard Fungicide','ग्रीनगार्ड फफूंदनाशी','Fungicides','फफूंदनाशी',
 'Helps protect crops from fungal disease pressure.','फसलों को फफूंद रोगों से बचाने में सहायता।',
 'A modern fungicide solution for healthier leaves and improved crop protection.','स्वस्थ पत्तियों और बेहतर फसल सुरक्षा के लिए आधुनिक फफूंदनाशी समाधान।',
 'https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&w=900&q=80', false
),
(
 'WeedFree Herbicide','वीडफ्री खरपतवारनाशी','Herbicides','खरपतवारनाशी',
 'Supports controlled weed management in crops.','फसलों में खरपतवार प्रबंधन में सहायता।',
 'A practical weed-management solution for agricultural applications.','कृषि उपयोग के लिए व्यावहारिक खरपतवार प्रबंधन समाधान।',
 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80', false
)
) as demo
where not exists (select 1 from public.products);

insert into public.gallery (title_en,title_hi,image_url,sort_order)
select * from (values
('Modern Agriculture','आधुनिक कृषि','https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',1),
('Healthy Crops','स्वस्थ फसलें','https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1200&q=80',2),
('Field Solutions','खेतों के समाधान','https://images.unsplash.com/photo-1523742818008-3b8e7f0a6c8a?auto=format&fit=crop&w=1200&q=80',3),
('Green Growth','हरित विकास','https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80',4),
('Agro Innovation','कृषि नवाचार','https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80',5),
('Sustainable Farming','सतत कृषि','https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',6)
) as demo
where not exists (select 1 from public.gallery);

insert into public.team_members (name,role_en,role_hi,bio_en,bio_hi,phone,email,image_url,sort_order)
select * from (values
('Aarav Sharma','Managing Director','प्रबंध निदेशक','Leading the company with a focus on quality, responsible growth and long-term farmer relationships.','गुणवत्ता, जिम्मेदार विकास और किसानों के साथ दीर्घकालिक संबंधों पर केंद्रित नेतृत्व।','+91 98765 43210','info@natariya.com','https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80',1),
('Neha Verma','Operations Head','ऑपरेशंस हेड','Coordinates operations, quality systems and customer-focused execution.','ऑपरेशंस, गुणवत्ता प्रणालियों और ग्राहक-केंद्रित कार्यों का समन्वय।','+91 98765 43211','operations@natariya.com','https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',2),
('Rohan Singh','Technical & Product Lead','तकनीकी एवं उत्पाद प्रमुख','Supports product development, technical guidance and field-oriented solutions.','उत्पाद विकास, तकनीकी मार्गदर्शन और फील्ड समाधान में सहयोग।','+91 98765 43212','technical@natariya.com','https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',3)
) as demo
where not exists (select 1 from public.team_members);
