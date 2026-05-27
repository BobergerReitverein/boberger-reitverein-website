export default {
  name: 'pensionspferdePage',
  title: 'Pensionspferde (Seite)',
  type: 'document',
  fields: [
    { name: 'heroBild', title: 'Hero — Hintergrundbild', type: 'image', options: { hotspot: true } },
    { name: 'introBild', title: 'Intro — Bild (links)', type: 'image', options: { hotspot: true } },
    { name: 'introTitel', title: 'Intro — Titel', type: 'string' },
    {
      name: 'introAbsaetze',
      title: 'Intro — Absätze',
      type: 'array',
      of: [{ type: 'text', rows: 3 }]
    },
  ],
  preview: { select: { title: 'introTitel', media: 'heroBild' } }
};
