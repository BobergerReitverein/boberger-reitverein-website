export default {
  name: 'datenschutzPage',
  title: 'Datenschutz (Seite)',
  type: 'document',
  fields: [
    {
      name: 'stand',
      title: 'Stand der Datenschutzerklärung',
      type: 'string',
      description: 'z.B. "Mai 2026" — erscheint als "Stand: Mai 2026" auf der Seite'
    }
  ],
  preview: { select: { title: 'stand' } }
};
