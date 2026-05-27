export default {
  name: 'download',
  title: 'Download',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'kategorie',
      title: 'Kategorie',
      type: 'string',
      description: 'z. B. „Mitgliedschaft", „Turniere", „Formulare"'
    },
    {
      name: 'datum',
      title: 'Stand (Monat/Jahr)',
      type: 'string',
      description: 'z. B. „Januar 2026"'
    },
    {
      name: 'datei',
      title: 'PDF-Datei',
      type: 'file',
      options: { accept: '.pdf' }
    }
  ],
  preview: {
    select: { title: 'name', subtitle: 'kategorie' }
  }
};
