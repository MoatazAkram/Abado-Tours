# Abado Pyramids & Sphinx Tours

A Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 website for a private
Egypt tour company covering Giza, Cairo, Alexandria and Fayoum.

## Before you deploy — 3 things to edit

1. **WhatsApp number & contact info** → `src/lib/site-config.ts`
   - `whatsappNumber`: international format, digits only, no `+` or spaces
     (Egypt mobile `010xxxxxxxx` → `"2010xxxxxxxx"`).
   - `email`, `phoneDisplay`, `social`, `url` (your real domain once you have one).
2. **Real photos** — every image currently comes from Unsplash as a
   placeholder (see `src/lib/destinations.ts` and `src/lib/tours.ts`, the
   `img()` helper). Swap these for your own photography before launch —
   real photos of your actual guides, cars and clients will convert far
   better than stock photos, and they're required for Google Business/Maps
   trust signals.
3. **Prices & tour details** — `src/lib/tours.ts` and `src/lib/destinations.ts`.

## Project structure

```
src/
  app/                  routes (App Router) — one folder per URL
    page.tsx            home page
    about/page.tsx
    contact/page.tsx
    destinations/page.tsx
    destinations/[slug]/page.tsx   dynamic destination page
    sitemap.ts, robots.ts          SEO files, auto-generated
  components/
    layout/             Navbar, Footer, WhatsappFloatingButton
    home/               Hero, AboutSummary, FeaturedTours, BookWithConfidence,
                         StatsCounter, GallerySwiper, FAQSection, FinalCta
    destinations/       DestinationsGrid, DestinationCard
    contact/            ContactForm
    ui/                 Button, Container, SectionHeading, SunDivider, ScrollReveal
  lib/                  data + config (destinations, tours, faqs, site-config)
  types/                shared TypeScript interfaces
```

Every section of the homepage is its own component under `src/components`,
so you can add new sections (ad campaigns, seasonal offers, new tours) by
dropping in a new component and importing it in `src/app/page.tsx` without
touching anything else.

## Adding a new destination or tour

- New destination → add an object to the `destinations` array in
  `src/lib/destinations.ts`. Its page at `/destinations/<slug>` is generated
  automatically (`generateStaticParams`), including its own SEO metadata.
- New tour → add an object to `tours` in `src/lib/tours.ts`, with a matching
  `destinationSlug` so it appears on that destination's page automatically.

## SEO already set up

- Per-page `<title>` / meta description via Next's Metadata API (see
  `metadata` export in each `page.tsx`).
- Open Graph + Twitter cards, canonical URLs.
- `TravelAgency` JSON-LD structured data in `src/app/layout.tsx`.
- Auto-generated `sitemap.xml` and `robots.txt`.
- Semantic HTML (`h1`/`h2` hierarchy, `alt` text on every image).

To actually rank, after deploying: submit the sitemap in Google Search
Console, create a Google Business Profile with the same NAP (name, address,
phone) as `site-config.ts`, and keep the page load fast by not re-adding
unoptimized images (always go through the `img()` helper or `next/image`).

## Performance notes

- All images render through `next/image` (automatic AVIF/WebP, lazy loading
  below the fold, explicit `sizes` for responsive downloads).
- Fonts load via `next/font/google` — self-hosted at build time, no
  render-blocking font requests.
- No client-side state libraries; interactivity (menu, FAQ accordion, stats
  counter, gallery) is isolated to small `"use client"` components so the
  rest of the site ships as static HTML.

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build — requires internet access for Google Fonts
npm run start     # serve the production build
```

## Deployment

Any Next.js host works (Vercel is the simplest: connect the GitHub repo,
no config needed). Once deployed, update `url` in `site-config.ts` to the
real domain so canonical URLs and the sitemap are correct.
