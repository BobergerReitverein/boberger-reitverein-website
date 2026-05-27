export default {
  name: 'anfahrtPage',
  title: 'Anfahrt (Seite)',
  type: 'document',
  fields: [
    { name: 'heroBild', title: 'Hero — Hintergrundbild', type: 'image', options: { hotspot: true } },
    {
      name: 'routen',
      title: 'Anfahrtswege',
      description: 'Drei Anfahrtswege: ÖPNV, Auto A25, Auto B5',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon', title: 'Icon-Text (kurz, z.B. S-Bahn & Bus)', type: 'string' },
          { name: 'titel', title: 'Titel (z.B. Mit ÖPNV)', type: 'string' },
          {
            name: 'schritte',
            title: 'Schritte',
            type: 'array',
            of: [{ type: 'text', rows: 2 }]
          }
        ],
        preview: { select: { title: 'titel' } }
      }]
    },
  ],
  preview: { select: { media: 'heroBild' } }
};
