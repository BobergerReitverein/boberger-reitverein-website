export default {
  name: 'homepage',
  title: 'Startseite',
  type: 'document',
  fields: [
    { name: 'heroBild', title: 'Hero — Hintergrundbild', type: 'image', options: { hotspot: true } },
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
