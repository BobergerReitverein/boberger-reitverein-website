export default {
  name: 'schulpferdePage',
  title: 'Schulpferde (Seite)',
  type: 'document',
  fields: [
    { name: 'heroBild', title: 'Hero — Hintergrundbild', type: 'image', options: { hotspot: true } },
    { name: 'heroSubtitel', title: 'Hero — Untertitel', type: 'string' },
    { name: 'introUeberschrift', title: 'Intro — Überschrift', type: 'string' },
    {
      name: 'introAbsaetze',
      title: 'Intro — Absätze',
      type: 'array',
      of: [{ type: 'text', rows: 3 }]
    },
    {
      name: 'stats',
      title: 'Stats-Leiste (3 zusätzliche Zahlenfelder)',
      description: 'Die Anzahl der Schulpferde wird automatisch berechnet. Hier die 3 weiteren Zahlenfelder.',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'zahl', title: 'Zahl / Zeichen', type: 'string', description: 'z.B. "3" oder "∞"' },
          { name: 'label', title: 'Label', type: 'string', description: 'z.B. "Disziplinen"' }
        ],
        preview: { select: { title: 'zahl', subtitle: 'label' } }
      }]
    }
  ],
  preview: { select: { title: 'introUeberschrift', media: 'heroBild' } }
};
