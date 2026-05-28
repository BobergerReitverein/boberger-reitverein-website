export default {
  name: 'unterrichtPage',
  title: 'Unterricht (Seite)',
  type: 'document',
  fields: [
    { name: 'heroBild', title: 'Hero — Hintergrundbild', type: 'image', options: { hotspot: true } },
    { name: 'heroSubtitel', title: 'Hero — Untertitel', type: 'string' },
    { name: 'introBild', title: 'Intro — Bild (links)', type: 'image', options: { hotspot: true } },
    {
      name: 'introAbsaetze',
      title: 'Intro — Absätze',
      type: 'array',
      of: [{ type: 'text', rows: 4 }]
    },
    { name: 'feriencampLabel', title: 'Feriencamp — Label (z.B. Sommer 2026 · Jetzt anmelden)', type: 'string' },
    { name: 'feriencampTitel', title: 'Feriencamp — Titel', type: 'string' },
    { name: 'feriencampText', title: 'Feriencamp — Text', type: 'text', rows: 4 },
    { name: 'stundenplanText', title: 'Stundenplan — Hinweistext', type: 'text', rows: 2 },
    { name: 'kontaktCtaUeberschrift', title: 'Kontakt-CTA — Überschrift', type: 'string' },
    { name: 'kontaktCtaText', title: 'Kontakt-CTA — Text', type: 'text', rows: 3 },
  ],
  preview: { select: { title: 'feriencampLabel', media: 'heroBild' } }
};
