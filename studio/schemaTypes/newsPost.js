export default {
  name: 'newsPost',
  title: 'Aktuelles',
  type: 'document',
  fields: [
    {
      name: 'titel',
      title: 'Titel',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL-Kürzel',
      type: 'slug',
      options: { source: 'titel', maxLength: 96 },
      validation: Rule => Rule.required()
    },
    {
      name: 'kategorie',
      title: 'Kategorie',
      type: 'string',
      description: 'Kurzes Label, z. B. „Feriencamps" oder „Turniere"'
    },
    {
      name: 'datum',
      title: 'Datum',
      type: 'date',
      options: { dateFormat: 'DD.MM.YYYY' }
    },
    {
      name: 'auszug',
      title: 'Kurztext',
      type: 'text',
      rows: 3,
      description: '1–2 Sätze für die Kachelansicht auf der Startseite'
    },
    {
      name: 'bild',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true }
    }
  ],
  preview: {
    select: { title: 'titel', subtitle: 'datum' }
  }
};
