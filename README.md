# 630 Mobile Auto Repair — Website

Next.js (App Router) + TypeScript + Tailwind CSS. Statically generated, mobile-first, and built
around a single truthfulness rule: **nothing renders unless it's backed by a verified value in
`src/data/business.ts`.**

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. The Elmhurst page is at `/elmhurst`; other cities are at `/<city-slug>`
(see `cities` in `src/data/business.ts`).

## Production build

```bash
npm run build
npm start
```

`npm run build` statically generates every page (home, services, all 15 city pages, all 8 service
pages, reviews, contact, privacy policy) — confirmed passing with `tsc --noEmit`, `eslint .`, and
`next build` all clean as of this writing.

## Deployment

No hosting/CI config existed in the source project to preserve, so this is a standard Next.js app —
deploy it to Vercel, or any Node host that runs `npm run build && npm start`. Set `siteUrl` in
`src/data/business.ts` to the real production domain before launch (see TODOs below).

## Form configuration — there is no backend

Per direction from the business owner, the quote form (`src/components/QuoteForm.tsx`) does **not**
submit to any server. On submit, it composes the entered details into a plain-text message and opens
`sms:+16304470231&body=...` (or `?body=` on Android — see `src/lib/sms.ts`) so the visitor's own
Messages app sends it directly to the shop. Nothing is transmitted to, or stored on, infrastructure we
control. If a real backend/CRM is added later, replace the `window.location.href = href` call in
`QuoteForm.tsx`'s `handleSubmit` with a `fetch()` to that endpoint and gate the URL behind an
environment variable (e.g. `NEXT_PUBLIC_QUOTE_FORM_ENDPOINT`) — don't hardcode it.

## Analytics configuration

No analytics provider existed in the source project. `src/lib/analytics.ts` pushes structured events
(`hero_call_click`, `quote_form_submit`, `service_card_click`, etc. — see the file for the full list)
to `window.dataLayer`, the standard GTM/GA4 convention. To wire up a real provider:

1. Add the provider's script tag to `src/app/layout.tsx` (e.g. a GTM container snippet).
2. That's it — `dataLayer.push()` calls already happen at every conversion point; GTM will pick them
   up once the container is installed.

Event payloads never include name, phone, email, or the vehicle-problem text — only placement/page/
device context, per the brief's privacy requirement.

## Updating services and cities

Both are single arrays in `src/data/business.ts` — add/edit/remove an entry and every page that lists
services or cities (home, services overview, service detail pages, footer, sitemap) updates
automatically, including static generation of the new page at build time.

- **Services**: add an object to the `services` array. `icon` must be one of the `ServiceIconName`
  values already drawn in `src/components/ServiceIcon.tsx` — add a new `<path>` there for a new icon.
- **Cities**: add an object to the `cities` array (`slug`, `name`, `county`, `blurb`). A page appears
  at `/<slug>` automatically via `src/app/[city]/page.tsx`.

## Adding verified reviews

Edit `testimonials` in `src/data/business.ts`. Each entry needs a `quote`, `author`, `city`, and an
optional `sourceUrl` (set to `null` if the review has no public link). To show the aggregate Google
rating badge, set `business.review.rating` and `business.review.reviewCount` — both are currently
populated with the real, verified values (5.0, 88 reviews) as of July 2026. Update them if the rating
changes; **never** hardcode a number that hasn't been checked against the live listing.

## Adding pricing

`business.pricing` in `src/data/business.ts` is `null` until real starting prices are confirmed. Set it
to an array of `{ serviceSlug, startingAt, notes }` and `PricingReassurance.tsx` automatically switches
from the neutral "get an estimate" copy to itemized pricing cards. `serviceSlug` must match a slug in
the `services` array.

## Replacing photography

There is no authentic photography of the real van, mechanic, or customers yet, so the hero uses a
bespoke SVG illustration (`src/components/HeroArt.tsx`) instead of a stock photo — deliberately, so
nothing implies a stock model is the actual business. Once real photos exist:

1. Add optimized images (WebP/AVIF, reasonable dimensions) to `public/images/`.
2. In `src/components/Hero.tsx`, replace the `<HeroArt />` usage with a Next.js `<Image fill priority>`
   pointing at the real photo, with meaningful `alt` text.
3. Delete `HeroArt.tsx` once nothing references it.

The favicon (`src/app/favicon.ico`) is still the Next.js default — replace it with a real brand mark
before launch.

## Remaining verification TODOs

Everything below is `null` in `src/data/business.ts` and intentionally **not rendered anywhere** —
each has a `// TODO(verify)` comment at its definition:

- `credentials.licensed`, `credentials.aseCertified` — confirm before enabling those trust-strip badges.
- `warranty` — confirm terms before any warranty claim is shown.
- `paymentMethods` — confirm accepted payment methods.
- `pricing` — confirm starting prices and what's included (parts/labor/travel/tax) before adding.
- `responseTimeLanguage` — do not add same-day/response-time claims without confirmation.
- `social.facebook` / `social.instagram` — add only if a real, active profile exists.
- Several FAQ answers are `null` (`answer: null` in the `faqs` array in `business.ts`) and are skipped
  by the FAQ component: presence requirement, what's included in quotes, diagnostic/travel fees,
  weather policy, payment methods, warranty, and appointment turnaround time.
- `siteUrl` — confirm the production domain (currently `https://630mobileauto.com`) before launch.
- Real photography (see above) and a real favicon/app icon.
- The privacy policy (`src/app/privacy-policy/page.tsx`) should be reviewed by counsel before launch.

## Design notes

- **Palette**: warm off-white paper background, near-black ink for text, dark charcoal for
  high-authority sections (hero, final CTA, footer), one burnt-amber accent reserved for conversion
  actions only. Tokens are CSS custom properties in `src/app/globals.css`.
- **Type**: Fraunces (bold serif) for headlines — an evolution of the existing site's bold serif
  headline treatment — paired with Inter for UI/body text.
- **Logo**: a redrawn arch-and-gear mark in the spirit of the existing logo (`src/components/Logo.tsx`),
  not a copy of the original artwork.
