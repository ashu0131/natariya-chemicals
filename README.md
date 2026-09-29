# Natariya Chemicals Industries Pvt. Ltd. — React + Tailwind + Supabase

A modern bilingual agriculture/agrochemical corporate website based on the approved green Natariya theme.

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- React Router
- React Helmet Async for per-page SEO/meta tags
- i18next + react-i18next for English/Hindi
- Supabase Auth, PostgreSQL and Storage

## Pages

- `/` Home
- `/about` About Us
- `/products` Products
- `/gallery` Gallery
- `/contact` Contact Us + Google Maps + Our Team
- `/admin` Supabase admin login
- `/admin/dashboard` CMS dashboard
- `/admin/products` Product manager
- `/admin/gallery` Gallery manager
- `/admin/team` Team manager

## SEO

Every public page has its own title, description, canonical URL, Open Graph and Twitter metadata through `src/components/Seo.jsx`.

## Tailwind

All primary UI styling is Tailwind utility classes. `src/styles.css` only contains Tailwind directives and a small reusable component layer.

## Supabase setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in Supabase SQL Editor.
3. Create an admin user in Supabase Authentication.
4. Add the admin user's Auth UUID to `public.admin_users` as described in the SQL file.
5. Copy `.env.example` to `.env` and add your Supabase URL and anon key.
6. Run `npm install` and `npm run dev`.

## Storage

The SQL creates a public `website-media` bucket. Admins can upload product, gallery and team images from the CMS. Public pages read published records from Supabase and fall back to demo data when Supabase is not configured.

## Google Maps

Set `VITE_MAP_EMBED_URL` to a Google Maps embed URL. If it is not set, the contact page shows an Indore, Madhya Pradesh fallback map.

## Important

Replace demo company contact details, address, product content, team profiles and images with the real company information before production deployment.

## React 19 dependency note

This project uses React 19 and `react-helmet-async` 3.x. Version 2.0.5 is not compatible
with React 19 peer dependencies, so do not install the old 2.x version.
