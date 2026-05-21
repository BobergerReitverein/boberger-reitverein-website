# Boberger Reitverein Hamburg — Website Redesign

## Project Overview
Complete redesign of boberger-reitverein.de. Pure HTML/CSS/JS, no framework. All pages share a single `style.css` design system. Target hosting: AWS Amplify or S3+CloudFront.

## Design System

### Fonts (Google Fonts)
- `--font-display: 'Tenor Sans'` — headlines, card titles, section labels
- `--font-body: 'DM Sans'` — UI text, nav, labels (weights: 100, 200, 300, 400)
- `--font-serif: 'Cormorant'` — italic serif accents only

### Colors
- `--black: #000000` — text, borders, dark backgrounds
- `--white: #ffffff` — light backgrounds
- `--green: #1C3A2A` — BRV accent (numbers, tags, hover, hero overlay)
- `--green-mid: #2a5240` — hover states

### Rules — Never Break These
- **Zero border-radius everywhere** — `border-radius: 0 !important` in reset. No exceptions.
- **Hard edges only** — no shadows with heavy blur, no pill shapes, no rounded buttons
- **Editorial grid** — CSS Grid for all layouts, generous whitespace, asymmetric columns
- **Letter-spacing** — use `0.3em`–`0.5em` on section labels and small caps UI text
- Section labels use: `font-size: 9px; letter-spacing: 0.4em; text-transform: uppercase; color: var(--green); font-weight: 200`

## File Structure
```
boberger-reitverein/
├── style.css          ← shared design system, ALL pages link this
├── index.html         ← homepage (Hero, Über uns, Anlage, Preise, Aktuelles, Kontakt)
├── unterricht.html    ← riding lessons subpage
├── schulpferde.html   ← 13 school horses with real photos
├── pensionspferde.html ← boarding horses (box types, leistungen)
├── vorstand.html      ← 8 board members (photo placeholders)
├── anfahrt.html       ← directions + Google Maps iframe
└── downloads.html     ← 5 sections, PDF download links
```

## Navigation Structure
```
BRV (logo → index.html)
├── Verein ▾
│   ├── Über uns → index.html#ueber-uns
│   ├── Vorstand → vorstand.html
│   └── Anlage → index.html#anlage
├── Reiten ▾
│   ├── Unterricht → unterricht.html
│   ├── Schulpferde → schulpferde.html
│   └── Pensionspferde → pensionspferde.html
├── Preise → index.html#preise
├── Aktuelles → index.html#aktuelles
├── Mehr ▾
│   ├── Anfahrt → anfahrt.html
│   └── Downloads → downloads.html
└── Kontakt → index.html#kontakt
```

## Key Patterns

### Subpage Hero (all subpages)
```html
<div class="page-hero">
  <div class="page-hero-bg" style="background:linear-gradient(155deg,#0d1a13 0%,#1C3A2A 45%,#0a1208 100%);"></div>
  <div class="page-hero-content">
    <p class="page-breadcrumb"><a href="index.html">BRV</a> &nbsp;/&nbsp; PageName</p>
    <h1 class="page-title">PageName</h1>
    <p class="page-subtitle">Subtitle text</p>
  </div>
</div>
```

### Scroll Reveal (all pages)
Add class `reveal` to any element. JS at bottom adds `visible` when in viewport:
```js
const observer = new IntersectionObserver(entries => {
  entries.forEach((e,i) => { if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('visible'),i*80); observer.unobserve(e.target); } });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

### Nav Dropdowns
Pure CSS — no JS. `.nav-item:hover .nav-dropdown { display: flex; }`.  
Mobile uses a JS overlay (#mobileOverlay) toggled by `#burgerBtn`.

### Active Nav State
Set `class="nav-item active"` on the nav item matching the current page.

## Content Facts

### Club Info
- Name: Boberger Reitverein Hamburg e.V.
- Founded: 1968
- Address: Billwerder Billdeich 256, 21033 Hamburg
- Phone: 040 7340552
- Email: info@boberger-reitverein.de
- Location: Boberger Niederung nature reserve

### Facilities
2 Reithallen · Roundpen · Außenanlage · Springgelände · Solarium · Waschplatz

### Vorstand (8 members)
1. Christiane Feist — Vorsitzende
2. Isabelle Haesler — Stellvertretende Vorsitzende
3. Katharina Lechelt — Schatzmeisterin
4. Lilli Schmidt — Jugendwartin
5. Janine Band — Technische Leiterin
6. Raphael Schulze — Beauftragte für Breitensport Reiten
7. Johanna von Staden — Beauftragte für Breitensport Voltigieren
8. Rita Jacke — Prävention sexualisierte Gewalt im Sport

### Schulpferde (13 total)
Images loaded from `https://www.boberger-reitverein.de/images/[Name].jpg`
Special filenames: `Mc_Coy.jpg` (underscore), `T%C3%B6nchen.jpg` (ö encoded)
Voltigieren horses (green tag): Andiamo, Anna, Mc Coy, Nuri

| Name | Rasse |
|---|---|
| Andiamo | Rheinländer |
| Anna | Haflinger |
| Chicco | Deutsches Reitpferd |
| Kitaro | Welsh A |
| Legenda | Lettischer Cob |
| Mc Coy | Dänisches Warmblut × Friese |
| Nikki | Fjordpferd × Friese |
| Nuri | Fjordpferd |
| Shakira | Holsteiner |
| Silva | Littauischer Cob |
| Sky | Haflinger |
| Solé | Haflinger |
| Tönchen | Shetlandpony |

### Prices (from old website)
**Unterricht:**
- Mini-Ponyclub (bis 6 J.) — 71 €/Monat
- Ponyclub (7–14 J.) — 95 €/Monat
- Anfänger/Fortgeschrittene — 95–190 €/Monat
- Privatpferd-Unterricht — 36 €/Einheit
- Voltigieren — 60 €/Monat

**Pension:**
- Standard-Box — 430 €/Monat
- Große Box — 520 €/Monat
- Zusatzleistungen — 7,50–58 €

## Pending / TODO
- [ ] Upload own photos (hero, Über uns, Anlage, Schulpferde, Pensionspferde sections)
- [ ] Upload Vorstand member photos (currently CSS gradient placeholders)
- [ ] Link real PDF files in downloads.html (currently all `href="#"`)
- [ ] Configure AWS hosting (Amplify recommended)
- [ ] Derive final BRV accent color from actual logo once uploaded
- [ ] Add trainer names/profiles to unterricht.html

## Hosting (When Ready)
**AWS Amplify (recommended):** Connect GitHub repo → auto-deploys on push.  
**AWS S3+CloudFront:** Upload folder to S3 bucket → CloudFront CDN in front.  
Both options: no server needed, static files only.
