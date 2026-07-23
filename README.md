# 630 Mobile Auto Repair — Website

Next.js (App Router) + TypeScript + Tailwind CSS. Statically generated, mobile-first, and built
around a single truthfulness rule: **nothing renders unless it's backed by a verified value in
`src/data/business.ts`.**

There is no contact form anywhere on the site — every conversion path is a direct Call or Text
button. This was a deliberate decision (see "No form" below), not an oversight.

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

### GitHub Pages (live now)

This repo deploys automatically to GitHub Pages via `.github/workflows/deploy-pages.yml` on every
push to `main`: **https://lmorrow1210.github.io/630-mobile-auto-repair/**

The repo's Settings → Pages → Build and deployment source is set to **GitHub Actions** (not "Deploy
from a branch" — that default only renders `README.md` as a webpage, which is what you'd see if this
ever gets switched back). The workflow runs `next build` with `GITHUB_PAGES=true`, which flips
`next.config.ts` into static-export mode (`output: "export"`) with `basePath: "/630-mobile-auto-repair"`
so every internal link resolves correctly under the project-pages subpath, and uploads the `out/`
directory as the Pages artifact.

### Anywhere else

Outside of GitHub Pages this is a standard Next.js app — deploy to Vercel, or any Node host that runs
`npm run build && npm start`, with no `GITHUB_PAGES` env var set (so it runs as a normal server build,
no `basePath`). Set `siteUrl` in `src/data/business.ts` to the real production domain before launch —
it currently points at `https://630mobileauto.com` for canonical URLs/sitemap/schema regardless of
where a given build is previewed.

## No form — call or text only

The business owner was explicit: no on-site quote/contact form, no "Request a Quote" language
anywhere. Every CTA is a direct `tel:` or `sms:` link (`src/components/CtaButtons.tsx`,
`src/lib/sms.ts`) — nothing is collected or transmitted by the site itself. The `/contact` page is
just phone/email/hours, not a form.

## Analytics configuration

No analytics provider existed in the source project. `src/lib/analytics.ts` pushes structured events
(`hero_call_click`, `sticky_sms_click`, `service_card_click`, etc. — see the file for the full list)
to `window.dataLayer`, the standard GTM/GA4 convention. To wire up a real provider:

1. Add the provider's script tag to `src/app/layout.tsx` (e.g. a GTM container snippet).
2. That's it — `dataLayer.push()` calls already happen at every conversion point; GTM will pick them
   up once the container is installed.

Event payloads never include name, phone, or email — only placement/page/device context, per the
brief's privacy requirement.

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
bespoke road/open-sky illustration (`src/components/HeroSky.tsx`) instead of a stock photo —
deliberately, so nothing implies a stock model is the actual business. Once real photos exist, replace
the `<HeroSky />` usage in `Hero.tsx` with a Next.js `<Image fill priority>` pointing at the real photo
(optimized WebP/AVIF, meaningful `alt` text), and delete `HeroSky.tsx` once nothing references it.

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
  by the FAQ component: presence requirement, what's included in pricing, diagnostic/travel fees,
  weather policy, payment methods, warranty, and appointment turnaround time.
- `siteUrl` — confirm the production domain (currently `https://630mobileauto.com`) before launch.
- Real photography (see above) and a real favicon/app icon.
- The privacy policy (`src/app/privacy-policy/page.tsx`) should be reviewed by counsel before launch.

## Design notes

- **Palette**: Deep Teal + Copper — a light, cool-toned grey background (`#eef1f1`, not warm/cream),
  dark teal ink for text and hairline borders (`#092b2e`), dark teal used sparingly for high-authority
  sections (final CTA, footer, contact band), one copper accent (`#c96f3b`) reserved for conversion
  actions only. The muted secondary-text tone was darkened from the original palette spec
  (`#68787a` → `#4c6265`) to clear WCAG AA on the new background — see the token comments in
  `src/app/globals.css`. The copper CTA (copper background, dark teal text) sits at ~4.2:1 contrast,
  which is fine for bold/uppercase button labels but worth keeping in mind if that combination is ever
  reused for smaller or regular-weight text.
- **Type**: Anton (heavy condensed uppercase) for headlines — a bolder, more masculine garage-signage
  feel than a standard bold weight — paired with IBM Plex Sans for UI/body text and IBM Plex Mono for
  ticket-style labels (trust strip, service list numbering).
- **Header**: solid Deep Teal band (`--color-charcoal-soft`) rather than blending into the page
  background, so it reads as a distinct bar rather than floating nav links.
- **Hero**: a bespoke road/open-sky illustration (`src/components/HeroSky.tsx`) — gradient sky, cloud
  bands, and a converging road with copper edge lines — brings back the "photo of a road" mood of the
  original site without stock photography. Replaced an earlier "service tag" hang-tag graphic that
  read as an odd non sequitur next to the headline.
- **Motifs**: hard 2px ink borders instead of soft shadows/rounded cards, and a numbered ticket-list
  layout for services instead of a generic icon-card grid — chosen specifically to avoid the
  dark-hero/rounded-card/serif-display pattern common to AI-generated site templates.
- **Logo**: a redrawn arch-and-gear mark in the spirit of the existing logo (`src/components/Logo.tsx`),
  not a copy of the original artwork.
