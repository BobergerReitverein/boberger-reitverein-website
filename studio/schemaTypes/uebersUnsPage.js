export default {
  name: 'uebersUnsPage',
  title: 'Über uns (Seite)',
  type: 'document',
  fields: [
    { name: 'heroBild', title: 'Hero — Hintergrundbild', type: 'image', options: { hotspot: true } },
    { name: 'hauptBild', title: 'Hauptbild', type: 'image', options: { hotspot: true } },
    {
      name: 'absaetze',
      title: 'Absätze',
      type: 'array',
      of: [{ type: 'text', rows: 3 }]
    },
  ],
  preview: { select: { title: 'absaetze.0', media: 'hauptBild' } }
};
