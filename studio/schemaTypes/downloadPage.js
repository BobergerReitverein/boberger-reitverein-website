export default {
  name: 'downloadPage',
  title: 'Downloads (Seite)',
  type: 'document',
  fields: [
    { name: 'heroBild', title: 'Hero — Hintergrundbild', type: 'image', options: { hotspot: true } },
    { name: 'heroSubtitel', title: 'Hero — Untertitel', type: 'string' }
  ],
  preview: { select: { media: 'heroBild' } }
};
