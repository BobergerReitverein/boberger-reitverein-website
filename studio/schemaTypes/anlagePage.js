export default {
  name: 'anlagePage',
  title: 'Anlage (Seite)',
  type: 'document',
  fields: [
    { name: 'heroBild', title: 'Hero — Hintergrundbild', type: 'image', options: { hotspot: true } },
    { name: 'introTitel', title: 'Intro — Titel', type: 'string' },
    {
      name: 'introAbsaetze',
      title: 'Intro — Absätze',
      type: 'array',
      of: [{ type: 'text', rows: 3 }]
    },
    {
      name: 'galerie',
      title: 'Fotogalerie',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'bild', title: 'Foto', type: 'image', options: { hotspot: true } },
          { name: 'beschriftung', title: 'Beschriftung', type: 'string' }
        ],
        preview: { select: { title: 'beschriftung', media: 'bild' } }
      }]
    },
    { name: 'bannerBild', title: 'Bannerbild', type: 'image', options: { hotspot: true } },
    {
      name: 'einrichtungen',
      title: 'Einrichtungen',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'anzahl', title: 'Anzahl', type: 'string' },
          { name: 'titel', title: 'Titel', type: 'string' },
          { name: 'beschreibung', title: 'Beschreibung', type: 'text', rows: 2 }
        ],
        preview: { select: { title: 'titel', subtitle: 'anzahl' } }
      }]
    },
  ],
  preview: { select: { title: 'introTitel', media: 'heroBild' } }
};
