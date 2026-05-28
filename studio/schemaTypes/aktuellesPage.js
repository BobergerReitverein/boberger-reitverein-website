export default {
  name: 'aktuellesPage',
  title: 'Aktuelles (Seite)',
  type: 'document',
  fields: [
    { name: 'heroBild', title: 'Hero — Hintergrundbild', type: 'image', options: { hotspot: true } },
    { name: 'heroSubtitel', title: 'Hero — Untertitel', type: 'string' },
    {
      name: 'sectionLabel',
      title: 'Abschnitts-Label (mit Jahreszahl)',
      type: 'string',
      description: 'z.B. "Aktuelles 2026" — jedes Jahr aktualisieren!'
    },
    { name: 'ctaUeberschrift', title: 'Kontakt-CTA — Überschrift', type: 'string' },
    { name: 'ctaText', title: 'Kontakt-CTA — Text', type: 'text', rows: 2 }
  ],
  preview: { select: { title: 'sectionLabel', media: 'heroBild' } }
};
