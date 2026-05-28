export default {
  name: 'homepage',
  title: 'Startseite',
  type: 'document',
  fields: [
    { name: 'heroBild', title: 'Hero — Hintergrundbild', type: 'image', options: { hotspot: true } },
    { name: 'heroTitelOben', title: 'Hero — Titel Zeile 1', type: 'string', description: 'z.B. "BOBERGER"' },
    { name: 'heroTitelMitte', title: 'Hero — Titel Zeile 2 (kursiv)', type: 'string', description: 'z.B. "Reitverein"' },
    { name: 'heroTitelUnten', title: 'Hero — Titel Zeile 3', type: 'string', description: 'z.B. "HAMBURG"' },
    { name: 'heroTagline', title: 'Hero — Tagline', type: 'string' },
    { name: 'uebersUnsTitel', title: 'Über uns — Titel', type: 'string' },
    {
      name: 'uebersUnsAbsaetze',
      title: 'Über uns — Absätze',
      type: 'array',
      of: [{ type: 'text', rows: 3 }]
    },
    { name: 'uebersUnsBild', title: 'Über uns — Bild', type: 'image', options: { hotspot: true } },
    { name: 'kontaktHintergrundbild', title: 'Kontakt — Hintergrundbild', type: 'image', options: { hotspot: true } },
  ],
  preview: { select: { title: 'heroTagline', media: 'heroBild' } }
};
