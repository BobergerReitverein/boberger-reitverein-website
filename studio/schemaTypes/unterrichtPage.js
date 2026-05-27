export default {
  name: 'unterrichtPage',
  title: 'Unterricht (Seite)',
  type: 'document',
  fields: [
    { name: 'heroBild', title: 'Hero — Hintergrundbild', type: 'image', options: { hotspot: true } },
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
  ],
  preview: { select: { title: 'feriencampLabel', media: 'heroBild' } }
};
