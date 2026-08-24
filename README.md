# Ekka — launch teaser

Pre-launch, single-page teaser for Ekka. Its only jobs are to build
anticipation and collect early signups.

**Pay less. Ride fair.** — launching in Hyderabad.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
```

## Stack

React 19 + Vite, Framer Motion for every animation, plain CSS. No other
dependencies, no build-time CSS tooling, no backend.

Four real pages — `index.html`, `privacy.html`, `terms.html`, and
`disclaimer.html` — built as separate Vite entries, so each legal document has
a genuine, linkable, indexable URL without pulling in a router. Adding another
means an `.html` file, a one-line entry in `src/`, and a line in
[`vite.config.js`](vite.config.js).

## Palette

A single dark theme, always on — it does not follow the system setting. Tokens
live at the top of [`index.css`](src/index.css).

| Token | Value | Used for |
| --- | --- | --- |
| `--logo-ink` | `#0E4D3A` | Bars in the mark. **Fixed** — never re-theme. |
| `--logo-disc` | `#E3F0EA` | Disc behind them. **Fixed** — never re-theme. |
| `--bg` | `#07130F` | Page — near-black, tinted with the brand green |
| `--surface` | `#0F231D` | Inputs, raised cards |
| `--ink` | `#E8F2EE` | Body copy |
| `--ink-muted` | `#93A8A0` | Secondary copy |
| `--brand` | `#7FD7B4` | Headings, the CTA, accents |
| `--on-brand` | `#05231A` | Label on the brand-filled button |

The logo keeps its exact artwork colours. `#0E4D3A` is unreadable as *type* on
this ground, so headings and accents lift to `#7FD7B4` — but the mark itself
needs no help: its pale disc carries the contrast, and the dark ground is what
it looks best on. The disc sits at 16.16:1 here against 1.13:1 on the
off-white version, which is the difference between the wheel reading as an
object and reading as a faint smudge.

The ground is deliberately not pure black — it carries a green cast so the
mark and the type belong to the same family as it.

Every text pair clears WCAG AA; the tightest is placeholder text at 6.53:1.
`color-scheme: dark` is declared so native controls, scrollbars, and autofill
follow the page instead of flashing white.

## Layout

```
src/
  components/
    EkkaWheel.jsx      the brand mark — reusable, optionally animated
    SiteHeader.jsx     the EKKA masthead, on both pages
    Hero.jsx           rolling logo, tagline, launch line, waitlist form
    WaitlistForm.jsx   validation + submit
    About.jsx          scroll-triggered "what is Ekka"
    Footer.jsx         wordmark, privacy link, contact
    EkkaWordmark.jsx   mark + "ekka" lockup
    LegalDoc.jsx       shared shell for the legal pages, plus Section and Fill
    Privacy.jsx        privacy policy body
    Terms.jsx          terms & conditions body
    Disclaimer.jsx     disclaimer body
  App.jsx              home page
  privacy.jsx          entry for privacy.html
  terms.jsx            entry for terms.html
  disclaimer.jsx       entry for disclaimer.html
  index.css            all styles; design tokens live in :root
```

### EkkaWheel

A pale mint disc carrying three deep-green rounded bars — two long, one short
in the middle. The short bar is what makes it an **E**; the disc is what makes
it a wheel.

Geometry is traced from the master artwork and should not be nudged; scale it
with `size`. Standalone because it will be reused (app splash, emails, the
eventual product site). Static by default:

```jsx
<EkkaWheel size={22} label={null} />          // inline, decorative
<EkkaWheel size={132} roll distance={600} />  // hero entrance
```

| Prop | Default | Meaning |
| --- | --- | --- |
| `size` | `120` | Rendered px, width and height |
| `disc` | `var(--logo-disc)` | Circle fill |
| `bars` | `var(--logo-ink)` | Bar fill |
| `roll` | `false` | Play the roll-in animation on mount |
| `distance` | `340` | How far it travels in, in px |
| `delay` | `0.15` | Seconds before it starts |
| `label` | `'Ekka'` | Accessible name; `null` marks it decorative |

`EkkaWordmark` locks the mark up with the "ekka" text — horizontal by default,
`stacked` for the vertical lockup on the master artwork.

Rotation is derived from `distance` and the wheel's radius, then rounded to
whole turns — so it rotates like a real wheel covering that ground *and*
always settles with the bars flat, reading as an E.

## Waitlist

`WaitlistForm` accepts an email or an Indian mobile number (10 digits starting
6–9, optional `+91`/`0`), normalises phone numbers to `+91XXXXXXXXXX`, and
POSTs `{ contact, type, source }` to:

```
https://api.ekkaride.com/waitlist
```

**That endpoint does not exist yet.** Until it does, a failed request is
caught, the payload is logged to the console, and the visitor still sees
confirmation. Once the API is live, drop that fallback in
[`WaitlistForm.jsx`](src/components/WaitlistForm.jsx) (marked with a `TODO`)
so real failures surface to the user.

## Notes

- Hero hierarchy, loudest first: the rolling mark, the tagline, then the
  launch line at display scale (`clamp(1.5rem, 6.5vw, 2.5rem)`) with the city
  in brand green. The masthead sits above it all in wide tracking.
- Mobile-first. Every media query is a `min-width` step up from the phone
  layout; most Indian traffic will be on a phone.
- Honours `prefers-reduced-motion` — the roll-in and scroll reveals are
  skipped, nothing is lost.
- Single light theme, keyed to the logo. `prefers-color-scheme` is not
  honoured by design — the page stays mint on a device set to dark mode.
## Legal pages — unfinished on purpose

Three documents, all **working drafts, not cleared legal copy**, all sharing
[`LegalDoc.jsx`](src/components/LegalDoc.jsx):

- [`Privacy.jsx`](src/components/Privacy.jsx) — what happens to the one contact
  detail the waitlist collects. Collection, purpose, consent and withdrawal,
  processors, retention, DPDP Act 2023 rights, grievance redressal, security,
  children, changes.
- [`Terms.jsx`](src/components/Terms.jsx) — use of *this website*. Makes
  explicit that the waitlist is not a contract, reserves no ride or price, and
  guarantees no launch. The app will need separate rider and driver terms.
- [`Disclaimer.jsx`](src/components/Disclaimer.jsx) — exists because the home
  page makes forward-looking product claims. Marks capped surge, the driver
  commission, and "no hidden fees" as design goals rather than guarantees, and
  notes that launch depends on aggregator licensing.

Before any of them goes live:

1. Fill the placeholders. Each renders as a loud yellow `[BRACKETED]` chip so
   it cannot ship unnoticed — legal entity, registered address, hosting and
   email/SMS providers, grievance officer, jurisdiction city, licensing status.
2. Set up `privacy@`, `grievance@`, and `legal@ekkaride.com`. The documents
   promise responses on all three.
3. **Have a lawyer read them.** I am not one, and DPDP Act obligations and
   aggregator licensing are not things to take from a generated draft.
4. Rewrite them at launch — rides, location, and payments are out of scope.

Two coupling points worth knowing: if you add analytics or any cookie, the
privacy policy's "What we collect" becomes untrue the same day. If you change
the claims in the home page's About section, the disclaimer's "What we say
about the service" has to change with it.

## Notes

- Hero hierarchy, loudest first: the rolling mark, the tagline, then the
  launch line at display scale (`clamp(1.5rem, 6.5vw, 2.5rem)`) with the city
  in brand green. The masthead sits above it all in wide tracking.
- Mobile-first. Every media query is a `min-width` step up from the phone
  layout; most Indian traffic will be on a phone.
- Honours `prefers-reduced-motion` — the roll-in and scroll reveals are
  skipped, nothing is lost.
- Single light theme, keyed to the logo. `prefers-color-scheme` is not
  honoured by design — the page stays mint on a device set to dark mode.
## Privacy policy — unfinished on purpose

[`Privacy.jsx`](src/components/Privacy.jsx) is a **working draft, not cleared
legal copy.** It is written for what this site actually does today — take one
contact detail — and covers collection, purpose, consent and withdrawal,
processors, retention, DPDP Act 2023 data-principal rights, grievance
redressal, security, children, and changes.

Before it goes live:

1. Fill the placeholders. Each renders as a loud yellow `[BRACKETED]` chip on
   the page so it cannot ship unnoticed — legal entity name, registered
   address, hosting and email/SMS providers, grievance officer.
2. Set up `privacy@ekkaride.com` and `grievance@ekkaride.com`. The policy
   promises a 30-day response on both.
3. **Have a lawyer read it.** I am not one, and DPDP Act obligations for a Data
   Fiduciary are not something to take from a generated draft.
4. Rewrite it entirely when the app launches — rides, location, and payment
   data are out of scope here.

If you add analytics or any cookie, the "What we collect" section becomes
untrue and must be updated the same day.

## Notes

- The privacy link resolves to `/privacy.html`. Most static hosts will also
  serve it at `/privacy`; add a rewrite if you want the shorter URL.
